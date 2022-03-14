import React, { Component } from 'react';
import './home.css';
import Image from './image.js'

const textArray = ['Game night?', 'Late night at office?', 'Hungry?', 'Unexpected guests?', 'Cooking gone wrong?', 'Movie marathon?',];
class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }
  componentDidUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
      <div class="content">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div class="hero">
        <div class="jumbo1">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="-1.5 -1.1 2501.5 730" width="2500" height="730">
            <path d="M246.7 728.9c-.5-.3-1-.8-1.5-1.3-8.8-10.9-63-79-118.2-166.4-16.6-27.8-27.3-49.6-25.3-55.2 5.4-14.6 101.7-22.6 131.4-9.4 9 4 8.8 9.3 8.8 12.4 0 13.4-.7 49.2-.7 49.2 0 7.4 6 13.4 13.4 13.4s13.4-6 13.4-13.5l-.1-89.4c0-7.8-8.4-9.7-10-10-15.5-.1-46.9-.2-80.7-.2-74.5 0-91.1 3.1-103.8-5.2C45.9 435.5 1.1 314.3 0 246.1-1.5 149.9 55.4 66.6 135.4 25.3 168.8 8.4 206.6-1.1 246.5-1.1c126.7 0 231 95.9 244.9 219.3v.3c2.5 29.8-161.4 36.2-193.8 27.5-5-1.3-6.2-6.4-6.2-8.6 0-22.7-.2-86.5-.2-86.5 0-7.4-6-13.4-13.4-13.4s-13.4 6-13.4 13.5l.3 117.6c.2 7.4 6.4 9.4 8.1 9.7h101.7c54.3 0 77.1 6.3 92.2 17.9 10.1 7.7 14 22.5 10.6 41.7C446.9 508.5 254 720 246.7 728.9zm523-398.5c48.7 20.9 78.8 44.1 78.8 95.1 0 52-39.3 85.6-100.1 85.6-49.3 0-88.8-22.4-108.5-61.4l-3.2-6.3 57.9-33.7 3.8 6.2c13 21.4 27.6 30.5 48.8 30.5 18.2 0 30.5-8.1 30.5-20.2 0-13.4-8.9-18.4-36.3-30.4l-13.9-6c-37.2-15.9-71.6-38-71.6-91.5 0-48.1 36.7-81.6 89.3-81.6 39.8 0 67.2 15.5 86 48.7l3.5 6.2-56.1 36.2-3.9-6.9c-9.4-16.8-18.2-20.2-29.4-20.2-11.7 0-19.3 6.5-19.3 16.6 0 11.6 5.6 16.7 29.9 27.2zm410.1 9.8l40.9-114.4h70.2l-104 290h-15.6L1108.2 380c-2.9-6.2-6-13.9-8.6-21-2.7 7.1-5.8 14.8-8.7 21.1l-65.6 135.8h-15.5l-105.7-290h75l41.3 114.4c2.6 7.3 5.3 16.2 7.7 24.4 2.8-8.5 6.2-17.7 9.7-25.1l54.3-116.1h15l55.1 116.1c3.5 7.4 6.9 16.6 9.7 25.1 2.5-8.3 5.3-17.2 7.9-24.5zm192.9 167.3V219.9h70.8v287.6zm303.1-96.7v-64.3h131.5v128.9l-2.7 2.2c-15 12.4-54.9 33.4-109 33.4-91.2 0-154.8-60.6-154.8-147.4 0-85.2 61.4-147 146.1-147 46.5 0 80.7 13.2 104.3 40.2l4.6 5.3-48.3 48-5.2-5.4c-13.5-13.9-27.5-22.6-55.3-22.6-43.3 0-73.6 33.5-73.6 81.5 0 50 32.3 82.3 82.4 82.3 16.6 0 33.9-2.9 45.7-7.5v-27.7zm359 0v-64.3h131.5v128.9l-2.7 2.2c-15.1 12.4-54.9 33.4-109 33.4-91.2 0-154.8-60.6-154.8-147.4 0-85.2 61.4-147 146-147 46.6 0 80.7 13.2 104.3 40.2l4.6 5.3-48.3 48-5.3-5.4c-13.5-13.9-27.5-22.6-55.4-22.6-43.3 0-73.6 33.5-73.6 81.5 0 50 32.3 82.3 82.4 82.3 16.6 0 33.9-2.9 45.7-7.5v-27.7zM2426 219.9h74l-101.6 191.4v96.2h-71.2v-92.1L2218.9 220h79l50 91.7c5.4 10 11 23.2 15.3 33.9 4.1-10.6 9.4-23.7 14.8-33.8z" fill="#fc8019"></path>
          </svg>
            <a href="" class="login">Login</a>
            <a href="" class="signup">Sign up</a>
        </div>
        <div class="jumbo2">
  <h1 class="hungry">{textThatChanges}</h1>
  <h2 class="order">Order food from favourite restaurants near you.</h2>
      </div > 
      <div class="jumbo3">
        <div class="enter"> 
      <input type="text" class="search" placeholder="Enter your delivery location" maxlength="30"/>
       <span><a class="location" href="#"><i class="fa fa-crosshairs"></i>Locate Me</a></span>
      </div>
      <a href="#" class="find">FIND FOOD</a>
      </div>
  <div>
  <h3 class="popular">POPULAR CITIES IN INDIA</h3>
  <ul class="cities">
    <li><a href="/web/20210903174711/https://www.swiggy.com/ahmedabad"class="c1">Ahmedabad</a></li>
    <li><a href="/web/20210903174711/https://www.swiggy.com/bangalore" class="c2">Bangalore</a></li>
    <li><a href="/web/20210903174711/https://www.swiggy.com/chennai"class="c1" >Chennai</a></li>
    <li><a href="/web/20210903174711/https://www.swiggy.com/delhi" class="c2">Delhi</a></li>
    <li><a href="/web/20210903174711/https://www.swiggy.com/gurgaon"class="c1" >Gurgaon</a></li>
    <li><a href="/web/20210903174711/https://www.swiggy.com/hyderabad"class="c2" >Hyderabad</a></li>
    <li><a href="/web/20210903174711/https://www.swiggy.com/kolkata" class="c1">Kolkata</a></li>
    <li><a href="/web/20210903174711/https://www.swiggy.com/mumbai"class="c2">Mumbai</a></li>
    <li><a href="/web/20210903174711/https://www.swiggy.com/pune" class="c1">Pune</a></li>
    <li><a href="#city-links"class="c2">&amp; more.</a></li>
    </ul>
    </div>
      </div>
  <Image/>
      </div>
      
    )
  }
}
export default Home;