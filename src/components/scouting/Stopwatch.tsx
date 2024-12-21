import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

interface StopwatchProps {
  textLabel: string;
  onChange?: (time: number) => void;
}

const Stopwatch: React.FC<StopwatchProps> = ({ textLabel, onChange }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (running) {
      timer = setInterval(() => {
        setTime((prev) => {
          const updatedTime = prev + 10;
          if (onChange) onChange(updatedTime);
          return updatedTime;
        });
      }, 10);
    } else if (timer) {
      clearInterval(timer);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [running, onChange]);

  const reset = () => {
    setTime(0);
    if (onChange) onChange(0);
  };

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
      <Typography variant="body1" >{textLabel}</Typography>
      <Typography variant="h4" sx={{ fontFamily: "monospace" }}>
        {Math.floor(time / 60000)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor((time / 1000) % 60)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor((time % 1000) / 10)
          .toString()
          .padStart(2, "0")}
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          onClick={() => setRunning((prev) => !prev)}
          variant="contained"
          color={running ? "secondary" : "primary"}
        >
          {running ? "Pause" : "Start"}
        </Button>
        <Button onClick={reset} variant="outlined" color="error">
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Stopwatch;