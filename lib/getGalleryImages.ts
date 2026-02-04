import { readdirSync } from 'fs';
import { join } from 'path';

export interface GalleryImage {
  src: string;
  alt: string;
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Automatically reads all images from public/images directory
 * Returns array shuffled randomly (different order on each page visit)
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

    // Sort alphabetically first (for consistency)
    imageFiles.sort();

    // Map to GalleryImage objects with SEO-optimized alt text
    const images = imageFiles.map((filename, index) => {
      // Extract descriptive name from filename or use generic description
      const baseName = filename.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
      const readableName = baseName
        .replace(/-/g, ' ')
        .replace(/markey/gi, 'Markey Gallery')
        .replace(/^\d+/, '') // Remove leading numbers
        .trim();

      // Create SEO-rich alt text with location keywords
      const altText = readableName
        ? `${readableName} - Hell's Kitchen NYC event venue`
        : `Markey Gallery event space interior view ${index + 1} - Hell's Kitchen NYC venue`;

      return {
        src: `/images/${filename}`,
        alt: altText,
      };
    });

    // Shuffle randomly for each page visit
    return shuffleArray(images);
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return [];
  }
}
