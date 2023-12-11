const printReceipt = (clientName, cartItems) => {

  const printWindow = window.open('', '_blank');
  const content = `
    <html>
      <head>
        <title>Recibo de Compra</title>
      </head>
      <body>
        <h1>Recibo - Mil Folhas</h1>
        <h2>Nome do Cliente: ${clientName}</h2>
        <h3>Pedidos:</h3>
        <ul>
          ${cartItems.map(item => `
            <li>
              ${item.name}: R$ ${item.value} -- ${item.quantity}(unid) = R$ ${(parseInt(item.value) * item.quantity).toFixed(2)}
            </li>`).join('')}
        </ul>
        <p>Total: R$ ${cartItems.reduce((acc, item) => acc + (item.value * item.quantity), 0).toFixed(2)}</p>
      </body>
    </html>
  `;

  printWindow.document.write(content);
  printWindow.document.close();

  printWindow.print();
  printWindow.onafterprint = () => {
    printWindow.close();
  };
};

export default printReceipt;