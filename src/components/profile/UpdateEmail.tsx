import { Box, Button, TextField } from "@mui/material";
import { FirebaseError } from "firebase/app";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  User,
} from "firebase/auth";
import React, { useState } from "react";
import { authErrors } from "../../util/authErrors";
import PasswordTextField from "../app/PasswordTextField";

interface Props {
  user: User;
}

const UpdateEmail = (props: Props) => {
  const { user } = props;

  const [newEmail, setNewEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);

  function tryEmail() {
    if (!user) {
      setError("Not logged in.");
      return;
    }
    if (!user.email) {
      setError("Critical error - no email found.");
      return;
    }
    if (!newEmail) {
      setError("No email found.");
      return;
    }
    reauthenticateWithCredential(
      user,
      EmailAuthProvider.credential(user.email, password)
    )
      .then(() => {
        setError("Checking...");
        updateEmail(user, newEmail)
          .then(() => {
            setError("Updated.");
          })
          .catch((error: FirebaseError) => {
            setError(
              authErrors[error.code.split("/")[1] as keyof typeof authErrors]
            );
          });
      })
      .catch(() => {
        setError("Failed to authenticate.");
      });
  }

  return (
    <Box>
      <h1>Update Email</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {isEditing ? (
          <>
            <TextField
              label="Current Email"
              value={user?.email ?? "Not Logged In"}
              variant="standard"
              disabled
            />
            <TextField
              variant="outlined"
              label="New Email"
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
                setError("");
              }}
            />
            <PasswordTextField
              variant="outlined"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              ariaId="email"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button onClick={tryEmail}>Change Email</Button>
              <span>{error}</span>
            </Box>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit Email</Button>
        )}
      </Box>
    </Box>
  );
};

export default UpdateEmail;
