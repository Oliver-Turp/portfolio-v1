import { useEffect, useRef } from "react";

export default function useMouseMove() {
  const imageRef = useRef();
  const yCap = 1.5;
  const xCap = 3;

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Get the viewport width
      const viewportWidth = window.innerWidth;

      // Only apply the movement effect if the viewport width is greater than 768px
      if (viewportWidth >= 650) {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        let posX = ((clientX - centerX) / centerX) * 100; // as a percentage of half the viewport width
        let posY = ((clientY - centerY) / centerY) * 100; // as a percentage of half the viewport height

        // Calculate the distance of the mouse from the center of the viewport
        const distance = Math.sqrt(
          Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
        );

        // Use the distance to calculate the scaling factor
        const scaleFactor = Math.pow(distance, 2);

        posX *= scaleFactor;
        posY *= scaleFactor;

        const cappedPosX = Math.min(Math.max(posX, xCap * -1), xCap);
        const cappedPosY = Math.min(Math.max(posY, yCap * -1), yCap);

        imageRef.current.style.transform = `translate(${cappedPosX}vw, ${cappedPosY}vh)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return imageRef;
}
