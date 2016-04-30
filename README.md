# grouper
Drag-and-drop app to create compatible groups

Dedicated to Mylani Demas, for giving so much time and effort to her students.

# Setup
After cloning down the repo, run ```npm start``` to live-reload dependencies, and then head over to ```localhost:8080``` in your browser.

## Tech Stack
* React, including [React DnD](http://gaearon.github.io/react-dnd/)

### React DnD
React Drag-and-Drop has pretty solid documentation, but it is a little long. Here's what you need to know.

#### Drag sources and drop targets
Drag-and-drop consists of two types of things:

* **Drag sources** are things that get dragged.
* **Drop targets** are things that you can drop draggable things into.

To make a component draggable or droppable, simply wrap the component in ```DragSource()``` or ```DropTarget()```.

#### Drag sources
When making something draggable, there are three properties to define:
* type
* item
* collecting function

Each drag source must have a **type**. This allows us to define drop targets that only accept certain kinds of drag sources.

The drag source must then implement a method that produces an **item**. The item is a JavaScript object that contains specific data for that component, such as its id. If you are familiar with Redux, think of the method like an action creator, the item as the action, and the data contained within it as the action's payload.

Finally, the drag source can have an optional **collecting function**. This function is where you describe the behavior you'd like the component to have during, or in response to, various drag-and-drop events.

### Drop targets
Drop targets can accept multiple kinds of drag source *types*.