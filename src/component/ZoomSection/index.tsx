import { useEffect, useState, useRef } from 'react';
import { ReactComponent as France } from 'assets/france1.svg';
import { ComponentBox, MapWrapper } from './styles';

export function ZoomSection() {
  const wrapper = useRef<HTMLDivElement>(null);

  const [zoom, setZoom] = useState(1);
  const [isClicking, setIsClicking] = useState(false);

  console.log({ isClicking });

  window.onscroll = () => window.scrollTo(0, 0); // DISABLE SCROLL

  useEffect(() => {
    const handleClickStart = () => setIsClicking(true);
    const handleClickEnd = () => setIsClicking(false);

    const handleZoom = (e: WheelEvent) => {
      if (e.deltaY > 0) return setZoom((prev) => prev - 0.1);
      return setZoom((prev) => prev + 0.1);
    };

    if (wrapper.current) {
      wrapper.current.addEventListener('mousedown', handleClickStart); // HANDLE CLICK
      wrapper.current.addEventListener('mouseup', handleClickEnd); // HANDLE CLICK

      wrapper.current.addEventListener('wheel', handleZoom); // HANDLE ZOOM
    }

    return () => {
      wrapper?.current?.removeEventListener('mousedown', handleClickStart); // HANDLE CLICK
      wrapper?.current?.removeEventListener('mouseup', handleClickEnd); // HANDLE CLICK

      document.removeEventListener('wheel', handleZoom); // HANDLE ZOOM
    };
  }, []);

  return (
    <ComponentBox>
      <MapWrapper ref={wrapper}>
        <France style={{ transform: `scale(${zoom})` }} />
      </MapWrapper>
    </ComponentBox>
  );
}
