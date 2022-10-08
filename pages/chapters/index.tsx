import NextLink from "next/link"
import {
    Center,
    Container,
    Heading,
    HStack,
    Tag,
    Text,
    VStack,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/react"
import { NextPage } from "next"
import { db } from "../../firebase/init"
import { ref, onValue, child, get } from "firebase/database"

export const getStaticProps = async () => {

    let data: { id: any; title: any }[] = []

    try {
        const duaRef = ref(db, "dua")
        onValue(duaRef, (snapshot) => {
            data = snapshot.val()
        })
    } catch (error) {
        console.error(error)
    }

    const chaps = data.map((item: { id: any; title: any }) => {
        return {
            id: item.id,
            title: item.title,
        }
    })

    return {
        props: { chaps },
    }
}

const Chapters: NextPage = ({ chaps }: any) => {
    return (
        <Container maxW={["md", "xl", "2xl"]} pb={16}>
            <Heading as="h2" size="2xl">
                <Center my={[6, 10, 12]}>Choose Dua</Center>
                <VStack spacing={16} align="flex-start">
                    {chaps.map((item: any, i: any) => (
                        <LinkBox as="article" key={i}>
                            <HStack spacing={[4, 6]}>
                                <Tag size={"sm"}>{item.id}</Tag>
                                <NextLink href={`/dua/${item.id - 1}`} passHref>
                                    <LinkOverlay>
                                        <Text fontSize="lg">{item.title}</Text>
                                    </LinkOverlay>
                                </NextLink>
                            </HStack>
                        </LinkBox>
                    ))}
                </VStack>
            </Heading>
        </Container>
    )
}

export default Chapters


const dbRef = ref(db)
get(child(dbRef, `dua/0`)).then((snapshot) => {
    console.log(snapshot.val())
})