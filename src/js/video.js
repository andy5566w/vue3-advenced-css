import { useEditor } from '../store/editor.js'
const editor = useEditor()

export const generateVideoThumbnails = async ({
  videoUrl,
  thumbnailWidth = 50,
  thumbnailHeight = 50,
}) => {
  const promises = []
  editor.changeIsReadyThumbs(false)
  try {
    for (let i = 1; i < editor.videoDuration - 1; i++) {
      promises.push(
        asyncFetchThumbnail({
          second: i,
          videoUrl,
          thumbnailWidth,
          thumbnailHeight,
        })
      )
    }
    await Promise.all(promises)
    editor.changeIsReadyThumbs(true)
  } catch (e) {
    console.error(e)
  }
}

const asyncFetchThumbnail = ({
  second,
  videoUrl,
  thumbnailWidth,
  thumbnailHeight,
}) => {
  return new Promise((resolve, reject) => {
    try {
      const video = document.createElement('video')
      const canvas = document.createElement('canvas')
      canvas.width = thumbnailWidth
      canvas.height = thumbnailHeight
      const ctx = canvas.getContext('2d')
      video.addEventListener('seeked', () => {
        ctx.drawImage(video, 0, 0, thumbnailWidth, thumbnailHeight)
        editor.thumbsMap[second] = canvas.toDataURL('img/png')
        if (second === 1) {
          editor.thumbsMap[0] = canvas.toDataURL('img/png')
        }
        video.remove()
        canvas.remove()
        resolve()
      })
      video.src = videoUrl
      video.currentTime = second
    } catch (e) {
      console.error(e)
      reject(e)
    }
  })
}
