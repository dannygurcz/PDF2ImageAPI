import { convertPDFToImages } from '../../utils/pdfConverter';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const file = req.files?.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    if (!file.name.endsWith('.pdf')) {
      return res.status(400).json({ error: 'Unsupported file format. Only PDF files are supported' });
    }

    const filePath = file.path;
    const images = await convertPDFToImages(filePath);
    return res.json({ images });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
