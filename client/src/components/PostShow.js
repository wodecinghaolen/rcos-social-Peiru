import React from 'react';
import { Show, TextField, DateField, EditButton, RichTextField } from 'react-admin';
import {
    BooleanField,
    Datagrid,
    NumberField,
    TabbedShowLayout, 
    Tab,
    ReferenceManyField,
} from 'react-admin'
import {  } from 'react-admin'

const PostShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="summary">
                <TextField label="Id" source="id" />
                <TextField source="title" />
            </Tab>
            <Tab label="body" path="body">
                <RichTextField source="body" addLabel={false} />
            </Tab>
            <Tab label="comments" path="comments">
                <ReferenceManyField reference="comments" target="post_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="body" />
                        <DateField source="created_at" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export default PostShow;