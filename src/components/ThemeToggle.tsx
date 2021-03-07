import React from "react";
import {Switch} from "antd";
import useTheme, {THEME} from "../hooks/useTheme";
import {connect} from "react-redux";
import {setDarkTheme} from "../redux/app-reducer";
import { stateInterface } from "../redux/types";

interface propsInterface {
    darkTheme: boolean,
    setDarkTheme: (darkTheme: boolean) => void;
}

const ThemeToggle: React.FC<propsInterface> = ({setDarkTheme, darkTheme}) => {
    const {theme, setTheme} = useTheme();
    setDarkTheme(theme === THEME.DARK);
    const target = darkTheme ? THEME.LIGHT : THEME.DARK;

    return (
        <Switch
            checked={theme === THEME.DARK}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            onChange={() => setTheme(target)}
        />
    );
};

let mapStateToProps = (state: stateInterface) => {
    return {
        darkTheme: state.app.darkTheme,
    }
};


export default connect(mapStateToProps, {setDarkTheme})(ThemeToggle);