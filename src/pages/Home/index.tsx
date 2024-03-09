import React from 'react';
import SectionAbout from '../../components/SectionAbout';
import SectionSilde from '../../components/SectionSilde';
import SectionOriented from '../../components/SectionOriented';

export default function Home() {
  return (
    <div className='site__home'>
      <SectionSilde/>
      <SectionAbout/>
      <SectionOriented/>
    </div>
  )
}
