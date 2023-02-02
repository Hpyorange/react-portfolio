import React from 'react';
import '../styles/main.css';
import Sw from './swiper';

export default function Home() {
  return (
    <div class="content">
      <div className='mb-5 text-center'>
        <h1 class="title">Hi, My name is <span>Jasper</span></h1>
        <h5 class='spanColor'>Welcome to my coding portfolio site</h5>
      </div>
      <Sw />
    </div>
  );
}
