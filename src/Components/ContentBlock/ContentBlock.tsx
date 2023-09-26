import { connect } from 'react-redux'
import ShopInfo from './ShopInfo/ShopInfo'
import classes from './ContentBlock.module.css'
import { AppStateType } from '../../redux/reduxStore'
import Product from './Product/Product'
import { ProductType } from '../../redux/productsReducer'
import { selectedProductAction } from '../../redux/productsReducer'
import ProductCard from './ProductCard/ProductCard'
import FlagOfAfrica from '../common/FlagOfAfrica'
import Icon from '../common/Icon/Icon'
import SettingBlock from '../SettingBlock/SettingBlock'

type ContentBlockPropsType = {
    products: Array<ProductType>
    activeId: number | null
    selectedProductAction: (id: number) => void
}



const ContentBlock: React.FC<ContentBlockPropsType> = ({ products, activeId, selectedProductAction }) => {

    let currentActive = activeId ? activeId : products[0].id;

    let product = products.filter(item => item.id === currentActive)

    let ProductItems = products.map(product => <Product
        id={product.id}
        photo={product.photo}
        activeId={currentActive}
        selectedProductAction={selectedProductAction}
    />)

    return (
        <section>
            <div className={classes.container}>
                <ShopInfo />
                <h2 className={classes.product_heading}>ORTOPEDIC SLIPPERS</h2>
                <ProductCard product={product[0]} />
                <div>
                    <div className={classes.productItems_wrapper}>
                        {ProductItems}
                    </div>
                    <div className={classes.product__description}>
                        <p><b>Fast Delivery:</b> 2-4 days from SA <FlagOfAfrica /></p>
                        <p><b>In Stock:</b> Shipping from Johannesburg <FlagOfAfrica /></p>
                        <div className={classes.rating__product}>
                            <div className={classes.stars_block}>
                                <Icon id={'star'} width={14} height={13} className={classes.fill_star}/>
                                <Icon id={'star'} width={14} height={13} className={classes.fill_star}/>
                                <Icon id={'star'} width={14} height={13} className={classes.fill_star}/>
                                <Icon id={'star'} width={14} height={13} className={classes.fill_star}/>
                                <Icon id={'star'} width={14} height={13} className={classes.fill_star}/>
                            </div>
                            <b className={classes.count_reviews}>(10)</b>
                        </div>
                    </div>
                    <SettingBlock/>
                </div>
            </div>
        </section>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    products: state.products.products,
    activeId: state.products.selectedProductId

})
export default connect(mapStateToProps, { selectedProductAction })(ContentBlock)