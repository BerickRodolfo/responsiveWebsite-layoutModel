import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { HomeObjTwo, HomeObjThree, HomeObjFour } from './Data';

const Products = () => {
  return (
    <>
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <Pricing />
      <InfoSection {...HomeObjFour} />
    </>
  )

}

export default Products;