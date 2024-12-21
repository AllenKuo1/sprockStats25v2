"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var auth_1 = require("firebase/auth");
var PasswordTextField_1 = require("./PasswordTextField");
var authErrors_1 = require("../../util/authErrors");
var RegisterButton = function (props) {
    var open = props.open, onClose = props.onClose, children = props.children, onLogin = props.onLogin;
    var theme = material_1.useTheme();
    var fullScreen = material_1.useMediaQuery(theme.breakpoints.down("sm"));
    var auth = auth_1.getAuth();
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), error = _b[0], setError = _b[1];
    var _c = react_1.useState(""), username = _c[0], setUsername = _c[1];
    var _d = react_1.useState(""), password = _d[0], setPassword = _d[1];
    var _e = react_1.useState(true), rememberMe = _e[0], setRememberMe = _e[1];
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function handleRegister(e) {
        e.preventDefault();
        if (!username) {
            setError("No username given.");
            return;
        }
        if (!email) {
            setError("No email given.");
            return;
        }
        if (!emailRegex.test(email)) {
            setError("Invalid email format.");
            return;
        }
        if (!password) {
            setError("No password given.");
            return;
        }
        auth_1.createUserWithEmailAndPassword(auth, email.trim(), password)
            .then(function (userCredential) {
            if (userCredential != null && userCredential.user != null) {
                // Signed in
                auth_1.setPersistence(auth, rememberMe ? auth_1.browserLocalPersistence : auth_1.browserSessionPersistence).then(function () {
                    return auth_1.updateProfile(userCredential.user, {
                        displayName: username,
                        photoURL: "https://yt3.ggpht.com/yti/ANjgQV-hbCIRDUyjCcgZpRH6eMhQGb94J-lrs5_I5O6Cm00D3R0=s88-c-k-c0x00ffffff-no-rj"
                    });
                });
                setError("");
                onClose();
                onLogin === null || onLogin === void 0 ? void 0 : onLogin(userCredential.user);
            }
        })["catch"](function (error) {
            setError(authErrors_1.authErrors[error.code.split("/")[1]]);
        });
    }
    return (react_1["default"].createElement(material_1.Dialog, { open: open, onClose: onClose, fullScreen: fullScreen, fullWidth: true, maxWidth: "sm" },
        react_1["default"].createElement(material_1.DialogTitle, { sx: {
                paddingBottom: "12px",
                display: "flex",
                justifyContent: "space-between"
            } },
            react_1["default"].createElement(material_1.Typography, { variant: "h2", component: "span" }, "Registerrrr"),
            react_1["default"].createElement(material_1.IconButton, { onClick: onClose },
                react_1["default"].createElement(icons_material_1.CloseOutlined, null))),
        react_1["default"].createElement(material_1.DialogContent, null,
            react_1["default"].createElement(material_1.Box, { sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px 6px",
                    "& .MuiFormHelperText-root": {
                        mt: 1,
                        lineHeight: 1
                    }
                } },
                react_1["default"].createElement(material_1.TextField, { label: "Username", value: username, onChange: function (e) {
                        setUsername(e.target.value);
                        setError("");
                    }, variant: "filled" }),
                react_1["default"].createElement(material_1.TextField, { label: "Email", value: email, helperText: "Your email is used for authentication and is hidden to other users.", onChange: function (e) {
                        setEmail(e.target.value);
                        setError("");
                    }, variant: "filled" }),
                react_1["default"].createElement(PasswordTextField_1["default"], { label: "Password", value: password, onChange: function (e) {
                        setPassword(e.target.value);
                        setError("");
                    }, ariaId: "reg-pass" }),
                react_1["default"].createElement(material_1.FormControlLabel, { control: react_1["default"].createElement(material_1.Checkbox, { checked: rememberMe, onChange: function (e) { return setRememberMe(e.target.checked); } }), label: "Remember Me" }),
                react_1["default"].createElement(material_1.Divider, null),
                react_1["default"].createElement(material_1.Box, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    } },
                    react_1["default"].createElement(material_1.Button, { type: "submit", onClick: handleRegister }, "Enter"),
                    error),
                react_1["default"].createElement(material_1.Box, { sx: { display: "flex", flexDirection: "column" } }, children)))));
};
exports["default"] = RegisterButton;
