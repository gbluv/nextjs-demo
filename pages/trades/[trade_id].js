import React from 'react';
import { useRouter } from 'next/router';


const Trade = () => {
  const router = useRouter();
  const {trade_id} = router.query;

  return (<h2>Trade: {trade_id} </h2>)
}

export default Trade;