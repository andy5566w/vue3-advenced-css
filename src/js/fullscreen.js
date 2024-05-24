function getProperty(names, target) {
  return names.find((name) => name in target)
}

const enterScreenName = getProperty(
  [
    'requestFullscreen',
    'mozRequestFullscreen',
    'webkitRequestFullscreen',
    'msRequestFullscreen',
  ],
  document.documentElement
)

export function fullScreen() {
  enterScreenName && document.documentElement[enterScreenName]()
}

const exitScreenName = getProperty(
  [
    'exitFullScreen',
    'moxCancelFullScreen',
    'webkitExitFullscreen',
    'msExitFullscreen',
  ],
  document
)

export function exitFullScreen() {
  exitScreenName && document[exitScreenName]()
}

const checkFullScreenName = getProperty(
  [
    'fullscreenElement',
    'mozFullScreenElement',
    'msFullScreenElement',
    'webkitFullscreenElement',
  ],
  document
)

export function isFullScreen() {
  return document[checkFullScreenName]
}

export function toggleFullScreen() {
  if (isFullScreen()) {
    exitFullScreen()
  } else {
    fullScreen()
  }
}
