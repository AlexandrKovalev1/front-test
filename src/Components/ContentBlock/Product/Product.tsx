import { NavLink } from 'react-router-dom'
import classes from './Product.module.css'

type ProductType = {
    id: number
    photo: string
    activeId: number | null
    selectedProductAction:(id:number) =>void
}


const Product: React.FC<ProductType> = ({ photo, activeId, id, selectedProductAction }) => {

    let activeLink = activeId === id && 'active';

    return (
        <div onClick={()=>selectedProductAction(id)}>
            <NavLink to={'#'} className={activeLink ? classes[`${activeLink}`] : ''}>
                <img className={classes.product_wrapper} src={photo} alt="" />
            </NavLink>
        </div>
    )
}

export default Product