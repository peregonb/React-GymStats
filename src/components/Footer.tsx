import React from 'react';
import {NavLink} from 'react-router-dom';

const baseURL = process.env.PUBLIC_URL;

const Footer: React.FC = () => {
    return (
        <div className={'footer'}>
            <NavLink
                exact
                activeClassName={'active'}
                to={`${baseURL}/`}
                className={'footer-item icon-clipboard'}>
                Тренировки
            </NavLink>

            <NavLink
                activeClassName={'active'}
                to={`${baseURL}/create#/trainings`}
                className={'footer-item icon-contract'}>
                Создать
            </NavLink>

            <NavLink
                activeClassName={'active'}
                to={`${baseURL}/statistics`}
                className={'footer-item icon-bar-chart'}>
                Статистика
            </NavLink>

            <NavLink
                activeClassName={'active'}
                to={`${baseURL}/settings`}
                className={'footer-item icon-settings'}>
                Настройки
            </NavLink>
        </div>
    )
}

export default Footer;