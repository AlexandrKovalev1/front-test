import classes from './Bunner.module.css'
import Background from '../../images/bunner_img.jpg'
import Timer from './Timer/Timer'
import PriceItem from './PriceItem/PriceItem'

const Bunner = () => {
    return (
        <section className={classes.section_bunner}>
            <div className={classes.bunner_body}>
                <img src={Background} alt='special_offer' />
            </div>
            <div className={classes.block__timer}>
                <Timer startTime='04:51:16' />
            </div>
            <div className={classes.block__price}>
                <PriceItem price={'250'} specialPrice={'160'} />
            </div>
        </section>
    )
}


export default Bunner