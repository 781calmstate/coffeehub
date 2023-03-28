import React from 'react';
import cl from '../styles/PostIdPage.module.css';

const CommsItem = ({ coms }) => {
  return (
    <div>
      <h1 className={cl.title}>Comments:</h1>
      <div>
        {coms.map((comm) => (
          <div className={cl.comm_body} key={comm.id}>
            <h3 className={cl.comm_title}>{comm.email}</h3>
            <div className={cl.comm_text}>{comm.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommsItem;
