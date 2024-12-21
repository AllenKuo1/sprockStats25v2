import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { getUserStatus } from "../../util/getUserStatus";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

import Dropdown from "components/scouting/Dropdown";
import TextInput from "components/scouting/Textinput";
import TextInputBig from "components/scouting/TextinputBig";
import NumberInput from "components/scouting/Numinput";
import NumberStepper from "components/scouting/NumStepper";
import Stopwatch from "components/scouting/Stopwatch";
import RateScale from "components/scouting/RateScale";

const Match: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [stepperValue, setStepperValue] = useState(0);
  const [rateValue, setRateValue] = useState(5);

  useEffect(() => {
    const auth = getAuth();
    getUserStatus().then((currentUser) => {
      setUser(currentUser);
    });
    onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
    });
  }, []);

  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  return (
    <Layout tab="/scouting" page="/match">
      {!user ? (
        <Box
          sx={{
            textAlign: "center",
            marginTop: 4,
            fontSize: "1.2rem",
            color: "text.secondary",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Please log in to access this page.
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
            justifyContent: "center",
            padding: 4,
          }}
        >
          <Dropdown
            textLabel="Dropdown"
            label="Select a thingy"
            options={options}
            value={selectedOption ?? ""}
            onChange={setSelectedOption}
          />
          <TextInput
            textLabel="Time to do something"
            label="Text Input"
            value={text}
            onChange={setText}
          />
          <TextInputBig
            textLabel="Time to do something"
            label="Text Input"
            value={text}
            onChange={setText}
          />
          <NumberInput
            textLabel="Time to do something"
            label="Number Input"
            value={number}
            onChange={setNumber}
          />
          <NumberStepper
            textLabel="Time to do something"
            value={stepperValue}
            onChange={setStepperValue}
          />
          <Stopwatch textLabel="Time to do something" />
          <RateScale
            options={{ min: 1, max: 10, step: 1 }}
            textLabel="Rate your experience"
            value={rateValue}
            onChange={setRateValue}
          />
        </Box>
      )}
    </Layout>
  );
};

export default Match;