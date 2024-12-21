import React from 'react';
import 'styles/globals.css';
import { AppProps } from 'next/app';
import appTheme from "styles/theme/appTheme";
import createEmotionCache from 'util/createEmotionCache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { getApps, initializeApp } from 'firebase/app';
import { Analytics } from '@vercel/analytics/react';
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';

const firebaseConfig = {
  apiKey: "AIzaSyAakSyztLbbByVX46iB51RskqM4ToxCPKw",
  authDomain: "shit-fart.firebaseapp.com",
  databaseURL: "https://shit-fart-default-rtdb.firebaseio.com",
  projectId: "shit-fart",
  storageBucket: "shit-fart.appspot.com",
  messagingSenderId: "79388767228",
  appId: "1:79388767228:web:beb578406323a06bb8f879",
  measurementId: "G-GJ0Y1FZKRC"
};

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  if (!getApps().length) initializeApp(firebaseConfig);

  const clientSideEmotionCache = createEmotionCache();
  return (
    <ReduxProvider store={store}>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Analytics />
          <PersistGate loading={null} persistor={persistor}>
            {() => <Component {...pageProps} />}
          </PersistGate>
        </ThemeProvider>
      </CacheProvider>
    </ReduxProvider>
  );
};

export default MyApp;