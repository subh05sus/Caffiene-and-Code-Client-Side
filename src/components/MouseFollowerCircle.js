import React, { useEffect, useState } from 'react';

const MouseFollowerCircle = () => {
    const [circleSize, setCircleSize] = useState({ width: 50, height: 50 });
    const [circlePosition, setCirclePosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
        const isMobile = () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };

        if (isMobile()) return;

        const circle = document.getElementById('circle');
        const circleWidth = circle.offsetWidth;
        const circleHeight = circle.offsetHeight;

        const updateCirclePosition = (x, y) => {
            setCirclePosition({ left: x - circleWidth / 2, top: y - circleHeight / 2 });
        };

        const enlargeCircle = () => {
            setCircleSize({ width: 100, height: 100 });
        };

        const resetCircleSize = () => {
            setCircleSize({ width: 50, height: 50 });
        };

        const handleMouseMove = (event) => {
            updateCirclePosition(event.clientX, event.clientY);
        };

        const handleTouchMove = (event) => {
            const touch = event.touches[0];
            updateCirclePosition(touch.clientX, touch.clientY);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleTouchMove);

        const links = document.querySelectorAll('a, button');

        links.forEach((link) => {
            link.addEventListener('mouseover', enlargeCircle);
            link.addEventListener('mouseleave', resetCircleSize);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);

            links.forEach((link) => {
                link.removeEventListener('mouseover', enlargeCircle);
                link.removeEventListener('mouseleave', resetCircleSize);
            });
        };
    }, []);

    return (
            <div
                id="circle"
                style={{
                    position: 'absolute',
                    width: `${circleSize.width}px`,
                    height: `${circleSize.height}px`,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    mixBlendMode: 'difference',
                    zIndex: 99999,
                    pointerEvents: 'none',
                    transition: 'all 0.12 ease',
                    left: `${circlePosition.left}px`,
                    top: `${circlePosition.top}px`,
                }}
            ></div>
    );
};

export default MouseFollowerCircle;
