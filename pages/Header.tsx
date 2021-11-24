import {
    Box,
    Stack,
    Button,
    Flex,
    Text,
    Link,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Collapse,
    IconButton,
    useDisclosure,
    useColorModeValue,
  } from "@chakra-ui/react"
import { 
    HamburgerIcon,
    CloseIcon,
    ChevronRightIcon,
    ChevronDownIcon,
 } from "@chakra-ui/icons"

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return(
        // all in Box
        <Box> 
            <Flex // header container without mobile
                bg = {useColorModeValue('white', '#1A202C')}
                color = {useColorModeValue('#4A5568', 'white')}
                minH = {'60px'} // minimum height
                // base -> 全体templete適用?みたいな
                py = {{ base: 2 }} // padding top & bottom
                px = {{ base: 4 }} // padding left & right
                borderBottom = {1} // border bottom
                borderStyle={'solid'}
                borderColor = {useColorModeValue('#E2E8F0', '#171923')} // border color
                align = {'center'}
            >
                {/* HumburgerIcon & closeIcon when the mobile size */}
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

                {/* title Flex component*/}
                <Flex flex = {{ base: 1 }} justify = {{ base: 'center', md: 'start' }} >
                    <Text
                        textAlign = {{ base: 'center', md: 'left' }} // ウィンドウサイズがmd以下ならcenter, md以上ならleft
                        fontFamily = {'heading'}
                        color={useColorModeValue('#1A202C', 'white')}
                    >
                        MOVIECLIP
                    </Text>

                    <Flex display = {{ base:'none', md:'flex' }} ml = {10} >
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
                        bg = {'#ED64A6'} // back ground color
                        href = {'#'}
                        _hover = {{ bg: '#F687B3' }} // hover action
                    >
                        Sign Up
                    </Button>
                </Stack>
 
            </Flex>
            <Collapse in = {isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

// Desktop size(一番でかいサイズ)の時のNav表示(title sign in sign up以外)
const DesktopNav = () => {
    const linkColor = useColorModeValue('#4A5568', '#E2E8F0');
    const linkHoverColor = useColorModeValue('#1A202C', 'white');
    const popoverContentBgColor = useColorModeValue('white', '#1A202C');

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

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return(
        <Link
            href = {href}
            role = {'group'}
            display = {'block'}
            p = {2}
            rounded = {'md'}
            _hover = {{ bg: useColorModeValue('#FFF5F7', '#171923') }}
        >
            <Stack direction = {'row'} align = {'center'}>

                <Box>
                    <Text
                        transition = {'all .3s ease'}
                        _groupHover = {{ color: '#ED64A6' }}
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
                    <Icon color = {'#ED64A6'} h = {5} w = {5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    )
}

const MobileNav = () => {
    return(
        <Stack
            bg = {useColorModeValue('white', '#1A202C')}
            p = {4}
            display = {{ md: 'none' }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, href, children }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return(
        <Stack spacing = {4} onClick={children && onToggle}>
            <Flex
                py = {2}
                as = {Link}
                href = { href ?? '#' }
                justify = {'space-between'}
                align = {'center'}
                _hover = {{ textDecoration: 'none' }}
            >
                <Text
                    fontWeight = {600}
                    color = {useColorModeValue('#4A5568', '#E2E8F0')}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as = {ChevronDownIcon}
                        transition = {'all .25s ease-in-out'}
                        transform = {isOpen ? 'rotate(180deg)' : ''}
                        w = {6}
                        h = {6}
                    />
                )}
            </Flex>

            <Collapse in = {isOpen} animateOpacity style = {{ marginTop: '0!important' }}>
                <Stack
                    mt = {2}
                    pl = {4}
                    borderLeft = {1}
                    borderStyle = {'solid'}
                    borderColor = {useColorModeValue('#E2E8F0', '#2D3748')}
                    align = {'start'}
                >
                    {children && children.map((child) => (
                        <Link key={child.label} py={2} href={child.href}>
                            {child.label}
                        </Link>
                    ))}
                </Stack>
            </Collapse>
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