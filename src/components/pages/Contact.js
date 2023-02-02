import React from 'react';
import '../styles/main.css'

export default function Contact() {
  return (
    <div class="content">
      <h1> <span className='contactSpan'>Contact</span> Me</h1>

    <div class="d-flex flex-column justify-content-center">
      <div class="mb-3 row">

      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Name"/>

      </div>

      <div class="mb-3 row">

        <label for="exampleFormControlInput2" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

      </div>

      <div class="mb-3 row">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"  placeholder="Your Message"></textarea>
      </div>

      <div class="d-flex align-items-center justify-content-center text-center">
        <button class="mybtn text-decoration-none">Submit</button>
      </div>

    </div>

    </div>
  );
}
