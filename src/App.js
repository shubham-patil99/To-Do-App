import React from 'react';
import './App.css';

const App = () => {
  return(
    <>
      <h1>To-Do List </h1>
      <div class="content">
          <form class="add">
            <input type="text" name="add" placeholder="Enter TO-DO . . ."/>
              <div class="input-buttons">
                <a href="#0" class="add-todo"> 
                  Submit
                </a>
              </div>
          </form>

         <ul class="todos">
        <li></li>
     </ul>
    </div>
    </>
  );
};

export default App;
