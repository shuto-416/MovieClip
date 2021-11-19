import {
    Box,
    Stack,
    Button,
    Flex,
    Text,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Collapse,
    IconButton,
    useDisclosure,
    useColorModeValue,
    useBreakpointValue,
  } from "@chakra-ui/react"
import { 
    HamburgerIcon,
    CloseIcon,
 } from "@chakra-ui/icons"

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return(
        <Box>
            <Flex
                bg = {useColorModeValue('white', 'grey.800')}
                color = {useColorModeValue('grey.600', 'white')}
                minH = {'60px'} // minimum height
                // base -> 全体templete適用?みたいな
                py = {{ base: 2 }} // padding top & bottom
                px = {{ base: 4 }} // padding left & right
                borderBottom = {1} // border bottom
                borderColor = {useColorModeValue('grey.200', 'grey.900')} // border color
                align = {'center'}
            >
                <Flex
                    flex = {{ base: 1, md: 'auto' }} // md: meddium
                    ml = {{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick = {onToggle}
                        icon = { isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} /> }
                        variant = 'ghost'
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex flex = {{ base: 1 }} justify = {{ lg: 'center', md: 'start' }} >
                    <Text
                        textAlign = {useBreakpointValue({ base: 'center', md: 'left' })} // ウィンドウサイズがmd以下ならcenter, md以上ならleft
                        fontfamily = {'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        MOVIECLIP
                    </Text>

                    <Flex display = {{base:'none', md:'flex'}} ml = {10} >
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex = {{ base: 1, md: 0 }}
                    justify = {'flex-end'}
                    direction = {'row'}
                    spacing = {6}
                >
                    <Button
                        as = {'a'}
                        fontSize = {'sm'} // sm: small
                        fontWeight = {400}
                        variant = {'link'}
                        href = {'#'}
                    >
                        Sign In
                    </Button>

                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize = {'sm'}
                        fontWeight = {600}
                        color = {'white'} // font color
                        bg = {'pink.400'} // back ground color
                        href = {'#'}
                        _hover = {{ bg: 'pink.300' }} // hover action
                    >
                        Sign Up
                    </Button>
                </Stack>
 
            </Flex>
            {/* <Collapse in = {isOpen} animateOpacity>
                <MobileNav />
            </Collapse> */}
        </Box>
    )
}

// Desktop size(一番でかいサイズ)の時のNav表示(title sign in sign up以外)
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
                                minW = {'sm'}
                            >
                                <Stack>
                                    {/* {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child}/>
                                    ))} */}
                                </Stack>

                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

interface NavItem{
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Inspiration',
        children: [
          {
            label: 'Explore Design Work',
            subLabel: 'Trending Design to inspire you',
            href: '#',
          },
          {
            label: 'New & Noteworthy',
            subLabel: 'Up-and-coming Designers',
            href: '#',
          },
        ],
      },
      {
        label: 'Find Work',
        children: [
          {
            label: 'Job Board',
            subLabel: 'Find your dream design job',
            href: '#',
          },
          {
            label: 'Freelance Projects',
            subLabel: 'An exclusive list for contract work',
            href: '#',
          },
        ],
      },
      {
        label: 'Learn Design',
        href: '#',
      },
      {
        label: 'Hire Designers',
        href: '#',
      },
];
export default Header;