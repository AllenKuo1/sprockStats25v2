import { Description, ManageAccounts, EditLocationAlt } from "@mui/icons-material"; // Removed unused imports

const config = {
  siteTitle: "my sanity",
  siteUrl: "e",
  siteDescription: "",
  tabs: {
    "/": {
      title: "Home",
      description: "",
      icon: EditLocationAlt,
      "showInSidebar": false,
      pages: {
        "/": {
          title: "Ahjahja",
          description: "",
        }
      }
    },
    "/scouting": {
      title: "Scouting",
      description: "",
      icon: EditLocationAlt,
      "showInSidebar": true,
      pages: {
        "/match": {
          title: "Match Scouting",
          description: "",
          requireLogin: true,
        },
        "/pit": {
          title: "Pit Scouting",
          description: "",
          requireLogin: true,
        },
        "/test": { title: "Json test thingy (client)", description: "", requireLogin: true, },
      }
    },
    "/account": {
      title: "Account",
      description: "",
      icon: ManageAccounts,
      "showInSidebar": true,
      pages: {
        "/info": {
          title: "Information",
          description: "",
          requireLogin: false,
        },
        "/profile": {
          title: "Profile",
          description: "",
          requireLogin: true,
        },
        // "/settings": {
        //   title: "Settings",
        //   description: "",
        //   requireLogin: true,
        // }
      }
    }
  },
};

export default config;
