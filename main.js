let sec1 = document.getElementById('sec1')
let sec2 = document.getElementById('sec2')
let sec3 = document.getElementById('sec3')
let sec4 = document.getElementById('sec4')


window.addEventListener('scroll', function(){
  console.log(window.scrollY)
  if(window.scrollY > 5){
    sec1.classList.remove('hidden')
    sec1.classList.add('show')
  }
  if(window.scrollY > 550){
    sec2.classList.remove('hidden')
    sec2.classList.add('show')
  }
  if(window.scrollY > 1500){
    sec3.classList.remove('hidden')
    sec3.classList.add('show')
  }
  if(window.scrollY > 2450){
    sec4.classList.remove('hidden')
    sec4.classList.add('show')
  }
  if(window.scrollY < 300){
    sec1.classList.add('hidden')
    sec1.classList.remove('show')
  }
  if(window.scrollY < 550){
    sec2.classList.add('hidden')
    sec2.classList.remove('show')
  }
  if(window.scrollY < 1500){
    sec3.classList.add('hidden')
    sec3.classList.remove('show')
  }
  if(window.scrollY < 2450){
    sec4.classList.add('hidden')
    sec4.classList.remove('show')
  }
})
