import React, { useState } from 'react';
import { Headline } from 'src/components/common/Headline';
import { TransferCustom } from 'src/components/screens/PageCreate/Transfer';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { I_state } from 'src/redux/types';
import { TreeTrainings } from 'src/components/screens/PageCreate/TreeTrainings';
import { I_exercise } from 'src/redux/exercises/types';

const HashTemplatesContainer = ({ exercisesList }: { exercisesList: I_exercise[] }) => {
    const [ expandTransfer, setExpandTransfer ] = useState(false);
    const ExpandIcon = expandTransfer ? DownOutlined : UpOutlined;

    return (
        <div className={ 'templates inner' }>
            <div className={ 'templates-wrapper' }>
                <div className={ 'templates-headline' }>
                    <Headline text={ 'Создать шаблон тренировочного дня' }/>
                    <ExpandIcon onClick={ () => setExpandTransfer(val => !val) }/>
                </div>
                <div className={ 'templates-transfer' }>
                    { !expandTransfer &&
                    <TransferCustom data={ exercisesList } setExpandTransfer={ setExpandTransfer }/> }
                </div>
            </div>

            <div className={ 'templates-wrapper' }>
                <Headline text={ 'Готовые шаблоны' }/>
                <div className={ 'templates-list' }>
                    <TreeTrainings/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: I_state) => {
    return {
        exercisesList: state.exercises.exercisesList,
    }
};

export const HashTemplates = connect(mapStateToProps, {})(HashTemplatesContainer);