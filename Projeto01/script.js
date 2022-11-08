const container = document.querySelector('.container')
const apiURL = 'https://source.unsplash.com/random/'
const linhas = 5 
for(let i =0; i < linhas * 3; i++){
    const img = document.createElement('img')
    img.src = `${apiURL}${getRamdomImagem()}`
    container.appendChild(img)
}

function getRamdomImagem() {
    return `${numeroAleatorio()}x${numeroAleatorio()}`
}

function numeroAleatorio()  {
    return Math.flou(Math.random()*10 )+ 300
    
}

