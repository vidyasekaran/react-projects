import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const DataStrutures = () => {
  const item = ["Apple", "Banana", "Orange"];

  return (
    <div>
      {item.length === 0 ? (
        <p> No Items Yet</p>
      ) : (
        <ul>
          {item.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataStrutures;

/*
To define an empty list in React, you simply declare an empty array [].
const myList = [];

If you're going to add items later (e.g., through user input), 
define it with useState:

import { useState } from 'react';
const [items, setItems] = useState([]); // <-- empty list

Display a List of Strings

const DataStrutures = () => {
  const item = ["Apple", "Banana", "Orange"];

  return (
    <div>
      {item.length === 0 ? (
        <p> No Items Yet</p>
      ) : (
        <ul>
          {item.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


List of Objects

function UserList() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}


*/
