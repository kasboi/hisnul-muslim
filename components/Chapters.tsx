import {
    Center,
    Container,
    Heading,
    HStack,
    Tag,
    Text,
    VStack,
} from "@chakra-ui/react"
import { NextPage } from "next"

const chaps = [
    { id: 1, name: "When waking up" },
    { id: 2, name: "Supplication when wearing a garment" },
    { id: 3, name: "Supplication said when wearing a new garment" },
    { id: 4, name: "Supplication said to someone wearing a new garment" },
    { id: 5, name: "Before undressing" },
    { id: 6, name: "Before entering the toilet" },
    { id: 7, name: "After leaving the toilet" },
    { id: 8, name: "When starting ablution" },
    { id: 9, name: "Upon completing the ablution" },
    { id: 10, name: "When leaving the home" },
    { id: 11, name: "Upon entering the home" },
    { id: 12, name: "Supplication when going to the mosque" },
    { id: 13, name: "upon entering the mosque" },
    { id: 14, name: "Upon leaving the mosque" },
    { id: 15, name: "Supplications related to the athan (the call to prayer)" },
]

const Chapters: NextPage = () => {
    return (
        <Container maxW={["md", "xl", "2xl"]}>
            <Heading as="h2" size="2xl">
                <Center my={[6, 10, 12]}>Choose Dua</Center>
                <VStack spacing={16} align='flex-start'>
                    {chaps.map((item) => (
                        <HStack spacing={[4,6]}>
                            <Tag size={'sm'}>{item.id}</Tag>
                            <Text fontSize="lg">
                                {item.name}
                            </Text>
                        </HStack>
                    ))}
                </VStack>
            </Heading>
        </Container>
    )
}

export default Chapters
