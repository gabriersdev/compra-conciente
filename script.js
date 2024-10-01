// Função para verificar respostas e determinar resultado
document.getElementById('questionnaire').addEventListener('submit', function(e) {
    e.preventDefault();
        
            const q1 = document.getElementById('q1').value;
                const q2 = document.getElementById('q2').value;
                    const q3 = document.getElementById('q3').value;
                        const q4 = document.getElementById('q4').value;
                            const q5 = document.getElementById('q5').value;
                                
                                    let score = 0;

                                        // Contabilizando respostas
                                            if (q1 === 'necessidade') score += 1;
                                                if (q2 === 'frequente') score += 1;
                                                    if (q3 === 'sim') score += 1;
                                                        if (q4 === 'planejado') score += 1;
                                                            if (q5 === 'sim') score += 1;

                                                                // Exibir resultado
                                                                    const resultDiv = document.getElementById('result');
                                                                        resultDiv.classList.remove('d-none');

                                                                            if (score >= 4) {
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