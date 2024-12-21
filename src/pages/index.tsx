import { CacheProvider } from '@emotion/react'
import { Box, Container, CssBaseline, Divider, IconButton, InputAdornment, Link, TextField, ThemeProvider, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import config from '../data/config'
import appTheme from '../styles/theme/appTheme'
import createEmotionCache from '../util/createEmotionCache'
import Layout from '../components/Layout'
import { memo, useEffect, useState } from 'react'
import { LockClockOutlined, Search } from '@mui/icons-material'
import Image from 'next/image'

const Home: NextPage = () => {
  const clientSideEmotionCache = createEmotionCache();

  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const search = (s: string) => {
    window.location.href = `/u/${s}`
  };

  return (
    <Layout tab="/" page="/">
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Head>
          <title>{config.siteTitle}</title>
          <meta
            key="url"
            property="og:url"
            content={config.siteUrl}
          />
          <meta
            key="title"
            property="og:title"
            content="Title rahhhhh" />
          <meta
            key="description"
            name="description"
            property="og:description"
            content="descriptiond dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fbc02d" />
        </Head>
        <Box component="main" sx={{
          display: "flex",
          flexDirection: "column",
          "& em": {
            color: "primary.main",
            fontStyle: "normal",
          }
        }}>
          <Box sx={{
            backgroundColor: "background.paper",
            backgroundImage: "url(https://raw.githubusercontent.com/ServiceStack/images/master/hero/black-white-city.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: "105px", sm: "220px" },
            overflow: "hidden",
          }}>
            <Box sx={{
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
                filter: "blur(2rem)",
              }
            }}>
              <Typography variant="h1" position="relative" textAlign="center" sx={{ fontSize: { xs: "2rem", sm: "4rem" } }}>
                <em>srpcokste</em> stsusa
              </Typography>
            </Box>
          </Box>
          <Container sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            py: { xs: 1, sm: 6 },
            gap: 6,
          }}>
            
            
            <Divider />
            <Box sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: "8%",
              "& .block": {
                display: "flex",
                flexDirection: "column",
                gap: 1,
                pt: 1
              },
            }}>
              <Box sx={{ display: "flex", flexDirection: "column", gridRow: "span 2", gap: 1, pt: 1 }} >
                <Typography variant="h2">
                  text
                </Typography>
                <Typography variant="body1">
                  aaaaaaaaaaa
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </CacheProvider>
    </Layout>
  )
}

export default Home