import { useMemo } from 'react';
import { Row } from 'react-table';

import MainCard from './MainCard';
import ReactTable from './ReactTable';
import LogoIcon from './logo/LogoIcon';
import invoiceListData from '../data/invoiceData';

import { Box, Button, Divider, Stack, Typography } from '@mui/material';

import { CreditCardOutlined, MoreOutlined } from '@ant-design/icons';

const BillingSummary = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Transaction Type',
        accessor: 'transaction_type',
        disableFilters: true
      },
      {
        Header: 'Date',
        accessor: 'date'
      },
      {
        Header: 'Invoice ID',
        accessor: 'invoice_id'
      },
      {
        Header: 'Paid',
        accessor: 'paid',
        Cell: ({ row }: { row: Row }) => {
          const { values } = row;
          return (
            <Stack direction="row" spacing={1.5} alignItems="center">
              ${values.paid}
            </Stack>
          );
        }
      },
      {
        Header: 'Billing method',
        accessor: 'billing_method',
        disableFilters: true,
        className: 'cell-right',
        Cell: ({ row }: { row: Row }) => {
          const { values } = row;
          return (
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Typography variant="caption" color="textSecondary">
                <CreditCardOutlined /> {values.billing_method.card} ending in
              </Typography>
              <Typography variant="subtitle1" sx={{ marginLeft: '5px !important' }}>
                {values.billing_method.ending_in}
              </Typography>
            </Stack>
          );
        }
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <MainCard
      content={false}
      title="Billing Summary"
      secondary={
        <Button sx={{ '&:hover': { bgcolor: 'transparent !important' }, fontSize: '20px', padding: '0px', minWidth: 'unset' }}>
          <MoreOutlined style={{ color: '#8C8C8C' }} />
        </Button>
      }
    >
      <Divider />
      <Box py={'16px'} px={'24px'} display="flex" justifyContent="space-between">
        <Stack direction="row">
          <LogoIcon width={40} height={40} />

          <Box marginLeft="10px">
            <Typography variant="subtitle1">Extended Subscription</Typography>
            <Typography variant="caption" color="textSecondary">
              600 minutes
            </Typography>
          </Box>
        </Stack>

        <Box display="flex" flexDirection="column" alignItems="flex-end" gap="4px">
          <Typography variant="subtitle1" sx={{ whiteSpace: 'nowrap' }}>
            $49.99 / mo
          </Typography>
          <Typography
            variant="caption"
            color="#52C41A"
            sx={{ bgcolor: '#F6FFED', borderRadius: '4px', padding: '1px 8px', fontSize: '12px', lineHeight: '166%', whiteSpace: 'nowrap' }}
          >
            Active
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Divider />
      <Box display="flex" justifyContent="space-between" sx={{ flexWrap: 'wrap' }} py={'16px'} px={'24px'}>
        <Typography sx={{ whiteSpace: 'nowrap' }} color="#8C8C8C">
          Next renewal date:{' '}
          <Typography component="span" sx={{ color: 'black', whiteSpace: 'nowrap' }}>
            26 October 2023
          </Typography>
        </Typography>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Typography sx={{ whiteSpace: 'nowrap' }} variant="caption" color="textSecondary">
            <CreditCardOutlined /> Visa ending in
          </Typography>
          <Typography variant="subtitle1" sx={{ marginLeft: '5px !important', whiteSpace: 'nowrap' }}>
            5432
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <ReactTable columns={columns} data={invoiceListData} />
      <Divider />
      <Box sx={{ padding: ' 20px 16px' }}>
        <Button variant="outlined" color="secondary" sx={{ color: '#000', borderColor: '#D9D9D9' }} fullWidth>
          More Information
        </Button>
      </Box>
    </MainCard>
  );
};

export default BillingSummary;
