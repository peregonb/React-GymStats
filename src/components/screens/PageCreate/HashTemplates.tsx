import React, {useState} from 'react';
import {Headline} from "@components/common/Headline";
import {Button} from "antd";
import {TransferCustom} from "@components/common/Transfer";
import {FullscreenExitOutlined, FullscreenOutlined} from '@ant-design/icons';

export const HashTemplates = () => {
    const [expandTransfer, setExpandTransfer] = useState(false);
    const ExpandIcon = expandTransfer ? FullscreenOutlined : FullscreenExitOutlined;

    const showValues = () => {

    }

    return (
        <div className={'templates inner'}>
            <div className={'templates-wrapper'}>
                <div className={'templates-headline'}>
                    <Headline text={'Создать шаблон тренировочного дня'}/>
                    <ExpandIcon onClick={() => setExpandTransfer(val => !val)}/>
                </div>
                <div style={{maxHeight: expandTransfer ? 0 : 500}} className={'templates-transfer'}>
                    <TransferCustom/>
                    <Button className={'templates-submit'} type={'primary'} onClick={() => showValues()}>
                        Добавить
                    </Button>
                </div>
            </div>

            <div className={'templates-wrapper'}>
                <Headline text={'Готовые шаблоны'}/>
            </div>
        </div>
    );
};