import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { RadioVariant, RadioSize } from './radio.theme'

const Radio = ({ variant, size, ...rest }) => {   
    return (
        <input 
            type="radio" 
            className={classnames(`${RadioVariant[variant]} ${RadioSize[size]}`, {
                "border-default focus:ring-2": true
            })} 
            {...rest} 
        />
    )
}

Radio.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

Radio.defaultProps = {
    variant: 'primary',
    size: 'md'
}

export default Radio