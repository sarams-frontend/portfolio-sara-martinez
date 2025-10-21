/**
 * Downloads a file from the public folder
 * @param filePath - The path to the file in the public folder (e.g., "/cv-sara-martinez.pdf")
 * @param fileName - The name to use for the downloaded file
 */
export const downloadFile = async (filePath: string, fileName: string): Promise<void> => {
  try {
    const response = await fetch(filePath);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the blob URL
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading file:', error);
    // Fallback to direct download
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
