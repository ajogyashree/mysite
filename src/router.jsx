import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { Home } from './component/home.component';
import { About } from './component/about.component';
import { Story } from './component/story.component';
import { Photos } from './component/photos.component';
import { Timeline } from './component/timeline.component';

export const Routes = [
	{
		path:'/',
		component: Home
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
	},	
]
export const Router = (props) => {
    return (
        <Switch>
            <Route path='/timeline' render={() => <Timeline addClasstomain={props.addClasstomain}/>}/>
            {
                Routes.map(
                    ( { path, component: C, ...rest }, index) => (
                        <Route
                            key={'mpscln-' + path + '-' + index}
                            path={path}
                            exact={true}
                            render={
                                (props) => (
                                    <C {...props}  {...rest} />
                                )
                            }
                        />
                    )
                )
            }
    </Switch>
    )
}