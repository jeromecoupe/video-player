/**
 * A minimal <video-player> component
 *
 * - works for Youtube and Vimeo. Other video services using an iframe can be added.
 * - progressively enhances a link wrapped around an image into an iframe
 */
class videoPlayer extends HTMLElement {
  constructor() {
    super();
  }

  /**
   * Create iframe element
   *
   * @param {string} srcUrl - iframe source URL
   * @returns iframe DOM node
   */
  createIframe(srcUrl) {
    const iframeEl = document.createElement("iframe");
    iframeEl.src = srcUrl;
    iframeEl.allowFullscreen = true;
    iframeEl.width = 1500;
    iframeEl.height = 844;

    return iframeEl;
  }

  /**
   * Initiated when component is loaded in the DOM
   *
   * @returns void
   */
  connectedCallback() {
    const iframeSrc = this.dataset.iframeSrc ?? "";
    const videoLink = this.querySelector("a");

    // check variables are there
    if (!iframeSrc || !videoLink) return;

    // create iframe
    const iframeEl = this.createIframe(iframeSrc);

    // click handler
    videoLink.addEventListener("click", (event) => {
      event.preventDefault();
      videoLink.replaceWith(iframeEl);
    });
  }
}

customElements.define("video-player", videoPlayer);
