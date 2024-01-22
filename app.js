const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons);

async function copyTest(e) {
  //prevent button going to the site
  e.preventDefault()
  const link = this.getAttribute('link')
  console.log(link)
  try {
    navigator.clipboard.writeText(link)
    alert("Você copiou o link: " + link)
  } catch (err) {
    console.error(err)
  }
}

shareButtons.forEach(shareButtons => 
  shareButtons.addEventListener('click', copyTest))