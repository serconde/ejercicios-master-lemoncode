import { Injectable } from '@angular/core';

export interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  async loadImages(
    pageNumber: number,
    itemsPerPage: number
  ): Promise<Image[]> {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=${itemsPerPage}`
    );
    const images: Image[] = await response.json();
    return images;
  }
}
