
/**
 * Busca o valor a ser sacado e garente que seja válido.
 * @returns Number
 */
function getValorSaque ()
{
    let valor = Number.parseInt(prompt('Informe o valor que deseja sacar: '));

    while (valor <= 0) 
    {
        alert('O valor informado é inválido.');
        valor = Number.parseInt(prompt('Informe o valor que deseja sacar: '));
    }

    return valor;
}

/**
 * Calcula o número de notas retornadas de determinado valor.
 * @param {Number} saque 
 * @param {Number} nota 
 * @returns Number 
 */
function calculaNumeroNotas (saque, nota)
{
    let contadorNotas = 0;
    while (saque >= nota)
    {
        contadorNotas++;
        saque-=nota;
    }

    return contadorNotas;
}

/**
 * Retorna o valor restante a ser sacado.
 * @param {Number} valorAtual 
 * @param {Number} numeroNotas 
 * @param {Number} valorNota 
 * @returns Number
 */
function atualizaValorSaque (valorAtual, numeroNotas, valorNota)
{
    return valorAtual - (numeroNotas * valorNota);
}

/**
 * Apresenta o número de notas sacadas por valor.
 * @param {Number} valorNota 
 * @param {Number} numeroNotas 
 */
function escreveResultado (valorNota, numeroNotas)
{
    if (numeroNotas > 0) {
        document.write(`Notas de GC$ ${valorNota} => ${numeroNotas} <br/>`)
    }
}

let saque = getValorSaque();

const notas50 = calculaNumeroNotas(saque, 50);
saque = atualizaValorSaque(saque, notas50, 50);

const notas10 = calculaNumeroNotas(saque, 10);
saque = atualizaValorSaque(saque, notas10, 10);

const notas5  = calculaNumeroNotas(saque, 5);
saque = atualizaValorSaque(saque, notas5, 5);

const notas1  = calculaNumeroNotas(saque, 1);
saque = atualizaValorSaque(saque, notas1, 1);

escreveResultado(50, notas50);
escreveResultado(10, notas10);
escreveResultado(5,  notas5);
escreveResultado(1,  notas1);