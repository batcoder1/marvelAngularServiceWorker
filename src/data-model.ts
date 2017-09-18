

export class Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: Date;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format:	string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series:	SeriesSummary[];
    variants: ComicSummary[];
    collections: ComicSummary[];
    collectedIssues: ComicSummary[];
    dates: ComicDate[];
    prices: ComicPrice[];
    thumbnail: Image;
    images:	Image[];
    creators:	ResourceList;
    characters:	ResourceList;
    stories:	ResourceList;
    events:	ResourceList;
}

export class TextObject {
    type: string;
    languaje: string;
    text: string;
}
export class SeriesSummary {
    resourceURI: string;
    name: string;
}
export class ComicSummary {
    resourceURI: string;
    name: string;
}
export class Url {
    type: string;
    url: string;

}
export class ComicDate {
    type: string;
    date: Date;

}
export class ComicPrice {
    type: string;
    price: number;

}
export class Image {
    path: string;
    extension: string;

}
export class ResourceList {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;


}
export class Item {
    resourceURI: string;
    name: string;
    type: string;


}
