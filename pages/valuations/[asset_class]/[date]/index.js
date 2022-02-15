import React from 'react';
import { useRouter } from 'next/router';


export default () => {
  const router = useRouter();
  const {asset_class,date} = router.query;
  console.log(router.query);

  return <div>Getting Data For {asset_class} on {date}</div>
}