import React, {useState} from 'react';
import {Empty, Input, Transfer} from 'antd';

const mockData: {key: string, title: string}[] = [];
for (let i = 0; i < 10; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
    });
}

// const initialTargetKeys = mockData.filter(item => +item.key > 10).map(item => item.key);

export const TransferCustom = () => {
    const [targetKeys, setTargetKeys] = useState(); //initial values
    const [selectedKeys, setSelectedKeys] = useState([]);
    // @ts-ignore
    const onChange = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    // @ts-ignore
    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        // @ts-ignore
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const HeadlineTemplate = () => {
        return (
            <div className={'transfer-headline'}>
                <div>Шаблон:</div>
                <Input placeholder="Новый шаблон" bordered={false}/>
            </div>
        )
    }

    return (
        <Transfer
            dataSource={mockData}
            titles={['Все упражения', <HeadlineTemplate/>]}
            className={'transfer'}
            showSearch={true}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            showSelectAll={false}
            render={item => item.title}
            locale={{
                notFoundContent: <Empty description={'Чтоб начать, добавьте новые упражнения.'}
                                  image={Empty.PRESENTED_IMAGE_SIMPLE}/>,
                searchPlaceholder: 'Поиск'
            }}
        />
    );
};