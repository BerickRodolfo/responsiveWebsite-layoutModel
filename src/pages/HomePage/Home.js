import React from 'react'
import { InfoSection } from '../../components/index'
import { HomeObjOne } from './Data'

const Home = () => {
  return (
    <InfoSection {...HomeObjOne} />
  )
}

export default Home