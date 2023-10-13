// material-ui
import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

// project import
import MobileSection from './MobileSection';
import Notification from './Notification';
import Profile from './Profile';
import Search from './Search';

import useConfig from 'hooks/useConfig';
import DrawerHeader from 'layout/MainLayout/Drawer/DrawerHeader';

// types
import { SettingOutlined } from '@ant-design/icons';
import { Badge } from '@mui/material';
import IconButton from 'components/@extended/IconButton';
import { MenuOrientation } from 'types/config';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
      {!downLG && <Search />}
      <Notification />
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', marginLeft: '10px' }}
        aria-label="open profile"
        aria-haspopup="true"
      >
        <Badge color="primary">
          <SettingOutlined />
        </Badge>
      </IconButton>
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
};

export default HeaderContent;
