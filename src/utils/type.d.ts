import React from "react";

export interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export interface Genre {
    "id": number;
    "name": string;
    "slug": string;
    "games_count": number;
    "image_background": string;
}

export interface Tag {
    "id": number;
    "name": string;
    "slug": string;
    "language": string;
    "games_count": number;
    "image_background": string;
}

export interface Trailer {
    "id": number,
    "name": string,
    "preview": string,
    "data": {
    "480": string,
    "max": string
    }
}

export interface MinGame {
    "id": number;
    "slug": strign;
    "name": string;
    "released": string;
    "background_image": string;
    "added": number;
    "genres": Genre[];
    "tags": Tag[];
    "ratings": Rating[];
}

export interface GameWithTrailer extends MinGame {
    trailer?: Trailer
}