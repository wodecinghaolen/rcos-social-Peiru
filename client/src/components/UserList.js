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
          <TextField source='name' />
          <EmailField source='email' />
      </Datagrid>
    </List>
  )
}

export default UserList;