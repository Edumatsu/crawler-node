const cheerio = require('cheerio');
const request = require('request-promise');
const utils = require('./utils');

const uri = 'http://applicant-test.us-east-1.elasticbeanstalk.com';

const headers = {
    'Referer': uri + '/'
};

module.exports = {
  getToken: async () => {
      return request({
        uri,
        jar: true,
        headers,
      })
      .then(response => cheerio.load(response)('#token').val());
  },
  getAnswer: async (token) => {
    return request({
      uri,
      method: 'POST',
      jar: true,
      form: {
        token: utils.replaceToken(token)
      },
      headers,
    })
    .then(response => cheerio.load(response)('#answer').text());
  }
};
