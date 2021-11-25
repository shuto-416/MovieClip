import {
    Box,
    Link,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
} from '@chakra-ui/react'
import {
} from '@chakra-ui/icons'

import NAV_ITEMS from './NavItem'
import DesktopSubNav from './DesktopSubNav'

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return(
        <Stack direction = {'row'} spacing = {4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key = {navItem.label}>
                    <Popover trigger = {'hover'} placement = {'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p = {2} //padding
                                href = {navItem.href ?? '#'} // link先なければ#
                                fontSize = {'md'}
                                fontWeight = {500}
                                color = {linkColor}
                                _hover = {{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border = {0}
                                boxShadow = {'xl'} // xl: x-large
                                bg = {popoverContentBgColor}
                                p = {4}
                                rounded = {'xl'}
                                minw = {'sm'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child}/>
                                    ))}
                                </Stack>

                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

export default DesktopNav;