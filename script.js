async function getRandomQuote() {
  const category = document.getElementById("category-select").value;
  const apiUrl = `https://api.quotable.io/random?tags=${category}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const outputElement = document.getElementById("output");
    outputElement.innerText = data.content;
    const copyButton = document.getElementById("copy-button");
    copyButton.style.display = "block";
  } catch (error) {
    console.error(error);
    const outputElement = document.getElementById("output");
    outputElement.innerText = "Oops, something went wrong. Please try again later.";
  }
}

const copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", () => {
  const output = document.getElementById("output");
  const range = document.createRange();
  range.selectNode(output);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  copyButton.classList.add("copied");
  setTimeout(() => {
    copyButton.classList.remove("copied");
  }, 1000);
});