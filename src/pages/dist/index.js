"use strict";
exports.__esModule = true;
var react_1 = require("@emotion/react");
var material_1 = require("@mui/material");
var head_1 = require("next/head");
var config_1 = require("../data/config");
var appTheme_1 = require("../styles/theme/appTheme");
var createEmotionCache_1 = require("../util/createEmotionCache");
var Layout_1 = require("../components/Layout");
var react_2 = require("react");
var Home = function () {
    var clientSideEmotionCache = createEmotionCache_1["default"]();
    var _a = react_2.useState(""), username = _a[0], setUsername = _a[1];
    var _b = react_2.useState(""), error = _b[0], setError = _b[1];
    var search = function (s) {
        window.location.href = "/u/" + s;
    };
    return (React.createElement(Layout_1["default"], { tab: "/", page: "/" },
        React.createElement(react_1.CacheProvider, { value: clientSideEmotionCache },
            React.createElement(material_1.ThemeProvider, { theme: appTheme_1["default"] },
                React.createElement(material_1.CssBaseline, null),
                React.createElement(head_1["default"], null,
                    React.createElement("title", null, config_1["default"].siteTitle),
                    React.createElement("meta", { key: "url", property: "og:url", content: config_1["default"].siteUrl }),
                    React.createElement("meta", { key: "title", property: "og:title", content: "Title rahhhhh" }),
                    React.createElement("meta", { key: "description", name: "description", property: "og:description", content: "descriptiond dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" }),
                    React.createElement("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }),
                    React.createElement("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }),
                    React.createElement("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }),
                    React.createElement("link", { rel: "manifest", href: "/manifest.json" }),
                    React.createElement("meta", { name: "theme-color", content: "#fbc02d" })),
                React.createElement(material_1.Box, { component: "main", sx: {
                        display: "flex",
                        flexDirection: "column",
                        "& em": {
                            color: "primary.main",
                            fontStyle: "normal"
                        }
                    } },
                    React.createElement(material_1.Box, { sx: {
                            backgroundColor: "background.paper",
                            backgroundImage: "url(https://raw.githubusercontent.com/ServiceStack/images/master/hero/black-white-city.jpg)",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: { xs: "105px", sm: "220px" },
                            overflow: "hidden"
                        } },
                        React.createElement(material_1.Box, { sx: {
                                position: "relative",
                                "::before": {
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    margin: "auto",
                                    width: "calc(100% - 0.5rem)",
                                    height: "calc(100% - 1rem)",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    filter: "blur(2rem)"
                                }
                            } },
                            React.createElement(material_1.Typography, { variant: "h1", position: "relative", textAlign: "center", sx: { fontSize: { xs: "2rem", sm: "4rem" } } },
                                React.createElement("em", null, "srpcokste"),
                                " stsusa"))),
                    React.createElement(material_1.Container, { sx: {
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            py: { xs: 1, sm: 6 },
                            gap: 6
                        } },
                        React.createElement(material_1.Divider, null),
                        React.createElement(material_1.Box, { sx: {
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                                gap: "8%",
                                "& .block": {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1,
                                    pt: 1
                                }
                            } },
                            React.createElement(material_1.Box, { sx: { display: "flex", flexDirection: "column", gridRow: "span 2", gap: 1, pt: 1 } },
                                React.createElement(material_1.Typography, { variant: "h2" }, "text"),
                                React.createElement(material_1.Typography, { variant: "body1" }, "aaaaaaaaaaa")))))))));
};
exports["default"] = Home;
