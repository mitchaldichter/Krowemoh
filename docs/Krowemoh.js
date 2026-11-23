//URL of TXT file in Krowemoh trove
async function insertKrowemohTextFromUrl(url) {
  //get the element the function is running in
  const container = document.currentScript.parentElement;
  
  fetch(url)
    .then(response => {
      //check if the request succeeded (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); //convert response stream to plain text
    })
    .then(text => {
      //overwrite contents of containing element
      container.innerHTML = text;
      //render the dynamically added LaTeX
      MathJax.typesetPromise([container]);
    })
    .catch(error => {
      console.error('Fetch failed:', error);
      container.innerHTML = 'Failed to fetch from from URL. ' + url;
    });
}
