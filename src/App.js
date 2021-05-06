import React, { useState } from 'react';
import './App.css';





// const  App = () => {

//   const [count, setCount] = useState(0);

//   return (
  
//     <div className="App">
//         <div> 
//           <h1> Count : { count } </h1>
//           <button onClick={() => setCount(count+1)}>+1</button>
//           <button onClick={() => setCount(count-1)}>-1</button>
//           <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     </div>
//   );
// }

// export default App;

const details = {
  title : "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
}

const App = () => {
  return(
    <div>
      <h1>{details.title}</h1>
      {details.subtitle && <p>{details.subtitle}</p>}
      <p>{ details.options.length > 0 ? "You have options" : "No options" }</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
  );
}

export default App;