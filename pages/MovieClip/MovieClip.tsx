import { 
    Box,
    Button,
    Flex,
    Stack,
    VStack,
    Text,
    Heading,
    useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import Head from 'next/head'
import ClipsGrid from './ClipsGrid'
import { products } from './ClipItems'
import ClipCard from './ClipCard'

const MovieClip = () => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Smooch&display=swap" rel="stylesheet"/>
            </Head>

            <Flex 
                w={'full'}
                h={'80vh'}
                backgroundImage={'https://source.unsplash.com/AtPWnYNDJnM'}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <Stack
                    w={'full'}
                    justify={'center'}
                    direction={'row'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    pt={useBreakpointValue({ base: 20, md: 36 })}
                    bgGradient={'linear(to-r, gray.900, transparent)'}
                >
                    <Stack maxW={'2xl'} align={'center'} spacing={6}>
                        <Heading
                            color={'white'}
                            fontWeight={700}
                            fontFamily={'Smooch'}
                            lineHeight={'150%'}
                            fontSize={{ base: '5xl', md: '9xl' }}
                        >
                            Movie Clip
                        </Heading>
                        <Text color={'gray.400'} lineHeight={'150%'}>
                            The data of each clip is managed using node.js (express) and firebase. This is the first time I've used the backend practically, so please be patient even if you're doing something strange.
                        </Text>
                        <Stack direction={'row'}>
                            <Button
                                bg={'purple.500'}
                                rounded={'full'}
                                color={'white'}
                                mt={10}
                                _hover={{ bg: 'purple.600' }}
                            >
                                Watch Now
                            </Button>
                        </Stack>   
                    </Stack>
                </Stack>
            </Flex>
            <Box
                maxW={'7xl'}
                mx={'auto'}
                px={{ base: '4', md: '8', lg: '12' }}
                py={{ base: '6', md: '8', lg: '12' }}
            >
                <ClipsGrid>
                    {products.map((product) => {
                        return (
                            <ClipCard product={product}/>
                        )
                    })}
                </ClipsGrid>
            </Box>
        </div>
    )
}

export default MovieClip