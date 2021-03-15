import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setDarkTheme} from "../redux/app-reducer";
import {stateInterface} from "../redux/types";
// import {useThemeSwitcher} from "react-css-theme-switcher";
import {Switch} from "antd";

interface propsInterface {
    darkTheme: boolean,
    setDarkTheme: (darkTheme: boolean) => void;
}

const ThemeToggle: React.FC<propsInterface> = ({setDarkTheme, darkTheme}) => {
    // @ts-ignore
    const {switcher, status, themes} = useThemeSwitcher();
    const toggleTheme = (isChecked: any) => {
        setDarkTheme(isChecked);
        switcher({theme: isChecked ? themes.dark : themes.light});
    };

    return (
        <Switch loading={status === "loading"}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            onChange={e => toggleTheme(e)}
        />
    );
};

let mapStateToProps = (state: stateInterface) => {
    return {
        darkTheme: state.app.darkTheme,
    }
};


export default connect(mapStateToProps, {setDarkTheme})(ThemeToggle);