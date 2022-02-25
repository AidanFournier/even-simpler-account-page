import React from 'react'

const PasswordStrengthMeter = ({ password }) => {
    console.log(password);
  
    const changePasswordColor = () => ({
        width: '70%',
        background: 'red',
        height: '7px'
    })

    return (
        <>
            <div className="progress" style={{ height: '7px' }}>
                <div className="progress-bar" style={changePasswordColor()}></div>
            </div>
        </>
    )
}

export default PasswordStrengthMeter