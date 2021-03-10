import React from 'react';
import {Layout} from "antd";
import "./assets/styles/App.less";
import Header from "./components/Header";
import TrainingsList from "./components/TrainingsList";

function App() {
    return (
        <Layout className={'wrapper'}>
            <Header/>
            <Layout className={'content'}>
                <TrainingsList/>
            </Layout>
        </Layout>
    );
}

export default App;
