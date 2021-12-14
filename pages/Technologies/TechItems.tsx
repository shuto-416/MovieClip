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
    SiFirebase,
    SiUnsplash,
    SiNodedotjs,
    SiExpress,
} from 'react-icons/si'

interface TechItemProps {
    name: string;
    detail: string;
    color: string;
    icon: ReactElement;
}

const TechItems = ({ name, detail, icon, color }: TechItemProps) => {
    return (
        <Stack>
            <Flex
                w={24}
                h={24}
                align={'center'}
                justify={'center'}
                color={color}
                rounded={'full'}
                bg={'white'}
                mb={5}
            >
                {icon}
            </Flex>
            <Text fontWeight={500} fontSize={20}>{name}</Text>
            <Text color={'gray.500'}>{detail}</Text>
        </Stack>
    )
}

const TechItemColumns = () => {

    const tech_info = [
        {
            icon: <Icon as={SiNextdotjs} w={20} h={20} />,
            color: 'black',
            name: 'Next.js',
            detail: 'Next.js is a React framework for server-rendered applications.'
        },
        {
            icon: <Icon as={SiTypescript} w={16} h={16} />,
            color: 'blue.500',
            name: 'TypeScript',
            detail: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
        },
        {
            icon: <Icon as={SiChakraui} w={20} h={20} />,
            color: 'green.400',
            name: 'Chakra-UI',
            detail: 'Chakra-UI is a React UI library with a focus on simplicity and performance.'
        },
        {
            icon: <Icon as={SiFirebase} w={20} h={20} />,
            color: 'red.400',
            name: 'Firebase (firestore & firestorage)',
            detail: 'Firebase is a cloud-hosted platform for hosting, managing, and scaling developer applications.'
        },
        {
            icon: <Icon as={SiUnsplash} w={16} h={16} />,
            color: 'gray.500',
            name: 'Unsplash',
            detail: 'Unsplash is a photo sharing service. Copying url & remove photos & adding source. before unsplash.com the, you can use the free photo.'
        },
        {
            icon: <Icon as={SiNodedotjs} w={20} h={20} />,
            color: 'orange.400',
            name: 'Node.js',
            detail: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
        },
        {
            icon: <Icon as={SiExpress} w={20} h={20} />,
            color: 'yellow.400',
            name: 'Express',
            detail: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'
        },
    ]

    return (
        <Box p={4} pt={10}>
            <SimpleGrid columns={{ base:1, md:3 }} spacing={10} maxW={'6xl'} >
                {
                    tech_info.map((obj) => {
                        return (
                            <TechItems
                            icon={obj.icon}
                            color={obj.color}
                            name={obj.name}
                            detail={obj.detail}
                        />
                        )
                    })
                }
            </SimpleGrid>
        </Box>
    )
}

export default TechItemColumns