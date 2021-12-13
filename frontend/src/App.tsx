import React from 'react';
import { ConnectWithStore } from './models/MainInterface';
import Routes from './routes/Route';

import Box from "@material-ui/core/Box";
// import AuthNavComponent from './components/navigations/AuthNavComponent';

import { MainApplicationRoutes } from './models/MainInterface';
import { __WINDOW_LOCATION_PATH__ } from './utils/constants';

export default ConnectWithStore ((store) => {

        const { isPublic } : MainApplicationRoutes = store.appRoutes
        .filter((route: MainApplicationRoutes) => route.path === __WINDOW_LOCATION_PATH__)[0]// .map((k:  MainApplicationRoutes)  => k)[0];

    // let path = arr.filter(key => key.path === __WINDOW_LOCATION_PATH__);
    return (
        <Box height="100%" width="100%">
            <Routes auth={isPublic}/>
        </Box>
    );
});

