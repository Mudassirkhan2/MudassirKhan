"use client";
import { useEffect, useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
const Cursor = () => {
    const [cursorShow, setCursorShow] = useState(false);
    const [positions, setPositions] = useState([]);
    const [color, setColor] = useState('red');
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'indigo'];
    const cursorRef = useRef();

    const rand = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
    const selectRandomColor = (items) => {
        return items[rand(0, items.length - 1)]
    }

    //   Events when cursor moves and we set position
    const mouseMove = (e) => {
        setCursorShow(true);
        setPositions(prevPositions => [...prevPositions, { left: `${e.clientX}px`, top: `${e.clientY}px` }]);
        setTimeout(() => {
            setPositions(prevPositions => prevPositions.length > 1 ? prevPositions.slice(1) : []);
        }, 1000);
    };

    //   When cursor leave set postion to middle
    const mouseLeave = () => {
        setCursorShow(false);
        setPositions([]);
    };

    //   Mounting the event and demount
    useEffect(() => {
        document?.addEventListener('mousemove', mouseMove);
        document?.addEventListener('mouseleave', mouseLeave);

        return () => {
            document?.removeEventListener('mousemove', mouseMove);
            document?.removeEventListener('mouseleave', mouseLeave);
        };
    }, []);
    return (
        <>
            {positions.map((pos, index) => {
                const color = selectRandomColor(colors);
                console.log(color)
                return (
                    <FaStar ref={cursorRef}
                        className={`star text-base  
                        text-${color}-500
                        star
                        `}
                        key={index} style={{ top: pos.top, left: pos.left }} />
                );
            })}
        </>
    );
};

export default Cursor;
