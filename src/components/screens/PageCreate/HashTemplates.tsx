import React, {useState} from 'react';
import {Headline} from "@components/common/Headline";
import {Button} from "antd";
import {TransferCustom} from "@components/common/Transfer";
import {FullscreenExitOutlined, FullscreenOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {I_state} from "@redux/types";
import {exercise} from "@redux/exercises-reducer";

const HashTemplatesContainer = ({exercisesList} : {exercisesList: exercise[]}) => {
    const [expandTransfer, setExpandTransfer] = useState(false);
    const ExpandIcon = expandTransfer ? FullscreenOutlined : FullscreenExitOutlined;

    return (
        <div className={'templates inner'}>
            <div className={'templates-wrapper'}>
                <div className={'templates-headline'}>
                    <Headline text={'Создать шаблон тренировочного дня'}/>
                    <ExpandIcon onClick={() => setExpandTransfer(val => !val)}/>
                </div>
                <div style={{maxHeight: expandTransfer ? 0 : 500}} className={'templates-transfer'}>
                    <TransferCustom data={exercisesList} />
                </div>
            </div>

            <div className={'templates-wrapper'}>
                <Headline text={'Готовые шаблоны'}/>
            </div>
        </div>
    );
};

let mapStateToProps = (state: I_state) => {
    return {
        exercisesList: state.exercises.exercisesList,
    }
};

export const HashTemplates = connect(mapStateToProps, {})(HashTemplatesContainer);