"use client";
import { useEffect, useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
const Cursor = () => {
    const [cursorShow, setCursorShow] = useState(false);
    const [positions, setPositions] = useState([]);
    const [color, setColor] = useState('red');
    // ranbow colors
    const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8F00FF"];
    const cursorRef = useRef();
    const animations = ["fall-2", "fall-1", "fall-3", "fall-2", "fall-1", "fall-3", "fall-2", "fall-1", "fall-3"]

    //   Select random color from colors array
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
        }, 500);
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
                const animation = selectRandomColor(animations);
                const color = selectRandomColor(colors);
                return (
                    <div key={index} >
                        <FaStar ref={cursorRef}
                            className={`star text-base `}
                            style={{
                                color: color,
                                fontSize: '1rem',
                                top: pos.top, left: pos.left
                                ,
                                animation: `${animation} 1500ms  infinite`,
                                animationFillMode: 'forwards'
                            }} >
                        </FaStar>
                        <div ref={cursorRef} className='glow-point'
                            style={{
                                top: pos.top,
                                left: pos.left,
                            }}
                        >
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Cursor;
