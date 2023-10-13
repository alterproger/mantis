// material-ui
import { Grid } from '@mui/material';

// project import
import Notifications from 'components/Notifications';
import OverviewStatistic from 'components/OverviewStatistic';
import BillingSummary from '../../components/Billing Summary';
import TabTable from 'components/TabTable';
import UserProfile from 'components/UserProfile';
import Welcome from 'components/Welcome';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12}>
        <Welcome />
      </Grid>

      <Grid item xs={12}>
        <OverviewStatistic />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <TabTable />
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <UserProfile />
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <BillingSummary />
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Notifications />
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
