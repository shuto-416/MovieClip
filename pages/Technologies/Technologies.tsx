import {
    Flex,
    VStack,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import TechItem from './TechItems'

const Technologies = () => {
    return(
        <div>
        <Flex
            w={'full'}
            h={'30vh'}
            backgroundImage={'url(https://source.unsplash.com/vpOeXr5wmR4)'}
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
        <Flex justify={'center'} pt={'30px'}>
            <TechItem/>
        </Flex>
        </div>
    )
}

export default Technologies