import{ Icon, IconButton, IconButtonProps, LightMode } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'
import * as React from 'react'

const FavoriteButton = (props: IconButtonProps) => {
    return(
        <LightMode>
            <IconButton
                isRound
                bg={'white'}
                color={'gray.900'}
                size={'sm'}
                _hover={{ transform: 'scale(1.1)' }}
                sx={{ ':hover > svg': { color: 'red.500' } }}
                transition='all 0.15s ease-in-out'
                icon={<Icon as={FiHeart} transition={'all 0.15s ease-in-out'} />}
                boxShadow={'base'}
                {...props}
            />
        </LightMode>
    )
}

export default FavoriteButton