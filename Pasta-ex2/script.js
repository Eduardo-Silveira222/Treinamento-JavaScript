function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', '-imagens/foto-menino.jpg')
            }else if(idade >= 10 && idade < 25){
                //jovem
                img.setAttribute('src', '-imagens/foto-garoto.jpg')
            }else if(idade >= 25 && idade < 50){
                //adulto
                img.setAttribute('src', '-imagens/foto-homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', '-imagens/foto-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', '-imagens/foto-menina.jpg')
            }else if(idade >= 10 && idade < 25){
                //jovem
                img.setAttribute('src', '-imagens/foto-garota.jpg')
            }else if(idade >= 25 && idade < 50){
                //adulto
                img.setAttribute('src', '-imagens/foto-mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', '-imagens/foto-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}