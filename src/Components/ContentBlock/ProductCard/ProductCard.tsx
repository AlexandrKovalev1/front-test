import { ProductType } from "../../../redux/productsReducer"


type ProductCardPropsType = {
    product:ProductType
}


const ProductCard:React.FC<ProductCardPropsType> = ({product}) => { 
    return (
        <div>
            <img src={product.photo} alt="" />
        </div>
    )
}

export default ProductCard