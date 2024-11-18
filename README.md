# Minimalist `<video-player>` web component

Minimalist `<video-player>` web component for Vimeo, Youtube or any other video services using iframes.

Progressively enhances a link wrapped around an image to an iframe.

- allows for custom responsive cover image (via HTML) and play button (via CSS)
- does not load `<iframe>` elements during initial page load
- relies on the light DOM

[Here is a demo of it in action](https://jeromecoupe.github.io/video-player/)

## Parameters

Uses data attributes as parameters.

### Mandatory parameters

- a link and an image are required as content for the component to work
- `data-iframe-src`: the `src` of the generated `iframe` that is going to replace the link and image.

### Optional parameters

All parameters of the embed `src` for the various services are available. `autoplay` comes to mind.

### generated iframe

The `iframe` has the following attributes

- `allowfullscreen` set to true
- `width` and `height` set to 1500 and 844 respectively (16 / 9 ratio)
