const OPEN_CLOSE_FILTER = 'OPEN_CLOSE_FILTER'
const OPEN_CLOSE_MODAL = 'OPEN_CLOSE_MODAL'
const MODAL_VISIBLE = 'MODAL_VISIBLE'
const MODAL_INVISIBLE = 'MODAL_INVISIBLE'

const createAction = (type, payload) => ({ type, payload })

export const openCloseFilter = (payload) =>
  createAction(OPEN_CLOSE_FILTER, payload)
export const openCloseModal = (payload) =>
  createAction(OPEN_CLOSE_MODAL, payload)
export const modalVisible = (payload) => createAction(MODAL_VISIBLE, payload)
export const modalInvisible = (payload) =>
  createAction(MODAL_INVISIBLE, payload)

export const initialState = {
  active: false,
  className: '',
  isModal: false,
  modalClassName: '',
}

export function buttonReducer(state, action) {
  switch (action.type) {
    case OPEN_CLOSE_FILTER: {
      const { payload } = action
      return {
        ...state,
        active: !state.active,
        className: payload,
        isModal: !state.active,
      }
    }
    case OPEN_CLOSE_MODAL: {
      const { payload } = action
      return {
        ...state,
        active: true,
        className: payload.className,
        isModal: true,
        modalClassName: payload.modalClassName,
      }
    }
    case MODAL_VISIBLE: {
      const { payload } = action
      return {
        ...state,
        active: false,
        className: payload,
        isModal: false,
        modalClassName: payload,
      }
    }
    case MODAL_INVISIBLE: {
      const { payload } = action
      return {
        ...state,
        active: true,
        className: payload.className,
        isModal: true,
        modalClassName: payload.modalClassName,
      }
    }
    default:
      return state
  }
}
