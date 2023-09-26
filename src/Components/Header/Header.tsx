import classes from './Header.module.css'
import FlagOfAfrica from '../common/FlagOfAfrica'
import Logo from '../../images/logo (2).svg'

const Header = () => {
    return (
        <header>
            <div className={classes.header_heading}>
                <FlagOfAfrica />
                <span className={classes.header_heading_text}>
                    SPECIAL OFFER + FREE DELIVERY 2-4 DAYS IN SA
                </span>
                <FlagOfAfrica />
            </div>
            <div className={classes.header_logo}>
                <h1>
                    <a href="">
                        <img src={Logo} alt='logotype' />
                    </a>
                </h1>
            </div>
        </header>
    )
}

export default Header