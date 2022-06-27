window.addEventListener('load', afterPageLoad)

function afterPageLoad(){
  let warningContainer = document.getElementById("player-error-message-container")

  if (warningContainer == null) {
    setTimeout(function() {
      afterPageLoad()
    }, 50)
  } else {
    document.getElementsByClassName("style-scope yt-button-renderer style-overlay size-default")[0].click()
  }
}
