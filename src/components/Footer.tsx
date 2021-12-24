import React,{ useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import NetWorkState from './NetWorkState';

const Item = styled(Paper)(({ theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Footer() {
  const [nwState, setNwState] = useState(false);

  const toggleState = () =>{
    setNwState(!nwState);
  };
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        bottom:0,
        position:'fixed'
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <NetWorkState state={nwState} /> 
        <Item onClick={toggleState}> item2 </Item>
      </Stack>
    </Container>
  );
}
