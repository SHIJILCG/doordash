function changetext(){
    const value=document.getElementById('p-text-6');
    const value2=document.getElementById('svg-6');
    if(window.innerWidth < 768){
        value.textContent='Login';
        value2.src='img/svgexport-6.svg'
    } else if(window.innerWidth <= 959){
        value.textContent='Sign In';
        value2.src='img/svgexport-3 (1).svg'
    }
    else{
        value.textContent='Sign in for saved address';
        value2.src='img/svgexport-3 (1).svg'
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