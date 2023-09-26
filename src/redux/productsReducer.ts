import black from '../images/productsPhoto/black.jpg'
import orange from '../images/productsPhoto/orange.jpg'
import pink from '../images/productsPhoto/pink.jpg'
import yellow from '../images/productsPhoto/yellow.jpg'

const SELECTED_PRODUCT = 'SELECTED_PRODUCT';

export type ProductType = {
    id: number
    color: string
    photo: string
}


type InitialStateType = {
    products: Array<ProductType>
    selectedProductId: number | null
}
type SelectedProductType = {
    type: typeof SELECTED_PRODUCT
    id: number
}

type ActionTypes = SelectedProductType


let InitialState: InitialStateType = {
    products: [
        {
            id: 1,
            color: 'black',
            photo:black
        },
        {
            id: 2,
            color: 'orange',
            photo:orange
        },
        {
            id: 3,
            color: 'pink',
            photo:pink
        },
        {
            id: 4,
            color: 'yellow',
            photo:yellow
        }
    ],
    selectedProductId: null
}


const productsReducer = (state = InitialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case SELECTED_PRODUCT:

            return {
                ...state,
                selectedProductId: action.id
            };
        default:
            return state;

    }


}

export const selectedProductAction = (id: number): SelectedProductType => ({
    type: SELECTED_PRODUCT,
    id: id
})

export default productsReducer