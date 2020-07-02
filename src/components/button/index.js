import React from 'react'
import propTypes from 'prop-types'

const Button = ({styleClass, value, onClick}) => {
    return(
        <Button
        className = {`btn ${styleClass}`}
        onClick = {(event) => onClick(event)}
    >
        {value}
    </Button>
    )
    
};

// Button.propTypes = {
//     styleClass : propTypes.string,
//     value : propTypes.string.isRequired,
//     onClick : propTypes.func.isRequired
// };

// Button.defaultProps = {
//     styleClass : 'btn-primary'
// };

export default Button;