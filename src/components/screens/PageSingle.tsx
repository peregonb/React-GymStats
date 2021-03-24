import React from "react";

interface Iprops {
    someText?: string
}

const PageSingle = ({someText = 'текст'}:Iprops) => {

    return (
        <div className={'content-single'}>
            {someText}
        </div>
    )
}

export default PageSingle;