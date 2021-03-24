import {Form, Input, Button, Select, Table, Tag} from 'antd';
import React from 'react';
import {exercises, setExercises} from "@redux/app-reducer";
import {stateInterface} from "@redux/types";
import {connect} from "react-redux";

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

// const tagsColors: string[] = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

type propsType = {
    exercises: exercises[],
    setExercises: (exercises: exercises[]) => void;
}

const HashExercisesContainer: React.FC<propsType> = ({exercises, setExercises}) => {
    const [form] = Form.useForm();

    const onFinish = (values: exercises[]) => {
        setExercises({...values, ...{'key': Date.now()}});
        form.resetFields();
    };

    return (
        <div className={'exercises'}>
            <div className={'exercises-add'}>
                <div className={'exercises-header'}>Добавить упражение</div>
                <Form form={form} className={'exercises-form'} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
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
                                {tags.map((el: I_tag, i: number) => <Option key={i} value={el.type}><Tag color={el.color}>{el.type}</Tag></Option>)}
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
                <div className={'exercises-header'}>Список упражнений</div>
                <Table sticky={true} className={'exercises-list-table'} dataSource={exercises.map(el => {
                    return {...el, 'tags': <div className={'exercises-list-tags'}>{el.tags.map(tag => <Tag color={tags.find(item => item.type === tag)?.color}>{tag}</Tag>)}</div>}
                })} columns={columns} pagination={false} size="small"/>
            </div>
        </div>
    );
};

let mapStateToProps = (state: stateInterface) => {
    return {
        exercises: state.app.exercises,
    }
};

export const HashExercises = connect(mapStateToProps, {setExercises})(HashExercisesContainer);