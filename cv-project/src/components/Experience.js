import React from 'react';

function Experience({info}) {
  return (
    <div>
      <h3>Experience</h3>
      <ul>
        <li>Employer: {info[0].company}</li>
        <li>Position: {info[0].position}</li>
        <li>Main duties: {info[0].duties}</li>
        <li>Date started: {info[0].dateStarted} </li>
        <li>Date ended: {info[0].dateEnded}</li>
      </ul>
    </div>
  );
};

export default Experience;