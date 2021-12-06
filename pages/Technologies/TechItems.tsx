import { ReactElement } from 'react'
import {
    Box,
    SimpleGrid,
    Stack,
    Flex,
    Text,
    Icon,
} from '@chakra-ui/react'
import { 
    SiNextdotjs,
    SiTypescript,
    SiChakraui,
} from 'react-icons/si'

interface TechItemProps {
    name: string;
    detail: string;
    icon: ReactElement;
}

const TechItems = ({ name, detail, icon }: TechItemProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.500'}
                mb={1}
            >
                {icon}
            </Flex>
            <Text fontWeight={500}>{name}</Text>
            <Text color={'gray.500'}>{detail}</Text>
        </Stack>
    )
}

const TechItemColumns = () => {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base:1, md:3 }} spacing={10} maxW={'6xl'} >
                <TechItems
                    icon={<Icon as={SiNextdotjs} w={10} h={10} />}
                    name={'Next.js'}
                    detail={'Next.js is a React framework for server-rendered applications.'}
                />
                <TechItems
                    icon={<Icon as={SiTypescript} w={10} h={10} />}
                    name={'TypeScript'}
                    detail={'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'}
                />
                <TechItems
                    icon={<Icon as={SiChakraui} w={10} h={10} />}
                    name={'Chakra-UI'}
                    detail={'Chakra-UI is a React UI library with a focus on simplicity and performance.'}
                />
            </SimpleGrid>
        </Box>
    )
}

export default TechItemColumns