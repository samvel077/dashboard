# Front-end Guide

## Relevant Stack

-   Angular, with Universal
-   SCSS
-   yarn

## Universal

This project uses angular universal with server side rendering, so care must be taken to make sure everything works when rendered on the server as well. Testing using `yarn dev:ssr` should be sufficient.

## Starting point

All page components have been created and should be used to create the pages. Other components (or other objects) can be created if needed. Relevant data types are included in each controller, inspect the classes to see properties.
