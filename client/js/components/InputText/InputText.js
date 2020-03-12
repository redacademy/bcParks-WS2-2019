import React from 'react';
import { InputText } from './styles';


const InputTextBox = (props) => {

    return (
        <InputText
            multiline={true}
            numberOfLines={5} 
            onChangeText={ txt => {props.update(txt)}}
            value={props.journal}
        />
    );
}

export default InputTextBox;