import { useEditor } from '../../store/editor.js'
import { round } from 'mathjs'

const editor = useEditor()

export const convertTimeIntoWidth = (time) => {
  return editor.currentUnit.width * (time / editor.currentUnit.time)
}

export const convertWidthIntoTime = (width) => {
  return round((width / editor.currentUnit.width) * editor.currentUnit.time, 2)
}
