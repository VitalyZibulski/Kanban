> 1. install parcel
> 2. npm add @babel/core @babel/preset-env @babel/preset-react
>>- babel.rc  - include config
>>>>>{
         "presets": ["@babel/preset-env", "@babel/preset-react"]
     }
##### react-element - node
##### for add classes for children need use React.Children map and React.cloneElement
##### useState() - first - state, second - function for changing state
##### node can be string, JSX Component, array JSX Components
##### if key not exists, react render all object
##### steps - init object in useState, render, effect then useState, render, effect
##### id need got data one time need to use in useEffect []
##### if several useEffect, until all effect doesn't make, render won't be, even in one useEffect we change state
##### that's why we can't be use hooks in cycle, in condition and in other block code, need to exist in function scope 
##### Syntetic event need for cross browser and optimization
> Patterns
##### All buisness logig have to be in the top
> Have follow
##### No more than 100 string code in a component
##### Query to server always Promise
##### rule of hook - start with use
> Redux
##### Selector is only one way to work with store
> HTML
##### For shielding use dangerouslySetInnerHTML={{ __html: content }}
