const crawler = require('./src/crawler');

;(async () => {
  crawler.getToken()
  .then(token => crawler.getAnswer(token))
  .then(answer => console.log('Resposta: ' + answer))
  .catch(error => console.error('Error: ' + error));
})();
