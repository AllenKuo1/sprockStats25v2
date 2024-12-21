import React from "react";
import { TextField, Box, Typography } from "@mui/material";

interface TextInputProps {
  textLabel: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, textLabel }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, width: "100%"   }}>
      <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
        {textLabel}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
};

export default TextInput;
