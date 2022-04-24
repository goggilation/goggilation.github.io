//Using react context provider.
import * as React from "react";

const ThemeContext = React.createContext();

function getTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(`useTheme must be used within a CountProvider`);
  }
  return context;
}

function ThemeProvider(props) {
    const cookieTheme = localStorage.getItem("theme");
  const [theme, setTheme] = React.useState(cookieTheme);
  const value = React.useMemo(() => [theme, setTheme], [theme]);
  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeProvider, getTheme };
