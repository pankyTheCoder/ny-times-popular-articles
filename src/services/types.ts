export type ArticleType = {
    url: string;
    id: number;
    published_date: string;
    updated: string;
    title: string;
    abstract: string;
    byline: string;
    section: string;
    subsection: string;
    media: Array<{
        type: string;
        subtype: string;
        caption: string;
        copyright: string;
        approved_for_syndication: number;
        "media-metadata": Array<{
        url: string;
        format: string;
        height: number;
        width: number;
        }>;
    }>;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
};
  
export type NYTimesResponse = {
    status: string;
    copyright: string;
    num_results: number;
    results: ArticleType[];
};
  