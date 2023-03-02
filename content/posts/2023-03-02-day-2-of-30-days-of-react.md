---
title: "Day 2 of 30 Days of React"
slug:
description: ""
date: 2023-03-02 23:17:39
author: kevin-rad
tags: 
    - 30-days-of-react
    - front-end-development
cover:
fullscreen: false
---
Today's learning session is about Components in React, specifically the two types of components: *Function Components and Class Components*.  
  
**Function Components** are the simplest type of component in React. They are basically JavaScript functions that accept props (short for properties) as inputs and return React elements that describe the UI. 

Here's an example of a Function Component:  
```        
function Greeting(props) {           
    return <h1>Hello, {props.name}!</h1>;          
}
```
In the code above, Greeting is a Function Component that accepts a prop called name and returns a heading element that displays a greeting message with the value of the name prop.  
  
On the other hand, **Class Components** are more complex and provide additional features like state and lifecycle methods. Here's an example of a Class Component:  
  

    class Counter extends React.Component {  
	    constructor(props) {  
		    super(props);  
		    this.state = { count: 0 };  
	    }  
      
    render() {  
	    return (  
			    <div>  
				    <h1>Count: {this.state.count}</h1>  
				    <button onClick={() => this.setState({ count: this.state.count + 1 })}>  
					    Increment  
				    </button>  
			    </div>  
		    );  
	    }  
    }  

In the code above, Counter is a Class Component that has a state property initialized with a count of 0. It also has a render method that returns a div element with a heading element and a button element that updates the count state when clicked.  
  
That's a brief overview of Function and Class Components in React. It is highly beneficial to utilize multiple resources for learning, such as referring to the React documentation, watching instructional videos on YouTube, and/or a book about React.  
  
I am excited to continue learning React components and look forward to Day 3 of 30 Days of React, where I will be learning about state and lifecycle methods in React components.
