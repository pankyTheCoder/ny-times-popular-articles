import { ArticleType, NYTimesResponse } from "./types";

const API_KEY = "hB6gjiu4MPw8T5LsnMCA76QWSZdJCaMr"; 

/**
 * Fetches the most popular articles from the NY Times API
 * @param period - Number of days (1, 7, or 30)
 * @returns Promise with the articles data
 */
export const fetchMostPopularArticles = async (period: 1 | 7 | 30 = 1): Promise<ArticleType[]> => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${API_KEY}`
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Failed to fetch articles: ${response.status} ${response.statusText}` +
        (errorData.fault ? ` - ${errorData.fault.faultstring}` : '')
      );
    }
    
    const data: NYTimesResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching NY Times articles:", error);
    throw error;
  }
};

/**
 * Gets the best available image for an article
 * @param article - The article object
 * @returns URL of the best image or null if none available
 */
export const getArticleImage = (article: ArticleType): string | null => {
  if (!article.media || article.media.length === 0) {
    return null;
  }

  const mediaItem = article.media[0];
  if (!mediaItem["media-metadata"] || mediaItem["media-metadata"].length === 0) {
    return null;
  }

  const metadata = mediaItem["media-metadata"];
  return metadata[metadata.length - 1]?.url || metadata[0]?.url || null;
};

export type { ArticleType };
