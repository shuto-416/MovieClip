import { 
    Box,
    Button,
    Flex,
    Stack,
    Text,
    Heading,
} from '@chakra-ui/react'
import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ClipsGrid from './ClipsGrid'
import ClipCard from './ClipCard'
import { movie_types, movie_enum } from '../../types/movie_type'
import axios from 'axios'

const type_filter = (q_type: any) => {
    switch(q_type) {
        case 'all_clips':
            return movie_enum.ALL
        case 'action':
            return movie_enum.ACTION
        case 'comedy':
            return movie_enum.COMEDDY
        case 'anime':
            return movie_enum.ANIME
        default:
            return movie_enum.MISSING
    }
}

const filter_clips = ( clips: Array<movie_types>, genre: number ) => {
    if( genre == movie_enum.MISSING ){
        return []
    }
    if( genre == movie_enum.ALL ){
        return clips
    }
    return clips.filter( (clip: movie_types) => {
        return clip.genre == genre
    })
}

const MovieClip = () => {

    const { query } = useRouter()
    const type = type_filter(query.type)
    const [clips, setClips] = React.useState<Array<movie_types>>([])

    React.useEffect(() => {
        axios.get('http://localhost:5000/all_movies').then((res: any) => {
            setClips(res.data)
        })
    })


    if( type == -1 ) {
        return (
            <Box>
                <Head>
                    <title>MovieClip</title>
                </Head>
                <Flex justifyContent="center" alignItems="center" height="100vh">
                    <Heading>Now loading...</Heading>
                </Flex>
            </Box>
        )
    }

    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Smooch&display=swap" rel="stylesheet"/>
            </Head>

            <Flex 
                w={'full'}
                h={'80vh'}
                backgroundImage={'https://source.unsplash.com/AtPWnYNDJnM'}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}
            >
                <Stack
                    w={'full'}
                    justify={'center'}
                    direction={'row'}
                    px={{ base: 4, md: 8 }}
                    pt={{ base: 20, md: 36 }}
                    bgGradient={'linear(to-r, gray.900, transparent)'}
                >
                    <Stack maxW={'2xl'} align={'center'} spacing={6}>
                        <Heading
                            color={'white'}
                            fontWeight={700}
                            fontFamily={'Smooch'}
                            lineHeight={'150%'}
                            fontSize={{ base: '5xl', md: '9xl' }}
                        >
                            Movie Clip
                        </Heading>
                        <Text color={'gray.400'} lineHeight={'150%'}>
                            The data of each clip is managed using node.js (express) and firebase. This is the first time I've used the backend practically, so please be patient even if you're doing something strange.
                        </Text>
                        <Stack direction={'row'}>
                            <Button
                                bg={'purple.500'}
                                rounded={'full'}
                                color={'white'}
                                mt={10}
                                _hover={{ bg: 'purple.600' }}
                            >
                                Watch Now
                            </Button>
                        </Stack>   
                    </Stack>
                </Stack>
            </Flex>
            <Box
                maxW={'7xl'}
                mx={'auto'}
                px={{ base: '4', md: '8', lg: '12' }}
                py={{ base: '6', md: '8', lg: '12' }}
            >
                <ClipsGrid>
                    {filter_clips(clips,type).map((clip: movie_types) => {
                        return (
                            <ClipCard clip={clip}/>
                        )
                    })}
                </ClipsGrid>
            </Box>
        </div>
    )
}

export default MovieClip