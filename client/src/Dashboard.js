import React from 'react';

/*
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'
const Dashboard = () => {
    const[tasks, setTasks] = useState(
        [
            {
              "id": 1,
              "text": "Doctors Appointment",
              "day": "Feb 5th at 2:30pm",
              "reminder": true
            },
            {
              "id": 2,
              "text": "Meeting at School",
              "day": "Feb 6th at 1:30pm",
              "reminder": true
            }
          ]
    )

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== 
        id))
    }

    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? {...task, reminder: 
                !task.reminder} : task
            )
        )
    }

    return (
        <div className='container'>
            Welcome to Admin dashboard!
            <Header />
            <AddTask />
            {tasks.length > 0 ? (
                <Tasks 
                    tasks={tasks} 
                    onDelete={deleteTask}
                    onToggle={toggleReminder} 
                />
            ) : (
                'No tasks to show'
            )}
        </div>
    )
}*/

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="Welcome to Social!" />
        <CardContent>Dashboard</CardContent>

        <CardContent> Email the mods: liup5@rpi.edu </CardContent>             














    </Card>
);
