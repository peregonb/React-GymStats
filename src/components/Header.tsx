import {PageHeader} from "antd";
import ThemeToggle from "./ThemeToggle";
import React from "react";

const Header: React.FC = () => {
    return <PageHeader
        className="header"
        onBack={() => null}
        backIcon={false}
        title="Тренировки"
        extra={<ThemeToggle/>}
        ghost={false}
        // subTitle="This is a subtitle"
    />
}

export default Header;