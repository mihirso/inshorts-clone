import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import category from '../Category';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SwipeableTemporaryDrawer({setCateogry}) {
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
   
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, paddingLeft:"10",paddingRight:"5" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      
          <ListItem >
            Categories
          </ListItem>
    
      </List>
      <Divider />
      <List>
        {category.map((text, index) => (
          
          <ListItem key={text} button disablePadding onClick={()=>setCateogry(text)}>
           
            
              <ListItemText primary={text} />
          
          </ListItem>
          
        ))}
      </List>
    </Box>
  
  );

  return (
    <div>
      
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}><MenuIcon/></Button>
          <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
    
    </div>
  ); 
}
