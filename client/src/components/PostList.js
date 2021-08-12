import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    DateField,
} from 'react-admin'

const PostList = ({permissions, ...props}) => (
  <List 
    bulkActionButtons={permissions.includes("admin") ? true : false} {...props}>
      <Datagrid rowClick="edit">
-         <TextField source="id" />
+         <TextField source="name" />
          <DateField source="publishedAt" />
          <TextField source="title" />
          <TextField source="body" />
      </Datagrid>
  </List>
);

export default PostList;