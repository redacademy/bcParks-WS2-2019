import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StartStopCont, TimerDisplay, InfoTextCont, InfoText, Btn } from './styles.js';
import { theme } from '../../globalStyles';

const StartStopTimer = () => {

    const [startStop, setStartStop] = useState(true);

    startStopPress = () => {
        setStartStop(!startStop)
    }

    return (
        <StartStopCont>
            <TimerDisplay>00:00:00</TimerDisplay>
            <InfoTextCont>
                <InfoText>Spending more time in nature contributes to a better sleep cycle and helps with lowering anxiety</InfoText>
            </InfoTextCont>
            <TouchableOpacity onPress={this.startStopPress}>
                {startStop ?
                    <Btn isStart theme={theme}>
                        Start Green Time
                    </Btn>
                    :
                    <Btn>
                        Stop Green Time
                    </Btn>
                }
            </TouchableOpacity>
        </StartStopCont>
    );
}

export default StartStopTimer;