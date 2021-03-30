import React, {useEffect, useState} from 'react';
import {Form, Input, Button, Select, Table, Tag, Tooltip, Modal, Empty} from 'antd';
import {InfoCircleOutlined, DeleteOutlined} from '@ant-design/icons';
import {changeExercise, exercise, setExercise, deleteExercise} from "@redux/exercises-reducer";
import {I_state} from "@redux/types";
import {connect} from "react-redux";
import {I_tag, tags} from '@components/common/Tags';
import { Headline } from '@components/common/Headline';

const {confirm} = Modal;
const {Option} = Select;

const columns = [
    {
        title: 'Упражнение',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Теги',
        dataIndex: 'tags',
        key: 'tags',
    }
];

type propsType = {
    exercisesList: exercise[],
    setExercise: (name: string, tags: string[]) => void;
    changeExercise: (id: number, name: string, tags: string[]) => void;
    deleteExercise: (id: number) => void
}

type EditExercisePropsType = {
    element?: exercise
}

const HashExercisesContainer: React.FC<propsType> = ({exercisesList, setExercise, changeExercise, deleteExercise}) => {
    const [form] = Form.useForm();
    const [elementToEdit, setElementToEdit] = useState<exercise | undefined>(undefined);

    const onFinish = ({name, tags}: { name: string; tags: string[] }) => {
        if (!elementToEdit) {
            setExercise(name, tags);
        } else {
            changeExercise(elementToEdit.id, name, tags)
        }
        setElementToEdit(undefined);
        form.resetFields();
    };

    const showDeleteConfirm = () => {
        confirm({
            title: 'Удалить текущее упражнение?',
            icon: false,
            content: 'Восстановить будет невозможно',
            okText: 'Да',
            okType: 'primary',
            cancelText: 'Нет',
            onOk() {
                elementToEdit && deleteExercise(elementToEdit.id);
                setElementToEdit(undefined);
            }
        });
    };

    useEffect(() => {
        form.resetFields();
    }, [elementToEdit])

    const EditExercise: React.FC<EditExercisePropsType> = ({element}) => {
        return <div className={'exercises-add'}>
            <div className={'exercises-wrapper'}>
                <Headline text={elementToEdit ? `Изменить упражнение: "${element?.name}"` : 'Добавить упражение'}/>
            </div>
            <Form form={form} className={'exercises-form'} name={'dynamic_form_nest_item'} onFinish={onFinish}
                  initialValues={{
                      'name': element?.name,
                      'tags': element?.tags
                  }}
                  autoComplete="off">
                <div className={'exercises-fields'}>
                    <Form.Item
                        name={'name'}
                        fieldKey={'name'}
                        rules={[{required: true, message: 'Это обязательное поле'}]}>
                        <Input placeholder="Название упражнения"/>
                    </Form.Item>
                    <Form.Item
                        name={'tags'}
                        fieldKey={'tags'}
                        rules={[{required: true, message: 'И это тоже'}]}>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{width: '100%'}}
                            placeholder="Выберите группу мышц">
                            {tags.map((el: I_tag, i: number) => <Option key={i} value={el.type}><Tag
                                color={el.color}>{el.type}</Tag></Option>)}
                        </Select>
                    </Form.Item>
                </div>
                <Form.Item className={'exercises-buttons'}>
                    <Button type="primary" htmlType="submit">
                        {element ? 'Изменить' : 'Внести'}
                    </Button>
                    {element && <>
                        <Button type="primary" onClick={() => {
                            setElementToEdit(undefined);
                            form.resetFields();
                        }} danger>Отменить</Button>
                        <DeleteOutlined onClick={showDeleteConfirm} className={'exercises-buttons-delete'}/>
                    </>}
                </Form.Item>
            </Form>
        </div>
    }

    return (
        <div className={'exercises inner'}>
            <EditExercise element={elementToEdit}/>
            <div className={'exercises-list'}>
                <div className={'exercises-wrapper'}>
                    <Headline text={'Список упражнений'}/>
                    <Tooltip title={'Нажмите на нужный пункт в таблице чтобы редактировать.'}>
                        <InfoCircleOutlined/>
                    </Tooltip>
                </div>
                <Table
                    locale={{
                        emptyText: <Empty description={'Чтоб начать, добавьте новые упражнения.'}
                                          image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                    }}
                    onRow={record => ({
                        onClick: () => {
                            setElementToEdit(exercisesList.filter(el => el.id === record.id)[0])
                        }
                    })}
                    sticky={true} className={'exercises-list-table'}
                    dataSource={exercisesList.map(el => ({
                        ...el, 'tags': <div className={'exercises-list-tags'}>
                            {el.tags.map((tag, i) => <Tag key={i} color={tags.find(item => item.type === tag)?.color}>{tag}</Tag>)}
                        </div>
                    }))}
                    columns={columns} pagination={false} size="small"/>
            </div>
        </div>
    );
};

let mapStateToProps = (state: I_state) => {
    return {
        exercisesList: state.exercises.exercisesList,
    }
};

export const HashExercises = connect(mapStateToProps, {
    setExercise,
    changeExercise,
    deleteExercise
})(HashExercisesContainer);