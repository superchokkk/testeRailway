const { exec } = require('child_process');
const path = require('path');

console.log('Iniciando configuração do banco de dados...');

// Executa o arquivo SQL no banco de dados
exec(`psql $DATABASE_URL -f ${path.join(__dirname, 'init.sql')}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao executar SQL: ${error}`);
    return;
  }
  
  console.log('Saída do comando SQL:');
  console.log(stdout);
  
  if (stderr) {
    console.log('Erros/Avisos:');
    console.log(stderr);
  }
  
  console.log('Configuração do banco de dados concluída!');
});