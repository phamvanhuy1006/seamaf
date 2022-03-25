import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Header.css';

export default function Currency() {
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className="demo-simple-select">U.S Dollar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="U.S Dollar"
          border="none" 
          onChange={handleChange}
        >
          <MenuItem selected value={1}>U.S Dollar</MenuItem>
          <MenuItem value={2}>RTGS Dollar</MenuItem>
          <MenuItem value={3}>SA Rand</MenuItem>
          <MenuItem value={4}>British Pound</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
