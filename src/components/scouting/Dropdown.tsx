import React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";

interface DropdownProps {
  label: string;
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (value: string | number) => void;
  textLabel?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  textLabel,
}) => {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string | number);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {textLabel && (
        <Typography variant="body1" sx={{ marginBottom: 0.5, color: "text.primary", }}>
          {textLabel}
        </Typography>
      )}
      <FormControl fullWidth variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={handleChange} label={label}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
