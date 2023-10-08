import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    if (!e.target.value.split('').includes('0')) setValue(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(value);
        }}
      >
        <input value={value} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
