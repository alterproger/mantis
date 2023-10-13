import { PlusOutlined } from '@ant-design/icons';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Welcome = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ color: '#262626', fontSize: '24px', fontWeight: '700' }}>
          Welcome, Stebin
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: '10px', color: '#8C8C8C', fontSize: '14px', fontWeight: '500', textAlign: { xs: 'center', sm: 'left' } }}
        >
          Monday 10, October, 2023
        </Typography>
      </Box>

      <Box>
        <Button startIcon={<PlusOutlined />} variant="contained" sx={{ py: '9px' }}>
          Create New Task / Project
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
