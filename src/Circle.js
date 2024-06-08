import React, { useContext } from 'react';
import { PositionContext } from './PositionContext';

const Circle = () => {
    const { position } = useContext(PositionContext);

    const circleSize = Math.sqrt(Math.pow(position.x - 200, 2) + Math.pow(position.y - 200, 2));

    return (
        <div
            style={{
                position: 'absolute',
                top: 200,
                left: 200,
                width: circleSize,
                height: circleSize,
                borderRadius: '50%',
                backgroundColor: 'blue',
            }}
        />
    );
};

export default Circle;