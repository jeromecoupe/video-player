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
   *
   * @param {string} id - ID of the video
   * @param {string} provider - name of the provider
   * @param {number} autoplay - 1 or 0
   * @returns {object} - iframe element with attributes
   */
  buildIframe(id, provider, autoplay) {
    let iframeSrc = "";

    // youtube
    if (provider === "youtube") {
      iframeSrc = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
      iframeSrc.searchParams.set("autoplay", autoplay);
    }

    // vimeo
    if (provider === "vimeo") {
      iframeSrc = new URL(`https://player.vimeo.com/video/${id}`);
      iframeSrc.searchParams.set("dnt", true);
      iframeSrc.searchParams.set("autoplay", autoplay);
    }

    const iframeEl = document.createElement("iframe");
    iframeEl.src = iframeSrc;
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
    // config
    const allowedProviders = ["youtube", "vimeo"];

    // params
    const provider = this.dataset.videoProvider.toLowerCase();
    const videoId = this.dataset.videoId;
    const autoplay = this.hasAttribute("data-autoplay") ? 1 : 0;
    const videoLink = this.querySelector("a");

    // check if we have a link, video ID
    if (!videoLink || !videoId) return;
    if (!allowedProviders.includes(provider)) return;

    // build iframe
    const iframeEl = this.buildIframe(videoId, provider, autoplay);

    // click handler
    videoLink.addEventListener("click", (event) => {
      event.preventDefault();
      videoLink.replaceWith(iframeEl);
    });
  }
}

customElements.define("video-player", videoPlayer);
