import { ArrowBackIcon } from "@chakra-ui/icons"
import {
    Box,
    Divider,
    Heading,
    IconButton,
    Text,
    VStack,
} from "@chakra-ui/react"
import { NextPage } from "next"
import { useRouter } from "next/router"

import { db } from "../../firebase/init"
import { ref, child, get } from "firebase/database"

export const getStaticPaths = async () => {
    let data: [] = []

    try {
        const dbRef = ref(db)
        await get(child(dbRef, `dua`)).then((snapshot) => {
            data = snapshot.val()
        })
    } catch (err) {
        console.log(err)
    }

    // map data to an array of path objects with params (id)
    const paths = data.map((item: { id: { toString: () => any } }) => {
        return {
            params: { id: item.id.toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: { params: { id: any } }) => {
    const id = context.params.id - 1

    let data: any = []

    try {
        const dbRef = ref(db)
        await get(child(dbRef, `dua/${id}`)).then((snapshot) => {
            data.push(snapshot.val())
        })
    } catch (error) {
        console.log(error)
    }

    return {
        props: { duaList: data[0] },
    }
}
type Props = {
    duaList: {
        id: number
        title: string
        dua: [
            item: {
                arabic: string
                transliteration: string
                translation: string
            }
        ]
    }
}
const DuaList: NextPage<Props> = ({ duaList }) => {
    const router = useRouter()
    return (
        <Box px={4} py={12}>
            <IconButton
                aria-label="back_button"
                variant="ghost"
                icon={<ArrowBackIcon />}
                size="lg"
                onClick={() => router.push("/chapters")}
            />
            <Heading as="h2" size="lg" textAlign="center" my={8}>
                {`${duaList.id} - ${duaList.title}`}
            </Heading>
            <VStack maxW={["xl"]} mx="auto" spacing={6}>
                {duaList.dua.map((item, index) => (
                    <VStack py={4} px={4} spacing={4} key={index}>
                        <Box
                            bg="blackAlpha.500"
                            py={6}
                            px={4}
                            borderRadius={10}
                            dir="rtl"
                            textStyle="arabia"
                        >
                            {item.arabic}
                        </Box>
                        <Text>{item.transliteration}</Text>
                        <Divider borderWidth={1} borderColor="blackAlpha.600" />
                        <Text>{item.translation}</Text>
                    </VStack>
                ))}
            </VStack>
        </Box>
    )
}

export default DuaList
