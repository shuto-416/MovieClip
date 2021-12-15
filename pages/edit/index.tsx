import {
    Flex,
    Stack,
    Heading,
    Text,
    Box,
    useColorModeValue,
} from '@chakra-ui/react'

import EditItems from './EditItems'

const Edit = () => {
    return(
        <Flex
            // minH={'100vh'}
            w={'100%'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.900')}
        >
            <Stack spacing={8} w={'3xl'} py={12} px={4}>
                <Stack align={'center'}>
                    <Heading fontSize={'5xl'}>Make Your Clip</Heading>
                    <Text fontSize={'2xl'} color={'gray.600'}>enjoy movie & reviewing</Text>
                </Stack>
            
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    p={8}
                >
                    <EditItems/>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Edit