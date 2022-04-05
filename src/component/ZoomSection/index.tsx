import { useEffect, useState, useRef } from 'react';
import { ReactComponent as France } from 'assets/france1.svg';
import { ComponentBox, MapWrapper } from './styles';

export function ZoomSection() {
  const wrapper = useRef<HTMLDivElement>(null);

  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const [isClicking, setIsClicking] = useState(false);
  const [isHover, setIsHover] = useState(false);

  window.onscroll = () => isHover && window.scrollTo(0, 0); // DISABLE SCROLL

  useEffect(() => {
    const handleClickStart = () => setIsClicking(true);
    const handleClickEnd = () => setIsClicking(false);

    const handleZoom = (e: WheelEvent) => {
      if (e.deltaY > 0) return setZoom((prev) => prev - 0.1);
      return setZoom((prev) => prev + 0.1);
    };

    const handleMove = (e: MouseEvent) => {
      if (!isClicking) return;

      setPosition((prev) => {
        const newX = prev[0] + e.movementX / 5;
        const newY = prev[1] + e.movementY / 5;
        return [newX, newY];
      });
    };

    wrapper?.current?.addEventListener('mousedown', handleClickStart); // HANDLE CLICK
    wrapper?.current?.addEventListener('mouseup', handleClickEnd); // HANDLE CLICK
    wrapper?.current?.addEventListener('mousemove', handleMove); // HANDLE MOVE
    wrapper?.current?.addEventListener('wheel', handleZoom); // HANDLE ZOOM

    return () => {
      wrapper?.current?.removeEventListener('mousedown', handleClickStart); // HANDLE CLICK
      wrapper?.current?.removeEventListener('mouseup', handleClickEnd); // HANDLE CLICK
      wrapper?.current?.removeEventListener('mousemove', handleMove); // HANDLE MOVE
      wrapper?.current?.removeEventListener('wheel', handleZoom); // HANDLE ZOOM
    };
  }, [isClicking]);

  return (
    <ComponentBox>
      <MapWrapper
        ref={wrapper}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <France
          style={{ transform: `scale(${zoom}) translate(${position[0]}px, ${position[1]}px)` }}
        />
      </MapWrapper>
    </ComponentBox>
  );
}
