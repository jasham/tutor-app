import React from 'react'
import Button from 'react-bootstrap/Button'

const CustomButton = (props) => {
    return (
        <Button
            variant={props.styleClass}
            onClick={(event) => props.onClick(event)}
            size={props.size}
        >
            {props.value}
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

export default CustomButton;