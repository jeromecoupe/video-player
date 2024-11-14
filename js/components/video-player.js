/**
 * A minimal <video-player></video-player> component
 *
 * - works for Youtube and Vimeo. Other video services using an iframe can be added.
 * - progressively enhances a link wrapped around an image into an iframe
 */
class videoPlayer extends HTMLElement {
  constructor() {
    // call super
    super();

    // variables
    this.provider = this.dataset.videoProvider.toLowerCase();
    this.videoId = this.dataset.videoId;
    this.autoplay = this.hasAttribute("data-autoplay") ? 1 : 0;
    this.videoLink = this.querySelector("a");
  }

  /**
   * Build iframe url based on provider and id
   * @param {string} provider - "youtube" or "vimeo"
   * @param {string} id - id of the video
   * @returns {string} full url for the iframe
   */
  buildIframeSrc(provider, id, autoplay) {
    let fullUrl = "";

    if (provider === "youtube") {
      fullUrl = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
      fullUrl.searchParams.set("autoplay", autoplay);
    }

    if (provider === "vimeo") {
      fullUrl = new URL(`https://player.vimeo.com/video/${id}`);
      fullUrl.searchParams.set("dnt", true);
      fullUrl.searchParams.set("autoplay", autoplay);
    }

    return fullUrl;
  }

  /**
   * Initiated when component is loaded in the DOM
   * @returns void
   */
  connectedCallback() {
    // check if we have a link, video ID, video provider
    if (!this.videoLink || !this.provider || !this.videoId) return;

    // prepare iframe src
    const iframeSrc = this.buildIframeSrc(
      this.provider,
      this.videoId,
      this.autoplay
    );

    // bail out if no src
    if (!iframeSrc) return;

    // prepare iframe
    const iframeEl = document.createElement("iframe");
    iframeEl.src = iframeSrc;
    iframeEl.allowFullscreen = true;
    iframeEl.width = 1500;
    iframeEl.height = 844;

    // click handler
    this.videoLink.addEventListener("click", (event) => {
      event.preventDefault();
      this.videoLink.replaceWith(iframeEl);
    });
  }
}

customElements.define("video-player", videoPlayer);
