import { Link as RouterLink } from 'react-router-dom';

import { CardContent, Button, Typography, Link, Grid, Avatar, Box, Divider } from '@mui/material';

import { ClockCircleOutlined, MailOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';

import avatarImage from 'assets/images/profile/avatar.jpg';

import MainCard from 'components/MainCard';

const UserProfile = () => (
  <MainCard
    title="Business Manager"
    content={false}
    sx={{ height: '100%' }}
    secondary={
      <Link component={RouterLink} to="#" color="primary">
        View all
      </Link>
    }
  >
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" gap="12px">
            <Avatar src={avatarImage} alt="User Avatar" sx={{ width: 100, height: 100, borderRadius: '50%' }} />
            <Grid item xs={10}>
              {/* Second Column - Text Info */}
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{ fontSize: '20px', lineHeight: '140%', fontWeight: '700' }}>
                    Andrew Willyams
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="5px">
                    <Box display="flex" alignItems="center" gap="5px">
                      <ClockCircleOutlined style={{ color: '#8C8C8C' }} />
                      <Typography variant="caption" sx={{ color: '#8C8C8C', fontSize: 14 }}>
                        13:53 local time
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap="5px">
                      <Box sx={{ backgroundColor: '#52C41A', width: 6, height: 6, borderRadius: '50%' }} />
                      <Typography variant="caption" sx={{ fontSize: 14 }}>
                        Active
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ color: '#8C8C8C' }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
            auctor ornare leo, non suscipit magna.
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
    <Divider />
    <CardContent>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        sx={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', color: '#000', borderColor: '#D9D9D9' }}
      >
        <PhoneOutlined />
        Schedule Call
      </Button>
      <Box display="flex" alignItems="center" gap="10px">
        <Button
          variant="outlined"
          color="secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000', borderColor: '#D9D9D9' }}
          fullWidth
        >
          <MessageOutlined /> Message
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000', borderColor: '#D9D9D9' }}
          fullWidth
        >
          <MailOutlined /> Email
        </Button>
      </Box>
    </CardContent>
  </MainCard>
);

export default UserProfile;
