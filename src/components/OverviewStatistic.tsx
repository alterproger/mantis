import { ClockCircleOutlined, FieldTimeOutlined, StarOutlined } from '@ant-design/icons';
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { useState } from 'react';
import OverviewCard from './OverviewCard';

const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

const OverviewStatistic: React.FC = () => {
  const [value, setValue] = useState('month');
  return (
    <MainCard
      contentSX={{ display: 'flex', justifyContent: 'space-between', gap: '24px', p: '16px' }}
      title={
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: '500', textAlign: { xs: 'center', sm: 'left' } }}>
            Minutes Utilisation Overview
          </Typography>

          <TextField size="small" select value={value} onChange={(e) => setValue(e.target.value)}>
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      }
    >
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <OverviewCard
          icon={<StarOutlined />}
          distance={600}
          progress={100}
          name="Total Minutes Purchased"
          description="Overall Minutes from the subscription"
          color="info"
        />

        <OverviewCard
          icon={<FieldTimeOutlined />}
          distance={354}
          progress={55}
          name="Minutes Used"
          description="Live tracker of the time utilised"
          color="success"
        />
        <OverviewCard
          icon={<ClockCircleOutlined />}
          distance={246}
          progress={45}
          name="Minutes Remaining"
          description="Leftover minutes for this month"
          color="error"
        />
      </Grid>
    </MainCard>
  );
};

export default OverviewStatistic;
