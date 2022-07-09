import React, { FC } from 'react';

interface I_PageSingleProps {
    someText?: string
}

const PageSingle: FC<I_PageSingleProps> = ({ someText = 'текст' }) => {

    return (
        <div className={ 'content-single' }>
            { someText }
        </div>
    )
}

export default PageSingle;