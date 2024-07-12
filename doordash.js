function changetext(){
    const value=document.getElementById('p-text-6');
    const value2=document.getElementById('svg-6');
    const value3=document.getElementById('card-svg-1');
    const value4=document.getElementById('card-svg-2');
    const value5=document.getElementById('card-svg-3');
    const value6=document.getElementById('card-svg-4');
    const value7=document.getElementById('card-svg-5');
    if(window.innerWidth < 768){
        value.textContent='Login';
        value2.src='img/svgexport-6.svg';
        value3.src='img/download_the_app_mobile.png';
        value4.src='img/dashpass_mobile.png';
        value5.src='img/convenience_mobile.png';
        value6.src='img/become_a_dasher_mobile.png';
        value7.src='img/work_with_doordash_mobile.png';
    } else if(window.innerWidth <= 959){
        value.textContent='Sign In';
        value2.src='img/svgexport-3 (1).svg'
    }
    else{
        value.textContent='Sign in for saved address';
        value2.src='img/svgexport-3 (1).svg'
        value3.src='img/download_the_app_desktop (1).png';
        value4.src='img/dashpass_desktop.png';
        value5.src='img/convenience_desktop.png';
        value6.src='img/become_a_dasher_desktop.png';
        value7.src='img/work_with_doordash_desktop.png';
    }
}
changetext()
window.addEventListener('resize',changetext)
const topheadbar=document.querySelector('#top-head-bar.find');
window.addEventListener('scroll',()=>{
      if(window.scrollY >190){
        topheadbar.classList.add('show');
        topheadbar.classList.remove('hide');
      }else{
        topheadbar.classList.remove('show');
        topheadbar.classList.add('hide');
      }
})
function updateTextBasedOnMediaQuery(){
  const loginButtonText = document.getElementById('login-button-1-p');
    const openAppButtonText = document.getElementById('open-app-button-p');
    if(window.matchMedia('(max-width:767px)').matches){
      loginButtonText.textContent = 'Login';
      openAppButtonText.textContent = 'Open App';
    }else{
      loginButtonText.textContent = 'Sign In';
        openAppButtonText.textContent = 'Sign Up';
    }
}
updateTextBasedOnMediaQuery();
window.addEventListener('resize', updateTextBasedOnMediaQuery);