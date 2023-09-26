import classes from './PriceItem.module.css'

type PriceItemProps = {
    price: string
    specialPrice?: string
}


const PriceItem: React.FC<PriceItemProps> = ({ price, specialPrice }) => {


    return (
        <div className={classes.price__wrapper}>
            <div className={classes.old_price}>
                <div style={{ padding: '0 3px', }}>{`R ` + price + '.00'}</div>
                <div className={classes.line}></div>
            </div>
            {specialPrice && <div className={classes.new_price}>
                {`R ` + specialPrice + '.00'}
            </div>}
        </div>
    )
}


export default PriceItem
