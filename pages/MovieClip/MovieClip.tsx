import { Box, } from '@chakra-ui/react'
import * as React from 'react'
import ClipsGrid from './ClipsGrid'
// import { products } from './ClipItems'
import ClipCard from './ClipCard'

const products = [
    {
        id: "1",
        name: "Product 1",
        img: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 4.5,
    },
    {
        id: "2",
        name: "Product 2",
        img: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 4.5,
    },
    {
        id: "3",
        name: "Product 3",
        img: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 4.5,
    },
]

const MovieClip = () => {
    return (
        <div>
            {products.map((product) => {
                <li>{product.description}, {product.name}</li>
            })}
        <Box
            maxW={'7xl'}
            mx={'auto'}
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}
        >
            <ClipsGrid>
                {products.map((product) => {
                    return (
                        <ClipCard product={product}/>
                    )
                })}
            </ClipsGrid>
        </Box>
        </div>
    )
}

export default MovieClip