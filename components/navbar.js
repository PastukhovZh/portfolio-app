import Logo from './logo';
import NextLink from 'next/link'
import {
    Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue, Button
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button';
import { IoLogoGithub } from 'react-icons/io5';

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('grey200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}> 
                {children}
            </Link>

        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container display='flex' p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align='center' mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'} >
                       <Logo/> 
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                    fontFamily='DynaPuff'
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href='/contact' path={path}>
                        Contact
                    </LinkItem>
                    <Link href="https://github.com/PastukhovZh/portfolio-app" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
            >
                You can check the code 
            </Button>
            </Link>
                </Stack>
                <Box flex={1} align='right'>
                    <ThemeToggleButton/>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu >
                            <MenuButton as={IconButton}  icon={<HamburgerIcon/>} variant='outline' aria-label='Options'/>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem fontFamily='DynaPuff' as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem fontFamily='DynaPuff' as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem fontFamily='DynaPuff' as={Link}>Contact</MenuItem>
                                </NextLink>
                                <MenuItem as={Link} fontFamily='DynaPuff' href="https://github.com/PastukhovZh/portfolio-app">Code in Github</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}


export default Navbar