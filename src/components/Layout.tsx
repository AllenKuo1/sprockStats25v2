import React, { memo } from "react";
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import config from "data/config";
import MenuIcon from '@mui/icons-material/Menu';
import AppDrawer from "./AppDrawer";
import { User } from "firebase/auth";

interface Props {
  tab: keyof typeof config.tabs;
  page: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  onLogin?: (user: User) => void;
}
const Layout = memo((props: Props) => {
  const { children, header, tab, page, onLogin } = props;
  const { siteTitle, tabs } = config;
  const { title: tabTitle = "Default Tab Title", description: tabDescription = "Default Tab Description", pages } = tabs[tab] ?? {};
  const { title: pageTitle = "Default Page Title", description: pageDescription = "Default Page Description" } = pages?.[page as keyof typeof pages] ?? {};  
  const title = `${pageTitle} - ${siteTitle}`

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = React.useCallback(() => {
    setDrawerOpen((open) => !open);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          key="url"
          property="og:url"
          content={`${config.siteUrl}${page}`}
        />
        <meta key="title"
          property="og:title"
          content={pageTitle} />
        <meta
          key="description"
          name="description"
          content={pageDescription}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fbc02d" />
      </Head>
      <Box
        display="grid"
        height="100%"
        gridTemplateAreas={'"drawer header" "drawer main"'}
        gridTemplateRows="auto 1fr auto"
        sx={{
          gridTemplateColumns: {
            xs: "0px 1fr",
            xl: "220px 1fr"
          }
        }}
      >
        <AppDrawer
          tab={tab}
          page={page}
          open={drawerOpen}
          onDrawerToggle={handleDrawerToggle}
          onLogin={onLogin}
        />
        <AppBar
          position="sticky"
          enableColorOnDark
          sx={{ gridArea: "header" }}
        >
          <Toolbar
            variant="dense"
          >
            {header
              ??
              <>
                <IconButton
                  aria-label="toggle navbar"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    display: {
                      xl: "none",
                    },
                  }}
                >
                  <MenuIcon sx={{ color: "background.paper" }} />
                </IconButton>
                <Box component="span" sx={{ verticalAlign: "bottom" }}>
                  <Typography component="h2" variant="h5" noWrap sx={{ display: "inline", verticalAlign: "baseline", }}>
                    {pageTitle}
                  </Typography>
                </Box>
              </>
            }
          </Toolbar>
        </AppBar>
        <Container
          component="main"
          maxWidth="xl"
          sx={{ gridArea: "main", p: { xs: 1, sm: 2 }, position: "relative" }}
        >
          {children}
        </Container>
      </Box>
    </>
  )
});
Layout.displayName = "Layout";
export default Layout;