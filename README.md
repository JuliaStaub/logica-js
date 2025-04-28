# 🎯 Jogo do Número Secreto

Um mini jogo feito em **JavaScript puro** para praticar funções, arrays, lógica de programação e interação com o DOM.  
A ideia é simples: adivinhe o número secreto sorteado pelo programa!

## 🧠 Como funciona

- O jogo escolhe um número aleatório entre **1 e 10**.
- O jogador digita um número e clica em **"Verificar"**.
- O programa informa se o número está **correto**, **acima** ou **abaixo** do número secreto.
- Ao acertar, o jogador vê quantas tentativas foram necessárias.
- É possível reiniciar o jogo e jogar quantas vezes quiser.
- O jogo garante que **não sorteia o mesmo número novamente** até que todos os números possíveis tenham sido escolhidos, usando um **array para armazenar os números já sorteados**.

## 💻 Tecnologias usadas

- HTML
- CSS
- JavaScript

## 🚀 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/JuliaStaub/logica-js.git
   ```

## ✨ Aprendizados

- Criação e chamada de funções
- Manipulação de elementos com `querySelector`
- Uso de variáveis e estruturas condicionais
- Geração de números aleatórios com `Math.random()`
- Controle de tentativas
- Interação com o usuário via DOM
- Uso de arrays para armazenar números sorteados
- Prevenção de repetição de números aleatórios
- Lógica de reinício do jogo sem repetir os mesmos números até completar o ciclo
- Ativação e desativação do botão de "Reiniciar"
