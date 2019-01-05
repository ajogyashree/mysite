import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { Mainbody } from './component/mainbody.component';
import { About } from './component/about.component';
import { Story } from './component/story.component';
import { Photos } from './component/photos.component';

export const Routes = [
	{
		path:'/',
		component: Mainbody
	},
	{
		path:'/about',
		component: About
	},
	{
		path:'/photos',
		component: Photos
	},
	{
		path:'/story',
		component: Story
	}	
]
export const Router = () =>(
    <Switch>
        {
            Routes.map(({ path, component: C, ...rest }, index) =>  (
                <Route key={ 'mpscln-' + path + '-' +index } path={path} exact={true} render={(props) => ( <C {...props} {...rest} /> )} />
			))
        }
    </Switch>
)