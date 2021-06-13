const shareBtn = document.querySelector('.card-share-btn')
const shareWrapper = shareBtn.parentNode

document.addEventListener('click', (e) => {
  if (e.target === shareBtn) {
    shareWrapper.classList.toggle('active')
    if (shareBtn.getAttribute('aria-expanded') === 'false') {
      shareBtn.setAttribute('aria-expanded', 'true')
    } else {
      shareBtn.setAttribute('aria-expanded', 'false')
    }
  } else if (shareWrapper.className.includes('active') && !shareWrapper.contains(e.target)) {
    shareBtn.parentNode.classList.remove('active')
    shareBtn.setAttribute('aria-expanded', 'false')
  }
})
