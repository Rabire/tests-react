import React, { useState, useRef, WheelEvent } from 'react';
import { ReactComponent as France } from 'assets/france1.svg';
import { ComponentBox, MapWrapper } from './styles';

export function ZoomSection() {
  const wrapper = useRef<HTMLDivElement>(null);

  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const [isClicking, setIsClicking] = useState(false);
  const [isHover, setIsHover] = useState(false);

  window.onscroll = () => isHover && window.scrollTo(0, 0); // DISABLE SCROLL TODO: find another way

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isClicking) return;

    setPosition((prev) => {
      const newX = prev[0] + e.movementX / 5;
      const newY = prev[1] + e.movementY / 5;
      return [newX, newY];
    });
  };

  const handleZoom = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) return setZoom((prev) => prev - 0.1);
    return setZoom((prev) => prev + 0.1);
  };

  return (
    <ComponentBox>
      <MapWrapper
        ref={wrapper}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseDown={() => setIsClicking(true)}
        onMouseUp={() => setIsClicking(false)}
        onMouseMove={handleMove}
        onWheel={handleZoom}>
        <France
          style={{ transform: `scale(${zoom}) translate(${position[0]}px, ${position[1]}px)` }}
        />
      </MapWrapper>
    </ComponentBox>
  );
}
