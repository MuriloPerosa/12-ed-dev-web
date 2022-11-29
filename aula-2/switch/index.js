const diaSemana = prompt('Informe o dia da semana: ' 
 + '\n [1] - Domingo \n [2] - Segunda \n [3] - Terça \n [4] - '
 + 'Quarta \n [5] - Quinta \n [6] - Sexta \n [7] - Sábado');

switch (diaSemana) {
    case '1':
        alert('Domingo selecionado!');
        document.write('Horário marcado no domingo');
        break;
    case '2':
        alert('Segunda selecionada!');
        document.write('Horário marcado na Segunda');
        break;
    case '3':
        alert('Terça selecionada!');
        document.write('Horário marcado na Terça');
        break;
    case '4':
        alert('Quarta selecionada!');
        document.write('Horário marcado na Quarta');
        break;
    case '5':
        alert('Quinta selecionada!');
        document.write('Horário marcado na Quinta');
        break;
    case '6':
        alert('Sexta selecionada!');
        document.write('Horário marcado na Sexta');
        break;
    case '7':
        alert('Sábado selecionada!');
        document.write('Horário marcado na Sábado');
        break;
    default:
        alert('Nenhum dia válido foi selecionado!');
        break;
}