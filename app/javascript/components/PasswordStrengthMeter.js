import React from 'react'
import zxcvbn from 'zxcvbn'

const PasswordStrengthMeter = ({ password }) => {
    const testResult = zxcvbn(password);
    const num = testResult.score * 100/4;

    const createPasswordLabel = () => {
        switch(testResult.score) {
            case 0:
              return 'Are you sure?';
            case 1:
              return 'Meh';
            case 2:
              return "It'll do";
            case 3:
              return 'Much better';
            case 4:
              return "Now that's a strong password!";
            default:
              return '';
        }
    }

    const ProgressColor = () => {
        switch(testResult.score) {
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none'; 
        }
    }
  
    const changePasswordColor = () => ({
        width: `${num}%`,
        background: ProgressColor(),
        height: '7px'
    })

    return (
        <>
            <div className="progress" style={{ height: '7px' }}>
                <div className="progress-bar" style={changePasswordColor()}></div>
            </div>
            <p style={{ color: ProgressColor() }}>{createPasswordLabel()}</p>
        </>
    )
}

export default PasswordStrengthMeter