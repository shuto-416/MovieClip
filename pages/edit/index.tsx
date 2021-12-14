import {
    Flex,
    Stack,
    Heading,
    Text,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
} from '@chakra-ui/react'

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
                    <Stack spacing={4}>
                        <FormControl id={'title'}>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder={'Title'} />
                        </FormControl>
                        <FormControl id={'description'}>
                            <FormLabel>Description</FormLabel>
                            <Input placeholder={'Description'} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bgGradient={'linear(to-r, red.500,pink.500)'}
                                color={'white'}
                                _hover={{ bgGradient: 'linear(to-r, red.400,pink.400)' }}
                                _active={{ bgGradient: 'linear(to-r, red.400,pink.400)' }}
                                _focus={{ boxShadow: 'none' }}
                            >
                                Create Clip
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Edit