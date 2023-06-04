import React from 'react';

function NameList() {
  const names = ['John', 'Shreyas', 'Bob', 'Alice'];

  return (
    <div>
      <h2>List of Names</h2>
      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default NameList;