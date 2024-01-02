"use client";
import { useEffect, useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
const Cursor = () => {
    const [cursorShow, setCursorShow] = useState(false);
    const [positions, setPositions] = useState([]);
    const [position, setPosition] = useState({ left: -16, top: -16 });
    const last = {
        starPosition: { x: 0, y: 0 },
        mousePosition: { x: 0, y: 0 },
    }
    // ranbow colors
    const colors = ["blue", "red", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime", "indigo", "teal", "maroon", "olive", "navy", "white", "gray", "black"];
    const cursorRef = useRef();
    const animations = ["fall-2", "fall-1", "fall-3", "fall-2", "fall-1", "fall-3", "fall-2", "fall-1", "fall-3"]
    //   Select random color from colors array
    const rand = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
    const selectRandomColor = (items) => {
        return items[rand(0, items.length - 1)]
    }
    //  Calculate distance between two points
    const calcDistance = (a, b) => {
        const diffX = b.x - a.x,
            diffY = b.y - a.y;
        return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    }

    //   Events when cursor moves and we set position
    const mouseMove = (e) => {
        setCursorShow(true);
        setPosition({ left: `${e.clientX}px`, top: `${e.clientY}px` });
        last.mousePosition = {
            x: e.clientX,
            y: e.clientY
        }
        if (calcDistance(last.starPosition, last.mousePosition) > 50) {
            setPositions(prevPositions => [...prevPositions, { left: `${last.mousePosition.x}px`, top: `${last.mousePosition.y}px` }]);
            last.starPosition = last.mousePosition;
            setTimeout(() => {
                setPositions(prevPositions => prevPositions.length > 1 ? prevPositions.slice(1) : []);
            }, 1000);
        }

    };

    //   When cursor leave set postion to middle
    const mouseLeave = () => {
        setCursorShow(false);
        setPositions([]);
        setPosition({ left: '50%', top: '50%' });
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
        <div ref={cursorRef} className='glow-point mix-blend-difference'
            style={{
                top: position.top,
                left: position.left,
                zIndex: 99999,
            }}
        >
            {positions.map((pos, index) => {
                const animation = selectRandomColor(animations);
                const color = selectRandomColor(colors);
                return (
                    <div key={index} >
                        <FaStar ref={cursorRef}
                            className={`star text-base `}
                            style={{
                                color: color,
                                fontSize: '1.2rem',
                                top: pos.top, left: pos.left,
                                animationName: `${animation}`,
                                animationDuration: '1500ms',
                                animationFillMode: 'forwards',
                                zIndex: 99999,
                            }} >
                        </FaStar>

                    </div>
                );
            })}
        </div>

    );
};

export default Cursor;
