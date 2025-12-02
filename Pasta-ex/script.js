function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 4 && hora <= 12){
        img.src = '-imagens/manha.jpg'
        document.body.style.background = "#a0dceeff"
    }else if(hora >= 13 && hora <= 18){
        //boa tarde
        img.src = '-imagens/tarde.jpg'
        document.body.style.background = "#f38d4aff"
    }else{
        //boa noite
        img.src = '-imagens/noite.jpg'
        document.body.style.background = "#121129ff"
    }
}