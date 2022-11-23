import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [text, setText] = useState("")
  const handleSubmit = () => {
    console.log(text)
  }
  return (
    <div>
      <label htmlFor='username'>Username</label>
      <input
        id='username'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='enter username'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
