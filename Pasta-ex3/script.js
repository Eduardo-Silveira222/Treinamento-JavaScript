function adicionar(){
    let num = document.getElementById('txtn')
    let anali = document.getElementById('selana')

    if(num.value.length <=0 || num.value.length >=101){
        window.alert('digite um numero valido')
    }
}