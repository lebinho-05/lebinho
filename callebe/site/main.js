texto = ""
function enviar(){
    t = document.getElementById("input").value
    texto += t
    document.getElementById("mens").textContent = texto
}