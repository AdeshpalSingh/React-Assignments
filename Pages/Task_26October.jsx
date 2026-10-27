import React, { useEffect, useState } from 'react'

const Task_26October = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    })
    return (
        <div>
            <h1> Product Filtering Application </h1>
            {
                products.map((p) => (
                    <div key={p} style={{ display: 'inline' }}>
                        <button style={{ padding: 10 }}>{p}</button>
                        <h1>{p.id}</h1>

                    </div>
                ))
            }
        </div>
    )
}
export default Task_26October
