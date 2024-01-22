const shareButtons = document.querySelectorAll('.tile-share-button')
const topShareButton = document.querySelector('.share-button')
console.log(shareButtons)
console.log(topShareButton)

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

topShareButton.addEventListener('click', copyTest)