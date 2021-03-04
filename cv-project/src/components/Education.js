import React from 'react';

function Education({info}) {
  return (
    <div>
      <h3>Education</h3>
      <ul>
        <li>Institution attended: {info.school}</li>
        <li>Major area of study: {info.major}</li>
        <li>You graduated, right? {info.graduated.toString()}</li>
      </ul>
    </div>
  );
};

export default Education;