import { useEffect, useState } from 'react';
import { ReactComponent as France } from 'assets/france1.svg';
import { ComponentBox, MapWrapper } from './styles';

export function ZoomSection() {
  const [zoom, setZoom] = useState(1);
  const [isClicking, setIsClicking] = useState(false);

  console.log({ isClicking });

  window.onscroll = () => window.scrollTo(0, 0); // DISABLE SCROLL

  useEffect(() => {
    const handleClickStart = () => setIsClicking(true);
    const handleClickEnd = () => setIsClicking(false);

    const handleZoom = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        setZoom((prev) => prev - 0.3);
      } else {
        setZoom((prev) => prev + 0.3);
      }
    };

    document.addEventListener('mousedown', handleClickStart); // HANDLE CLICK
    document.addEventListener('mouseup', handleClickEnd); // HANDLE CLICK

    document.addEventListener('wheel', handleZoom); // HANDLE ZOOM

    return () => {
      document.removeEventListener('mousedown', handleClickStart); // HANDLE CLICK
      document.removeEventListener('mouseup', handleClickEnd); // HANDLE CLICK

      document.removeEventListener('wheel', handleZoom); // HANDLE ZOOM
    };
  }, []);

  return (
    <ComponentBox>
      <MapWrapper>
        <France style={{ transform: `scale(${zoom})` }} />
      </MapWrapper>
    </ComponentBox>
  );
}
