import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden
} from "@chakra-ui/react"
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import Head from "next/head"

const SocialButton = ({
    children,
    label, // 可読性向上のためlabelを追加
    href,
}: {
    children: React.ReactNode;
    label: string;
    href: string;
}) => {
    return(
        <chakra.button
            bg={useColorModeValue("gray.300", "gray.600")}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            justifyContent={'center'}
            alignItems={'center'}
            transition={'background 0.3s ease-in-out'}
            _hover={{
                bg: useColorModeValue("gray.400", "gray.700")
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const Footer = () => {
    return(
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            </Head>
        <Box
            bg={useColorModeValue('gray.50','gray.900')}
            color={useColorModeValue('gray.700','gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justifyContent={{ base: 'center', md: 'space-between' }} // important
                alignItems={{ base: 'center', md: 'center' }}
            >
                <Text 
                    fontSize={'2xl'} 
                    fontWeight = {'bold'} 
                    fontFamily={'Anton'}
                >
                    MOVIECLIP
                </Text>
                <Text>©︎Movie clip for ore</Text>
                <Stack direction={'row'} spacing={10}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'} >
                        <FaInstagram />
                    </SocialButton>
                    <SocialButton label={'Facebook'} href={'#'} >
                        <FaFacebook />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
        </div>
    )
}

export default Footer