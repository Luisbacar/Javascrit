function carregar(){
    var msg=window.document.getElementById('msg')
    var imagem=window.document.getElementById('imagem')
    var data=new Date()
    var hora=data.getHours()
    msg.innerHTML=`agora sao ${hora}horas`

    if(hora >= 0 && hora < 12){
        //Bomdia
        imagem.src='manha.jpg'
    }
    else if(hora >=12 && hora<18){
        //boa tarde
        imagem.src ='javascimagem.jpg'
    }
    else{
        //boa noite
        imagem.src='aanoite.jpg'
    }

}

