import { NextPage } from "next"
import { HamburgerIcon, MoonIcon, SearchIcon, SettingsIcon, SunIcon } from "@chakra-ui/icons"
import {
    Box,
    Button,
    Divider,
    Flex,
    IconButton,
    Spacer,
    Text,
    useColorMode,
    useDisclosure,
} from "@chakra-ui/react"
import Image from "next/image"
import logo from "../assets/logo.png"
import logo_dark from "../assets/logo-dark.png"

import { ReactElement, useRef } from "react"
import Slides from "./Drawer"
type Props = {
    children: ReactElement
}
const Navbar: NextPage<Props> = ({ children }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const btnRef = useRef<any>()
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Flex align="center" px={4} py={2} >
                <Box>
                    {/* <Image src={colorMode === 'light' ? logo : logo_dark} alt="logo" width={125}/> */}
                </Box>
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
            <Divider borderWidth={1}/>
            <Slides onClose={onClose} isOpen={isOpen} />
            {children}
        </>
    )
}

export default Navbar
