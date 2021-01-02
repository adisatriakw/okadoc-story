import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { CheckBoxVariant, CheckBoxSize } from './checkbox.theme'

const CheckBox = ({ variant, size, ...rest }) => {   
    return (
        <input 
            type="checkbox" 
            className={classnames(`${CheckBoxSize[size]} ${CheckBoxVariant[variant]}`, {
                "border-default rounded focus:ring focus:ring-offset-0": true
            })} 
            {...rest} 
        />
    )
}

CheckBox.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

CheckBox.defaultProps = {
    variant: 'primary',
    size: 'md'
}

export default CheckBox