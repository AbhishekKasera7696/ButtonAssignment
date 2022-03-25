import React from 'react';

import {Button} from "./Components/Button.jsx";
 



function App() {

 
 

  //  const [count, setCount] = React.useState(0);

  //  const [theme,setTheme] = React.useState("dark");


  return (
    <div >
      {/* <h1>{count}</h1>
      <Button  theme={theme} onClick={() => setCount(count + 1)}>Inc</Button>
      <Button  theme={theme}  onClick={() => setCount(count - 1)}>Dec</Button> */}
      
     
         <Button  border={"1px solid #1890FF"} color={"white"} backgroundColor={"#1890FF"}  type="primary">Primary Button</Button>
     
    
        <Button border={"1px solid #1890FF"} background={"white"} color={"#1890FF"}>Default Button</Button>
     
       <Button border={"1px dashed #1890FF"} backgroundColor={"white"}  type="dashed">Dashed Button</Button>
       <br />
       <Button border={"none"} backgroundColor={"white"} type="text">Text Button</Button>
       <Button color={"blue"} border={"none"} backgroundColor={"white"} type="link">Link Button</Button>
      
      {/* document.getElementById('container'), */}




      <br />
      <br />
    

      {/* <button onClick ={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button> */}
    </div>
  );
}

export default App;
