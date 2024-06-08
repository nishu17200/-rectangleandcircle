import React, { useContext } from 'react';
import { PositionContext } from './PositionContext';

const Rectangle = () => {
    const { setPosition } = useContext(PositionContext);

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: 100,
                left: 50,
                width: 100,
                height: 50,
                backgroundColor: 'red',
                cursor: 'move',
            }}
            onMouseMove={handleMouseMove}
        />
    );
};

export default Rectangle;