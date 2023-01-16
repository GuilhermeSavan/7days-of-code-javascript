const idade = document.querySelector("#idade"),
      nome = document.querySelector("#nome"),
      email = document.querySelector("#linguagem")

      function sendInput() {
        alert(`Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!`);

        const likeornot = prompt(`Você gosta de estudar ${linguagem.value}Responda com o número 1 para SIM ou 2 para NÃO.`);

        if(likeornot == 1) {
            alert(`incrivel, sera um futuro desevolvedor ${linguagem.value}`)
        } if (likeornot == 2) {
            alert("que pena, busque outra linguagem para estudar");
        }
      }