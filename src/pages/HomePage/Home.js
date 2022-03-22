import React from 'react';
import { InfoSection } from '../../components';
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <InfoSection {...HomeObjFour} />
    </>
  )

}

export default Home;