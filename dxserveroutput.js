let url = 'https://master.333networks.com/json/deusex';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('output 1 output ', out);
})
.catch(err => { throw err });