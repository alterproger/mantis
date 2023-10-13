import {
  CalendarOutlined,
  CheckOutlined,
  EllipsisOutlined,
  FieldTimeOutlined,
  FilterOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, CardContent, Grid, IconButton, Link, Tab, TableContainer, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import avatar1 from 'assets/images/users/avatar-1.png';
import Avatar from 'components/@extended/Avatar';
import { ReactNode, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MainCard from './MainCard';

type TabState = 'active' | 'completed' | 'pending';

function createData(task: string, name: string, time: number, date: string) {
  return { name, task, time, date };
}

const activeList = [
  createData('Name #001', 'Albert Flores', 48, 'Oct 12, 14:00'),
  createData('Name #002', 'Ralph Edwards', 30, 'Oct 12, 14:00'),
  createData('Name #003', 'Leslie Alexander', 90, 'Oct 12, 14:00'),
  createData('Name #004', 'Guy Hawkins', 120, 'Oct 12, 14:00')
];

const pendingList = [
  createData('Name #001', 'Kathryn Murphy', 148, 'Oct 12, 14:00'),
  createData('Name #002', 'Guy Hawkins', 63, 'Oct 12, 14:00'),
  createData('Name #003', 'Ronald Richards', 200, 'Oct 12, 14:00'),
  createData('Name #004', 'Jenny Wilson', 420, 'Oct 12, 14:00')
];

const completedList = [
  createData('Name #001', 'Kristin Watson', 71, 'Oct 12, 14:00'),
  createData('Name #002', 'Marvin McKinney', 80, 'Oct 12, 14:00'),
  createData('Name #003', 'Leslie Alexander', 391, 'Oct 12, 14:00'),
  createData('Name #004', 'Cody Fisher', 129, 'Oct 12, 14:00')
];

const CustomTableCell = ({ title, children }: { title: string; children: ReactNode }) => (
  <TableCell sx={{}}>
    <Grid container sx={{}}>
      <Grid item xs={12}>
        <Typography sx={{ color: '#8C8C8C', fontSize: '12px' }}>{title}</Typography>
      </Grid>

      <Grid item xs={12} sx={{ fontSize: '14px' }}>
        {children}
      </Grid>
    </Grid>
  </TableCell>
);

const TabLabel = ({ name, amount }: { name: string; amount: number }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '4px' }}>
      <Typography>{name}</Typography>
      <Typography sx={{ background: '#E6F7FF', color: '#1890FF', display: 'block', padding: '0 6px', borderRadius: '100%' }}>
        {amount}
      </Typography>
    </Box>
  );
};

const CustomTable = ({
  rows,
  badge
}: {
  rows: {
    name: string;
    task: string;
    time: number;
    date: string;
  }[];
  badge: ReactNode;
}) => (
  <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name} sx={{ background: '#FAFAFA', borderTop: '12px solid white' }}>
            <TableCell>{badge}</TableCell>
            <CustomTableCell title="Task Name">{row.task}</CustomTableCell>
            <CustomTableCell title="Assigned">
              <Box sx={{ display: 'flex', justifyContent: 'start', gap: '6px', alignItems: 'center' }}>
                <Avatar alt="profile user" src={avatar1} sx={{ width: 22, height: 22 }} />
                <Typography>{row.name}</Typography>
              </Box>
            </CustomTableCell>
            <CustomTableCell title="Minutes Logged">
              <Box sx={{ display: 'flex', justifyContent: 'start', gap: '6px', alignItems: 'center' }}>
                <Box sx={{ fontSize: '14px', color: '#8C8C8C' }}>
                  <FieldTimeOutlined />
                </Box>
                <Typography>{row.time}</Typography>
              </Box>
            </CustomTableCell>
            <CustomTableCell title="Due Date">
              <Box sx={{ display: 'flex', justifyContent: 'start', gap: '6px', alignItems: 'center' }}>
                <Box sx={{ fontSize: '14px', color: '#8C8C8C' }}>
                  <CalendarOutlined />
                </Box>
                <Typography>{row.date}</Typography>
              </Box>
            </CustomTableCell>
            <TableCell sx={{}}>
              <IconButton color="secondary" sx={{ transform: 'rotate(90deg)' }}>
                <EllipsisOutlined />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default function TabTable() {
  const [tab, setTab] = useState<TabState>('active');

  const handleChange = (event: React.SyntheticEvent, value: TabState) => {
    setTab(value);
  };
  return (
    <MainCard
      title="Active Task Summary"
      content={false}
      secondary={
        <Link component={RouterLink} to="#" color="primary">
          View all
        </Link>
      }
    >
      <CardContent>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label={<TabLabel name="Active" amount={activeList.length} />} value="active" />
              <Tab label={<TabLabel name="Pending" amount={pendingList.length} />} value="pending" />
              <Tab label={<TabLabel name="Completed" amount={completedList.length} />} value="completed" />
            </TabList>
            <Box sx={{ fontSize: '20px', p: '0 18px', color: '#8C8C8C' }}>
              <FilterOutlined />
            </Box>
          </Box>
          <TabPanel value="active" sx={{ p: 0 }}>
            <CustomTable
              rows={activeList}
              badge={
                <Avatar color="info">
                  <InfoCircleOutlined />
                </Avatar>
              }
            />
          </TabPanel>
          <TabPanel value="pending" sx={{ p: 0 }}>
            <CustomTable
              rows={pendingList}
              badge={
                <Avatar color="warning">
                  <FieldTimeOutlined />
                </Avatar>
              }
            />
          </TabPanel>
          <TabPanel value="completed" sx={{ p: 0 }}>
            <CustomTable
              rows={completedList}
              badge={
                <Avatar color="success">
                  <CheckOutlined />
                </Avatar>
              }
            />
          </TabPanel>
        </TabContext>
      </CardContent>
    </MainCard>
  );
}
