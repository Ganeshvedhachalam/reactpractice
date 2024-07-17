import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import List from "./components/Listgro";

function App() {
  const items = ["ganesh", "raju", "mango"];
 const[isAlert ,setAlert]= useState(false)
 const heading="names of fam"
 const handleonselect=(item)=>{
  console.log(item)
 }
  return (
    <div className="App">
      {isAlert &&<Alert children="hii da" onclose={()=>{setAlert(false)}}>
      helloo world
    </Alert>}
    
    <button onClick={()=>{setAlert(true)}} className="btn btn-primary" > My button</button>


<List items={items} heading={heading} onselect={handleonselect}/>
    </div>
  );
}

export default App;
