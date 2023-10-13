import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link, Box } from '@mui/material';

import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const linkColumns = [
  {
    heading: 'ArtBoard',
    text: 'Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    heading: 'Quick Links',
    links: ['Home', 'Tasks / Projects', 'Minutes Utilisation', 'Billing & Subscription']
  },
  {
    heading: 'Help',
    links: ['Support Chat', 'Ticketing System', 'FAQ']
  },
  {
    heading: 'Legal',
    links: ['Terms of service', 'Privacy policy']
  }
];

const Footer = () => (
  <Stack
    direction="column"
    sx={{
      p: '48px 48px 10px 48px',
      mt: 'auto',
      backgroundColor: '#262626'
    }}
  >
    <Box display="flex" justifyContent="space-between" marginBottom="64px" flexWrap="wrap" gap="40px">
      {linkColumns.map((column, index) => (
        <Box key={index}>
          <Typography
            variant="h6"
            sx={{
              width: '223px',
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '150%',
              marginBottom: '56px',
              color: 'white'
            }}
          >
            {column.heading}
          </Typography>
          {column.links?.map((link, linkIndex) => (
            <Link
              component={RouterLink}
              to="/"
              variant="body1"
              color="#BFBFBF"
              sx={{
                display: 'block',
                padding: '12px 24px 12px 0',
                fontSize: 14,
                lineHeight: '157%'
              }}
              key={linkIndex}
            >
              {link}
            </Link>
          ))}
          {column.text && (
            <Typography
              variant="body1"
              sx={{
                display: 'block',
                fontSize: 14,
                lineHeight: '157%',
                color: '#BFBFBF',
                maxWidth: '411px'
              }}
            >
              {column.text}
            </Typography>
          )}
        </Box>
      ))}
    </Box>

    <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
      <Typography variant="caption" sx={{ color: '#BFBFBF' }}>
        &copy; 2023 Artboard. All rights reserved. Legal information
      </Typography>

      <Box display="flex" alignItems="center" gap="40px" marginRight="48px">
        <Link
          variant="caption"
          component={RouterLink}
          to="/"
          target="_blank"
          sx={{
            fontSize: '19px',
            color: '#FAFAFA',
            transition: 'color 0.3s',
            '&:hover': {
              color: '#1890FF'
            }
          }}
        >
          <FacebookOutlined />
        </Link>
        <Link
          variant="caption"
          component={RouterLink}
          to="/"
          target="_blank"
          sx={{
            fontSize: '19px',
            color: '#FAFAFA',
            transition: 'color 0.3s',
            '&:hover': {
              color: '#1890FF'
            }
          }}
        >
          <InstagramOutlined />
        </Link>
        <Link
          variant="caption"
          component={RouterLink}
          to="/"
          target="_blank"
          sx={{
            fontSize: '19px',
            color: '#FAFAFA',
            transition: 'color 0.3s',
            '&:hover': {
              color: '#1890FF'
            }
          }}
        >
          <TwitterOutlined />
        </Link>
      </Box>
    </Box>
  </Stack>
);

export default Footer;
