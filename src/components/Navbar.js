import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import Link from '@mui/material/Link';
const Navbar = () => {
    
const pages = ['Products', 'Pricing', 'Blog'];
const loggedInSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const loggedOutSettings = ['Login']


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [loginState, setLoginState] = React.useState(false)
    const [loginRender, setLoginRender] = React.useState(loggedInSettings)
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    
    //this is the navbar toggle logic later when we auth the user to be logged in and we render the loggedInStatus Navbar
    const handleLoginState = () =>{
      setLoginState(!loginState)
      if(loginState === true){
        setLoginRender(loggedInSettings)
      }
      else{
        setLoginRender(loggedOutSettings)
      }
    }

  return (
    // sx the opener to define css code
    <AppBar position="static" style={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsIcon sx={{display: { xs: 'none', md: 'flex' }, mr: 2, color:"#FF93D1"}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            PETGISTRY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                      <Link underline='none' color='black' href={`/${page}`}>
                        {page}
                      </Link>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PetsIcon component='a' href='/' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color:"#FF93D1"}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            PETGISTRY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx:2 ,my: 2, color: 'black', display: 'block' }}
              >
                <Link underline='none' color='black' href={`/${page}`}>
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {loginState ? loginRender.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="black">
                    <Link underline='none' color='black' href={`/${setting}`}>
                    {setting}
                    </Link>
                  </Typography>
                </MenuItem>
              )):loginRender.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="black">
                  <Link underline='none' color='black' href={`/${setting}`}>
                    {setting}
                    </Link>
                  </Typography>
                </MenuItem>
              ))
              }
            </Menu>
            <button onClick={(e)=>handleLoginState(e)}>Toggle Login State to see cond. render</button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar