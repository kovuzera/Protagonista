import React from 'react'
import { RouteProps, Redirect, Route as ReactDOMRoute } from 'react-router-dom'

export const Route = (props) => {
    return (
        <ReactDOMRoute render={({ location }) => { return <props.component /> }} />
    )
}