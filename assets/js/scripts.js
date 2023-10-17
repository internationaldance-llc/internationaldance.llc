const meta = document.querySelector('meta[name="color-scheme"]');
let colorScheme = meta.content;  // Ensure colorScheme is defined here

document.querySelector('[role="switch"]').addEventListener('click', () => {
    if (!window.frameElement) {
      colorScheme = colorScheme === 'light' ? 'dark' : 'light';
      document.documentElement.style.colorScheme = colorScheme;
      meta.content = colorScheme;
      if (window.frames[0]) {
        const root = window.frames[0].document.documentElement;
        root.style.colorScheme = colorScheme;
        root.querySelector('meta[name="color-scheme"]').content = colorScheme;
      }
    }
  });
