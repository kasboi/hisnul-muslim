import { NextPage } from "next"
import { HamburgerIcon, MoonIcon, SearchIcon, SettingsIcon, SunIcon } from "@chakra-ui/icons"
import {
    Box,
    Button,
    Flex,
    IconButton,
    Spacer,
    Text,
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react"
import Image from "next/image"
import logo from "../assets/logo.png"
import { useRef } from "react"
import Slides from "./Drawer"

const Navbar: NextPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const btnRef = useRef<any>()
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Flex align="center" px={4}>
                <Box>
                    <Image src={logo} alt="logo" width={125}/>
                </Box>
                <Spacer />
                {/* <Button
                    leftIcon={<SearchIcon />}
                    boxShadow="xs"
                    w={["45%", "60%"]}
                    color="gray.500"
                    shadow="base"
                    overflow='hidden'
                >
                    <Text w="full" fontSize="md" fontWeight="normal">
                        Search the doc
                    </Text>
                </Button> */}
                <Spacer />
                <IconButton
                    variant="ghost"
                    aria-label="menu"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                />
                <IconButton
                    aria-label="menu"
                    variant="ghost"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    ref={btnRef}
                />
            </Flex>
            <Slides onClose={onClose} isOpen={isOpen} />
        </>
    )
}

export default Navbar
