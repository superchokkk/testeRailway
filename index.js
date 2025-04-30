// Este arquivo apenas mantém o serviço ativo para que o Railway não o encerre
console.log('Banco de dados configurado com sucesso!');
console.log('Este serviço mantém o banco de dados em execução.');
// Mantém o processo ativo
setInterval(() => {
  console.log('Serviço ainda está ativo: ' + new Date().toISOString());
}, 60000);