import MyLoginPage from "./components/MyLoginPage";
import MyLogoutButton from "./components/MyLogoutButton";
import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit, UserCreate } from "./services/UserList";
import authProvider from "./services/authProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import myTheme from "./theme/theme";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/People';


const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <ErrorBoundary>
    <Admin
      dataProvider={dataProvider}
      loginPage={MyLoginPage}
      logoutButton={MyLogoutButton}
      authProvider={authProvider}
      toolbar={null}
      //theme={myTheme}
    >
    <Resource name="users" list={UserList}  create={UserCreate} icon={UserIcon} edit={UserEdit}/>
    </Admin>
  </ErrorBoundary>
);

export default App;
