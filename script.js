function toggleMode() {
  const html = document.documentElement
//pegar a tag img

const img = document.querySelector("#profile img")

//substituir a image




  //if(html.classList.contains('light')){
    //html.classList.remove("light")
  //} else{
   // html.classList.add('light')
  //}

  if(html.classList.toggle('light')){
//se tiver light mode, adicionar imagem
img.setAttribute('src','./assets/avatar3.png')
  }else{
    img.setAttribute('src','./assets/avatar1.png')
  }

}
 