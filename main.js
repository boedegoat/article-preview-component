const shareBtn = document.querySelector('.card-share-btn')
const shareWrapper = shareBtn.parentNode

document.addEventListener('click', (e) => {
  if (e.target === shareBtn) {
    shareWrapper.classList.toggle('active')
  } else if (shareWrapper.className.includes('active') && !shareWrapper.contains(e.target)) {
    shareBtn.parentNode.classList.remove('active')
  }
})
