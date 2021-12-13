import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

interface MenuList {
    name: string,
    key: number,
    icon: JSX.Element
};

const menuListArray : MenuList[] = [
    {  key: 1, name: "Check List", icon: <DashboardIcon/> },
    {  key: 2, name: "Trips" , icon: <ShoppingCartIcon/>},
    {  key: 3, name: "Time Sheets" , icon: <PeopleIcon/>},
    {  key: 4, name: "Reports" , icon: <BarChartIcon/>},
    {  key: 5, name: "Integrations" , icon: <LayersIcon/>},
];

export const mainListItems = (
    <div>
        {menuListArray.map((m : MenuList) => (
            <ListItem  key={m.key}>
                <ListItemIcon>
                    <Fab size="small" color="default" aria-label="add" >
                        {m.icon}
                    </Fab>
                </ListItemIcon>
                <ListItemText primary={m.name} />
            </ListItem>
        ))}
  </div>
);
