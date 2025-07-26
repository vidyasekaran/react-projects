import React, { useState } from "react";

function SimpleList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function addItem() {
    if (input === "") return;
    setList([...list, input]);
    setInput("");
  }

  const removeItem = () => {
    if (list.includes(input)) {
      // Remove the item
      const updatedList = list.filter((item) => item != input);
      setList(updatedList);
    }
    setInput("");
  };

  const editItem =()=>{
    
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>
      <button onClick={removeItem}>Remove</button>

      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleList;

/*
Take user input → Add it to a list → Show the list on screen

Step 1: Setup Two States

const [input, setInput] = useState('');
const [list, setList] = useState([]);

input: stores the current text the user types in the box.

list: stores all the items added by the user (an array).

Step 2: Text Input Field

<input 
  value={input} 
  onChange={(e) => setInput(e.target.value)} 
  placeholder="Enter item"
/>

value={input}:  binds the input field to the input state.
onChange:       updates input as user types. 

For example: User types "Apple" → setInput("Apple") → input box shows "Apple"

Step 3: Add Button

<button onClick={addItem}>Add</button>
When clicked, this triggers the addItem() function.

Step 4: Add Item Function

function addItem() {
  if (input === '') return; // prevent empty item
  setList([...list, input]); // add new item to list
  setInput(''); // clear the input field
}

What happens here:

Checks if input is not empty
Adds the current input to the list
...list spreads all existing items
[...list, input] creates a new array with the new item added
Clears the input box

Step 5: Display the List
jsx
Copy
Edit
<ul>
  {list.map((item, i) => <li key={i}>{item}</li>)}
</ul>
list.map(...) loops over each item in the array

Each item is shown inside an <li> (list item)

key={i} helps React identify each item uniquely

✅ Final Output
When you:

Type "Apple" → Click Add → "Apple" shows up in the list

Type "Banana" → Click Add → "Apple", "Banana" shows up

And so on...

===

setList([...list, input]); --> Explained below..
Here’s a **simple visual diagram** to help you understand:
---

### 🎯 Scenario:

You typed `"Mango"` into the input field
Your current list is: `["Apple", "Banana"]`

---

### Before `setList([...list, input])`

```
list (existing items)     input (new item)
┌────────┐                 ┌───────┐
│ Apple  │                 │ Mango │
│ Banana │                 └───────┘
└────────┘
```

---

### Operation: `[...list, input]`

We "spread" the list and add the input:

```
[...list, input]  becomes  ["Apple", "Banana", "Mango"]
```

Think of it as combining:

```
[ Apple, Banana ]  +  Mango  →  [ Apple, Banana, Mango ]
```

---

### After `setList(...)`

```jsx
setList(["Apple", "Banana", "Mango"]);
```

Now `list` is updated like this:

```
list
┌────────┐
│ Apple  │
│ Banana │
│ Mango  │
└────────┘
```

React sees that the list **has changed**, and updates the screen to show all 3 items.

---
Would you like me to generate an image of this as a diagram (boxes and arrows)?

*/
/*

Check iteam and Remove from List

const removeItem = () => {
    if (list.includes(input)) {
      const updatedList = list.filter((item) => item != input);
      setList(updatedList);
    }
    setInput("");
  };

  How it works:

list.includes(input): Checks if the item exists.

list.filter(item => item !== input): Creates a new list without the input.

setList(...): Updates the list.

setInput(''): Clears the input after removal.

*/
