import React, { FC, useEffect, useState } from 'react';
import { Table, Tag, Tooltip, Empty } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { I_exercise} from 'src/redux/exercises/types';
import { tags } from 'src/components/common/Tags';
import { Headline } from 'src/components/common/Headline';
import useSelector from 'src/hooks/useSelector';
import EditExercise from 'src/components/screens/PageCreate/Exercises/EditExercise';
import { Nullable } from 'src/redux/types';

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

const HashExercises: FC = () => {
    const { exercisesList } = useSelector(state => state.exercises);
    const [ selectedId, setElementId ] = useState<Nullable<I_exercise['id']>>(null);

    return (
        <div className={ 'exercises inner' }>
            <EditExercise id={selectedId} setId={setElementId}/>
            <div className={ 'exercises-list' }>
                <div className={ 'exercises-wrapper' }>
                    <Headline text={ 'Список упражнений' }/>
                    <Tooltip title={ 'Нажмите на нужный пункт в таблице чтобы редактировать.' }>
                        <InfoCircleOutlined/>
                    </Tooltip>
                </div>
                <Table
                    locale={ {
                        emptyText: (
                            <Empty
                                description={ 'Чтоб начать, добавьте новые упражнения.' }
                                image={ Empty.PRESENTED_IMAGE_SIMPLE }/>
                        )
                    } }
                    onRow={ record => ({
                        onClick: () => setElementId(record.id)
                    }) }
                    sticky={ true }
                    className={ 'exercises-list-table' }
                    dataSource={ exercisesList.map(el => ({
                        ...el, 'tags': <div className={ 'exercises-list-tags' }>
                            { el.tags.map((tag: string, i: number) => (
                                <Tag key={ i } color={ tags.find(item => item.type === tag)?.color }>{ tag }</Tag>
                            )) }
                        </div>
                    })) }
                    columns={ columns } pagination={ false } size="small"/>
            </div>
        </div>
    );
};

export default HashExercises;