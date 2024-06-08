import { createContext, useState } from 'react';

const PositionContext = createContext();

const PositionProvider = ({ children }) => {
    const [position, setPosition] = useState({ x: 100, y: 100 });

    return (
        <PositionContext.Provider value={{ position, setPosition }}>
            {children}
        </PositionContext.Provider>
    );
};

export { PositionProvider, PositionContext };