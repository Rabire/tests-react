import { useEffect, useState } from 'react';
import { ReactComponent as France } from 'assets/france1.svg';
import { ComponentBox, MapWrapper } from './styles';

export function ZoomSection() {
  const [zoom, setZoom] = useState(1);

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
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);

  return (
    <ComponentBox>
      <MapWrapper>
        <France style={{ transform: `scale(${zoom})` }} />
      </MapWrapper>
    </ComponentBox>
  );
}
