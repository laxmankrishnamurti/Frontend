import React from 'react'

function Image({ id }) {

    function onMouseOver(e) {
        e.target.width = "180"
    }

    function onMouseExit(e) {
        e.target.width = "160"
    }

    return (
        <div>
            <img className='transition-all duration-200 ease-in-out rounded-md cursor-pointer'
                src={`https://picsum.photos/id/${id}/160/90`} alt='picsumImage'
                onMouseLeave={onMouseExit}
                onMouseEnter={onMouseOver}
            />

        </div>
    )
}

export default Image