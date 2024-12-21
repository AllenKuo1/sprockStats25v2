import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, Divider } from "@mui/material";
import Layout from "../../components/Layout";
import { getUserStatus } from "../../util/getUserStatus";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import UserDetails from "../../components/profile/UserDetails";

const Profile: NextPage = () => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    const auth = getAuth();
    getUserStatus().then((user) => {
      setUser(user);
    });
    onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
    });
  }, []);

  console.log(user);
  return (
    <Layout tab="/account" page="/profile">
      {!user ? (
        ""
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifySelf: "center",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiButtonBase-root": {
              boxShadow: 1,
              backgroundColor: "info.main",
            },
            "& *:before": {
              border: "none",
              borderStyle: "none !important",
            },
            "& .MuiFilledInput-root": {
              borderRadius: "4px",
            },
          }}
        >
          <UserDetails user={user} />
        </Box>
      )}
    </Layout>
  );
};
export default Profile;