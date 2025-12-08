function contar(){
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length  == 0){
        window.alert('[Erro] Preencha os dados!')
    }else {
        res.innerHTML = 'contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.valeu)
        c = i

        do{
                res.innerHTML += `${c}`
                c += p
            }while(c <= f) 
        }
    }
}