import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function Select1() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, border: "none" }}>
      <FormControl fullWidth border="none">
        <InputLabel id="demo-simple-select-label">About Us</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>News</MenuItem>
          <MenuItem value={20}>Careers</MenuItem>
          <MenuItem value={30}>Locations</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
} 

export function Select2() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, border: "none" }}>
      <FormControl fullWidth border="none">
        <InputLabel id="demo-simple-select-label">Help center</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>FAQ</MenuItem>
          <MenuItem value={20}>Contact us</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
