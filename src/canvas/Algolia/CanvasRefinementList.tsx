import React from 'react';
import { RefinementList } from 'react-instantsearch-hooks-web';
import { ComponentProps } from '@uniformdev/canvas-react';
import ErrorPropertyCallout from '@/canvas/Algolia/ErrorPropertyCallout';

type CanvasRefinementListProps = {
  refinementListParams?: {
    refinementListProps?: {
      allowedIndex?: string;
      attribute: string;
      operator: 'and' | 'or';
      limit?: number;
      showMore?: boolean;
      showMoreLimit?: number;
      searchable?: boolean;
      searchablePlaceholder?: string;
      escapeFacetValues?: boolean;
    };
  };
};

function getAttributeDisplayName (attribute: string) {

  let result;
  switch (attribute) {
      case 'fields.productManufacturer.en-US':
          if (window.location.href.includes('/es-es'))
            result = 'Marca';
          else 
            result = 'Brand';
          break;
      case 'fields.features.es-ES':
          result = 'Características';
          break;
      case 'fields.features.en-US':
         result = 'Features';
         break;
      case 'fields.heaphoneType.es-ES':
          result = 'Tipo de auriculares.';
          break;
      case 'fields.heaphoneType.en-US':
          result = 'Headphone Type';
          break;
      default:  
          result = 'Unknown';
  }
  return result;

}

const CanvasRefinementList = ({ refinementListParams }: ComponentProps<CanvasRefinementListProps>) => {
  const { refinementListProps } = refinementListParams || {};

  if (!refinementListProps?.attribute) {
    return <ErrorPropertyCallout title="Property 'attribute' was not defined for RefinementList component." />;
  }

  let attribute = refinementListProps?.attribute;

  let attributeDisplay = getAttributeDisplayName(attribute);

  const { allowedIndex, ...props } = refinementListProps;

  return (
    <div className="refinementList">
      <span>
        <code>{attributeDisplay}</code>
      </span>
      <RefinementList {...props} />
    </div>
  );
};

export default CanvasRefinementList;
