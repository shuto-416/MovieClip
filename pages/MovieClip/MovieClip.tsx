import { 
    Box,
    Button,
    Flex,
    Stack,
    VStack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import ClipsGrid from './ClipsGrid'
import { products } from './ClipItems'
import ClipCard from './ClipCard'

const MovieClip = () => {
    return (
        <div>
            <Flex 
                w={'full'}
                h={'80vh'}
                backgroundImage={'https://source.unsplash.com/AtPWnYNDJnM'}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, gray.900, transparent)'}
                >
                    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={700}
                            fontHeight={1.2}
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                        >
                            Movie Clip
                        </Text>
                        <Stack direction={'row'}>
                            <Button
                                bg={'purple.500'}
                                rounded={'full'}
                                color={'white'}
                                _hover={{ bg: 'purple.600' }}
                            >
                                Watch Now
                            </Button>
                        </Stack>   
                    </Stack>
                </VStack>
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