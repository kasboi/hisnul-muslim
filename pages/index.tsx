import { useState } from "react"
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons"
import {
    Box,
    Container,
    Divider,
    Fade,
    Input,
    InputGroup,
    InputLeftElement,
    useDisclosure,
} from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import Categories from "../components/Categories"
import Chapters from "../components/Chapters"
import Dua from "../components/Dua"
import Navbar from "../components/Nav"

const Home: NextPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <Box pt={2} pb={8}>
            <Head>
                <title>Citadel of the Believer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={["sm", "2xl"]} my={4}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.400" />}
                    />
                    <Input type="search" placeholder="search dua" />
                </InputGroup>
            </Container>
            <Categories />
            {/* <Chapters /> */}
            {/* <Dua /> */}
        </Box>
    )
}

export default Home
