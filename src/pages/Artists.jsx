import React, { useState } from "react";
import Artist from "../components/artist";
import Container from "@material-ui/core/Container";
import { Typography, Grid } from "@material-ui/core";

import CustomSelect from "../components/select";

const Artists = () => {
  const [size, setSize] = useState(5);

  const handleChange = e => {
    const { value } = e.target;

    setSize(value);
  };

  const options = [
    { label: "5", value: 5 },
    { label: "10", value: 10 },
    { label: "15", value: 15 },
    { label: "20", value: 20 },
    { label: "25", value: 25 }
  ];
  return (
    <div>
      <Grid container className="artist-header-container">
        <Grid item xs={12} md={6}>
          <Typography className="fw-900">ARTISTS</Typography>
        </Grid>
        <Grid item xs={12} md={6} align="right">
          <Typography>How many artists:</Typography>
          <CustomSelect
            className="custom-select"
            value={size}
            options={options}
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Artist size={size} />
      </Container>
    </div>
  );
};

export default Artists;
