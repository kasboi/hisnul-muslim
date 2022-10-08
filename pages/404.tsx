import { Box, Center, Heading, VStack } from "@chakra-ui/react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFound: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [router])
  

  return ( 
    <VStack my={8} px={4}>
      <Heading as='h2' size='xl' textAlign={'center'}>Salam, This page does not exist</Heading>
      <Heading as='h4' size='md' textAlign={'center'}>Redirecting to homepage...</Heading>
    </VStack>
   );
}
 
export default NotFound;