import {createStore, combineReducers} from 'redux'
import products from './productsReducer'

let reducers = combineReducers({
    products:products
})

type RootReduserType = typeof reducers
export type AppStateType = ReturnType<RootReduserType>


let store =createStore(reducers)

export default store