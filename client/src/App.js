import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import PostShow from './components/PostShow'
//import authProvider from './authProvider'
import simpleRestProvider from 'ra-data-simple-rest';
import {AuthProvider, Login } from 'ra-cognito'
import { fetchUtils } from 'ra-core'
import Amplify from 'aws-amplify'

import config from './aws-exports';

Amplify.configure(config);


/*
permissions === 'admin'
        ? <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
        : null,
        <Resource name='posts' show={PostShow} list={PostList} create={permissions === 'admin' ? PostCreate : null} edit={PostEdit} />,
*/

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
      authProvider={AuthProvider}
      //loginPage={Login}
    >
      
      <Resource name='users' list={UserList} edit={UserEdit} />
      <Resource name='posts' show={PostShow} list={PostList} create={PostCreate} edit={PostEdit} />
      
    </Admin>
  );

export default App;