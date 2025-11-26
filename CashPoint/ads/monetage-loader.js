/**
 * monetage-loader.js
 * Simple, robust loader for Monetage / libtl ad SDK.
 *
 * Usage:
 * 1) Put this file at: cashpoint/ads/monetage-loader.js
 * 2) In the page where you want the ad (e.g. pages/moneytag.html), add:
 *
 *    <div id="moneytag-ad" class="ad-slot"></div>
 *    <script src="../ads/monetage-loader.js"></script>
 *
 * 3) Optionally call MonetageLoader.renderAd('moneytag-ad', { zone: '10225282' })
 *    or MonetageLoader.loadMonetage() to preload the SDK.
 */

const MonetageLoader = (function () {
  const DEFAULT_SRC = "//libtl.com/sdk.js";
  const DEFAULT_ZONE = "10225282";
  const DEFAULT_SDK = "show_10225282";

  let _scriptPromise = null;

  // Load the SDK script (returns a Promise)
  function loadMonetage({ src = DEFAULT_SRC, zone = DEFAULT_ZONE, sdk = DEFAULT_SDK } = {}) {
    if (_scriptPromise) return _scriptPromise;

    _scriptPromise = new Promise((resolve, reject) => {
      // If SDK already present on window, resolve immediately
      if (window.__libtlLoaded || window.MonetaGe || window.libtl) {
        // small timeout to ensure any init handlers run
        window.setTimeout(() => resolve({ ready: true }), 50);
        return;
      }

      // Create script element
      const s = document.createElement("script");
      s.src = src;
      s.async = true;

      // Attach dataset attributes commonly used by Monetage integrations
      if (zone) s.dataset.zone = zone;
      if (sdk) s.dataset.sdk = sdk;

      // onload: resolve
      s.onload = () => {
        // Mark loaded (some SDKs expose their own flags; use a custom flag too)
        window.__libtlLoaded = true;
        // small delay to allow SDK to initialize
        setTimeout(() => resolve({ ready: true }), 100);
      };

      // onerror: reject with helpful message
      s.onerror = (ev) => {
        console.error("Monetage SDK failed to load:", ev);
        reject(new Error("Failed to load Monetage SDK (" + src + ")"));
      };

      // Append to document head
      (document.head || document.getElementsByTagName("head")[0]).appendChild(s);
    });

    return _scriptPromise;
  }

  /**
   * Render an ad into a container.
   * Most Monetage SDKs auto-render into a container element when script tag contains data attributes.
   * This function ensures the SDK is loaded and then inserts a placeholder script tag inside the container
   * so the SDK recognizes and renders the ad slot.
   *
   * @param {string} containerId - id of the DOM element where ad should appear
   * @param {object} opts - { zone, sdk, src }
   * @returns {Promise} resolves when rendering attempted (not guaranteed ad shown)
   */
  async function renderAd(containerId, opts = {}) {
    const zone = opts.zone || DEFAULT_ZONE;
    const sdk = opts.sdk || DEFAULT_SDK;
    const src = opts.src || DEFAULT_SRC;

    // Ensure container exists
    const container = document.getElementById(containerId);
    if (!container) {
      return Promise.reject(new Error("Ad container not found: #" + containerId));
    }

    try {
      // Load SDK (if not already)
      await loadMonetage({ src, zone, sdk });

      // If SDK auto-renders based on existing script tags, insert a script with data attributes inside container
      // (This pattern matches how many ad providers detect ad slots)
      const adScript = document.createElement("script");
      adScript.type = "text/javascript";
      adScript.async = true;
      adScript.dataset.zone = zone;
      adScript.dataset.sdk = sdk;
      // Note: do NOT set src here to avoid reloading SDK; Monetage SDK should scan and render this slot.
      container.innerHTML = ""; // clear before inserting
      container.appendChild(adScript);

      // If the SDK exposes a render API we could call it here.
      // Example (uncomment if the SDK provides such a function):
      // if (window.libtl && typeof window.libtl.render === 'function') {
      //   window.libtl.render(container);
      // }

      return Promise.resolve({ rendered: true });
    } catch (err) {
      console.error("renderAd error:", err);
      return Promise.reject(err);
    }
  }

  /**
   * Convenience: preload SDK and return promise
   */
  function preload(opts = {}) {
    return loadMonetage(opts);
  }

  return {
    loadMonetage,
    renderAd,
    preload,
    // expose defaults so dev can override if needed
    DEFAULTS: {
      SRC: DEFAULT_SRC,
      ZONE: DEFAULT_ZONE,
      SDK: DEFAULT_SDK
    }
  };
})();

// Export to global for easy use in pages
window.MonetageLoader = MonetageLoader;
