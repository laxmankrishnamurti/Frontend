import React, { useRef, useState } from 'react'

function Button({ value }) {
    const clickTimeout = useRef(null)
    const [click, setClick] = useState(0)

    function handleDoubleClick(e) {
        e.stopPropagation();
        setClick(0);
        clearTimeout(clickTimeout.current);
        window.alert("Double clicked");
    }

    function handleSingleClick(e) {
        e.stopPropagation()
        setClick((prev) => (prev + 1))

        clickTimeout.current = setTimeout(() => {
            if (click === 1) {
                console.log("Single clicked")
                setClick(1)
            }
        }, 250);

    }

    return (
        <div>
            <button
                onClick={handleSingleClick}
                onDoubleClick={handleDoubleClick}
                className='px-8 py-2 bg-pink-400 rounded-md'
            >{value}</button>
        </div>
    )
}

export default Button