import { Box, Stack, Step, StepButton, Stepper, Button, Typography, TextField, InputAdornment } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import React, { useState } from "react";
import './App.css';

function App() {

  const [stepValue, setStepValue] = useState(0);

  //eslint-disable-next-line
  const stepCount = new Array(1, 2, 3, 4);

  const initData = {
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    setup: ""
  }
  const [formData, setFormData] = useState(initData);

  const handleOnClick = () => {
    if (stepValue === 0) {
      if (formData.fullName === "" || formData.displayName === "") {
        alert("Please enter all the details")
        return;
      }
    } else if (stepValue === 1) {
      if (formData.workspaceName === "") {
        alert("Please enter the Workspace Name ")
        return;
      }
    } else if (stepValue === 2) {
      if (formData.setup === "") {
        alert("Please select your preferred setup.")
        return;
      }
    }
    setStepValue(stepValue + 1);
  }
  const handleOnStepClick = (step) => {
    setStepValue(step - 1);
  }

  const formDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const setSetup = (val) => {
    console.log(val);
    setFormData({ ...formData, setup: val })
  }

  const getStepContent = (step) => {
    switch (step + 1) {
      case 1:
        return (
          <div width="40%">
            <Stack display={"flex"} alignItems={"center"} spacing={-2}>
              <h1>Welcome! First things first...</h1>
              <Typography variant="subtitle2" sx={{ opacity: "50%" }}>You can always change it later.</Typography>
            </Stack>
            <Box display={"flex"} flexDirection="column" justifyContent="space-between" height={"30vh"} paddingTop={3}>
              <TextField label="Full Name" name="fullName" value={formData.fullName} onChange={formDataChange} InputLabelProps={{ shrink: true }} />
              <TextField label="Display Name" name="displayName" value={formData.displayName} onChange={formDataChange} InputLabelProps={{ shrink: true }} />
              <Button variant="contained" sx={{ textTransform: "none", fontWeight: "light" }} size="large" onClick={step < stepCount.length && handleOnClick}>
                Create Workspace
              </Button>
            </Box>
          </div>
        );

      case 2:
        return (
          <div>
            <Stack display={"flex"} alignItems="center" spacing={-2}>
              <h1>Let's setup a home for all your work</h1>
              <Typography variant="subtitle2" sx={{ opacity: "50%" }}>You can always create another workspace later.</Typography>
            </Stack>
            <Box display={"flex"} flexDirection="column" justifyContent="space-between" height={"30vh"} paddingTop={3}>
              <TextField label="Workspace Name" name="workspaceName" value={formData.workspaceName} onChange={formDataChange} InputLabelProps={{ shrink: true }} />
              <TextField label="Workspace URL (optional)" name="workspaceURL" value={formData.workspaceURL} onChange={formDataChange} InputLabelProps={{ shrink: true }} InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    www.eden.com/
                  </InputAdornment>
                ),
              }} />
              <Button variant="contained" sx={{ textTransform: "none", fontWeight: "light" }} size="large" onClick={step < stepCount.length && handleOnClick}>
                Create Workspace
              </Button>
            </Box>
          </div>
        );


      case 3:
        return (
          <div>
            <Stack display={"flex"} alignItems="center" spacing={-2}>
              <h1>How are you planning to use Eden?</h1>
              <Typography variant="subtitle2" sx={{ opacity: "50%" }}>We'll streamline your setup experience accordingly.</Typography>
            </Stack>

            <Stack spacing={3}>
              <Box display={"flex"} justifyContent="space-evenly" paddingTop={4} >
                <Box className={formData.setup === "myself" ? "selected" : "not-selected"} width="20%" id="myself" onClick={(e) => setSetup(e.target.id)}><PersonIcon /><br />For myself<br /><br /> <span className="subtext">Write better. Think more clearly. Stay organized.</span></Box>
                <Box className={formData.setup === "team" ? "selected" : "not-selected"} width="20%" id="team" onClick={(e) => setSetup(e.target.id)} ><GroupsIcon /><br />With my team<br /><br /> <span className="subtext">Wikis, docs, tasks & projects, all in one place.</span></Box>
              </Box>
              <Button variant="contained" sx={{ textTransform: "none", fontWeight: "light" }} size="large" onClick={step < stepCount.length && handleOnClick}>
                Create Workspace
              </Button>
            </Stack>
          </div>
        );


      case 4:
        return (
          <Stack display={"flex"} alignItems="center" spacing={2}>
            <img src="tick.png" alt="Success" width={"20%"} />
            <h1>Congratulations, {formData.displayName}!</h1>
            <Typography variant="subtitle2" sx={{ opacity: "50%" }}>You have completed onboarding, you can start using the Eden!</Typography>
            <Button variant="contained" sx={{ textTransform: "none", fontWeight: "light" }} size="large" onClick={step < stepCount.length - 1 && handleOnClick}>
              Launch Eden
            </Button>
          </Stack>
        );


      default:
        break;
    }
  };

  return (
    <Stack display={"flex"} paddingY={10} paddingX={5} spacing={5} justifyContent="center" alignItems="center">
      <div className="head">
        <img src="eden-logo.png" alt="Eden Logo" />
        <h1 className="heading">Eden</h1>
      </div>
      <Box sx={{ width: "50vh" }}>
        <Stepper activeStep={stepValue}>
          {
            [...stepCount].map((e, i) => <Step key={i}>
              <StepButton icon={e} onClick={() => handleOnStepClick(e)} />
            </Step>)
          }
        </Stepper>
      </Box>
      {getStepContent(stepValue)}
    </Stack>
  );
}

export default App;
