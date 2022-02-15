import React from 'react';
import { useRouter } from 'next/router';


export default () => {
    const router = useRouter();
    const { query: {any = []} = {}} = router;
    return any.map((part,i) =><div key={i}>{part}</div>)
}