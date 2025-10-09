
 const panels = document.querySelectorAll('.panel');
 panels.forEach( panel => {
    panel.addEventListener('click',() =>{
        removeClassesActive()
        panel.classList.add('active')
    })
 })
  function removeClassesActive(){
    panels.forEach( panel => {
        panel.classList.remove('active')
    }
 )
}