import {Card, Table, Tag} from "antd";
import React from "react";
import {EditOutlined} from '@ant-design/icons';

const PageList = () => {
    const columns = [
        {
            title: 'Упражнение',
            dataIndex: 'name',
        },
        {
            title: 'Атака 1',
            dataIndex: 'age',
        },
        {
            title: 'Атака 2',
            dataIndex: 'address',
        },
        {
            title: 'Атака 3',
            dataIndex: 'q1',
        },
        {
            title: 'Атака 4',
            dataIndex: 'q2',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'Жим лежа',
            age: '40кг х5',
            address: '50кг х5',
            q1: '60кг х5',
            q2: '65кг х5',
        },
        {
            key: '2',
            name: 'Жим в наклоне',
            age: '40кг х5',
            address: '50кг х5',
            q1: '60кг х5',
            q2: '65кг х5',
        },
        {
            key: '3',
            name: 'Разведение гантель',
            age: '40кг х5',
            address: '50кг х5',
            q1: '60кг х5',
            q2: '65кг х5',
        },
        {
            key: '3',
            name: 'Подъем штанги на бицепс',
            age: '40кг х5',
            address: '50кг х5',
            q1: '60кг х5',
            q2: '65кг х5',
        },
        {
            key: '3',
            name: 'Молотки',
            age: '40кг х5',
            address: '50кг х5',
            q1: '60кг х5',
            q2: '65кг х5',
        },
    ];

    return (
        <div className={'content-list'}>
            <Card key={1} size={'small'} title="Тренировка 8.03.2021 16:45"
                  extra={<a href="#"><EditOutlined key="edit"/></a>}>
                <div className={'content-list-summary'}>
                    <Tag color="#013220">ТНЖ: 15,942</Tag>
                    <Tag color="#560319">КПШ: 123</Tag>
                </div>
                <Table pagination={false} columns={columns} dataSource={data} size="small"/>
                <div className={'content-list-tags'}>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                </div>
            </Card>
            <Card key={2} size={'small'} title="Тренировка 13.03.2021 12:30"
                  extra={<a href="#"><EditOutlined key="edit"/></a>}>
                <div className={'content-list-summary'}>
                    <Tag color="#013220">ТНЖ: 17,341</Tag>
                    <Tag color="#560319">КПШ: 213</Tag>
                </div>
                <Table pagination={false} columns={columns} dataSource={data} size="small"/>
                <div className={'content-list-tags'}>
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                </div>
            </Card>
        </div>
    )
}

export default PageList;