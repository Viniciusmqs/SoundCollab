function formatCreditCardNumber(input) {
    // Remove qualquer caractere que não seja um dígito
    var numericValue = input.value.replace(/\D/g, '');

    // Adiciona um espaço a cada 4 dígitos
    var formattedValue = '';
    for (var i = 0; i < numericValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += numericValue.charAt(i);
    }

    // Define o valor formatado de volta no campo de entrada
    input.value = formattedValue;
  }

  function formatCPF(input) {
    // Remove qualquer caractere que não seja um dígito
    var numericValue = input.value.replace(/\D/g, '');

    // Adiciona os pontos e o hífen
    var formattedValue = '';
    for (var i = 0; i < numericValue.length; i++) {
      if (i === 3 || i === 6) {
        formattedValue += '.';
      } else if (i === 9) {
        formattedValue += '-';
      }
      formattedValue += numericValue.charAt(i);
    }

    // Define o valor formatado de volta no campo de entrada
    input.value = formattedValue;
  }