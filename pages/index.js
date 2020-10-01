import React, { useEffect } from 'react';
import LaunchProgramsContainer from '../components/LaunchPrograms/LaunchProgramsContainer';
import { Provider } from 'react-redux';
import store from '../store';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

function App() {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <html lang ="en">
    <Head>
      <title>SpaceX</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="SpaceX" />
      <meta name="keywords" content="SpaceX" />
      <meta name="author" content="Vikrant Sharma" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <LaunchProgramsContainer />
      </Provider>
    </ThemeProvider>
    </html>
  );
}

export default App;