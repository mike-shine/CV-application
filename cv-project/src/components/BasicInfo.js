import React from 'react';

function BasicInfo({info}) {
  return (
    <div>
    <h3>Basic Information</h3>
      <ul>
        <li>Hello, my name is {info.name}</li>
        <li>My email address is {info.email}</li>
        <li>My phone number is {info.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default BasicInfo;