let cep = document.querySelector('#cep');




async function buscaEndereco(cep){
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro){
            throw Error('CEP não existente');
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida
    } catch (erro) {
        console.log(erro);
    }
}

let ceps = ['22743311', '01001000', '22743312', '22743310', '22743315'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps);
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

