import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from './Route'
import { MainFeed } from '../Pages/Home/MainFeed'
import { Post } from '../Pages/Post/Post'

export const Routes = () => (
    <Switch>
        <Route path='/' exact component={MainFeed}/>
        <Route path='/post' component={Post}/>
    </Switch>
)