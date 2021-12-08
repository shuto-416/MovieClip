import {
    AspectRatio,
    Button,
    Box,
    Image,
    Link,
    Skeleton,   // eslint-disable-line no-unused-vars
    Stack,
    HStack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { StackProps } from '@chakra-ui/layout'
import * as React from 'react'
import FavoriteButton from './FavoriteButton'
import { Product}  from './ClipItems'

interface Props {
    product: Product
    rootProps?: StackProps
}

const ClipCard = (props: Props) => {
    const { product, rootProps } = props
    const { name,img, description, rating, } = product
    console.log('hi, unchi')
    return (
        <Stack spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps}>
            <Box position={'relative'}>
                <AspectRatio ratio={4/3}>
                    <Image
                        src={img}
                        alt={name}
                        draggable={false}
                        fallback={<Skeleton />}
                        borderRadius={useBreakpointValue({ base: '4', md: '5' })}
                    />
                </AspectRatio>
                <FavoriteButton
                    position={'absolute'}
                    top={4}
                    right={4}
                    aria-label={`Add ${name} to ypur favorite`}
                />
            </Box>
            <Stack>
                <Stack spacing={1}>
                    <Text fontWeigh={'medium'} color={useColorModeValue('gray.700', 'gray.400')}>
                        {name}
                    </Text>
                    <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                        {description}
                    </Text>
                </Stack>
                <HStack>
                    <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                        {rating}
                    </Text>
                </HStack>
            </Stack>
            <Stack align={'center'}>
                <Button colorScheme={'blue'} isFullWidth>
                    Show more
                </Button>
                <Link 
                    fontWeight={'medium'}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    _hover={{ textDecoration: 'none' }}
                >
                    Show modal
                </Link>
            </Stack>
        </Stack>
    )
}

export default ClipCard