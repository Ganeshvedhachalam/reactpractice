import { useState } from "react";
function List ({items,heading,onselect 
}){
    const [selindex, setselindex] = useState(-1)
// const items = ["ganesh", "raju", "mango"];

// const  handleclick=()=>{
// }

 return(<>
<div>
   <h1>{heading}</h1>
<ul className="list-group">
        {/* <li class="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li> */}
        {items.map((item, index) =>(
        
          <li
            key={item}
            className={
              selindex === index ? "list-group-item active " : "list-group-item"
            }
            onClick={() =>{setselindex(index);
              onselect(item);}

            }                      
          >
            {item}
          </li>
))}
      </ul>
      </div>
 </>)
}
 export default List;