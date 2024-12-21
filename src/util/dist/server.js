"use strict";
exports.__esModule = true;
exports.server = void 0;
var dev = process.env.NODE_ENV !== 'production';
exports.server = dev ? 'http://localhost:3000' : 'https://www.templateThing.com';
