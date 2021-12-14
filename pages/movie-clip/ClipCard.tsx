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
import * as React from 'react'
import FavoriteButton from './FavoriteButton'
import { movie_types, movie_enum } from '../../types/movie_type'

interface Props {
    clip: movie_types
}

const ClipCard = ({clip}: Props) => {
    const { title, img, description, rating } = clip

    return (
        <Stack spacing={useBreakpointValue({ base: '4', md: '5' })} >
            <Box position={'relative'}>
                <AspectRatio ratio={4/3}>
                    <Image
                        src={img}
                        alt={title}
                        draggable={false}
                        fallback={<Skeleton />}
                        borderRadius={useBreakpointValue({ base: '4', md: '5' })}
                    />
                </AspectRatio>
                <FavoriteButton
                    position={'absolute'}
                    top={4}
                    right={4}
                    aria-label={`Add ${title} to ypur favorite`}
                />
            </Box>
            <Stack>
                <Stack spacing={1}>
                    <Text fontWeigh={'medium'} color={useColorModeValue('gray.700', 'gray.400')}>
                        {title}
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