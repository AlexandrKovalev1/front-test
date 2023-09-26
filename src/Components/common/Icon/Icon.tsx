import * as React from 'react'
import Icons from '../../../images/svg_sprite.svg'
import classes from './Icon.module.css'

type PropsType = {
    className?: string
    id: string
    width?: number
    height?: number
    onClick?: React.MouseEventHandler<SVGSVGElement>
}

const Icon: React.FC<PropsType> = ({ className, id, width, height, onClick, ...props }) => {
    return (
        <svg className={`${classes.iconCustom} ${className}`} width={width} height={height} onClick={onClick}>
            <use href={Icons + `#${id}`}></use>
        </svg>
    )
}
export default Icon;