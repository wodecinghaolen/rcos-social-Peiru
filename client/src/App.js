import React from 'react'
import { Admin, Resource, fetchUtils } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);

function App() {
  return (
    <Admin catchAll={NotFound} dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
      

      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
    </Admin>
  );
}

export default App;