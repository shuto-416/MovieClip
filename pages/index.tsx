import Head from 'next/head'
import {
  Text,
  Stack,
  Button,
  Heading,
  Container,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" // from google fonts
          rel="stylesheet"
        />
      </Head>
      <Container maxW={'3xl'}>
        <Stack
          textAlign={'center'}
          spacing={{ base: 8, md: 14}}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontFamily={'Arial Black'}
            fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
            lineHeight={'110%'}
          >
            MOVIE CLIP <br />
            <Text color={'green.400'} fontSize={{base: 'xl', sm: '3xl', md: '5xl'}}>
              Can you forgive me 4 my selfish evaluation?
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            It is a site that evaluates movies on its own. Oh sorry, It's a lie, and it's actually a site created by searching for a suitable theme to use chakra ui. gomenne. yurushitene. okoranaidene.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{ bg: 'green.500' }}
            >
              See Clips
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              See More
            </Button>
            <Text
                fontSize={'3xl'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-400px'}
                top={'-40px'}
                transform={'rotate(8deg)'}
              >
                Watching movies every minuites
              </Text>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}

export default Home
