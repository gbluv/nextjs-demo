import React from 'react';
import axios from 'axios';


export default ({id,name}) => <div>
  <div>id: {id}</div>
  <div>name: {name}</div>
</div>


export const getServerSideProps = async (context = {}) => {
  const { id: queryId } = context.query;
  const response = await axios.post('http://localhost:3000/api/derivatives', {
    id: queryId
  })
  console.log("----- response ", response.data);
  const { id, name } = response.data;

  return ({ props: { id, name } })
}