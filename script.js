function loadTest(testFile) {
    const container = document.getElementById('test-container');

    container.innerHTML = '<p>Ładowanie quizu...</p>';

    fetch(testFile)
      .then(response => {
        if (!response.ok) {
          throw new Error('Błąd ładowania quizu');
        }
        return response.text();
      })
      .then(data => {
        container.innerHTML = data;
      })
      .catch(error => {
        container.innerHTML = `<p style="color: red;">Nie udało się załadować quizu: ${error.message}</p>`;
      });
  }

  function checkAnswer(button, chosen, correct) {
    const questionDiv = button.parentElement.parentElement;
    const feedback = questionDiv.querySelector('.feedback');

    if (feedback.style.display === 'block') {
      return;
    }

    if (chosen === correct) {
      feedback.textContent = "Gratulacje! To poprawna odpowiedź.";
      feedback.className = "feedback correct";
    } else {
      feedback.textContent = `Niestety, to nie jest poprawna odpowiedź. Poprawna odpowiedź to: ${correct}.`;
      feedback.className = "feedback incorrect";
    }

    feedback.style.display = 'block';
  }