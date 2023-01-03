import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer=(state={activeTab:"Projects"},action)=>{
    if(action.type==="changeTab"){
        return {...state,activeTab:action.payload}
    }
    return state
}

const store=createStore(reducer,composeWithDevTools())
export default store
