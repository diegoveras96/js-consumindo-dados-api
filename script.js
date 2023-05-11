var cep = 22743311;
var consultaCep = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro){
            throw Error('esse cep não existe')
        } else{
            console.log(r);
        }
    })
    .catch(erro => console.log(erro))
    .finally( () => console.log('Processamento Concluído'))
