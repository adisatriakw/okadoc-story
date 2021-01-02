import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { InputVariant, InputSize } from './input.theme'

const Input = ({ variant, size, ...rest }) => {   
    return (
        <input 
            type="text" 
            placeholder="lorem ipsum dolor"
            className={classnames(`${InputVariant[variant]} ${InputSize[size]}`, {
                "border-default rounded focus:ring-2 text-dark": true
            })} 
            {...rest} 
        />
    )
}

Input.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

Input.defaultProps = {
    variant: 'primary',
    size: 'md'
}

export default Input