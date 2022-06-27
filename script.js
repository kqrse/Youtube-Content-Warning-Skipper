window.addEventListener('load', afterPageLoad)
let retryCount = 0
let currentPage = location.href;

setInterval(function()
{
  if (currentPage != location.href){
    currentPage = location.href;
    afterPageLoad()
  }
}, 1000);

function afterPageLoad(){
  if (retryCount == 10) {
    retryCount = 0
    return
  }

  let warningContainer = document.getElementById("player-error-message-container")

  if (warningContainer == null) {
    setTimeout(function() {
      retryCount++
      afterPageLoad()
    }, 50)
  } else {
    retryCount = 0
    document.getElementsByClassName("style-scope yt-button-renderer style-overlay size-default")[0].click()
  }
}