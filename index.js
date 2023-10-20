var setadir = window.document.getElementById("seta-dir")
var tag1 = window.document.getElementById("tag1")
var tag2 = window.document.getElementById("tag2")
var tag3 = window.document.getElementById("tag3")
var setaesq = window.document.getElementById("seta-esq")

function RolarParaDireita() {
 tag1.style ="display:none"
 tag3.style ="display:flex"
 setadir.style ="display:none"
 setaesq.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
 tag1.style ="display:flex"
 tag3.style ="display:none"
 setadir.style ="display:flex"
 setaesq.style ="display:none"
}
