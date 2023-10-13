import { InvoiceList } from '../components/ReactTable';

const invoiceListData: InvoiceList[] = [
  {
    id: 1,
    transaction_type: 'Subscription Renewal',
    date: '23 Sep 2023',
    invoice_id: 'RKTN83HD',
    paid: 49.99,
    billing_method: {
      card: 'Visa',
      ending_in: 5432
    }
  },
  {
    id: 2,
    transaction_type: '45 additional min',
    date: '18 Sep 2023',
    invoice_id: 'KDL12KOD',
    paid: 4.99,
    billing_method: {
      card: 'Visa',
      ending_in: 5432
    }
  },
  {
    id: 3,
    transaction_type: 'Subscription Renewal',
    date: '23 Aug 2023',
    invoice_id: 'DASKL1231',
    paid: 6.99,
    billing_method: {
      card: 'Visa',
      ending_in: 5432
    }
  },
  {
    id: 4,
    transaction_type: '30 additional min',
    date: '14 Sep 2023',
    invoice_id: 'KDL12KOD',
    paid: 3.99,
    billing_method: {
      card: 'Visa',
      ending_in: 5432
    }
  }
];

export default invoiceListData;
