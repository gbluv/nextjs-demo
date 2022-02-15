import React from 'react';
import axios from 'axios';
import _ from 'lodash';


export default ({ user }) => <>
  {user && <>
      <div>{user.name.first} {user.name.last}</div>
      <div>
        <img src={user.picture.medium} />
      </div>
    </>
  }

</>;

export const getStaticProps = async (context) => {
  const response = await axios.get('https://randomuser.me/api/')
  const user = _.get(response,"data.results[0]");
  console.log("---- getting employee of the month ",user);
  return {
      props: {
        user
      }
  }
}


