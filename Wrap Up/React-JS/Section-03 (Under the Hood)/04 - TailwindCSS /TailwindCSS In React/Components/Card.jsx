import React from 'react'
import { useState } from 'react'

function Card(props) {
    let [count, setCount] = useState(0);

    function add() {
        count += 1;
        setCount(count);
    }

    function sub() {
        count -= 1;
        setCount(count);
    }

    return (
        <>
            <div>
                <img src='../publi/vite.svg' />
                <p>Hello, This is Laxman</p>
                <h1>Count : {count}</h1>
                <button className='bg-red-300' onClick={add}>{props.btnText}</button>
                <br />
                <button className='bg-red-300' onClick={sub}>{props.btnText}</button>
            </div>
        </>
    )
}

export default Card;