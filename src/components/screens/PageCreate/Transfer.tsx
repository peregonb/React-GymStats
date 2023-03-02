import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, Empty, Input, Modal, Tooltip, Transfer } from 'antd';
import { connect } from 'react-redux';
import { addTemplate } from 'src/redux/templates';
import { I_exercise } from 'src/redux/exercises/types';

type propTypes = {
    data: I_exercise[],
    setExpandTransfer: Dispatch<SetStateAction<boolean>>,
    addTemplate: any
}

const TransferCustomContainer: React.FC<propTypes> = ({ data, setExpandTransfer, addTemplate }) => {
    const [ targetKeys, setTargetKeys ] = useState();
    const [ finalExercises, setFinalExercises ] = useState<I_exercise[]>([]);
    const [ templateName, setTemplateName ] = useState('');
    const [ tooltipVisibility, setTooltipVisibility ] = useState(false);

    const cleanTransfer = () => {
        setTemplateName('');
        setExpandTransfer(val => !val);
    }

    const onChange = (nextTargetKeys: any): void => {
        setTargetKeys(nextTargetKeys);

        let result: I_exercise[] = [];
        nextTargetKeys && nextTargetKeys.map((key: string) => {
            for (const el of data) {
                if (key === el.key) {
                    result = [ ...result, { ...el } ]
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
                dataSource={ data }
                titles={ [ 'Все упражения', (
                    <div key={ 1 } className={ 'transfer-headline' }>
                        <div>Шаблон:</div>
                        <Input
                            placeholder={ 'Новый шаблон' }
                            bordered={ false }
                            value={ templateName }
                            onChange={ e => {
                                setTooltipVisibility(false);
                                setTemplateName(e.target.value);
                            } }/>
                    </div>
                ) ] }
                className={ 'transfer' }
                showSearch={ true }
                targetKeys={ targetKeys }
                onChange={ onChange }
                showSelectAll={ false }
                render={ item => item.name }
                locale={ {
                    notFoundContent: (
                        <Empty description={ 'Добавьте новые упражнения.' } image={ Empty.PRESENTED_IMAGE_SIMPLE }/>
                    ),
                    searchPlaceholder: 'Поиск'
                } }
            />

            <Tooltip
                color={ 'rgb(86, 3, 25)' }
                open={ tooltipVisibility }
                placement={ 'right' }
                className={ 'error-tooltip' }
                title={ 'Поле названия и поле контента не может быть пустым.' }>
                <Button
                    className={ 'templates-submit' }
                    type={ 'primary' }
                    onClick={ () => validateForm() }>
                    Добавить
                </Button>
            </Tooltip>
        </>
    );
}

export const TransferCustom = connect(null, {
    addTemplate,
})(TransferCustomContainer);