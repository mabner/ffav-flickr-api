import { Item } from "./item";

export interface FlickrResponse
{
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: Item[];
}
