import { ThemeProvider } from "styled-components";

import ThemeToggle from "../components/ThemeToggle";
import { useDarkMode } from "../hooks/useDarkMode";
import { GlobalStyles } from "../styles/global";
import { dark, light } from "../styles/theme";

function MyApp({ Component, pageProps }) {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? light : dark;

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
