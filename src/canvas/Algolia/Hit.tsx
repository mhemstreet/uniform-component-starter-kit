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
  const maxLength = 100
  let localeCode = 'en-US';

  if (match) {
      const middlePart = match[1];
      const parts = middlePart.split("-");
      const uppercasedMiddlePart = parts[0] + "-" + parts[1].toUpperCase();
     localeCode = uppercasedMiddlePart; 
  }
  let description = properties.fields.description[localeCode]

  if (description.length > maxLength) {
    const lastSpaceIndex = description.lastIndexOf(' ', maxLength - 4); // Leave room for '...'
    if (lastSpaceIndex !== -1) {
      description = description.substr(0, lastSpaceIndex) + '...';
    } else {
      description = description.substr(0, maxLength - 3) + '...';
    }
  }

  return (
    <div>
      <a href={'/' + localeCode.toLowerCase() + '/headphones/' + properties.fields.slug['en-US']}><h3><strong>{properties.fields.headphoneName[localeCode]}</strong></h3></a>
      <p>{description}</p>
    </div>
  );
};

export default Hit;
