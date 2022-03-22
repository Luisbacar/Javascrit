function verificar(){
    var data=new Date()
    var ano= data.getFullYear()
    var fano=window.document.getElementById('txtano')
    var res=window.document.getElementById('res')
    if(fano.value.length==0 || Number(fano.value) >ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        var fsex=window.document.getElementsByName('radsex')
        var idade= ano-Number(fano.value)
        var genero=''
        var img =document.createElement('img')
        img.setAttribute('id','foto');
        if (fsex[0].checked){
            genero="homem"
            if(idade>=0 && idade <=10){
                //crianca
                img.setAttribute('src','bebe-homem.jpg')
            }else if( idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idolso
            }
        }
        else if(fsex[1].checked){
            genero="Mulher"
        }
        res.style.textAlign='center'
        res.innerHTML =`detectamos ${genero} com ${idade} anos.`

    }
}