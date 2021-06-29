import React, {useState} from 'react';
import {Headline} from "@components/common/Headline";
import {Button} from "antd";
import {TransferCustom} from "@components/screens/PageCreate/Transfer";
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {I_state} from "@redux/types";
import {exercise} from "@redux/exercises-reducer";
import {TreeTrainings} from "@components/screens/PageCreate/TreeTrainings";

const HashTemplatesContainer = ({exercisesList} : {exercisesList: exercise[]}) => {
    const [expandTransfer, setExpandTransfer] = useState(false);
    const ExpandIcon = expandTransfer ? DownOutlined : UpOutlined;

    return (
        <div className={'templates inner'}>
            <div className={'templates-wrapper'}>
                <div className={'templates-headline'}>
                    <Headline text={'Создать шаблон тренировочного дня'}/>
                    <ExpandIcon onClick={() => setExpandTransfer(val => !val)}/>
                </div>
                <div className={'templates-transfer'}>
                    {!expandTransfer && <TransferCustom data={exercisesList} setExpandTransfer={setExpandTransfer}/>}
                </div>
            </div>

            <div className={'templates-wrapper'}>
                <Headline text={'Готовые шаблоны'}/>
                <div className={'templates-list'}>
                    <TreeTrainings/>
                </div>
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