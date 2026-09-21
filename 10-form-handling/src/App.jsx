import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState(''); 


  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted",title);
    setTitle('');
  };

  return (
    <div className="app">
      <form className="user-form" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            id="name"
            name="name"
            value={title}
            placeholder="Enter your name"

            onChange={(e) => setTitle(e.target.value)}

          />
        </div>

        

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;