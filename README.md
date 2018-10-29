
## Carousel example exercise

This exercise generates a carousel component based on specifications described by Publicis.Sapient.

Given the short time available, the following subset of the requested functionalities were implemented:

- A carousel container with a list of images from pixabay retrieved via `GET`, using `axios` client.
- The container style is modified based on `@media` query to adapt to smaller viewport dimensions.
- A basic navigation scheme using previous and next buttons to switch the selected image. The navigation updates the store and the selected image is marked with a thin border, for reference.
- The implementation is compliant with all major modern browsers.

## Description of implementation thought process

- React is used as a base framework.
- Webpack is used for module bundling.
- Both the image array and the selected image index are managed by a `redux` store, modified via `thunk` middleware actions. The carousel component responds to updates to the store.
- Care was taken to allow accessibility of principal components such as the images and navigation buttons.
- SCSS was used as well as a centralized CSS constants file to help manage styles.
- A jest testing structure was set-up but only a general App test was implemented, due to lack of time.

## Given more time, the following should be considered

- Test cases need to be implemented. A general jest testing framework was implemented, and a generic test for the App.js entry point. Further testing is crucial to advance the example. Install enzyme.
- An image algorithm would be used to center images as a background of a containing `<div>`. In this way, larger versions of each image could be retrieved and the `CarouselImage` component would have equal dimensions.
- Requested functionality such as the arrow navigation on smaller viewports would be implemented.
- Image centering upon selection would be handled.
- CSS modules would be used from the start for local scoping of class names.