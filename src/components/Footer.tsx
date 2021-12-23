import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Footer() {
  return (
    <Container
      sx={{
        position: 'fixed',
        bottom:'0'
      }}
    >
      <Stack
        direction={{ xs: 'column', sm:'row' }}
        spacing={{ xs:1,sm:2,md:4 }}
      >
        <Item> item1 </Item>
        <Item> item2 </Item>
        <Item> item3 </Item>
        <Item> item4 </Item>
      </Stack>
    </Container>
  );
}
