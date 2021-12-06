import {
    Flex,
    VStack,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'

const Technologies = () => {
    return(
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={'#'}
            backgroundPosition={'center center'}
            backgroundSize={'cover'}
        >
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: '4', md: '8' }) }
                bgGradient={'to right, #fdfbfb, #ebedee'}
            >
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                    >
                        Technologies I've worked with.
                    </Text>
                </Stack>
            </VStack>
                
        </Flex>
    )
}

export default Technologies