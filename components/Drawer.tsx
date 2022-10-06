import { NextPage } from "next"
import NextLink from "next/link"
import {
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
    DrawerHeader,
    Button,
    Input,
    Text,
    VStack,
    Heading,
    Divider,
    Link,
} from "@chakra-ui/react"
import { useRef } from "react"

type Props = {
    isOpen: boolean
    onClose: () => void
}

const Slides: NextPage<Props> = ({ isOpen, onClose }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            // finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <VStack spacing={4} onClick={onClose}>
                        <NextLink href="/" passHref>
                            <Link><Text fontSize='xl'>Home</Text></Link>
                        </NextLink>
                        <Divider />
                        <NextLink href="#" passHref>
                            <Link><Text fontSize='xl'>About</Text></Link>
                        </NextLink>
                        <Divider />
                        <NextLink href="#" passHref>
                            <Link><Text fontSize='xl'>Contact</Text></Link>
                        </NextLink>
                    </VStack>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default Slides
