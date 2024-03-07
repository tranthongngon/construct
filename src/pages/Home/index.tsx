import React from 'react';
import BannerSlide from '../../components/BannerSilde';
import BannerAbout from '../../components/BannerAbout';

export default function Home() {
  return (
    <div className='site__home'>
      <BannerSlide/>
      <BannerAbout/>
    </div>
  )
}
