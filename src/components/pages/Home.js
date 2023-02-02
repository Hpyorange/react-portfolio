import React from 'react';
import '../styles/main.css';
import mySwiper from './swiper';

export default function Home() {
  return (
    <div class="content">
      <h1 class="title">Hi, My name is <span>Jasper</span></h1>
      <h4 class='spanColor'>Welcome to my portfolio site</h4>
      <mySwiper/>
    </div>
  );
}
