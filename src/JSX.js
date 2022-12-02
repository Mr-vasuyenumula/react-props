 import React from 'react'
 function JSX(){
 	return(
         <div>
            <h1>today is friday</h1>
         </div>
 		)
 	return React.createElement(
         "div",
         {id:"one",className:"classone"},
         React.createElement("h1",null,"today is friday")
 		)
 }
 export default JSX