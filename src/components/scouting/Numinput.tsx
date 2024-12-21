import React from "react";
import { TextField, Box, Typography } from "@mui/material";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  textLabel?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  textLabel,
}) => {
  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1.5 }}
    >
      {textLabel && (
        <Typography
          variant="body1"
          sx={{
            marginBottom: 0.5,
            textAlign: "left",
            color: "text.primary",
          }}
        >
          {textLabel}
        </Typography>
      )}
      <TextField
        fullWidth
        type="number"
        variant="outlined"
        label={label}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </Box>
  );
};

export default NumberInput;
