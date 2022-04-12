import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({onClick, categories}) {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ borderRadius: '40px', backgroundColor: '#f0f0f0', fontSize: '14px', height: '44px', width: '100%', justifyContent: 'center'}}>
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Category</em>
          </MenuItem>
          {categories ? categories.map(category => ([
              <MenuItem onClick={onClick} value={category.id}>{category.name}</MenuItem>
          ])):''}
        </Select>
      </FormControl>
    </div>
  );
}