// Função para verificar respostas e determinar resultado
document.getElementById('questionnaire').addEventListener('submit', function (e) {
  e.preventDefault();

  // Remove alerta anterior
  document.querySelectorAll('.alert').forEach(alert => alert.remove());

  const responses = [];

  document.querySelectorAll('.form-select').forEach(select => {
    responses.push(select.value);
  })

  Object.freeze(responses);

  let score = 0;

  // Contabilizando respostas
  if (responses[0] === 'necessidade') score += 2; // Necessidade real dá mais pontos
  if (responses[1] === 'frequente') score += 1;  // Uso frequente adiciona pontos
  if (responses[2] === 'sim') score += 1;  // Condições financeiras adequadas
  if (responses[3] === 'nao') score += 1;  // Não comprar para impressionar é positivo
  if (responses[4] === 'nao') score += 1;  // Não possuir algo semelhante é um bom sinal
  if (responses[5] === 'sim') score -= 1;  // Promoções e descontos podem ser consumismo
  if (responses[6] === 'sim') score -= 1;  // Comprar por tendências é um alerta
  if (responses[7] === 'sim') score += 1;  // Pensar no longo prazo é positivo
  if (responses[8] === 'sim') score -= 1;  // Comprar em excesso indica consumismo

  // Criar div
  const [resultDiv, alertHeader, alertBody] = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
  resultDiv.classList.add('alert', 'alert-dismissible', 'fade', 'hide', 'mt-5');
  alertHeader.classList.add('alert-heading');
  alertHeader.innerHTML = `<span class="fw-semibold">Resultado:</span><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  alertBody.classList.add('alert-content');

  // Adicionar divs a resultDiv e ao body
  resultDiv.appendChild(alertHeader);
  resultDiv.appendChild(alertBody);
  document.body.querySelector('main').appendChild(resultDiv);

  // Exibir resultado
  const [_, content] = resultDiv.children;
  resultDiv.classList.remove('hide');

  if (score >= 5) {
    resultDiv.classList.remove('alert-danger');
    resultDiv.classList.add('alert-success');
    content.innerHTML = `
    <strong>Essa parece ser uma compra necessária. Vá em frente!</strong>

    <div class="my-2">
      Com base nas suas respostas, essa compra não parece ser impulsiva. Aqui estão algumas razões pelas quais essa decisão de compra é mais consciente e equilibrada:
    </div>

    <ul style="list-style-type: square; padding-left: 1rem !important; display: flex; flex-direction: column; gap: 1rem; padding-top: 1rem">
      <li>
        Necessidade real: Você identificou que esse item é algo que realmente precisa, e não apenas um desejo passageiro.
      </li>
      <li>
        Frequência de uso: Se planeja usar o item com frequência, significa que ele terá utilidade contínua e não será apenas mais um objeto esquecido.
      </li>
      <li>
        Planejamento financeiro: Você considerou sua capacidade financeira e concluiu que a compra não afetará seu orçamento, indicando que você está se preparando para gastar de forma responsável.
      </li>
      <li>
        Utilidade a longo prazo: O fato de você ter pensado sobre o uso prolongado do item mostra que é uma compra pensada, que vai te beneficiar além do curto prazo.
      </li>
      <li>
        Reflexão antes de comprar: Você refletiu antes de tomar a decisão, o que é um grande sinal de que está evitando comprar por impulso, focando em escolhas conscientes.
      </li>
    </ul>

    <div class="mt-4">
      Ao considerar esses fatores, é possível ver que essa compra pode te trazer valor e utilidade real. Isso demonstra que você está tomando decisões com base em suas necessidades reais e no planejamento financeiro.
    </div>
    `;
  } else {
    resultDiv.classList.remove('alert-success');
    resultDiv.classList.add('alert-danger');
    content.innerHTML = `
    <strong>Cuidado! Isso pode ser consumismo.</strong>

    <div class="my-2">
      O consumismo acontece quando compramos produtos não por necessidade, mas por impulso, desejos temporários, ou pressões externas como tendências e promoções. Aqui estão alguns sinais que indicam que essa compra pode ser desnecessária:
    </div>

    <ul style="list-style-type: square; padding-left: 1rem !important; display: flex; flex-direction: column; gap: 1rem; padding-top: 1rem">
      <li>
        Influência de promoções ou descontos: Se a sua principal motivação é uma promoção, você pode estar sendo atraído por estratégias de marketing e não pela real necessidade do item. 
      </li>
      <li>
        Compra para impressionar outras pessoas: Quando compramos para atender expectativas alheias ou por status, há grandes chances de a compra não ser importante para nossas necessidades reais.
      </li>
      <li>
        Impulso por tendências: Seguir modas e tendências pode levar a aquisições temporárias que perdem o valor ou relevância rapidamente.
      </li>
      <li>
        Possuir itens similares: Se você já tem algo semelhante em casa, pergunte-se se realmente precisa de mais. Acúmulo é um forte indicador de consumismo.
      </li>
      <li>
        Compras impulsivas para lidar com emoções: Se está comprando para se sentir melhor (felicidade, tédio, tristeza), há chances de essa decisão ser emocional, o que aumenta o risco de arrependimento posterior.
      </li>
    <ul>
    `;

    resultDiv.innerHTML += `
      <div class="mt-1">
        Refletir sobre esses aspectos antes de comprar pode te ajudar a evitar o consumismo e economizar recursos para aquilo que realmente importa.
      </div>`;
  }

  resultDiv.classList.add('show');

  // Scroll até o resultado
  window.scrollTo({
    // 16px == 1rem de alívio
    top: resultDiv.offsetTop - 16,
    behavior: 'smooth'
  });
});

// Inicializar AOS
AOS.init();

