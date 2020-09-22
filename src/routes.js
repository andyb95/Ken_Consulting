import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import Training from './components/Training/Training'
import Consulting from './components/Consulting/Consulting'
import Chat from './components/Chat/Chat'
import FAQ from './components/FAQ/FAQ'

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/training' component={Training}/>
    <Route path='/consulting' component={Consulting}/>
    <Route path='/chat' component={Chat}/>
    <Route path='/faq' component={FAQ}/>
  </Switch>
)