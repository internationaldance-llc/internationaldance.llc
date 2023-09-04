// https://medium.com/@fbnlsr/how-to-get-rid-of-the-flash-of-unstyled-content-d6b79bf5d75f

// Helper function
//let domReady = (cb) => {
//  document.readyState === 'interactive' || document.readyState === 'complete'
//    ? cb()
//    : document.addEventListener('DOMContentLoaded', cb);
//};

//domReady(() => {
  // Display body when DOM is loaded
//  document.body.style.opacity = '1.0';
//});


/*

// Function to update the theme color meta tag
function updateThemeColor() {
  // Get the current theme color from the CSS variable
  const currentThemeColor = getComputedStyle(document.documentElement)
                            .getPropertyValue('--current-theme').trim();

  // Find the theme-color meta tag
  const metaThemeColor = document.querySelector("meta[name='theme-color']");

  // Update the content attribute with the current theme color
  metaThemeColor.setAttribute("content", currentThemeColor);
}

// Initialize MutationObserver
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      updateThemeColor();
    }
  });
});

// Observe changes to the :root element's style attribute
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['style']
});

// Update the theme color when the page loads
window.addEventListener('load', updateThemeColor);
*/