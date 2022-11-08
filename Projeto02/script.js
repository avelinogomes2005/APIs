function retornaValores(conteudo) {
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
            document.getElementById("gia").value = "..."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornaValores`  
            document.body.appendChild(script) 
        }
        else {
            alert("Formato de CEP invalido.")
        }

    }
}
