import {I_state} from '@redux/types';
import {connect} from "react-redux";
import React from 'react';
import {deleteTemplate, template} from "@redux/templates-reducer";
import {List, Modal} from 'antd';
import {exercise} from "@redux/exercises-reducer";
import {DeleteOutlined} from '@ant-design/icons';


const {confirm} = Modal;

type propsType = {
    templatesList: template[],
    deleteTemplate: (id: number) => void,
}

const TreeTrainingsContainer: React.FC<propsType> = ({templatesList, deleteTemplate}) => {

    const showDeleteConfirm = (targetId: number) => {
        confirm({
            title: 'Удалить текущий шаблон?',
            icon: false,
            content: 'Восстановить шаблон будет невозможно. Тренеровки что вы внесли с этим шаблоном остануться в статистике.',
            okText: 'Да',
            okType: 'primary',
            cancelText: 'Нет',
            onOk() {
                deleteTemplate(targetId);
            }
        });
    };

    return (
        <>
            {templatesList.map((single: template) => {
                const listData: string[] = [];
                single.exercises.map((el: exercise) => listData.push(el.name));

                return (<List
                    key={single.key}
                    size="small"
                    header={<div className="templates-list-header">{single.title} <DeleteOutlined onClick={() => showDeleteConfirm(single.id)}/></div>}
                    bordered
                    dataSource={listData}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />)
            })}
        </>
    );
};


let mapStateToProps = (state: I_state) => {
    return {
        templatesList: state.templates.templatesList,
    }
};

export const TreeTrainings = connect(mapStateToProps, {
    deleteTemplate,
})(TreeTrainingsContainer);