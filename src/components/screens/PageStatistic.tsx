import { Headline } from 'src/components/common/Headline';
import React from 'react';

const PageStatistics: React.FC = () => {
    return (
        <div className={ 'statistics inner' }>
            <Headline text={ 'Статистика' }/>
        </div>
    )
}

export default PageStatistics;