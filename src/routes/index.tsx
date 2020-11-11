import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Powerstats from '../pages/powerstats';

const Routes: React.FC = () => (
    <Switch>
        <Route path = "/" exact component={Dashboard} />
        <Route path = "/powerstats/:repository" component={Powerstats} />
    </Switch>
);



export default Routes;
