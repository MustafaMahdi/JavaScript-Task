const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
];
async function getData(urls) {
  const fetchUrlsArray = urls.map((url) => fetch(url));
  const arrayOfResponses = await Promise.all(fetchUrlsArray);
  const arrayOfJsonResponses = arrayOfResponses.map((response) => response.json());
  const data = await Promise.all(arrayOfJsonResponses);
  /* to see the data you could uncomment the next line and look to the console */
  console.log(data);
  return data;
}

const data = getData(urls);
