const shareBtn = document.querySelector('.card-share-btn')

document.addEventListener('click', (e) => {
  if (shareBtn.contains(e.target)) {
    return shareBtn.parentNode.classList.toggle('active')
  }
  shareBtn.parentNode.classList.remove('active')
})
