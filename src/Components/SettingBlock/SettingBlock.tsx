import { useFormik } from "formik"
import classes from './SettingBlock.module.css'



const SettingBlock = () => {

    let formik = useFormik({
        initialValues: {
            color: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <div>

            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <div className={classes.block__selects}>
                    <div>
                        <small className={classes.select__heading}>color</small>
                        <select
                            name="color"
                            value={formik.values.color}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={classes.select}
                        >
                            <option value={1} label="Black" >
                                Black
                            </option>

                            <option value={2} label="Orange">
                                Orange
                            </option>

                            <option value={3} label="Pink">
                                Pink
                            </option>

                            <option value={4} label="Yellow">
                                Yellow
                            </option>
                        </select>
                    </div>
                    <div>
                        <small className={classes.select__heading}>size</small>
                        <select
                            name="color"
                            value={formik.values.color}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={classes.select}
                        >
                            <option value={2} label="2" >
                                2
                            </option>

                            <option value={3} label="3">
                                3
                            </option>

                            <option value={4} label="4">
                                4
                            </option>

                            <option value={5} label="5">
                                5
                            </option>
                        </select>
                    </div>
                </div>

                <button className={classes.button}><a href={'https://www.youtube.com'}>
                    BUY NOW</a></button>
            </form>
        </div>
    )
}

export default SettingBlock