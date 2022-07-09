import React, { Dispatch, FC, SetStateAction, useState, useEffect } from 'react';
import { Headline } from '@components/common/Headline';
import { useDispatch } from 'react-redux';
import { I_exercise, I_setExercise } from '@redux/exercises/types';
import { Form, Input, Button, Select, Tag, Modal } from 'antd';
import { changeExercise, deleteExercise, setExercise } from '@redux/exercises/actionCreators';
import { DeleteOutlined } from '@ant-design/icons';
import { I_tag, tags } from '@components/common/Tags';
import { Nullable } from '@redux/types';
import useSelector from 'src/hooks/useSelector';

interface I_EditExercisesProps {
    id: Nullable<I_exercise['id']>,
    setId: Dispatch<SetStateAction<I_EditExercisesProps['id']>>,
}

const { confirm } = Modal;
const { Option } = Select;

const EditExercise: FC<I_EditExercisesProps> = ({ id, setId }) => {
    const [ form ] = Form.useForm();
    const dispatch = useDispatch();
    const { exercisesList } = useSelector(state => state.exercises);
    const element = exercisesList.filter(el => el.id === id)[0];

    useEffect(() => {
        form.resetFields();
    }, [ id ]);

    const onFinish = ({ name, tags }: I_setExercise) => {
        if (!id) {
            dispatch(setExercise({
                name,
                tags
            }));
        } else {
            dispatch(changeExercise({
                id,
                name,
                tags
            }));
        }
        setId(null);
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
                id && dispatch(deleteExercise({ id }));
                setId(null);
            },
            okButtonProps: { danger: true }
        });
    };

    return <div className={ 'exercises-add' }>
        <div className={ 'exercises-wrapper' }>
            <Headline
                text={ id ? `Изменить упражнение: "${ exercisesList.filter(el => el.id === id)[0]?.name }"` : 'Добавить упражение' }/>
        </div>
        <Form
            form={ form }
            className={ 'exercises-form' }
            name={ 'dynamic_form_nest_item' }
            onFinish={ onFinish }
            initialValues={ {
                'name': element?.name,
                'tags': element?.tags
            } }
            autoComplete="off">
            <div className={ 'exercises-fields' }>
                <Form.Item
                    name={ 'name' }
                    fieldKey={ 'name' }
                    rules={ [ { required: true, message: 'Это обязательное поле' } ] }>
                    <Input placeholder="Название упражнения"/>
                </Form.Item>
                <Form.Item
                    name={ 'tags' }
                    fieldKey={ 'tags' }
                    rules={ [ { required: true, message: 'И это тоже' } ] }>
                    <Select
                        mode="multiple"
                        allowClear
                        style={ { width: '100%' } }
                        placeholder="Выберите группу мышц">
                        { tags.map((el: I_tag, i: number) => <Option key={ i } value={ el.type }><Tag
                            color={ el.color }>{ el.type }</Tag></Option>) }
                    </Select>
                </Form.Item>
            </div>
            <Form.Item className={ 'exercises-buttons' }>
                <Button type="primary" htmlType="submit">
                    { element ? 'Изменить' : 'Внести' }
                </Button>
                { element && <>
                    <Button
                        danger
                        type="primary"
                        onClick={ () => {
                            setId(null);
                            form.resetFields();
                        } }>Отменить</Button>
                    <DeleteOutlined onClick={ showDeleteConfirm } className={ 'exercises-buttons-delete' }/>
                </> }
            </Form.Item>
        </Form>
    </div>
}

export default EditExercise;

