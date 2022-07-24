import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data/invoices';

function Invoice() {
  const navigate = useNavigate();
  const location = useLocation();
  const { invoiceId } = useParams();
  const { name, number, amount, due } = getInvoice(parseInt(invoiceId));
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total due: {amount}</h2>
      <p>
        {' '}
        {name} : {number}
      </p>
      <p> Due Date: {due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(number);
            navigate('/invoices' + location.search);
          }}
        >
          {' '}
          Delete
        </button>
      </p>
    </main>
  );
}

export default Invoice;
