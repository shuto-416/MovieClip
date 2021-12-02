import {
    Link,
    Stack,
    Box,
    Text,
    Flex,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    ChevronRightIcon,
} from '@chakra-ui/icons'

interface NavItem{
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return(
        <Link
            href = {href}
            role = {'group'}
            display = {'block'}
            p = {2}
            rounded = {'md'}
            _hover = {{ bg: useColorModeValue('purple.50', 'gray.900') }}
        >
            <Stack direction = {'row'} align = {'center'}>

                <Box>
                    <Text
                        transition = {'all .3s ease'}
                        _groupHover = {{ color: 'purple.400' }}
                        fontWeight = {500}
                    >
                        {label}
                    </Text>
                    <Text fontSize = {'sm'}>{subLabel}</Text>
                </Box>

                <Flex
                    transition = {'all .3s ease'}
                    transform = {'translateX(-10px)'}
                    opacity = {0}
                    _groupHover = {{ opacity: '100%', transform: 'translateX(0)' }}
                    justify = {'flex-end'}
                    align = {'center'}
                    flex = {1}
                >
                    <Icon color = {'purple.400'} h = {5} w = {5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    )
}

export default DesktopSubNav;