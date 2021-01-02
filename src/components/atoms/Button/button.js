import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ButtonVariant, ButtonSize } from './button.theme'

const Button = ({ variant, size, children }) => {
    return (
        <button type="button" className={classnames(`${ButtonVariant[variant]} ${ButtonSize[size]}`,{
            "rounded-md border tracking-wide border-solid inline-block align-middle text-center transition duration-300 ease-in-out focus:outline-none": true,
        })}>
            {children}
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'default', 'danger', 'outlinePrimary', 'outlineSecondary', 'outlineMixedPrimary', 'outlineMixedSecondary', 'outlineMixedDanger']),
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

Button.defaultProps = {
    variant: 'primary',
    size: 'md'
}

export default Button