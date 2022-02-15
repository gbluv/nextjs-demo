import React from 'react';
import { useRouter } from 'next/router';


export default () => {
  const router = useRouter();
  const {asset_class,date} = router.query;
  console.log(router.query);

  return <div>Looking: {asset_class}: {date}</div>
}