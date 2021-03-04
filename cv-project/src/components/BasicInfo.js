import React from 'react';

function BasicInfo({info}) {
  return (
    <div>
    <h3>Basic Information</h3>
      <ul>
        <li>{info.name}</li>
        <li>{info.email}</li>
        <li>{info.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default BasicInfo;