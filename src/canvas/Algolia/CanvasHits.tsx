import React from 'react';
import { ComponentProps } from '@uniformdev/canvas-react';
import { renderHits } from '@/canvas/Algolia/Hit';

const CanvasHits = (componentProps: ComponentProps) => {
  return <div className="hits">{renderHits(componentProps.component)}</div>;
};

export default CanvasHits;
