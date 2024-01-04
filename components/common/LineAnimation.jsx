import React from 'react'

const LineAnimation = ({ children, width = "fit-content" }) => {
    return (
        <span className='relative inter-myself'>
            {children}
        </span>
    )
}

export default LineAnimation
