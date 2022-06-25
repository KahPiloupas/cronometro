let hr=00
let min=00
let seg=00
let temporizador

function doisDigitosNaTela(digito){
    if(digito<10){
        return ("0"+digito)
    }else{
        return(digito)
    }
}

function inicio(){
    contador()  
    temporizador= setInterval(contador,1000) 
}

function pausa(){
    clearInterval(temporizador)
}

function reinicia(){
    clearInterval(temporizador)
    seg=0
    min=0
    document.getElementById("cronometro").innerText="00:00:00"
}

function contador(){
    seg=seg+1
    if(seg===60){
        min=min+1
        seg=0
        if(min===60){
            min=0
            hr=hr+1
        }
    }
    document.getElementById("cronometro").innerText=doisDigitosNaTela(hr)+":"+doisDigitosNaTela(min)+":"+doisDigitosNaTela(seg)

}