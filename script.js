// Função para verificar respostas e determinar resultado
document.getElementById('questionnaire').addEventListener('submit', function (e) {
  e.preventDefault();

  const responses = [
    document.getElementById('q1').value,
    document.getElementById('q2').value,
    document.getElementById('q3').value,
    document.getElementById('q4').value,
    document.getElementById('q5').value,
    document.getElementById('q6').value,
    document.getElementById('q7').value,
    document.getElementById('q8').value,
    document.getElementById('q9').value,
  ];

  let score = 0;

  // Contabilizando respostas
  if (responses[0] === 'necessidade') score += 1; // Pergunta 1
  if (responses[1] === 'frequente') score += 1; // Pergunta 2
  if (responses[2] === 'sim') score += 1; // Pergunta 3
  if (responses[3] === 'nao') score -= 1; // Pergunta 4
  if (responses[4] === 'nao') score -= 1; // Pergunta 5
  if (responses[5] === 'nao') score -= 1; // Pergunta 6
  if (responses[6] === 'sim') score -= 1; // Pergunta 7
  if (responses[7] === 'sim') score += 1; // Pergunta 8
  if (responses[8] === 'sim') score -= 1; // Pergunta 9

  // Exibir resultado
  const resultDiv = document.getElementById('result');
  resultDiv.classList.remove('d-none');

  if (score >= 5) {
    resultDiv.classList.remove('alert-danger');
    resultDiv.classList.add('alert-success');
    resultDiv.innerHTML = "Essa parece ser uma compra necessária. Vá em frente!";
  } else {
    resultDiv.classList.remove('alert-success');
    resultDiv.classList.add('alert-danger');
    resultDiv.innerHTML = "Cuidado! Isso pode ser consumismo.";
  }
});

// Inicializar AOS
AOS.init();
