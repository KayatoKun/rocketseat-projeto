function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //analisar se está em light mode
  if (html.classList.contains("light")) {
    //se estiver light mode substituir para avatar-light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    //se não estiver no light mode manter imagem padrão
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    //se estiver light mode substituir para avatar-light
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
    //se não estiver no light mode manter imagem padrão
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro jaqueta preta, sem barba e fundo azul"
    )
  }
}
