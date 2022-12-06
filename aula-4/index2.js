let notas50 = 0;
let notas10 = 0;
let notas5  = 0;
let notas1  = 0;

// camada de input
let saque = Number.parseInt(prompt('Informe o valor que deseja sacar: \n' 
    + '[5] - GC$ 500,00 \n'
    + '[4] - GC$ 400,00 \n'
    + '[3] - GC$ 300,00 \n'
    + '[2] - GC$ 200,00 \n'
    + '[1] - GC$ 100,00 \n'
    + '[0] - Valor Customizado \n'
));

// camada de validação
switch (saque) {
    case 5:
        saque = 500;
        break;
    case 4:
        saque = 400;
        break;
    case 3:
        saque = 300;
        break;
    case 2:
        saque = 200;
        break;
    case 1:
        saque = 100;
        break;
    case 0:
    default:
        saque = Number.parseInt(prompt('Informe o valor que deseja sacar:'));
        while (saque <= 0) 
        {
            // tratamento de valores inválidos
            alert('O valor informado é inválido.');
            saque = Number.parseInt(prompt('Informe o valor que deseja sacar: '));
        }
        break;
}

// camada de processamento
while (saque >= 50)
{
    notas50++;
    saque-=50;
}

while (saque >= 10)
{
    notas10++;
    saque-=10;
}

while (saque >= 5)
{
    notas5++;
    saque-=5;
}

while (saque >= 1)
{
    notas1++;
    saque-=1;
}

// camada de output
if (notas50 > 0) {
    document.write('Notas de GC$ 50 => ', notas50, '<br/>');
}

if (notas10 > 0) {
    document.write('Notas de GC$ 10 => ', notas10, '<br/>');
}

if (notas5 > 0) {
    document.write('Notas de GC$ 5  => ', notas5, '<br/>');
}

if (notas1 > 0) {
    document.write('Notas de GC$ 1  => ', notas1, '<br/>');
}