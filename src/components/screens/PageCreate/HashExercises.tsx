import {Form, Input, Button, Select, Table, Tag, Tooltip} from 'antd';
import React from 'react';
import {exercises, setExercises} from "@redux/exercises-reducer";
import {I_state} from "@redux/types";
import {connect} from "react-redux";
import {InfoCircleOutlined} from '@ant-design/icons';

const {Option} = Select;

interface I_tag {
    type: string,
    color: string
}

const tags: I_tag[] = [
    {'type': 'Грудь', 'color': 'red'},
    {'type': 'Плечи', 'color': 'orange'},
    {'type': 'Бицепс', 'color': 'gold'},
    {'type': 'Трицепс', 'color': 'green'},
    {'type': 'Спина', 'color': 'cyan'},
    {'type': 'Пресс', 'color': 'geekblue'},
    {'type': 'Ноги', 'color': 'purple'},
    {'type': 'Ягодицы', 'color': 'magenta'}
];
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
    exercisesList: exercises[],
    setExercises: (exercises: exercises[]) => void;
}

const HashExercisesContainer: React.FC<propsType> = ({exercisesList, setExercises}) => {
    const [form] = Form.useForm();

    const onFinish = (values: exercises[]) => {
        setExercises({...values, ...{'key': Date.now()}});
        form.resetFields();
    };

    return (
        <div className={'exercises'}>
            <div className={'exercises-add'}>
                <div className={'exercises-wrapper'}>
                    <div className={'exercises-header'}>Добавить упражение</div>
                    {/*<InfoCircleOutlined/>*/}
                </div>
                <Form form={form} className={'exercises-form'} name="dynamic_form_nest_item" onFinish={onFinish}
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Внести
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className={'exercises-list'}>
                <div className={'exercises-wrapper'}>
                    <div className={'exercises-header'}>Список упражнений</div>
                    <Tooltip title={'Нажмите на нужный пункт в таблице чтобы редактировать.'}>
                        <InfoCircleOutlined/>
                    </Tooltip>
                </div>
                <Table onRow={(record, rowIndex) => ({
                    onClick: () => {
                        console.table({record, rowIndex})
                    }
                })}
                    sticky={true} className={'exercises-list-table'} dataSource={exercisesList.map(el => {
                    return {
                        ...el,
                        'tags': <div className={'exercises-list-tags'}>
                            {el.tags.map(tag =>
                                <Tag color={tags.find(item => item.type === tag)?.color}>{tag}</Tag>
                            )}</div>
                    }
                })} columns={columns} pagination={false} size="small"/>
            </div>
        </div>
    );
};

let mapStateToProps = (state: I_state) => {
    return {
        exercisesList: state.exercises.exercisesList,
    }
};

export const HashExercises = connect(mapStateToProps, {setExercises})(HashExercisesContainer);