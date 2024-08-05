import Message from '../../components/popup/Message.vue'
import { createApp } from 'vue'

function showMessage(message, clickHandler) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  createApp(Message, {
    message,
    onClose() {
      clickHandler && clickHandler(closeDialog)
    },
  }).mount(div)

  const closeDialog = () => {
    div.remove()
  }
}

export default showMessage
