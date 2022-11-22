/* function retornaValores(conteudo) {
    if(!("error" in conteudo)){
        document.getElementById("rua").value=(conteudo.logradouro)
        document.getElementById("bairro").value=(conteudo.bairro) 
        document.getElementById("cidade").value=(conteudo.localidade)
        document.getElementById("uf").value=(conteudo.uf)
        document.getElementById("ibge").value=(conteudo.ibge)
        document.getElementById("gia").value=(conteudo.gia)
    }
    else{
        alert("CEP não encontrado.")
    }
}
function buscaCep(valor) {
    var cep = valor.replace(/\D/g, '')
    if (cep != "") {
        var validaCEP = /^[0-9]{8}$/
        if (validaCEP.test(cep)) {
            document.getElementById("rua").value = "..."   
            document.getElementById("bairro").value = "..."    
            document.getElementById("cidade").value = "..."  
            document.getElementById("uf").value = "..."
            document.getElementById("ibge").value = "..."
            document.getElementById("guia").value = "..."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornaValores`  
            document.body.appendChild(script) 
        }
        else {
            alert("Formato de CEP invalido.")
        }

    }

} 

*/
$("#cep").blur(function (e){
    let cep = this.value
    /* promise */
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
        response.json()
        .then(data => mostrarDados(data))
    })
const mostrarDados = (result){
    for(const campo in reesult){
        /* console.log(campo) */
        if (document.querySelector("#"+campo)) {
            document.querySelector("#"+campo).value = result[campo]
        }
    }  
}

})
