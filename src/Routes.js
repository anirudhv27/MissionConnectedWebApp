import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';

// Example Pages

import Buttons from './example-pages/Buttons';
import Dropdowns from './example-pages/Dropdowns';
import NavigationMenus from './example-pages/NavigationMenus';
import ProgressBars from './example-pages/ProgressBars';
import Pagination from './example-pages/Pagination';
import Scrollable from './example-pages/Scrollable';
import Badges from './example-pages/Badges';
import Icons from './example-pages/Icons';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables4 from './example-pages/RegularTables4';
import FormsControls from './example-pages/FormsControls';
import { AuthProvider } from "./contexts/AuthContext";

const Dashboard = lazy(() => import('./example-pages/Login/Dashboard'));
const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const Login = lazy(() => import('./example-pages/Login'));
const PrivateRoute = lazy(() => import('./example-pages/Login/PrivateRoute'));
const Cards3 = lazy(() => import('./example-pages/Cards3'));

const Accordions = lazy(() => import('./example-pages/Accordions'));
const Modals = lazy(() => import('./example-pages/Modals'));
const Notifications = lazy(() => import('./example-pages/Notifications'));
const Popovers = lazy(() => import('./example-pages/Popovers'));
const Tabs = lazy(() => import('./example-pages/Tabs'));
const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));
const Maps = lazy(() => import('./example-pages/Maps'));
const ListGroups = lazy(() => import('./example-pages/ListGroups'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load the live preview examples
              </div>
            </div>
          }>
          <Switch>
            <Redirect exact from="/" to="/Login" />
            <Route path={['/Login']}>
              <PresentationLayout>
              <AuthProvider>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
                    <Route   component={Login} />
                  </motion.div>
                </Switch>
                </AuthProvider>
              </PresentationLayout>
            </Route>

            <Route path={['/Dashboard']}>
              <PresentationLayout>
              <AuthProvider>
                  <PrivateRoute  component={Dashboard} />
                </AuthProvider>
              </PresentationLayout>
            </Route>

            

            <Route
              path={[
                '/DashboardDefault',
                '/Buttons',
                '/Dropdowns',
                '/NavigationMenus',
                '/ProgressBars',
                '/Pagination',
                '/Scrollable',
                '/Badges',
                '/Icons',
                '/UtilitiesHelpers',
                '/Cards3',
                '/Accordions',
                '/Modals',
                '/Notifications',
                '/Popovers',
                '/Tabs',
                '/RegularTables1',
                '/RegularTables4',
                '/FormsControls',
                '/ApexCharts',
                '/Maps',
                '/ListGroups',
                '/Dashboard'
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <AuthProvider>
                    <PrivateRoute
                      path="/DashboardDefault"
                      component={DashboardDefault}
                    />
                    <PrivateRoute path="/Buttons" component={Buttons} />
                    <PrivateRoute path="/Dropdowns" component={Dropdowns} />
                    <PrivateRoute
                      path="/NavigationMenus"
                      component={NavigationMenus}
                    />
                    <PrivateRoute path="/ProgressBars" component={ProgressBars} />
                    <PrivateRoute path="/Pagination" component={Pagination} />
                    <PrivateRoute path="/Scrollable" component={Scrollable} />
                    <PrivateRoute path="/Badges" component={Badges} />
                    <PrivateRoute path="/Icons" component={Icons} />
                    <PrivateRoute
                      path="/UtilitiesHelpers"
                      component={UtilitiesHelpers}
                    />
                    <PrivateRoute path="/Cards3" component={Cards3} />
                    <PrivateRoute path="/Accordions" component={Accordions} />
                    <PrivateRoute path="/Modals" component={Modals} />
                    <PrivateRoute path="/Notifications" component={Notifications} />
                    <PrivateRoute path="/Popovers" component={Popovers} />
                    <PrivateRoute path="/Tabs" component={Tabs} />
                    <PrivateRoute path="/RegularTables1" component={RegularTables1} />
                    <PrivateRoute path="/RegularTables4" component={RegularTables4} />
                    <PrivateRoute path="/FormsControls" component={FormsControls} />
                    <PrivateRoute path="/ApexCharts" component={ApexCharts} />
                    <PrivateRoute path="/Maps" component={Maps} />
                    <PrivateRoute path="/ListGroups" component={ListGroups} />
                    </AuthProvider>
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
