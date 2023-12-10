// const printReceipt = () => {
//     const printWindow = window.open('', '_blank');
    
//     if (printWindow) {
//       printWindow.document.write('<html><head><title>Comanda - Harbeas Copos</title>');
//       printWindow.document.write('<style>');
//       printWindow.document.write('body { font-family: Arial, sans-serif; }');
//       printWindow.document.write('h1 { color: #2a2419; }');
//       printWindow.document.write('ul { list-style-type: none; padding: 0; }');
//       printWindow.document.write('li { margin-bottom: 8px; }');
//       printWindow.document.write('p strong { font-weight: bold; }');
//       printWindow.document.write('.total { background-color: #2a2419; color: #fff; padding: 5px; }');
//       printWindow.document.write('</style></head><body>');
      
//       // Adicione a logo e o nome da empresa
//       printWindow.document.write('<img src="caminho/para/sua/logo.png" alt="Harbeas Copos" style="max-width: 100px;"/>');
//       printWindow.document.write('<h1>Harbeas Copos</h1>');
      
//       // Adicione os detalhes do cliente e pedidos ao corpo do HTML
//       printWindow.document.write('<p><strong>Nome do Cliente:</strong> ' + clientName + '</p>');
//       printWindow.document.write('<h2>Pedidos:</h2>');
//       printWindow.document.write('<ul>');
      
//       cartItems.forEach(item => {
//         printWindow.document.write('<li>' + item.name + ': R$ ' + (item.value * item.quantity).toFixed(2) + '</li>');
//       });
      
//       printWindow.document.write('</ul>');
//       printWindow.document.write('<p class="total"><strong>Total:</strong> R$ ' + calculateTotal().toFixed(2) + '</p>');
//       printWindow.document.write('</body></html>');
      
//       printWindow.document.close(); // Fecha o documento atual
//       printWindow.print(); // Inicia o processo de impressão
//     } else {
//       alert('Não foi possível abrir a janela de impressão. Verifique se as pop-ups estão bloqueadas.');
//     }
//   };
  