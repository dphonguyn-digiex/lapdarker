import { getType, focusOnComponent } from '../actions';
import { INIT_STATE } from '../constants';
export default function focusComponentReducer(state = INIT_STATE.focus_component, action) {
  switch (action.type) {
    case getType(focusOnComponent.setFocusOnComponent):
      return {
        isFocus: action.payload?.state
      };
    default:
      return state;
  }
}
