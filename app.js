const author = document.querySelector('.name');
const tagData = document.querySelector('.tags');
const buttonChange = document.querySelector('.btn.change');
const sentence = document.querySelector('.text');
const buttonCopy = document.querySelector('.btn.copy');

async function getData() {
  const url = 'https://api.quotable.io/random';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
async function displayData() {
  const data = await getData();
  console.log(data);
  author.innerHTML = data.author;
  data.tags.forEach((element) => {
    tagData.innerHTML = `<span class="tag">${element}</span> `;
  });
  sentence.innerHTML = `"${data.content}"`;
}

displayData();

buttonChange.addEventListener('click', () => {
  displayData();
});

function copy(text) {
  navigator.clipboard.writeText(text);
}

buttonCopy.addEventListener('click', () => {
  const textToCopy = sentence.innerText;
  copy(textToCopy);
});
