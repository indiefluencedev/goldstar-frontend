import React, { useRef, useEffect } from 'react';
import './Tracker.css';

const Tracker = () => {
    const coords = useRef({ x: 0, y: 0 });
    const circlesRef = useRef([]);
    const colors = [
        '#ffffff',

        '#ffe700',
        '#ffcd00',
        '#ffb400',
        '#ff9900',
        '#ff7f16',
        '#ff9b30',
        '#ff9d36',
        '#ffa445',
        '#ffad59',
        '#ff7e00',
        '#ff5f00',
        '#ff3b00'
    ];
    
    
    

    useEffect(() => {
        circlesRef.current.forEach((circle, index) => {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors[index % colors.length];
        });

        const handleMouseMove = (e) => {
            coords.current.x = e.clientX;
            coords.current.y = e.clientY;
        };

        const animateCircles = () => {
            let x = coords.current.x;
            let y = coords.current.y;

            circlesRef.current.forEach((circle, index) => {
                circle.style.left = x - 8 + 'px';
                circle.style.top = y - 8 + 'px';

                circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

                circle.x = x;
                circle.y = y;

                const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
                x += (nextCircle.x - x) * 0.1;
                y += (nextCircle.y - y) * 0.1;
            });

            requestAnimationFrame(animateCircles);
        };

        document.addEventListener('mousemove', handleMouseMove);
        animateCircles();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [colors]);

    return (
        <div>
            {[...Array(400)].map((_, index) => (
                <div
                    key={index}
                    className="circle"
                    ref={(el) => (circlesRef.current[index] = el)}
                ></div>
            ))}
        </div>
    );
};

export default Tracker;
