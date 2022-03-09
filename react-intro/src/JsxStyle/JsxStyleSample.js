import React from 'react'
import './sample.css'

const JsxStyleSample = () => {

    const boxStyle = {
        width: 200,
        height: 200,
        backgroundColor: 'tomato'
    }

    return (
        <>
            <div className='sample'>JsxStyleSample</div>
            <div style={boxStyle}></div>
        </>
    )
}

export default JsxStyleSample