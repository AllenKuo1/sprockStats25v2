"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var material_1 = require("@mui/material");
var auth_1 = require("firebase/auth");
var react_1 = require("react");
var photoUrlRegex = /^(https?:\/\/)?([a-zA-Z0-9\-\.]+)(\.[a-zA-Z]{2,})(\/[^\s]*\.(jpg|jpeg|png|gif|bmp|webp))(\?[^\s]*)?$/;
var UserDetails = function (props) {
    var user = props.user;
    var _a = react_1.useState(user.displayName || ""), displayName = _a[0], setDisplayName = _a[1];
    var _b = react_1.useState(user.photoURL || ""), photoURL = _b[0], setPhotoURL = _b[1];
    var _c = react_1.useState(false), isEditing = _c[0], setIsEditing = _c[1];
    var _d = react_1.useState(""), error = _d[0], setError = _d[1];
    var handleSave = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!displayName.trim()) {
                        setError("Username cannot be empty");
                        return [2 /*return*/];
                    }
                    if (!photoUrlRegex.test(photoURL)) {
                        setError("Photo is not a URL");
                        return [2 /*return*/];
                    }
                    // Update user profile in Firebase
                    return [4 /*yield*/, auth_1.updateProfile(user, {
                            displayName: displayName,
                            photoURL: photoURL
                        })];
                case 1:
                    // Update user profile in Firebase
                    _a.sent();
                    setError("");
                    setIsEditing(false);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setError("Failed to update profile. Please try again.");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(material_1.Box, { sx: { display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" } },
        react_1["default"].createElement(material_1.Avatar, { alt: displayName || "User Avatar", src: photoURL || "", sx: { width: 100, height: 100 } }),
        isEditing ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(material_1.TextField, { label: "Username", variant: "outlined", value: displayName, onChange: function (e) { return setDisplayName(e.target.value); }, sx: {
                    width: 200,
                    '& .MuiInputBase-root': {
                        height: 40
                    },
                    '& .MuiInputBase-input': {
                        padding: '12px'
                    }
                } }),
            react_1["default"].createElement(material_1.TextField, { variant: "h6", label: "Profile Picture URL", variant: "outlined", sx: {
                    width: 200,
                    '& .MuiInputBase-root': {
                        height: 40
                    },
                    '& .MuiInputBase-input': {
                        padding: '12px'
                    }
                }, value: photoURL, onChange: function (e) { return setPhotoURL(e.target.value); } }),
            error && react_1["default"].createElement(material_1.Typography, { color: "error" }, error),
            react_1["default"].createElement(material_1.Button, { variant: "contained", onClick: handleSave }, "Save"),
            react_1["default"].createElement(material_1.Button, { variant: "outlined", onClick: function () { return setIsEditing(false); } }, "Cancel"))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(material_1.Typography, { variant: "h6", sx: { fontWeight: 'bold', color: 'text.primary', textAlign: 'center' } }, displayName || "No username"),
            react_1["default"].createElement(material_1.Typography, { variant: "body2", sx: {
                    color: '#007bff',
                    textAlign: 'center',
                    fontStyle: 'italic'
                } }, user.email || "No email"),
            react_1["default"].createElement(material_1.Button, { variant: "outlined", onClick: function () { return setIsEditing(true); } }, "Edit Profile")))));
};
exports["default"] = UserDetails;
