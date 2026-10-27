// Counter Application
// import React, { useState } from 'react'

// const Task_17October = () => {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <h1>Q1. Counter Application</h1>
//             <h2>Count : {count}</h2>

//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     )
// }
// export default Task_17October



// Show and Hide Password
// import React, { useState } from 'react'

// const Task_17October = () => {
//     const [password, setPassword] = useState(false)
//     return (
//         <div> <h1> Q2. SHow and Hide Password </h1> <br />
//             <input type={password ? 'text' : 'password'} placeholder='Enter Password' />
//             <br /><br />
//             <button onClick={() => setPassword(!password)}>Show Password</button>
//         </div>
//     )
// }

// export default Task_17October


// Q3. Light and Dark Mode
import React, { useState } from 'react'

const Task_17October = () => {
    const[theme, setTheme] = useState(false)
    return (
        <div style={{ backgroundColor: theme ? 'black' : 'white', color: theme ? 'white' : 'black'}}>
            <h1>Q3. Light and Dark Mode </h1>
            <button onClick={() => setTheme(!theme)} >Change</button>
        </div>
    )
}

export default Task_17October




// Login and Logout System
// import React, { useState } from 'react'

// const Task_17October = () => {
//     const [isLogin, setIsLogin] = useState(false)
//     return (
//         <div>
//             <h1> Q4. Login and Logout System </h1>

//             {isLogin ? (
//                 <div>
//                     <h2>Welcome User!</h2>

//                     <button onClick={() => setIsLogin(false)}>
//                         Logout
//                     </button>
//                 </div>
//             ) : (
//                 <button onClick={() => setIsLogin(true)}>
//                     Login
//                 </button>
//             )}
//         </div>
//     )
// }

// export default Task_17October

