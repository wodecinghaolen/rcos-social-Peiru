import React from 'react'
import { Admin, Resource } from 'react-admin'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
//import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import PostShow from './components/PostShow'
//import authProvider from './authProvider'
import simpleRestProvider from 'ra-data-simple-rest';
//import { AuthProvider, Login } from 'ra-cognito'
import { fetchUtils } from 'ra-core'
import Amplify from 'aws-amplify'
import { buildAuthProvider, buildDataProvider } from "react-admin-amplify";
//import * as mutations from "./graphql/mutations";
//import * as queries from "./graphql/queries";
import config from './aws-exports';
import awsmobile from './aws-exports';
import {
  AmplifyAdmin,
  CognitoGroupList,
  CognitoUserList,
  CognitoUserShow,
} from "react-admin-amplify";
//import { Auth } from 'aws-amplify';


Amplify.configure(config);


const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);

const App = () => (

    <Admin 
      catchAll={NotFound} 
      dashboard={Dashboard} 
      dataProvider={dataProvider} 
      authProvider={buildAuthProvider({ authGroups: ["admin", "user"] })}
    > 
       

      {(permissions) => [

        <Resource name='posts' 
                  show={PostShow} 
                  list={PostList}
                   
                  create={permissions.includes("admin") ? (PostCreate) : null} 
                  edit={permissions.includes("admin") ? (PostEdit) : null} />
        ,
        permissions.includes("admin") ? (
          <Resource
            name="cognitoUsers"
            options={{ label: "Cognito Users" }}
            list={CognitoUserList}
            show={CognitoUserShow}
          />
        ) : null,
      ]}
    </Admin>
    
  );

export default App;

/*

<AmplifyAdmin
      operations={{ queries, mutations }}
      options={{
        authGroups: ["admin"],
        enableAdminQueries: true,
      }}
    >
      <Resource
        name="cognitoUsers"
        options={{ label: "Cognito Users" }}
        list={CognitoUserList}
        show={CognitoUserShow}
      />
      <Resource
        name="cognitoGroups"
        options={{ label: "Cognito Groups" }}
        list={CognitoGroupList}
      />
    </AmplifyAdmin>


*/