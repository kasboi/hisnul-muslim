import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react"
import { NextPage } from "next"

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:8000/dua/")
    const data = await res.json()

    // map data to an array of path objects with params (id)
    const paths = data.map((ninja: { id: { toString: () => any } }) => {
        return {
            params: { id: ninja.id.toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: { params: { id: any } }) => {
    const id = context.params.id
    const res = await fetch("http://localhost:8000/dua/" + id)
    const data = await res.json()

    return {
        props: { duaList: data.dua, duaName: data.title },
    }
}
type Props = {
    duaList: [
        item: {
            arabic: string
            transliteration: string
            translation: string
        }
    ]
    duaName: string
}
const DuaList: NextPage<Props> = ({ duaList, duaName }) => {
    return (
        <Box px={4} py={12}>
            <Heading as="h2" size='lg' textAlign="center" my={8}>
                {duaName}
            </Heading>
            <VStack maxW={["xl"]} mx="auto" spacing={6}>
                {duaList.map((item, index) => (
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
                        <Divider borderWidth={1} borderColor='blackAlpha.600'/>
                        <Text>{item.translation}</Text>
                    </VStack>
                ))}
            </VStack>
        </Box>
    )
}

export default DuaList
