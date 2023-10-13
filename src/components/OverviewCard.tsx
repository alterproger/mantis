import { Box, Card, Grid, Typography } from '@mui/material';
import IconButton from 'components/@extended/IconButton';
import { ReactNode } from 'react';
import LinearWithLabel from './@extended/progress/LinearWithLabel';

type Props = {
  icon: ReactNode;
  distance: number;
  progress: number;
  name: string;
  description: string;
  color: 'error' | 'success' | 'info';
};

const OverviewCard: React.FC<Props> = ({ icon, distance, progress, name, description, color }) => (
  <Grid item xs={12} md={4}>
    <Card variant="outlined" sx={{ p: '22px', display: 'flex', gap: '16px', flexDirection: 'column', width: '100%' }}>
      <IconButton color="secondary" sx={{ background: '#FAFAFA' }}>
        {icon}
      </IconButton>

      <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
        <Typography variant="h1" sx={{ fontWeight: '700', fontSize: '24px' }}>{`${distance} m`}</Typography>
        <LinearWithLabel value={progress} color={color} sx={{ background: '#F5F5F5' }} />
      </Box>

      <Box sx={{ display: 'flex', gap: '6px', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>{name}</Typography>
        <Typography sx={{ fontWeight: '20', fontSize: '12px', color: '#8C8C8C' }}>{description}</Typography>
      </Box>
    </Card>
  </Grid>
);

export default OverviewCard;
