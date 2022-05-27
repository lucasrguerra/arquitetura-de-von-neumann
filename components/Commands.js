"use strict";

class Command {
  constructor(
    value = String,
    name = String,
    description = String,
    operator = String
  ) {
    this.value = value;
    this.name = name;
    this.description = description;
    this.operator = operator;
  }
}

const Commands = [
    new Command(0, "NOP", "Nenhuma operação", ""),
    new Command(1, "TAKE", "Carrega o valor do endereço especificado no acumulador", ""),
    new Command(2, "SAVE", "Salva o valor do acumulador no endereço especificaco", ""),
    new Command(3, "TST", "Testa se o valor na memória é 0", ""),
    new Command(4, "JMP", "Pula para o endereço de memória especificado", ""),
    new Command(5, "NULL", "Zera o valor da memória", ""),
    new Command(6, "LDS", "Finaliza o programa", ""),
    new Command(7, "ADD", "Adiciona o valor do endereço especificado ao acumulador", "+"),
    new Command(8, "SUB", "Subtrai o valor do endereço especificado do acumulador", "-"),
    new Command(9, "INC", "Incrementa o valor da memória", "+1"),
    new Command(10, "DEC", "Decrementa o valor da memória", "-1"),
    new Command(11, "MUL", "Multiplica o valor do acumulador pelo valor na memória", "*"),
];

export default Commands;