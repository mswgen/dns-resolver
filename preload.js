window.addEventListener('load', () => {
  const axios = require('axios').default;
  const punycode = require('punycode/');
  document.querySelector('#resolve').addEventListener('click', () => {
    if (document.querySelector('#server').value == 'cf') {
      axios.get(`https://cloudflare-dns.com/dns-query?name=${punycode.toASCII(document.querySelector('#domain').value)}&type=${document.querySelector('#type').value}`, {
        headers: {
          accept: 'application/dns-json'
        }
      }).then(res => {
        document.querySelector('#result').style.display = 'block';
        if (res.data.Status != 0) {
          document.querySelector('#success').innerHTML = '실패'
          document.querySelector('#success').style.color = 'red';
        } else {
          document.querySelector('#success').innerHTML = '성공'
          document.querySelector('#success').style.color = 'green';
          document.querySelector('#answer').innerHTML = '';
          for (let record of res.data.Answer) {
            let elem = document.createElement('div');
            elem.setAttribute('class', 'answer-card')
            elem.innerHTML = `도메인: ${record.name}<br><br>TTL: ${record.TTL}초<br><br>결과: <strong>${record.data}</strong>`;
            document.querySelector('#answer').appendChild(elem);
          }
        }
      })
    } else if (document.querySelector('#server').value == 'google') {
      axios.get(`https://dns.google/resolve?name=${punycode.toASCII(document.querySelector('#domain').value)}&type=${document.querySelector('#type').value}`).then(res => {
        document.querySelector('#result').style.display = 'block';
        if (res.data.Status != 0) {
          document.querySelector('#success').innerHTML = '실패'
          document.querySelector('#success').style.color = 'red';
        } else {
          document.querySelector('#success').innerHTML = '성공'
          document.querySelector('#success').style.color = 'green';
          document.querySelector('#answer').innerHTML = '';
          for (let record of res.data.Answer) {
            let elem = document.createElement('div');
            elem.setAttribute('class', 'answer-card')
            elem.innerHTML = `도메인: ${record.name}<br><br>TTL: ${record.TTL}초<br><br>결과: <strong>${record.data}</strong>`;
            document.querySelector('#answer').appendChild(elem);
          }
        }
      })
    }
  })
});