import React, { useState } from 'react';

const Hook = () => {
    const [ isSpring, setIsSpring ] = useState(true);
    return {
        isSpring,
        setIsSpring
    }
}

export default Hook;
