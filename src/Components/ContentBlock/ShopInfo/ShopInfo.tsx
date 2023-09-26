import Icon from '../../common/Icon/Icon'
import classes from './ShopInfo.module.css'

const ShopInfo = () => {
    return (
        <div>
            <div className={classes.card_heading}>
                <span className={classes.shop_rating} >Excellent 4.8/5</span>
                <Icon id={'productCompanyLogo'} height={17.68} width={72} />
                <div className={classes.best__selling}>
                    <a href={'*'}>best selling</a>
                </div>
            </div>
        </div>
    )
}

export default ShopInfo