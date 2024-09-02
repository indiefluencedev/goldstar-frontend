import  { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorSmallRef = useRef(null);
  const cursorLargeRef = useRef(null);
  const isMovingRef = useRef(false); // Track if the cursor is moving

  useEffect(() => {
    let clientX = -100;
    let clientY = -100;
    let lastX = -100;
    let lastY = -100;
    let velocityX = 0;
    let velocityY = 0;
    let friction = 0.8; // Increased friction for smoother damping
    let stiffness = 0.07; // Lower stiffness for smooth following during movement
    let snapStiffness = 0.12; // Lower stiffness for a smoother snap effect
    let stopTimeout;

    const handleMouseMove = (event) => {
      clientX = event.clientX;
      clientY = event.clientY;

      isMovingRef.current = true;

      // Position the small cursor exactly at the mouse pointer tip
      if (cursorSmallRef.current) {
        const smallCursorSize = 8; // Size of the small cursor
        cursorSmallRef.current.style.left = `${clientX - smallCursorSize / 2}px`;
        cursorSmallRef.current.style.top = `${clientY - smallCursorSize / 2}px`;
      }

      // Clear any existing timeout if the cursor is moving
      clearTimeout(stopTimeout);

      // Set a timeout to detect when the cursor has stopped
      stopTimeout = setTimeout(() => {
        isMovingRef.current = false;
      }, 150); // 150ms after stopping, consider the cursor as stopped
    };

    const animate = () => {
      if (isMovingRef.current) {
        // Smooth following during movement
        velocityX += (clientX - lastX) * stiffness;
        velocityY += (clientY - lastY) * stiffness;
      } else {
        // Smooth snapping effect when the cursor has stopped
        velocityX += (clientX - lastX) * snapStiffness;
        velocityY += (clientY - lastY) * snapStiffness;
      }

      velocityX *= friction;
      velocityY *= friction;

      lastX += velocityX;
      lastY += velocityY;

      // Apply the new position to the large cursor
      if (cursorLargeRef.current) {
        const largeCursorSize = 40; // Size of the large cursor
        cursorLargeRef.current.style.left = `${lastX - largeCursorSize / 2}px`;
        cursorLargeRef.current.style.top = `${lastY - largeCursorSize / 2}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(stopTimeout);
    };
  }, []);

  return (
    <>
      <div ref={cursorSmallRef} className="cursor--small"></div>
      <div ref={cursorLargeRef} className="cursor--large"></div>
    </>
  );
};

export default CustomCursor;
