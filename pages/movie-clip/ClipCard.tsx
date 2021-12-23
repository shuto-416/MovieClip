import {
    AspectRatio,
    Button,
    Box,
    Image,
    Skeleton,   // eslint-disable-line no-unused-vars
    Stack,
    HStack,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react'
import * as React from 'react'
import FavoriteButton from './FavoriteButton'
import { movie_types, movie_enum } from '../../types/movie_type'

interface Props {
    clip: movie_types
}

const ClipCard = ({clip}: Props) => {
    const { title, img, description, rating } = clip
    const { isOpen, onOpen, onClose } = useDisclosure()

    if (clip == null) {
        return (
            // loading
            <Box>
                <Skeleton height="100%" width="100%" />
            </Box>
        )
    }

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
                    EDIT
                </Button>
                <Button
                    fontWeight={'medium'}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    isFullWidth
                    onClick={onOpen}
                    _hover={{ textDecoration: 'none' , color: useColorModeValue('gray.800', 'gray.200') }}
                >
                    Show modal
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalBody>
                        <AspectRatio ratio={4/3}>
                            <Image
                                src={img}
                                alt={title}
                                draggable={false}
                                fallback={<Skeleton />}
                                borderRadius={5}
                            />
                        </AspectRatio>
                        </ModalBody>
                        <ModalHeader>{title}</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            {description}
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme={'blue'} mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
        </Stack>
    )
}

export default ClipCard