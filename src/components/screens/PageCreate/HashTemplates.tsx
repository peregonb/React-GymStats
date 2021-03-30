import React from 'react';
import {Headline} from "@components/common/Headline";
import { TransferCustom } from '@components/common/Transfer';

export const HashTemplates = () => {
    return (
        <div className={'templates inner'}>
            <Headline text={'Создать шаблон тренировочного дня'}/>
            <TransferCustom/>
        </div>
    );
};