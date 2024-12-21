import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface NumberStepperProps {
  value?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  textLabel: string;
}

const NumberStepper: React.FC<NumberStepperProps> = ({
  value = 0,
  min = 0,
  max = 100,
  onChange,
  textLabel,
}) => {
  const handleIncrement = () => onChange(Math.min(value + 1, max));
  const handleDecrement = () => onChange(Math.max(value - 1, min));

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
      {textLabel && (
        <Typography
          variant="body1"
          sx={{
            marginBottom: 0.5,
            color: "text.primary",
          }}
        >
          {textLabel}
        </Typography>
      )}
      <Box display="flex" alignItems="center" gap={2}>
        <Button
          onClick={handleDecrement}
          variant="contained"
          disabled={value <= min}
        >
          -
        </Button>
        <Typography>{value}</Typography>
        <Button
          onClick={handleIncrement}
          variant="contained"
          disabled={value >= max}
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default NumberStepper;
