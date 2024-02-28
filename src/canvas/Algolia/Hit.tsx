import React from 'react';
import { Hits } from 'react-instantsearch-hooks-web';
import { ComponentInstance } from '@uniformdev/canvas';

enum HitTypes {
  Hit = 'algolia-hit',
}

export const renderHits = (component: ComponentInstance) => {
  const hitType = component?.slots?.hitComponent?.[0]?.type;
  switch (hitType) {
    case HitTypes.Hit:
      return <Hits hitComponent={Hit} />;
    default:
      return <Hits />;
  }
};

type HitComponent = {
  objectID: string;
  [name: string]: any;
};

const Hit = ({ hit }: { hit: HitComponent }) => {
  const { objectID = 'unknown', ...properties } = hit || {};

  return (
    <div>
      <h3>{properties.fields.headphoneName["en-US"]}</h3>
    </div>
  );
};

export default Hit;
