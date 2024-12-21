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
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var auth_1 = require("firebase/auth");
var database_1 = require("firebase/database");
var link_1 = require("next/link");
var react_1 = require("react");
var config_1 = require("data/config");
var LoginButton_1 = require("./app/LoginButton");
var RegisterButton_1 = require("./app/RegisterButton");
var DRAWER_WIDTH_PX = 220;
var ListItemTab = function (_a) {
    var tabTitle = _a.tabTitle, startOpen = _a.startOpen, icon = _a.icon, children = _a.children;
    var _b = react_1["default"].useState(startOpen), open = _b[0], setOpen = _b[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.ListItemButton, { onClick: function () { return setOpen(!open); } },
            react_1["default"].createElement(material_1.ListItemIcon, { sx: { minWidth: 0, pr: 1 } }, icon),
            react_1["default"].createElement(material_1.ListItemText, { primary: tabTitle }),
            open ? react_1["default"].createElement(icons_material_1.ExpandLess, { height: "1.5rem" }) : react_1["default"].createElement(icons_material_1.ExpandMore, { height: "1.5rem" })),
        react_1["default"].createElement(material_1.Collapse, { "in": open, timeout: "auto", unmountOnExit: true }, children)));
};
var AppDrawer = react_1["default"].memo(function (props) {
    var _a;
    var tab = props.tab, page = props.page, open = props.open, onDrawerToggle = props.onDrawerToggle, onLogin = props.onLogin;
    var siteTitle = config_1["default"].siteTitle, siteUrl = config_1["default"].siteUrl, tabs = config_1["default"].tabs;
    var _b = tabs[tab], currentTab = _b.title, pages = _b.pages;
    var currentPage = ((_a = pages === null || pages === void 0 ? void 0 : pages[page]) !== null && _a !== void 0 ? _a : {}).title;
    var _c = react_1.useState(), user = _c[0], setUser = _c[1];
    react_1.useEffect(function () {
        var db = database_1.getDatabase();
        getUserStatus().then(function (user) {
            setUser(user);
        });
        var auth = auth_1.getAuth();
        auth_1.onAuthStateChanged(auth, function (user) {
            setUser(user);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var _d = react_1.useState(false), login = _d[0], setLogin = _d[1];
    var _e = react_1.useState(false), register = _e[0], setRegister = _e[1];
    var drawerContent = (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Typography, { component: "h1", variant: "h4", sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "48px"
            } },
            react_1["default"].createElement(link_1["default"], { href: "/" }, siteTitle)),
        react_1["default"].createElement(material_1.Divider, null),
        react_1["default"].createElement(material_1.Box, { sx: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4px",
                m: "4px"
            } },
            !user ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(material_1.Button, { onClick: function () { return setLogin(true); } }, "Log In"),
                react_1["default"].createElement(material_1.Button, { onClick: function () { return setRegister(true); } }, "Register"))) : null,
            react_1["default"].createElement(LoginButton_1["default"], { open: login, onClose: function () { return setLogin(false); } },
                react_1["default"].createElement(material_1.Button, { onClick: function () {
                        setRegister(true);
                        setLogin(false);
                    }, sx: { color: "text.secondary" } }, "Sign Up Instead")),
            react_1["default"].createElement(RegisterButton_1["default"], { open: register, onClose: function () { return setRegister(false); } },
                react_1["default"].createElement(material_1.Button, { onClick: function () {
                        setRegister(false);
                        setLogin(true);
                    }, sx: { color: "text.secondary" } }, "Log In Instead")),
            user ? (react_1["default"].createElement(material_1.Button, { sx: { gridColumn: "span 2" }, onClick: function () {
                    auth_1.signOut(auth_1.getAuth());
                } }, "Log Out")) : null),
        react_1["default"].createElement(material_1.Divider, null),
        react_1["default"].createElement(material_1.List, null, Object.entries(tabs)
            .filter(function (_a) {
            var tabConfig = _a[1];
            return tabConfig.showInSidebar !== false;
        })
            .map(function (_a, i) {
            var tabPath = _a[0], _b = _a[1], tabTitle = _b.title, IconComponent = _b.icon, pages = _b.pages;
            return (react_1["default"].createElement(ListItemTab, { key: i, tabTitle: tabTitle, startOpen: tabTitle === currentTab, icon: react_1["default"].createElement(IconComponent, null) }, Object.entries(pages).map(function (_a) {
                var pagePath = _a[0], pg = _a[1];
                return (react_1["default"].createElement(material_1.ListItem, { key: pg.title, sx: {
                        p: 0,
                        "& .Mui-focusVisible": {
                            color: "#fff"
                        }
                    } },
                    react_1["default"].createElement(material_1.ListItemIcon, { sx: { minWidth: 0, pr: 1, pl: 3 } },
                        react_1["default"].createElement(icons_material_1.ArrowRight, { height: "1.5rem" })),
                    react_1["default"].createElement(material_1.ListItemButton, { tabIndex: -1, sx: __assign({ p: 0 }, (currentPage === pg.title && {
                            bgcolor: "primary.main",
                            ":hover": {
                                bgcolor: "primary.main",
                                filter: "brightness(110%)"
                            }
                        })), disabled: pg.requireLogin && !user },
                        react_1["default"].createElement(link_1["default"], { href: "" + tabPath + pagePath, passHref: true },
                            react_1["default"].createElement(material_1.Link, { sx: __assign({ display: "block", width: "100%", px: 2, py: 1.5 }, (currentPage === pg.title && {
                                    color: "background.paper",
                                    fontWeight: "bold"
                                })), variant: "body2" }, pg.title)))));
            })));
        })),
        react_1["default"].createElement(material_1.Divider, { sx: { marginTop: "auto", mb: 1 } })));
    return (react_1["default"].createElement(material_1.Box, { component: "nav", gridArea: "drawer", sx: {
            width: {
                xs: 0,
                xl: DRAWER_WIDTH_PX + "px"
            }
        } },
        react_1["default"].createElement(material_1.Drawer, { variant: "temporary", anchor: "left", open: open, onClose: onDrawerToggle, ModalProps: {
                keepMounted: true
            }, PaperProps: {
                sx: {
                    width: DRAWER_WIDTH_PX,
                    display: {
                        xs: "flex",
                        xl: "none"
                    },
                    boxShadow: 6,
                    backgroundImage: "none"
                }
            } }, drawerContent),
        react_1["default"].createElement(material_1.Drawer, { variant: "permanent", open: true, PaperProps: {
                sx: {
                    width: DRAWER_WIDTH_PX,
                    display: {
                        xs: "none",
                        xl: "flex"
                    }
                }
            } }, drawerContent)));
});
AppDrawer.displayName = "AppDrawer";
exports["default"] = AppDrawer;
