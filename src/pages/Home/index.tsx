import React from 'react';
import SectionAbout from '../../components/SectionAbout';
import SectionSilde from '../../components/SectionSilde';
import SectionOriented from '../../components/SectionOriented';
import SectionFuture from '../../components/SectionFuture';
import SectionProcess from '../../components/SectionProcess';
import SectionField from '../../components/SectionField';
import SectionProject from '../../components/SectionProject';

export default function Home() {
  return (
    <div className='site__home'>
      <SectionSilde/>
      <SectionAbout/>
      <SectionOriented/>
      <SectionFuture/>
      <SectionProcess/>
      <SectionField/>
      <SectionProject/>
    </div>
  )
}
