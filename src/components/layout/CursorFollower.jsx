import { useEffect, useRef } from 'react';

const CursorFollower = () => {
  const follower1Ref = useRef(null);
  const follower2Ref = useRef(null);

  useEffect(() => {
    // Initialize mouse and followers positions
    let mouseX = 0, mouseY = 0;
    let follower1X = 0, follower1Y = 0;
    let follower2X = 0, follower2Y = 0;

    // Track the mouse position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Animation loop for smooth delayed movement
    const animateFollowers = () => {
      // Lerp for the first follower
      follower1X += (mouseX - follower1X) * 0.1; // Fast response
      follower1Y += (mouseY - follower1Y) * 0.1;

      // Lerp for the second follower with a greater delay
      follower2X += (mouseX - follower2X) * 0.05; // Slower response
      follower2Y += (mouseY - follower2Y) * 0.05;

      // Update positions
      if (follower1Ref.current) {
        follower1Ref.current.style.left = `${follower1X}px`;
        follower1Ref.current.style.top = `${follower1Y}px`;
      }

      if (follower2Ref.current) {
        follower2Ref.current.style.left = `${follower2X}px`;
        follower2Ref.current.style.top = `${follower2Y}px`;
      }

      // Repeat the animation
      requestAnimationFrame(animateFollowers);
    };

    // Start the animation
    const animationId = requestAnimationFrame(animateFollowers);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={follower1Ref} className="cursor-follower" id="follower1"></div>
      <div ref={follower2Ref} className="cursor-follower small" id="follower2"></div>
    </>
  );
};

export default CursorFollower;