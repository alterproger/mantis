import { useMemo, Fragment, useRef } from 'react';

import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import {
  useExpanded,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
  Column,
  HeaderGroup,
  Row,
  Cell
} from 'react-table';
import { DateColumnFilter, renderFilterTypes } from '../utils/react-table';
import { HeaderSort } from './third-party/ReactTable';
import ScrollX from './ScrollX';

export interface InvoiceList {
  id: number;
  transaction_type: string;
  date: Date | string | number;
  invoice_id: string;
  paid: number;
  billing_method: {
    card: string;
    ending_in: number;
  };
}

interface Props {
  columns: Column[];
  data: InvoiceList[];
}

const ReactTable = ({ columns, data }: Props) => {
  const theme = useTheme();
  const defaultColumn = useMemo(() => ({ Filter: DateColumnFilter }), []);
  const filterTypes = useMemo(() => renderFilterTypes, []);
  const initialState = useMemo(
    () => ({
      filters: [{ id: 'status', value: '' }],
      hiddenColumns: ['avatar', 'email'],
      pageIndex: 0,
      pageSize: 5
    }),
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } = useTable(
    {
      columns,
      data,
      filterTypes,
      defaultColumn,
      initialState
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const componentRef: React.Ref<HTMLDivElement> = useRef(null);

  return (
    <>
      <Box ref={componentRef}>
        <ScrollX>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: HeaderGroup<{}>) => (
                    <TableCell {...column.getHeaderProps([{ className: column.className }])} sx={{ '&:after': { display: 'none' } }}>
                      <HeaderSort column={column} sort />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {page.map((row: Row, i: number) => {
                prepareRow(row);
                return (
                  <Fragment key={i}>
                    <TableRow
                      {...row.getRowProps()}
                      onClick={() => {
                        row.toggleRowSelected();
                      }}
                      sx={{
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit'
                      }}
                    >
                      {row.cells.map((cell: Cell) => (
                        <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                      ))}
                    </TableRow>
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </ScrollX>
      </Box>
    </>
  );
};

export default ReactTable;
