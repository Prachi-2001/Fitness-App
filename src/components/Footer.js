import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo1 from '../assets/images/Logo.png';
import Logo2 from '../assets/images/flexzone-logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      sx={{ alignItems: 'center' }}
      flexWrap="wrap"
      pt="24px"
    >
      <Stack gap="10px" sx={{ display: 'flex', flexDirection: 'row' }}>
        <img src={Logo1} alt="logo" style={{ width: '50px', height: '41px' }} />
        <img
          src={Logo2}
          alt="logo"
          style={{ width: '100px', height: '41px' }}
        />
      </Stack>
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made by ❤️ Prachi
    </Typography>
  </Box>
);

export default Footer;
