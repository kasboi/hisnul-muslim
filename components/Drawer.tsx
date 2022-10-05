import { NextPage } from "next"
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
} from "@chakra-ui/react"
import { useRef } from "react"

type Props = {
  isOpen: boolean,
  onClose: () => void,
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
                    <Input placeholder="Type here..." />
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
