import React from 'react'


const LoadingScreen = () => {
  return (
<div  id="loading"><div className='spinner'>
    <div class="sk-cube-grid">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
    <div class="sk-cube sk-cube3"></div>
    <div class="sk-cube sk-cube4"></div>
    <div class="sk-cube sk-cube5"></div>
    <div class="sk-cube sk-cube6"></div>
    <div class="sk-cube sk-cube7"></div>
    <div class="sk-cube sk-cube8"></div>
    <div class="sk-cube sk-cube9"></div>
    </div>
</div>
</div>
  )
}


  window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingEl = document.getElementById("loading");
      loadingEl.classList.add("loaded");
    }, 2000);
  });
export default LoadingScreen