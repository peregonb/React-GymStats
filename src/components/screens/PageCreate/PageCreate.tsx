import React, { FC } from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { HashTrainings } from './HashTrainings';
import { HashTemplates } from './HashTemplates';
import HashExercises from './Exercises/HashExercises';


const PageCreate: FC = () => {
    return (
        <div className={ 'content-create' }>
            <HashRouter>
                <div className={ 'tabs content-create-tabs' }>
                    <NavLink
                        to={ '/trainings' }
                        activeClassName={ 'active' }
                        className={ 'tabs-item' }>
                        Тренировка
                    </NavLink>
                    <NavLink
                        to={ '/templates' }
                        activeClassName={ 'active' }
                        className={ 'tabs-item' }>
                        Шаблон
                    </NavLink>
                    <NavLink
                        to={ '/exercises' }
                        activeClassName={ 'active' }
                        className={ 'tabs-item' }>
                        Упражнения
                    </NavLink>
                </div>
                <div className={ 'content-create-body' }>
                    <Switch>
                        <Route path={ '/trainings' } component={ () => <HashTrainings/> }/>
                        <Route path={ '/templates' } component={ () => <HashTemplates/> }/>
                        <Route path={ '/exercises' } component={ () => <HashExercises/> }/>
                    </Switch>
                </div>
            </HashRouter>
        </div>
    );
};

export default PageCreate;