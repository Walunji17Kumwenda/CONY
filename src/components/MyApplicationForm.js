//import React from "react";

import { React} from "react";

function MyApplicationForm() {
  

  
return (
  <div classname="App">
    <h1>Apply</h1>
    <fieldset>
      <form action="#" method="get">
        <label for="firstname">
          first name
        </label>
        <input type="text" name="firstname" id="firstname"/><br></br>
        
        <label for="lastname">
          last Name
        </label>
        <input
        type="text"
        name="lastname"
        id="lastname"/><br></br>
        
        <label for="male">
          male
        </label>
        <input
        type="radio"
        name="male"
        id="male"/><br></br>
        <label for="female">
          female
        </label>
        <input
        type="radio"
        name="female"
        id="female"/><br></br>
        </form>
        </fieldset>


  </div>
)
}
export default MyApplicationForm;
  

    