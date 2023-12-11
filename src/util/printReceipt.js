import jsPDF from 'jspdf';

const printReceipt = async (clientName, cartItems) => {
  return new Promise((resolve, reject) => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a5',
    });

    pdf.text('Nome do Cliente: ' + clientName, 20, 20);
    pdf.text('Pedidos:', 20, 30);

    let yPosition = 40;

    cartItems.forEach(item => {
      pdf.text(
        item.name + ': R$ ' + item.value + ' -- ' + item.quantity + '(unid) = R$ ' + (parseInt(item.value) * item.quantity).toFixed(2),
        20,
        yPosition
      );
      yPosition += 10;
    });

    const total = cartItems.reduce((acc, item) => acc + item.total, 0);
    pdf.text('Total: R$ ' + total.toFixed(2), 20, yPosition + 10);

    // Verificar se ipcRenderer está disponível (significa que estamos no Electron)
    if (window.ipcRenderer) {
      window.ipcRenderer.send('print', { pdfData: pdf.output('datauristring') });

      window.ipcRenderer.once('print-complete', () => {
        console.log('Impressão concluída');
        resolve();
      });
    } else {
      // Lógica de impressão para navegador (pode ser um redirecionamento para uma página de impressão)
      console.log('Imprimir no navegador');
      resolve();
    }
  });
};

export default printReceipt;