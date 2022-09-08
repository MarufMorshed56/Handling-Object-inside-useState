//  Handling-Object-inside-useState
//  if React 'usestate' has object inside it as an initial value, then how to change/ update each value from of the object separately....  

import { useState } from "react";

// <!-- start of Jsx Function -->
const Function = () => { 

// <!-- setting up object in useState -->
 const [state, setState ] = useState({
    adult: 1,
    children : 0,
  })

// <!-- handling the update funcion of the useState -->
  const handleOptions = (name, action)=>{  
//     <!-- fucntion taking the inputs we have sent from below code-->
    setState((previousValue)=>{ 
//        <!-- taking the previous vlaue  -->
      return { 
//<!-- previous value open kortesi, tarpor amra notun value dicchi, but notun value condtion dependent, tarpor update kore return kortesi, & setState initial Object k Update kortese returned OBJECT diye   --> 
            ...previousValue , [name]:action ==="increase" ? state[name] + 1 : state[name] - 1,
//         <!-- condition deya hoise,ekhane [name] = adult/children, & action = increase/decrease
//         jodi increase hoy tahole state[name] = state[adult/children] er value update hobe   -->
      }})
  }

 return(
   <div className="stateDisplay" >
{/* //             <!-- now displaying the individual item of the Object --> */}
            <span className="stateItem">{`${state.adult} Adult . ${state.children} Children . ${state.room} Room`}
            </span> 
            <div className="Items">
{/* //             <!-- setting up onClick function to change the inital state of the individual item of the Object  -->
//             <!-- handleOptions is a function, & depending on the value of the input it will change it
//             it's taking two inputs, 
//             => 1st is which item of the object to change, here it is "adult 
//             => 2nd is  hwo to change that item i.e. either increase or decrease that items value 
//             --> */}
               <button className="option" onClick={()=>handleOptions('adult','decrease')} >-</button>
               {/* //                <!-- displaying an item from the Object  --> */}
               <span>{`${state.adult}`}</span>  
               <button className="option" onClick={()=>handleOptions('adult','increase')}>+</button> 
            </div>   
            <div className="Items">
            {/* <!-- setting up onClick function to change the inital state of the individual item of the Object  --> */}
               <button className="option" onClick={()=>handleOptions('children','decrease')} >-</button>
                {/* <!-- displaying an item from the Object  --> */}
               <span>{`${state.children}`}</span>
               <button className="option" onClick={()=>handleOptions('children','increase')}>+</button> 
            </div>     
                
   </div>                                                                                                   
 )
}

export default Function
