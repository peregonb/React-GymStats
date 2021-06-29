import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button, Empty, Input, Modal, Tooltip, Transfer} from 'antd';
import {exercise} from '@redux/exercises-reducer';
import {connect} from "react-redux";
import {addTemplate} from "@redux/templates-reducer";

type propTypes = {
    data: exercise[],
    setExpandTransfer: Dispatch<SetStateAction<boolean>>,
    addTemplate: any
}

const TransferCustomContainer: React.FC<propTypes> = ({data, setExpandTransfer, addTemplate}) => {
    const [targetKeys, setTargetKeys] = useState();
    const [finalExercises, setFinalExercises] = useState<exercise[]>([]);
    const [templateName, setTemplateName] = useState('');
    const [tooltipVisibility, setTooltipVisibility] = useState(false);

    const cleanTransfer = () => {
        setTemplateName('');
        setExpandTransfer(val => !val);
    }

    const onChange = (nextTargetKeys: any): void => {
        setTargetKeys(nextTargetKeys);

        let result: exercise[] = [];
        nextTargetKeys && nextTargetKeys.map((key: string) => {
            for (let el of data) {
                if (key === el.key) {
                    result = [...result, {...el}]
                }
            }
            return true;
        })

        setFinalExercises(result);
    };

    const validateForm = () => {
        if (targetKeys && templateName !== '') {
            const newTemplate = {
                title: templateName,
                exercises: finalExercises
            };

            addTemplate(newTemplate);
            setTooltipVisibility(false);
            cleanTransfer();

            Modal.success({
                content: 'Шаблон добавлен!'
            });
        } else {
            setTooltipVisibility(true);
        }
    };

    return (
        <>
            <Transfer
                dataSource={data}
                titles={['Все упражения',
                    <div className={'transfer-headline'}>
                        <div>Шаблон:</div>
                        <Input placeholder="Новый шаблон" bordered={false} value={templateName}
                               onChange={e => {
                                   setTooltipVisibility(false);
                                   setTemplateName(e.target.value);
                               }}/>
                    </div>
                ]}
                className={'transfer'}
                showSearch={true}
                targetKeys={targetKeys}
                onChange={onChange}
                showSelectAll={false}
                render={item => item.name}
                locale={{
                    notFoundContent: <Empty description={'Добавьте новые упражнения.'}
                                            image={Empty.PRESENTED_IMAGE_SIMPLE}/>,
                    searchPlaceholder: 'Поиск'
                }}
            />

            <Tooltip color={'rgb(86, 3, 25)'} visible={tooltipVisibility} placement="right" className={'error-tooltip'}
                     title={'Поле названия и поле контента не может быть пустым.'}>
                <Button className={'templates-submit'} type={'primary'} onClick={() => validateForm()}>
                    Добавить
                </Button>
            </Tooltip>
        </>
    );
}

export const TransferCustom = connect(null, {
    addTemplate,
})(TransferCustomContainer);