import { useEffect, useState } from 'react';
import { ReactComponent as France } from 'assets/france1.svg';
import { ComponentBox, MapWrapper } from './styles';

export function ZoomSection() {
  const [zoom, setZoom] = useState(1);
  const [isClicking, setIsClicking] = useState(false);

  console.log({ isClicking });

  /* HANDLE ZOOM */
  const onZoom = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setZoom((prev) => prev - 0.3);
    } else {
      setZoom((prev) => prev + 0.3);
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', onZoom);

    return () => {
      document.removeEventListener('wheel', onZoom);
    };
  }, []);

  /* DISABLE SCROLL */
  window.onscroll = () => window.scrollTo(0, 0);

  /* HANDLE MOVE */
  useEffect(() => {
    const handleClickStart = () => setIsClicking(true);
    const handleClickEnd = () => setIsClicking(false);

    document.addEventListener('mousedown', handleClickStart);
    document.addEventListener('mouseup', handleClickEnd);

    return () => {
      document.removeEventListener('mousedown', handleClickStart);
      document.removeEventListener('mouseup', handleClickEnd);
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
