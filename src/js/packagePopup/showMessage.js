import Message from '../../components/popup/Message.vue'
import { ref, shallowRef } from 'vue'

const vBind = ref({})
const vOn = ref({})
const isShowTeleport = ref(false)
let targetComponent = shallowRef({})

const toggleDialog = (bool) => {
  isShowTeleport.value = bool
}

const closeDialog = () => {
  toggleDialog(false)
  targetComponent.vaue = null
}

function useShowMessage(component, _vBind, _vOn) {
  targetComponent.value = component
  vBind.value = _vBind
  vOn.value = { ..._vOn, close: closeDialog }
  toggleDialog(true)

  return closeDialog
}

function initializeTeleport() {
  return { isShowTeleport, vBind, vOn, targetComponent }
}

export { useShowMessage, initializeTeleport }
