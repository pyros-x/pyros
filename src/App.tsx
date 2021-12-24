import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'; 

import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

export default function PrimarySearchAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <Header drawerWidth={300}/>
      <SideBar />
      <Footer />
    </Box>
  );
}
