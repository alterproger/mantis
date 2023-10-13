import { PlusOutlined } from '@ant-design/icons';
import { Button, Grid, Typography } from '@mui/material';

const Welcome = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h1" sx={{ color: '#262626', fontSize: '24px', fontWeight: '700' }}>
          Welcome, Stebin
        </Typography>
        <Typography variant="body2" sx={{ mt: '10px', color: '#8C8C8C', fontSize: '14px', fontWeight: '500' }}>
          Monday 10, October, 2023
        </Typography>
      </Grid>

      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <Button startIcon={<PlusOutlined />} variant="contained" sx={{ py: '9px' }}>
          Create New Task / Project
        </Button>
      </Grid>
    </Grid>
  );
};

export default Welcome;
