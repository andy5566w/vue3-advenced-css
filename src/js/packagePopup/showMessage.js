import Message from '../../components/popup/Message.vue'
import { ref } from 'vue'

const isShow = ref(false)
function useShowMessage() {
  const closeDialog = () => {
    toggleDialog(false)
  }

  const toggleDialog = (bool) => {
    isShow.value = bool
  }

  return {
    isShow,
    targetComponent: Message,
    toggleDialog,
    closeDialog,
  }
}

export default useShowMessage
