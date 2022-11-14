import {
    SIDEBAR_CHECK
  } from "../constants/actionTypes/sidebar"
  
  const INITIAL_STATE = [
    {
      imgurl: '/assets/images/single-neutral-actions.a8cd97b5.svg',
      name:'Profile',
    },
    {
      imgurl: '/assets/images/common-file-text-info.4b1bedfc.svg',
      name:'Application',
    },
    
    
  ]
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case SIDEBAR_CHECK:
        // localStorage.setItem(action.name, 'true');
        const newState = state.map(item => item.name === action.name ? {...item, check: true} : item)
        return [
          ...newState
        ]
      default:
        return state
    }
  }
  
  export default reducer;