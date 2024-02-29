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
  const url = window.location.href;
  const regex = /^https?:\/\/[^\/]+\/([a-z]{2}-[a-z]{2})\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+$/;
  const match = url.match(regex);
  let localeCode = 'en-US';

  if (match) {
      const middlePart = match[1];
      const parts = middlePart.split("-");
      const uppercasedMiddlePart = parts[0] + "-" + parts[1].toUpperCase();
     localeCode = uppercasedMiddlePart; 
  }
  return (
    <div>
      <a href={'/en-us/headphones/' + properties.fields.slug["en-US"]}><h3>{properties.fields.headphoneName[localeCode]}</h3></a>
    </div>
  );
};

export default Hit;
