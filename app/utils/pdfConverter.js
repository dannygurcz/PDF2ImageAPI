import { convertPDFToImages } from 'pdf2image';

export async function convertPDFToImages(filePath) {
  try {
    const images = await convertPDFToImages(filePath, { dpi: 200 });
    return images.map(image => image.toString('base64'));
  } catch (error) {
    console.error(error);
    throw new Error('Failed to convert PDF to images');
  }
}
