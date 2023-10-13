import { Box, Card, Typography } from '@mui/material';
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
  <Card variant="outlined" sx={{ p: '22px', display: 'flex', gap: '16px', flexDirection: 'column', width: '100%' }}>
    <IconButton color="secondary" sx={{ background: '#FAFAFA' }}>
      {icon}
    </IconButton>

    <Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
      <Typography variant="h1">{`${distance} m`}</Typography>
      <LinearWithLabel value={progress} color={color} />
    </Box>

    <Box sx={{ display: 'flex', gap: '6px', flexDirection: 'column' }}>
      <Typography>{name}</Typography>
      <Typography>{description}</Typography>
    </Box>
  </Card>
);

export default OverviewCard;
