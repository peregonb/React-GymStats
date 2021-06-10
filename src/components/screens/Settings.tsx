import { Headline } from "@components/common/Headline";
import React, {useState} from "react";
import {Input} from "antd";

const Settings: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={'settings inner'}>
            <Headline text={'Настройки'}/>

            <Input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        </div>
    )
}

export default Settings;