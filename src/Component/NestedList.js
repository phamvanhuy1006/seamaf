import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedList(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={props.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton key={1} sx={{ pl: 4 }}>
            <div>descripption</div>
          </ListItemButton>
          {props.element2 ? ([
            <ListItemButton key={2} sx={{ pl: 4 }}>
              <div>{ props.element2?.title }</div>
            </ListItemButton>
          ]) : ''}
          {props.element3 ? ([
            <ListItemButton key={3} sx={{ pl: 4 }}>
              <div>{ props.element4?.title }</div>
            </ListItemButton>
          ]) : ''}
           {props.element4 ? ([
            <ListItemButton key={4} sx={{ pl: 4 }}>
              <div>{ props.element4?.title }</div>
            </ListItemButton>
          ]) : ''}
        </List>
      </Collapse>
    </List>
  );
}