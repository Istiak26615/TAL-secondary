import React, { useState } from 'react';
import Logo from '../../assets/img/tallogo_low.png'
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';



const NavbarLinks = styled('nav')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  },
  '& li': {
    marginLeft: theme.spacing(3),
    '&:first-child': {
      marginLeft: 0,
    },
  },
  '& a': {
    textDecoration: 'none',
    color: '#000000', // Change this to your desired link color
  },
}));

const DrawerLinks = styled('nav')(({ theme }) => ({
  width: '250px', // Change this to your desired drawer width
  padding: theme.spacing(2),
  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  '& li': {
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  '& a': {
    textDecoration: 'none',
    color: '#000000', // Change this to your desired link color
  },
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="sticky" sx={{backgroundColor:"transparent", backdropFilter: 'blur(10px)'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" passHref>
           <IconButton color="inherit">
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               {/* Your Logo */}
               <img height={100} width="auto" src={Logo} alt='' />
             </Typography>
           </IconButton>
         </Link>
          <IconButton sx={{ display: { md: 'none' } }} onClick={toggleDrawer}>
          <MenuIcon sx={{color:"white"}}/>
          </IconButton>
          <NavbarLinks>
            <ul>
              <li><Link to="/about"><Typography sx={{color:"white"}}>About</Typography></Link></li>
              
              <li><Link to="/services"><Typography sx={{color:"white"}}>Services</Typography></Link></li>
              <li><Link to="/solutions"><Typography sx={{color:"white"}}>Solutions</Typography></Link></li>
              <li><Link to="/contact"><Typography sx={{color:"white"}}>Contact</Typography></Link></li>
            </ul>
          </NavbarLinks>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} >
        <DrawerLinks>
          <ul>
            <li>
            <Link to="/" sx={{display:"flex"}} onClick={()=>{setDrawerOpen(false)}}>
              <ListItem button component="a" >               
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
                
              </ListItem>
              </Link>
            </li>
            <li>
            <Link to="/about" sx={{display:"flex"}} onClick={()=>{setDrawerOpen(false)}}>
              <ListItem button component="a">
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
              </Link>
            </li>
           
            <li>
            <Link to="/services" sx={{display:"flex"}} onClick={()=>{setDrawerOpen(false)}}>
              <ListItem button component="a" >
                <ListItemIcon><BuildIcon /></ListItemIcon>
                <ListItemText primary="Services" />
              </ListItem>
              </Link>
            </li>
            <li>
            <Link to="/solutions" sx={{display:"flex"}} onClick={()=>{setDrawerOpen(false)}}>
              <ListItem button component="a">
                <ListItemIcon><AssignmentIcon /></ListItemIcon>
                <ListItemText primary="Solutions" />
              </ListItem>
              </Link>
            </li>
            <li>
              <Link to="/contact" sx={{display:"flex"}} onClick={()=>{setDrawerOpen(false)}}>
              <ListItem button component="a">
                <ListItemIcon><PhoneIcon /></ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
              </Link>
            </li>
          </ul>
        </DrawerLinks>
      </Drawer>
    </>



  );
};

export default Navbar;