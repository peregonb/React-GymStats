import React from 'react';
import {Layout} from "antd";
import "./assets/styles/App.less";
import "./assets/styles/App.scss";
import PageList from "./components/screens/PageList";
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import TrainingSingle from './components/screens/PageSingle';
import Settings from './components/screens/Settings';
import PageCreate from "./components/screens/PageCreate/PageCreate";
import TrainingsStatistic from './components/screens/PageStatistic';

function App() {
    return (
        <Layout className={'wrapper'}>
            <Layout className={'content'}>
                <Route path={process.env.PUBLIC_URL + '/'} exact render={() => <PageList/>}/>
                <Route path={process.env.PUBLIC_URL + '/single/:itemId?'} render={() => <TrainingSingle/>}/>
                <Route path={process.env.PUBLIC_URL + '/settings'} render={() => <Settings/>}/>
                <Route path={process.env.PUBLIC_URL + '/create'} render={() => <PageCreate/>}/>
                <Route path={process.env.PUBLIC_URL + '/statistics'} render={() => <TrainingsStatistic/>}/>
            </Layout>
            <Footer/>
        </Layout>
    );
}

export default App;
