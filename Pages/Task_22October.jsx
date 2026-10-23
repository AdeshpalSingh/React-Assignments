// Q1.
// import React from 'react'
// import { useState } from 'react'

// const Task_22October = () => {
//     const [Login, setLogin] = useState(true)
//     return (
//         <div>
//             {Login ? (
//                 <div>
//                     <h1> Login Status </h1>
//                     <button onClick={() => setLogin(!Login)}>Login</button>
//                 </div>) :
//                 (<div>
//                     <h1> Welcome User! </h1>
//                     <button onClick={()=> setLogin(!Login)}>Welcome </button>
//                 </div>)}
//         </div>
//     )
// }
// export default Task_22October



// Q2. 
// import React, { useState } from 'react'

// const Task_22October = () => {
//     const [visible, setVisible] = useState(true)
//     return (
//         <div>
//             {visible ? (
//                 <div>
//                     <h1> Show </h1>
//                     <h2> Hello, React! </h2>
//                     <button onClick={() => setVisible(!visible)}>Hide</button>
//                 </div>) :
//                 (<div>
//                     <h1> Hide </h1>
//                     <button onClick={()=> setVisible(!visible)}>Show</button>
//                 </div>)}
//         </div>
//     );
// };
// export default Task_22October



// Q3. Create a React component that stores a student's marks. 
// If marks are 40 or above, display **"Pass"**; otherwise, display **"Fail"*
// import React, { useState } from 'react'

// const Task_22October = () => {
//     const [marks, setMarks] = useState(87)
//     return (
//         <div>
//             <h1> Student Result </h1>
//             {marks >= 40 ? (
//                 "Pass"
//             ) : (
//                 "Fail"
//             )}
//             <button onClick={() => setMarks(!marks)}>Result</button>
//         </div>
//     )
// }
// export default Task_22October


// Q4.
// import React, { useState } from 'react'

// const Task_22October = () => {
//     const [loading, setLoading] = useState(true)
//     return (
//         <div>
//             {loading ? (
//                 <div><h1>Loading</h1></div>
//             ) : (
//                 <div><h1> Successful Loaded</h1></div>
//             )}
//             <button onClick={()=>setLoading(!loading)}>Change</button>
//         </div>
//     )
// }

// export default Task_22October



// Q5. Display Student Names (5 Marks)**
// Create an array containing five student names.
// Use the `map()` method to display all names in an unordered list.
// import React from 'react'

// const Task_22October = () => {
//     const names = ["Adesh", "Gurjasman", "Ishan", "Karan", "Rahul"];
//     return (
//         <div>
//             <h1> Student Names </h1>
//             <ul>
//                 {
//                 names.map((s) => (
//                     <ul>
//                         <li>{s}</li>
//                     </ul>
//                 ))
//             }
//             </ul>
//         </div>
//     )
// }
// export default Task_22October


// Q6.
// import React from 'react'

// const Task_22October = () => {
//     const products = [
//         {
//             id: 1,
//             name: "Mobile",
//             price: 20000
//         },
//         {
//             id: 2,
//             name: "Laptop",
//             price: 70000
//         },
//         {
//             id: 3,
//             name:"Tab",
//             price: 20000
//         },
//         {
//             id:4,
//             name:"Mouse",
//             price: 2000
//         },
//         {
//             id:5,
//             name:"Keyboard",
//             price:4000
//         }]
//     return (
//         <div>
//             {
//                 products.map((p)=>(
//                     <div>
//                         <h2>{p.name}</h2>
//                         <h2>{p.price}</h2>
//                     </div>

//                 ))
//             }
//         </div>
//     )
// }
// export default Task_22October


// Q7.
// import React from 'react'
// const Task_22October = () => {
//     const employee = [
//         {
//             id: 1,
//             name: "Adesh",
//             department: "IT"
//         },
//         {
//             id: 2,
//             name: "Gurjasman",
//             department: "HR"
//         },
//         {
//             id: 3,
//             name:"Ishan",
//             department: "Sales"
//         },
//         {
//             id:4,
//             name:"Karan",
//             department: "IT"
//         },
//         {
//             id:5,
//             name:"Rahul",
//             department:"Finance"
//         }]
//     return (
//         <div>
//             {
//                 employee.map((p)=>(
//                     <div>
//                         <h2>{p.id}</h2>
//                         <h2>{p.name}</h2>
//                         <h2>{p.department}</h2>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }
// export default Task_22October


//Q8. 
// import React from 'react'

// const Task_22October = () => {
//     const students = ["Adeshpal", "Gurjasman", "Ishan", "Karan", "Rahul"]
//     return (
//         <div>
//             <h2> Student List </h2>
//             {
//                 students>0 ?(
//                     <div></div>
//                 )
//             }

//         </div>
//     )
// }

// export default Task_22October







