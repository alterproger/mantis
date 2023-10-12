import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { CardContent, Grid, Link, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

// assets
import { FieldTimeOutlined, CheckOutlined, EyeOutlined, WarningOutlined } from '@ant-design/icons';

// ==========================|| DATA WIDGET - LATEST MESSAGES ||========================== //

const Notifications = () => (
  <MainCard
    title="Notifications & Alerts Center"
    content={false}
    secondary={
      <Link component={RouterLink} to="#" color="primary">
        View all
      </Link>
    }
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        alignItems="center"
        sx={{
          position: 'relative',
          '&>*': {
            position: 'relative',
            zIndex: '5'
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 20,
            left: 110,
            width: '1px',
            height: '100%',
            background: '#ebebeb',
            zIndex: '1'
          }
        }}
      >
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
            <Grid item>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs zeroMinWidth sx={{ minWidth: '67px' }}>
                  <Typography align="left" variant="caption" color="secondary" sx={{ fontSize: '10px' }}>
                    15 min ago
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar color="error">
                    <FieldTimeOutlined />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography component="div" align="left" variant="subtitle1" sx={{ fontSize: '12px' }}>
                    Minutes limitation warning
                  </Typography>
                  <Typography color="secondary" align="left" variant="caption" sx={{ fontSize: '10px' }}>
                    You have left 30 min left today
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs zeroMinWidth sx={{ minWidth: '67px' }}>
                  <Typography align="left" variant="caption" color="secondary" sx={{ fontSize: '10px' }}>
                    6 hrs ago
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar color="success">
                    <CheckOutlined />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography component="div" align="left" variant="subtitle1" sx={{ fontSize: '12px' }}>
                    Task Completed!
                  </Typography>
                  <Typography color="secondary" align="left" variant="caption" sx={{ fontSize: '10px' }}>
                    Task #023 was completed by John Doe
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs zeroMinWidth sx={{ minWidth: '67px' }}>
                  <Typography align="left" variant="caption" color="secondary" sx={{ fontSize: '10px' }}>
                    1 day ago
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar color="primary">
                    <EyeOutlined />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography component="div" align="left" variant="subtitle1" sx={{ fontSize: '12px' }}>
                    Task status changed
                  </Typography>
                  <Typography color="secondary" align="left" variant="caption" sx={{ fontSize: '10px' }}>
                    Task #014 status changed to: In Production
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs zeroMinWidth sx={{ minWidth: '67px' }}>
                  <Typography align="left" variant="caption" color="secondary" sx={{ fontSize: '10px' }}>
                    2 day ago
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar color="warning">
                    <WarningOutlined />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography component="div" align="left" variant="subtitle1" sx={{ fontSize: '12px' }}>
                    Warning Message
                  </Typography>
                  <Typography
                    color="secondary"
                    align="left"
                    variant="caption"
                    sx={{ fontSize: '10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '100%' }}
                  >
                    Lorem ipsum dolor sit amet consectetur adi...
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </MainCard>
);

export default Notifications;
