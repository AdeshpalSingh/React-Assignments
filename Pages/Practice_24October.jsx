import React, { useEffect, useState } from 'react'

const Practice_24October = () => {
    const [count, setCount] = useState(0)
    const [recipe, setRecipes] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1> API Integration </h1>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}> Change </button>

            {
                recipe.map((r)=>(
                    <div key ={r.id}>
                        <h1>{r.name}</h1>
                    </div>
                ))
            }

        </div>
    )
}

export default Practice_24October
