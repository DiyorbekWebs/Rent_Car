import { Pagination } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react';
import { logo } from '../../assets/img/Picture';

export default function Header() {
  return (
    <Container>
        <Stack direction={'row'} gap='20px'>
            <img src={logo} alt='logo'/>
            <Stack>
                
            </Stack>
        </Stack>
    </Container>
  );
}
