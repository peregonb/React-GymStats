import React, {FC, ReactNode, memo} from 'react';
import {ConfigProvider, theme} from 'antd';

const {darkAlgorithm} = theme;

interface IThemeProps {
    children: ReactNode;
}

const Theme: FC<IThemeProps> = ({children}) => (
    <ConfigProvider theme={{
        algorithm: darkAlgorithm,
        token: {
            fontFamily: 'TT Norms',
            colorPrimary: '#1cab9c',
            colorError: '#ab1c2b',
            borderRadius: 2
        }
    }}>
        {children}
    </ConfigProvider>
)

export default memo(Theme);