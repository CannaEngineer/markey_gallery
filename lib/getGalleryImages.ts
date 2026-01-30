import { readdirSync } from 'fs';
import { join } from 'path';

export interface GalleryImage {
  src: string;
  alt: string;
}

/**
 * Automatically reads all images from public/images directory
 * Returns array sorted alphabetically
 * Just add/remove images from public/images folder - no code changes needed
 */
export function getGalleryImages(): GalleryImage[] {
  const imagesDirectory = join(process.cwd(), 'public', 'images');

  try {
    const filenames = readdirSync(imagesDirectory);

    // Filter for image files only
    const imageFiles = filenames.filter(file =>
      /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    );

    // Sort alphabetically
    imageFiles.sort();

    // Map to GalleryImage objects with simple alt text
    return imageFiles.map(filename => ({
      src: `/images/${filename}`,
      alt: 'Markey Gallery',
    }));
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return [];
  }
}
