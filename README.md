# Minimalist `<video-player>` web component

Minimalist `<video-player>` web component for Vimeo, Youtube or any other video services using iframes.

Progressively enhances a link wrapped around an image to an iframe.

- allows for custom responsive cover image (via HTML) and play button (via CSS)
- does not load `<iframe>` elements during initial page load
- relies on the light DOM

[Here is a demo of it in action](https://jeromecoupe.github.io/video-player/)

## Parameters

Uses data attributes as parameters.

## Mandatory parameters

- `title`: title attribute for the component.
- `data-iframe-src`: the `src` of the iframe that is going to replace the link and image.

## Optional parameters

All parameters of the embed `src` for the various services are available.
