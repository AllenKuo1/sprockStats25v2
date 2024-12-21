"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("styles/globals.css");
var appTheme_1 = require("styles/theme/appTheme");
var createEmotionCache_1 = require("util/createEmotionCache");
var material_1 = require("@mui/material");
var react_2 = require("@emotion/react");
var app_1 = require("firebase/app");
var react_3 = require("@vercel/analytics/react");
var react_redux_1 = require("react-redux");
var store_1 = require("store/store");
var react_4 = require("redux-persist/integration/react");
var firebaseConfig = {
    apiKey: "AIzaSyAakSyztLbbByVX46iB51RskqM4ToxCPKw",
    authDomain: "shit-fart.firebaseapp.com",
    databaseURL: "https://shit-fart-default-rtdb.firebaseio.com",
    projectId: "shit-fart",
    storageBucket: "shit-fart.appspot.com",
    messagingSenderId: "79388767228",
    appId: "1:79388767228:web:beb578406323a06bb8f879",
    measurementId: "G-GJ0Y1FZKRC"
};
var MyApp = function (props) {
    var Component = props.Component, pageProps = props.pageProps;
    if (!app_1.getApps().length)
        app_1.initializeApp(firebaseConfig);
    var clientSideEmotionCache = createEmotionCache_1["default"]();
    return (react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(react_2.CacheProvider, { value: clientSideEmotionCache },
            react_1["default"].createElement(material_1.ThemeProvider, { theme: appTheme_1["default"] },
                react_1["default"].createElement(material_1.CssBaseline, null),
                react_1["default"].createElement(react_3.Analytics, null),
                react_1["default"].createElement(react_4.PersistGate, { loading: null, persistor: store_1.persistor }, function () { return react_1["default"].createElement(Component, __assign({}, pageProps)); })))));
};
exports["default"] = MyApp;
