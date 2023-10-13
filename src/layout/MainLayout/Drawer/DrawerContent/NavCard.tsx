// material-ui
import { Button, CardMedia, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';
import { QuestionCircleOutlined, StarOutlined } from '@ant-design/icons';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: 'grey.50', m: 3, marginTop: 'auto' }} contentSX={{ padding: '16px' }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={avatar} />
      <Stack alignItems="center" sx={{ maxWidth: '100%' }}>
        <Typography variant="h5">Have anything to say?</Typography>
        <Typography variant="h6" color="secondary" sx={{ maxWidth: '100%', whiteSpace: 'normal', fontSize: '12px', textAlign: 'center' }}>
          Feel free to leave any feedback or contact our support for help
        </Typography>
      </Stack>
      <Button variant="contained" fullWidth sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <StarOutlined /> Feedback
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#000',
          marginTop: '8px !important',
          borderColor: '#D9D9D9'
        }}
        fullWidth
      >
        <QuestionCircleOutlined /> Contact Support
      </Button>
    </Stack>
  </MainCard>
);

export default NavCard;
