import React, {useEffect, useState} from 'react';
import {Button, Empty, Input, Tag, Tooltip, Transfer} from 'antd';
import {exercise} from '@redux/exercises-reducer';
import {I_tag} from "@components/common/Tags";
import {log} from "util";

export const TransferCustom = ({data}: { data: exercise[] }) => {
    const [targetKeys, setTargetKeys] = useState();
    const [templateName, setTemplateName] = useState('');
    const [tooltipVisibility, setTooltipVisibility] = useState(false);

    // @ts-ignore
    const onChange = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        // console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);

        console.log(data)
    };

    const onSelectChange = () => {
        tooltipVisibility && setTooltipVisibility(false);
    };

    const validateForm = () => {
        if (targetKeys && templateName !== '') {
            console.log('validated');
            setTooltipVisibility(false);
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
                onSelectChange={onSelectChange}
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