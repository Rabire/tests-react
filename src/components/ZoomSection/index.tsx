/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useRef, WheelEvent } from 'react';
import { ReactComponent as France } from 'assets/france1.svg';
import { exportAsImage } from 'utils/exportAsImage';
import { ComponentBox, MapWrapper } from './styles';

export function ZoomSection() {
  const wrapper = useRef<HTMLDivElement>(null);

  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const [isClicking, setIsClicking] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // console.log({ zoom, position });

  const resetParams = () => {
    setZoom(1);
    setPosition([0, 0]);
  };

  const zoomOnRhone = () => {
    setZoom(3.9);
    setPosition([-110.6, -44.6]);
  };

  const zoomOnParis = () => {
    setZoom(6.2);
    setPosition([6.4, 141.4]);
  };

  window.onscroll = () => isHover && window.scrollTo(0, 0); // DISABLE SCROLL TODO: find another way

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isClicking) return;

    setPosition((prev) => {
      const newX = prev[0] + e.movementX; // / 2;
      const newY = prev[1] + e.movementY; // / 2;
      return [newX, newY];
    });
  };

  const handleZoom = (e: WheelEvent<HTMLDivElement>) => {
    if (zoom < 1) return setZoom(1);

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
        onWheel={handleZoom}
      >
        <France
          style={{
            transform: `scale(${zoom}) translate(${position[0]}px, ${position[1]}px)`,
            transition: isClicking ? 'none' : 'transform 300ms ease-in-out'
          }}
        />
      </MapWrapper>
      <button type="button" onClick={() => exportAsImage(wrapper.current!, 'test')}>
        DOWNLOAD
      </button>
      <button type="button" onClick={resetParams}>
        RESET
      </button>

      {/* WE CAN MAP IT */}
      <button type="button" onClick={zoomOnRhone}>
        Rhone
      </button>
      <button type="button" onClick={zoomOnParis}>
        Paris
      </button>
    </ComponentBox>
  );
}
