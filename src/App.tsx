import React from 'react';
import {Layout} from "antd";
import "./assets/styles/App.scss";
import TrainingsList from "./components/screens/TrainingsList";
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import TrainingSingle from './components/screens/TrainingSingle';
import Settings from './components/screens/Settings';
import TrainingCreate from "./components/screens/TrainingCreate";
import TrainingsStatistic from './components/screens/TrainingsStatistic';

function App() {
    return (
        <Layout className={'wrapper'}>
            <Layout className={'content'}>
                <Route path={process.env.PUBLIC_URL + '/'} exact render={() => <TrainingsList/>}/>
                <Route path={process.env.PUBLIC_URL + '/single/:itemId?'} render={() => <TrainingSingle/>}/>
                <Route path={process.env.PUBLIC_URL + '/settings'} render={() => <Settings/>}/>
                <Route path={process.env.PUBLIC_URL + '/create'} render={() => <TrainingCreate/>}/>
                <Route path={process.env.PUBLIC_URL + '/statistics'} render={() => <TrainingsStatistic/>}/>
            </Layout>
            <Footer/>
        </Layout>
    );
}

export default App;
