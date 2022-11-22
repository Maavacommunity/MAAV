import {
    SIDEBAR_CHECK
  } from "../constants/actionTypes/sidebar"
  
  const INITIAL_STATE = [
    {
      imgurl: '/assets/images/single-neutral-actions.a8cd97b5.svg',
      name:'profile',
    },
    {
      imgurl: '/assets/images/common-file-text-info.4b1bedfc.svg',
      name:'application',
     // check: Boolean(localStorage.getItem('application')) ? Boolean(localStorage.getItem('application')) : false,

    },
    {
      imgurl: '/assets/images/accounting-document.9de57dcf.svg',
      name:'documents',
     // check: Boolean(localStorage.getItem('application')) ? Boolean(localStorage.getItem('application')) : false,

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