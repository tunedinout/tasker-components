import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '../themes';


const withThemeProvider = (Story: React.ComponentType) => (
    <ThemeProvider theme={DefaultTheme}>
        <Story/>
    </ThemeProvider>
)

export default withThemeProvider;