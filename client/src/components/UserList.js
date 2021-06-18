import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    EmailField,
    DeleteButton
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source='title' />
          <EmailField source='email' />
          <EditButton basePath='/posts' />
          <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default UserList;