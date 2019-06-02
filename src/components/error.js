import React from 'react';

const Error = ({ text }) =>
  <div className="mt-5">
    <div className="container text-center">
      <h2>Error :(</h2>
      {text}
    </div>
  </div>


export default Error;
