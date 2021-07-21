import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    DateField,
    useLocale,
} from 'react-admin'

const PostList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <ReferenceField source="userId" reference="users">
-               <TextField source="id" />
+               <TextField source="name" />
          </ReferenceField>
          <DateField source="publishedAt" />
          <TextField source="title" />
          <TextField source="body" />
      </Datagrid>
  </List>
);

export default PostList;