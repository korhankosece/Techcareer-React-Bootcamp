import React, { memo } from 'react'

const ChildComponent = () => {
    console.log("child component render");
    return (
        <div>ChildComponent</div>
    )
}

export default memo(ChildComponent)