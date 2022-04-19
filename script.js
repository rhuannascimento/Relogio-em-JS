
function carregar(){
    var imagem = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var titulo = document.getElementById('titulo')
    var hoje = document.getElementById('hoje')
    var data = new Date()
    var bom = "Bom"
    msg.innerHTML = `Agora são ${data.getHours()} horas e ${data.getMinutes()} minutos.`
    
    if(data.getHours()>=0 && data.getHours()<12){
        imagem.src='imgs/manha.jpg'
        bom = "Bom Dia"
        document.body.style.background = "#E9BB1D"
    }else if(data.getHours()>=12 && data.getHours()<18){
        imagem.src='imgs/tarde.jpg'
        bom = "Boa Tarde"
        document.body.style.background = "#862B16"
    }else{
        imagem.src='imgs/noite.jpg'
        bom = "Boa Noite"
        document.body.style.background = "#031931"
    }

    titulo.innerHTML = bom

    hoje.innerHTML = `Hoje é ${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`

}



