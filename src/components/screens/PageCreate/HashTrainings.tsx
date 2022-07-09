import { Headline } from '@components/common/Headline';
import React, { FC } from 'react';

export const HashTrainings: FC = () => {
    return (
        <div className={ 'training inner' }>
            <Headline text={ 'Добавить новую тренировку' }/>
        </div>
    );
};