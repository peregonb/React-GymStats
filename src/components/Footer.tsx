import React from "react";
import {NavLink} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <div className={'footer'}>
            <NavLink to={process.env.PUBLIC_URL + '/'} exact activeClassName={'active'}
                     className={'footer-item icon-clipboard'}>Тренировки</NavLink>

            <NavLink to={process.env.PUBLIC_URL + '/create#/trainings'} activeClassName={'active'}
                     className={'footer-item icon-contract'}>Создать</NavLink>

            <NavLink to={process.env.PUBLIC_URL + '/statistics'} activeClassName={'active'}
                     className={'footer-item icon-bar-chart'}>Статистика</NavLink>

            <NavLink to={process.env.PUBLIC_URL + '/settings'} activeClassName={'active'}
                     className={'footer-item icon-settings'}>Настройки</NavLink>
        </div>
    )
}

export default Footer;