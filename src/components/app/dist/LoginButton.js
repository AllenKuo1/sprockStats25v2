"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var auth_1 = require("firebase/auth");
var PasswordTextField_1 = require("./PasswordTextField");
var ResetPassword_1 = require("./ResetPassword");
var LoginButton = (function (props) {
    var open = props.open, onClose = props.onClose, children = props.children, onLogin = props.onLogin;
    var theme = material_1.useTheme();
    var fullScreen = material_1.useMediaQuery(theme.breakpoints.down('sm'));
    var auth = auth_1.getAuth();
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), error = _b[0], setError = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(true), rememberMe = _d[0], setRememberMe = _d[1];
    var _e = react_1.useState(false), resetOpen = _e[0], setResetOpen = _e[1];
    function handleLogin(e) {
        e.preventDefault();
        if (!email) {
            setError("No email given.");
            return;
        }
        if (!password) {
            setError("No password given.");
            return;
        }
        auth_1.signInWithEmailAndPassword(auth, email.trim(), password)
            .then(function (userCredential) {
            if (userCredential != null && userCredential.user != null) {
                // Signed in
                auth_1.setPersistence(auth, rememberMe ? auth_1.browserLocalPersistence : auth_1.browserSessionPersistence);
                setError("");
                onClose();
                onLogin === null || onLogin === void 0 ? void 0 : onLogin(userCredential.user);
            }
        })["catch"](function () {
            setError("Failed to authenticate.");
        });
    }
    ;
    return (react_1["default"].createElement(material_1.Dialog, { open: open, onClose: onClose, fullScreen: fullScreen, fullWidth: true, maxWidth: "sm" },
        react_1["default"].createElement(material_1.DialogTitle, { sx: {
                paddingBottom: "12px",
                display: "flex",
                justifyContent: "space-between"
            } },
            react_1["default"].createElement(material_1.Typography, { variant: "h2", component: "span" }, "Log In"),
            react_1["default"].createElement(material_1.IconButton, { onClick: onClose },
                react_1["default"].createElement(icons_material_1.CloseOutlined, null))),
        react_1["default"].createElement(material_1.DialogContent, null,
            react_1["default"].createElement(material_1.Box, { component: "form", sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px 6px",
                    "& .MuiFormHelperText-root": {
                        mt: 1,
                        lineHeight: 1
                    }
                } },
                react_1["default"].createElement(material_1.TextField, { label: "Email", value: email, onChange: function (e) {
                        setEmail(e.target.value);
                        setError("");
                    }, variant: "filled" }),
                react_1["default"].createElement(PasswordTextField_1["default"], { label: "Password", value: password, onChange: function (e) {
                        setPassword(e.target.value);
                        setError("");
                    }, ariaId: "logn-pass" }),
                react_1["default"].createElement(material_1.FormControlLabel, { control: react_1["default"].createElement(material_1.Checkbox, { checked: rememberMe, onChange: function (e) { return setRememberMe(e.target.checked); } }), label: "Remember Me" }),
                react_1["default"].createElement(material_1.Divider, null),
                react_1["default"].createElement(material_1.Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                    react_1["default"].createElement(material_1.Button, { type: "submit", onClick: handleLogin }, "Log In"),
                    error),
                react_1["default"].createElement(material_1.Box, { sx: { display: "flex", flexDirection: "column" } },
                    react_1["default"].createElement(material_1.Button, { onClick: function () { return setResetOpen(true); }, sx: { color: "text.secondary" } }, "Forgot Password?"),
                    react_1["default"].createElement(ResetPassword_1["default"], { open: resetOpen, onClose: function () { return setResetOpen(false); }, email: email }),
                    children)))));
});
exports["default"] = LoginButton;
