import React, {FC, memo} from 'react';
import {Layout} from 'antd';
import './assets/styles/App.scss';
import PageList from './components/screens/PageList';
import Footer from './components/Footer';
import {Route} from 'react-router-dom';
import TrainingSingle from './components/screens/PageSingle';
import Settings from './components/screens/Settings';
import PageCreate from './components/screens/PageCreate/PageCreate';
import TrainingsStatistic from './components/screens/PageStatistic';

const App: FC = () => (
    <Layout className={'wrapper'}>
        <Layout className={'content'}>
            <Route path={'/'} exact render={() => <PageList/>}/>
            <Route path={'/single/:itemId?'} render={() => <TrainingSingle/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
            <Route path={'/create'} render={() => <PageCreate/>}/>
            <Route path={'/statistics'} render={() => <TrainingsStatistic/>}/>
        </Layout>
        <Footer/>
    </Layout>
);

export default memo(App);
