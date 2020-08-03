
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HelpIcon from '@material-ui/icons/Help';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';

const ListItems = () => {
  const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  const [openManagement, setOpenManagement] = useState(false);
  const [openGlossary, setOpenGlossary] = useState(false);

  const handleOpenManegement = () => {
    setOpenManagement(!openManagement)
  }

  const handleOpenGlossary = () => {
    setOpenGlossary(!openGlossary)
  }
  return (
    <List component="nav"
      aria-labelledby="nested-list-subheader">
      <Divider />
      <ListItem button onClick={handleOpenManegement}>
        <ListItemIcon>
          <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Management Distribution" />
          {openManagement ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={openManagement} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboards" />
            </ListItem>
          </List>
        </Collapse>      
      <Divider />
      <ListItem button onClick={handleOpenGlossary}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Glossary" />
        {openGlossary ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openGlossary} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboards" />
          </ListItem>
        </List>
      </Collapse>   
      <Divider />
    </List>

  )
};

export default ListItems;