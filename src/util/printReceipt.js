const printReceipt = (clientName, cartItems) => {

    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
      
      printWindow.document.write('<html><head><title>Comanda - Mil Folhas</title>');
      printWindow.document.write('<style>');
      printWindow.document.write('body { font-family: Arial, sans-serif; }');
      printWindow.document.write('h1 { color: #2a2419; }');
      printWindow.document.write('ul { list-style-type: none; padding: 0; }');
      printWindow.document.write('li { margin-bottom: 8px; }');

      printWindow.document.write('p strong { font-weight: bold; color: #2a2419; }');
      printWindow.document.write('.total { color: #2a2419; font-weight: bold; }');
      printWindow.document.write('</style></head><body>');
      
      // Adicione a logo e o nome da empresa
      printWindow.document.write('<img src="../assets/logo.png" alt="Mil Folhas" style="max-width: 100px;"/>');
      printWindow.document.write('<h1>Mil Folhas</h1>');
      
      // Adicione os detalhes do cliente e pedidos ao corpo do HTML
      printWindow.document.write('<p><strong>Nome do Cliente:</strong> ' + clientName + '</p>');
      printWindow.document.write('<h4>Pedidos:</h4>');
      printWindow.document.write('<ul>');
  
      cartItems.forEach(item => {
        printWindow.document.write('<li>' + item.name + ':' + ' R$ ' + item.value + ' -- ' + item.quantity + '(unid)' + ' = ' + ' R$ ' + (parseInt(item.value) * item.quantity).toFixed(2) + '</li>');
      });
      
      printWindow.document.write('</ul>');
      cartItems.forEach(item => {
        printWindow.document.write('<h2 class="total"><strong>Total:</strong> R$ ' + item.total.toFixed(2) + '</h2>');
      })
      printWindow.document.write('</body></html>');
      
      printWindow.document.close(); // Fecha o documento atual
      printWindow.print(); // Inicia o processo de impressão
    } else {
      alert('Não foi possível abrir a janela de impressão. Verifique se as pop-ups estão bloqueadas.');
    }
  };

export default printReceipt;