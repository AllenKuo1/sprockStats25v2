import React from "react";
import { Box, Slider, Typography } from "@mui/material";

interface RateScaleProps {
  options: {
    min: number;
    max: number;
    step: number;
  };
  textLabel: string;
  value: number;
  onChange: (value: number) => void;
}

const RateScale: React.FC<RateScaleProps> = ({ textLabel, value, onChange, options }) => {
  const marks = [
    {
      value: options.min,
      label: options.min.toString(),
    },
    {
      value: options.max/2,
      label: (options.max/2).toString(),
    },
    {
      value: options.max,
      label: options.max.toString(),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 2,
      }}
    >
      <Typography>{textLabel}</Typography>
      <Slider
        value={value}
        min={options.min}
        max={options.max}
        step={options.step}
        marks={marks}
        valueLabelDisplay="auto"
        onChange={(e, newValue) => onChange(newValue as number)}
        sx={{ width: 500 }}
      />
    </Box>
  );
};

export default RateScale;
