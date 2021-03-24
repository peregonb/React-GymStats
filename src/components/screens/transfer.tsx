import {Transfer, Switch} from 'antd';
import React, {useEffect, useState} from 'react';

const mockData: any[] = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const TrainingCreate = () => {
    const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);

    const handleChange = (nextTargetKeys: any, direction: any, moveKeys: any) => {
        setTargetKeys(nextTargetKeys);

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };

    const handleSelectChange = (sourceSelectedKeys: any, targetSelectedKeys: any) => {
        // @ts-ignore
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    };

    const handleScroll = (direction: any, e: any) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    useEffect(() => {
        // const {targetKeys, selectedKeys, disabled} = this.state;
    }, [])

    return (
            <Transfer
                dataSource={mockData}
                titles={['Source', 'Target']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={handleChange}
                onSelectChange={handleSelectChange}
                onScroll={handleScroll}
                render={item => item.title}
                oneWay
                showSearch={true}
                style={{marginBottom: 16}}
            />
    );
}

export default TrainingCreate;