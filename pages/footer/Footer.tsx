import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden
} from "@chakra-ui/react"

const Footer = () => {
    return(
        <Box
        bg={useColorModeValue('grey.50','grey.900')}
        color={useColorModeValue('grey.700','grey.200')}
        >
            <Container
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }} // important
                align={{ base: 'center', md: 'center' }}
            >
                <Text>MOVIECLIP</Text>
                <Text>©︎Movie clip for ore</Text>
                
            </Container>

        </Box>
    )
}

export default Footer