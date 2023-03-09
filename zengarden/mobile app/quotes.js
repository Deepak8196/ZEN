//var apiUrl='https://zenquotes.io/api/random';
// fetch(apiUrl).then(response => {
//     return response.json();
//   }).then(data => {
//     console.log(data);
//   }).catch(err => {
//     console.log("Error API down");
//   });


//const api_url ="https://zenquotes.io/api/quotes/";
async function getapi()//(apiUrl)
{
  const response = await fetch('https://zenquotes.io/api/random');
  var data = await response.json();
  return data;
}

const randomize = Math.floor(Math.random() * 5);

getapi().then(data => console.log(data[randomize].q));