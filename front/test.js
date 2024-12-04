etch(url, {
    method: 'POST',  // Método HTTP para envio de dados
    headers: {
      'Content-Type': 'application/json'  // Define o tipo de conteúdo como JSON
    },
    body: JSON.stringify(dados)  // Converte os dados para JSON
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();  // Converte a resposta para JSON
    })
    .then(data => {
      console.log('Dados recebidos:', data);
    })
    .catch(error => {
      console.error('Erro:', error);
    });