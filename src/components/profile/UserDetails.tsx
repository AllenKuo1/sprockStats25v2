import { Box, Avatar, Typography, TextField, Button, Divider } from "@mui/material";
import { User, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import UpdateEmail from "components/profile/UpdateEmail";

interface Props {
  user: User;
}

const photoUrlRegex = /^(https?:\/\/)?([a-zA-Z0-9\-\.]+)(\.[a-zA-Z]{2,})(\/[^\s]*\.(jpg|jpeg|png|gif|bmp|webp))(\?[^\s]*)?$/;

const UserDetails = (props: Props) => {
  const { user } = props;
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    try {
      if (!displayName.trim()) {
        setError("Username cannot be empty");
        return;
      }
      if (!photoUrlRegex.test(photoURL)) {
        setError("Photo is not a URL");
        return;
      }


      // Update user profile in Firebase
      await updateProfile(user, {
        displayName,
        photoURL
      });

      setError("");
      setIsEditing(false);
    } catch (error) {
      setError("Failed to update profile. Please try again.");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
      <Avatar
        alt={displayName || "User Avatar"}
        src={photoURL || ""}
        sx={{ width: 100, height: 100 }}
      />
      
      {isEditing ? (
        <>
          <TextField
            label="Username"
            variant="outlined"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            sx={{
              width: 200,
              '& .MuiInputBase-root': {
                height: 40,
              },
              '& .MuiInputBase-input': {
                padding: '12px',
              },
            }}
          />
          <TextField
            variant="h6"
            label="Profile Picture URL"
            // variant="outlined"
            sx={{
              width: 200,
              '& .MuiInputBase-root': {
                height: 40,
              },
              '& .MuiInputBase-input': {
                padding: '12px',
              },
            }}
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button variant="contained" onClick={handleSave}>Save</Button>
          <Button variant="outlined" onClick={() => setIsEditing(false)}>Cancel</Button>
        </>
      ) : (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', textAlign: 'center' }}>
            {displayName || "No username"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#007bff',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
            {user.email || "No email"}
          </Typography>
          <Button variant="outlined" onClick={() => setIsEditing(true)}>Edit Profile</Button>
        </>
      )}
      <Divider />
      {/* <UpdateEmail user={user} /> */}
    </Box>
  );
};

export default UserDetails;
