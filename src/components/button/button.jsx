import React from 'react'
import variables from '../../styles/exports.module.scss'
import './button.scss'

const Button = (props) => {
    const { color = variables.primaryGreen } = props

    return (
        <button
            id="button"
            style={{ backgroundColor: color }}
            {...props}
        >
            {props.children}
        </button>
    )
}

export default Button
