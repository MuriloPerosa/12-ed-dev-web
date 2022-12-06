let notas50 = 0;
let notas10 = 0;
let notas5  = 0;
let notas1  = 0;

let saque = Number.parseInt(prompt('Informe o valor que deseja sacar: '));

while (saque <= 0) 
{
    alert('O valor informado é inválido.');
    saque = Number.parseInt(prompt('Informe o valor que deseja sacar: '));
}

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