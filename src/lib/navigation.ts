/**
 * Opens a URL in a new tab with proper security attributes
 * @param url - The URL to open
 */
export const openExternalLink = (url: string): void => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
};
