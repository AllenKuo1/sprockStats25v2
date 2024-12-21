import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, Button, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import axios from "axios";

import Dropdown from "components/scouting/Dropdown";
import TextInput from "components/scouting/Textinput";
import TextInputBig from "components/scouting/TextinputBig";
import NumberInput from "components/scouting/Numinput";
import NumberStepper from "components/scouting/NumStepper";
import Stopwatch from "components/scouting/Stopwatch";
import RateScale from "components/scouting/RateScale";

interface FormField {
  id: string;
  required: boolean;
  type: string;
  label: string;
  options?: string[];
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

interface FormConfig {
  title: string;
  fields: FormField[];
}

/*  NOTEESSSS
    the majority of components have a seperate label and textlabel (textabel like a small header) which is not implemented yet, kinda too lazy atm, might do later if
    user transparency and explanation is needed
*/

const w = [ { value: 1, label: "Option 1" }, { value: 2, label: "Option 2" }, { value: 3, label: "Option 3" }, ];
const testFormConfig: FormConfig = {
  title: "Custom Feedback Form",
  fields: [
    {
      id: "dropdown",
      type: "dropdown",
      label: "Select an Option",
      options: w,
      required: true,
    },
    {
      id: "textInput",
      type: "text",
      label: "Your Name",
      placeholder: "Enter your name",
      required: true,
    },
    {
      id: "textInputBig",
      type: "textarea",
      label: "Detailed Feedback",
      placeholder: "Enter your feedback",
      required: false,
    },
    {
      id: "numberInput",
      type: "number",
      label: "Enter a Number",
      required: false,
    },
    {
      id: "numberStepper",
      type: "stepper",
      label: "Adjust Value",
      required: false,
    },
    {
      id: "stopwatch",
      type: "stopwatch",
      label: "Time Tracker",
      required: false,
    },
    {
      id: "rateScale",
      type: "rateScale",
      label: "Rate Your Experience",
      min: 1,
      max: 10,
      step: 1,
      required: true,
    },
  ],
};

const Match: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (newUser) => setUser(newUser));

    const loadFormConfig = async () => {
      try {
        /*
        const response = await axios.get("https://example.com/api/form123321");
        setFormConfig(response.data);
        setFormValues(
          response.data.fields.reduce(
            (values: Record<string, any>, field: FormField) => ({ ...values, [field.id]: "" }),
            {}
          )
        );
        */
        setFormConfig(testFormConfig);
        setFormValues(
          testFormConfig.fields.reduce(
            (values, field) => ({ ...values, [field.id]: "" }),
            {}
          )
        );
      } catch (error) {
        console.error("Error loading form configuration:", error);
      }
    };

    loadFormConfig();
  }, []);

  const handleChange = (id: string, value: any) => {
    setFormValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
  
    formConfig?.fields.forEach((field) => {
      if (field.required && !formValues[field.id]) {
        newErrors[field.id] = `${field.label} is required.`;
      }
    });
  
    setErrors(newErrors);
  
    // Notify the user of the specific errors
    if (Object.keys(newErrors).length > 0) {
      alert(
        "Please complete the required fields:\n" +
          Object.entries(newErrors)
            .map(([fieldId, errorMessage]) => `- ${errorMessage}`)
            .join("\n")
      );
    }
  
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("Please fix the errors in the form.");
      return;
    }

    try {
      console.log("Form Submitted with Values:", formValues);

      /*
      const response = await axios.post("https://example.com/api/submit/123123123", formValues);
      console.log("Submission successful:", response.data);
      */

      alert("Form Submitted! Check the console for details.");
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("Submission failed. Please try again.");
    }
  };

  return (
    <Layout tab="/scouting" page="/test">
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
          {formConfig?.fields.map((field) => (
            <Box key={field.id} sx={{ width: "100%" }}>
              {field.type === "dropdown" && (
                <Dropdown
                  textLabel={field.label}
                  label={field.label}
                  options={field.options || []}
                  value={formValues[field.id]}
                  onChange={(value) => handleChange(field.id, value)}
                />
              )}
              {field.type === "text" && (
                <TextInput
                  textLabel={field.label}
                  label={field.placeholder || ""}
                  value={formValues[field.id]}
                  onChange={(value) => handleChange(field.id, value)}
                />
              )}
              {field.type === "textarea" && (
                <TextInputBig
                  textLabel={field.label}
                  label={field.placeholder || ""}
                  value={formValues[field.id]}
                  onChange={(value) => handleChange(field.id, value)}
                />
              )}
              {field.type === "number" && (
                <NumberInput
                  textLabel={field.label}
                  label={field.label}
                  value={formValues[field.id]}
                  onChange={(value) => handleChange(field.id, value)}
                />
              )}
              {field.type === "stepper" && (
                <NumberStepper
                  textLabel={field.label}
                  value={formValues[field.id]||0}
                  onChange={(value) => handleChange(field.id, value)}
                />
              )}
              {field.type === "stopwatch" && (
                <Stopwatch
                  textLabel={field.label}
                  value={formValues[field.id]}
                  onChange={(value) => handleChange(field.id, value)}
                />
              )}
              {field.type === "rateScale" && (
                <RateScale
                  textLabel={field.label}
                  value={formValues[field.id]}
                  onChange={(value) => handleChange(field.id, value)}
                  options={{
                    min: field.min || 1,
                    max: field.max || 10,
                    step: field.step || 1,
                  }}
                />
              )}
              {errors[field.id] && (
                <Typography color="error">{errors[field.id]}</Typography>
              )}
            </Box>
          ))}
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      )}
    </Layout>
  );
};

export default Match;