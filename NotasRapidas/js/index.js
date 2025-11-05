function naoUrgente(){
    var novaNota, nota
    novaNota=document.createElement("li")
    novaNota.id="listaN"
    novaNota.innerText=nota=document.getElementById("nota").value
  var div=document.getElementById("nUrgente")
    div.appendChild(novaNota)
}

function Urgente(){
    var novaNota, nota
    novaNota=document.createElement("li")
    novaNota.id="listaUrgente"
    novaNota.innerText=nota=document.getElementById("nota").value
    var div=document.getElementById("Urgente")
    div.appendChild(novaNota)
}

function removerN(){
    var li=document.getElementById("listaN")
    if(li){
        li.remove()
    }else{
    alert("Não há texto para remover")    
    }
}

function removerUrgente(){
    var li=document.getElementById("listaUrgente")
    if(li){
        li.remove()
    }else{
    alert("Não há texto para remover")    
    }
}

function apagarN(){
    var li=document.getElementById("nUrgente")
    li.innerHTML=""
}

function apagarUrgente(){
    var li=document.getElementById("Urgente")
    li.innerHTML=""
}
