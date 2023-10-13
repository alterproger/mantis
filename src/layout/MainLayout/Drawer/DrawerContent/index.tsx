// material-ui
import { Button, useMediaQuery, useTheme } from '@mui/material';

// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';
import { useSelector } from 'store';

//icons
import { LogoutOutlined } from '@ant-design/icons';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;

  return (
    <SimpleBar
      sx={{
        height: '100%',

        '& .simplebar-content': {
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <Navigation />

      {drawerOpen && !matchDownMD && <NavCard />}

      {drawerOpen && !matchDownMD && (
        <Button
          variant="text"
          sx={{
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'flex-start',
            margin: '40px 0 20px',
            padding: '11px 25px'
          }}
          fullWidth
        >
          <LogoutOutlined /> Log Out
        </Button>
      )}
    </SimpleBar>
  );
};

export default DrawerContent;
