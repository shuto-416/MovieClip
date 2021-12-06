import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden
} from "@chakra-ui/react"
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
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
                    <SocialButton label={'GitHub'} href={'https://github.com/shuto-416'} >
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/shuto_416'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/s_hamasan/'} >
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
        </div>
    )
}

export default Footer