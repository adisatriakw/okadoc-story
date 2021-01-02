import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { BadgeVariant, BadgeSize } from './badge.theme'

const Badge = ({ variant, size, children }) => {
    return (
        <div className={classnames(`${BadgeVariant[variant]} ${BadgeSize[size]}`, {
            "py-2 px-6 rounded-full tracking-wide inline-block align-middle text-center": true
        })}>
            {children}
        </div>
    )
}

Badge.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

Badge.defaultProps = {
    variant: 'primary',
    size: 'md'
}

export default Badge