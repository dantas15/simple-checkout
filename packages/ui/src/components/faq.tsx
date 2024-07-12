'use client';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export function FAQ() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((state) => !state);

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Como funciona?" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemText>
            <Typography variant="body1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              a facilis, cupiditate nihil fugiat suscipit repellat veritatis
              consectetur officia illo, qui iure delectus quod, enim cumque
              dicta ea optio! Amet.
            </Typography>
          </ListItemText>
        </List>
      </Collapse>
    </>
  );
}
