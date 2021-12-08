import {
    Flex,
    Image,
    VStack,
    Stack,
    Text,
    Heading,
    useBreakpointValue,
} from '@chakra-ui/react'
import TechItem from './TechItems'

const Technologies = () => {
    return(
        <div>
            <Stack minH={'85vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}>
                            <Text 
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: '" "',
                                    width: 'full',
                                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'purple.500',
                                    zIndex: -1,
                                }}
                            >
                                Technologies
                            </Text>
                            <br />{' '}
                            <Text color={'purple.500'} as={'span'}>
                                I've worked with
                            </Text>{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }}>
                            Since this product is mainly created based on which technology you want to learn, we have set up a page about the technology used.
                        </Text>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                        alt={'Technologies Image'}
                        objectFit={'cover'}
                        src={'https://source.unsplash.com/vpOeXr5wmR4'}
                    />
                </Flex>
            </Stack>
            <Flex justify={'center'} pt={'30px'}>
                <TechItem/>
            </Flex>
        </div>
    )
}

export default Technologies