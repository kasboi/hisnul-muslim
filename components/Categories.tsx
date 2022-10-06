import { NextPage } from "next"
import {
    SimpleGrid,
    Flex,
    Text,
    Heading,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/react"
import NextLink from "next/link"

const categories = [
    { name: "All", chapters: 132, color: "red.400" },
    { name: "Morning & Evening", chapters: 6, color: "yellow.400" },
    { name: "Prayer", chapters: 12, color: "blue.400" },
    { name: "Praising Allah", chapters: 32, color: "purple.400" },
    { name: "Hajj & Umrah", chapters: 13, color: "teal.400" },
    { name: "Travel", chapters: 90, color: "tomato" },
    { name: "Joy & Distress", chapters: 66, color: "orange.400" },
    { name: "Nature", chapters: 99, color: "green.400" },
    { name: "Good Etiquette", chapters: 132, color: "cyan.400" },
    { name: "Home & Family", chapters: 12, color: "pink.400" },
    { name: "Food & Drinks", chapters: 2, color: "red.400" },
    { name: "Sickness & Death", chapters: 65, color: "blue.400" },
]

const Categories: NextPage = () => {
    return (
        <SimpleGrid
            columns={[1, 2, 3]}
            spacing={10}
            mx={[12, 4, 12, 24]}
            mt={6}
        >
            {categories.map((item) => (
                <LinkBox as="article">
                    <Flex
                        bg={item.color}
                        height="120px"
                        borderRadius={10}
                        p={4}
                        boxShadow="base"
                    >
                        <Flex direction="column" justify="space-between">
                            <Heading as="h2" size="md">
                                <NextLink href="/chapters" passHref>
                                    <LinkOverlay>{item.name}</LinkOverlay>
                                </NextLink>
                            </Heading>
                            <Text fontSize="md">{item.chapters} chapters</Text>
                        </Flex>
                    </Flex>
                </LinkBox>
            ))}
        </SimpleGrid>
    )
}

export default Categories
