"use strict";
exports.__esModule = true;
var icons_material_1 = require("@mui/icons-material"); // Removed unused imports
var config = {
    siteTitle: "my sanity",
    siteUrl: "e",
    siteDescription: "",
    tabs: {
        "/": {
            title: "Home",
            description: "",
            icon: icons_material_1.EditLocationAlt,
            "showInSidebar": false,
            pages: {
                "/": {
                    title: "Ahjahja",
                    description: ""
                }
            }
        },
        "/scouting": {
            title: "Scouting",
            description: "",
            icon: icons_material_1.EditLocationAlt,
            "showInSidebar": true,
            pages: {
                "/match": {
                    title: "Match Scouting",
                    description: "",
                    requireLogin: true
                },
                "/pit": {
                    title: "Pit Scouting",
                    description: "",
                    requireLogin: true
                }
            }
        },
        "/account": {
            title: "Account",
            description: "",
            icon: icons_material_1.ManageAccounts,
            "showInSidebar": true,
            pages: {
                "/info": {
                    title: "Information",
                    description: "",
                    requireLogin: false
                },
                "/profile": {
                    title: "Profile",
                    description: "",
                    requireLogin: true
                }
            }
        }
    }
};
exports["default"] = config;
