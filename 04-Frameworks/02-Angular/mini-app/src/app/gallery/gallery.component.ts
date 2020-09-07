import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  private currentPage: number = 0;
  private itemsPerPage: number = 3;
  private totalPages: number = 5;
  private images: Image[] = [];
  public imageIndex: number = 0;
  public currentImageIndex: number = 0;
  public playback: number;
  public imageUrls: string[];
  public currentImageUrl: string;
  public prevImageDisabled: boolean = true;
  public nextImageDisabled: boolean = false;
  public prevPageDisabled: boolean = true;
  public nextPageDisabled: boolean = false;
  public firstMiniature: number = 0;
  public lastMiniature: number = this.itemsPerPage;
  public imageWidth: string = '500px';
  public imageHeight: string = '333px';
  public zoomInDisabled: boolean = false;
  public zoomOutDisabled: boolean = true;

  constructor(private imageService: ImageService) {}

  async ngOnInit() {
    this.images = await this.imageService.loadImages(
      1,
      this.itemsPerPage * this.totalPages
    );
    this.imageUrls = this.images
      .slice(this.firstMiniature, this.lastMiniature)
      .map((i) => i.download_url);
    this.currentImageUrl = this.imageUrls[this.currentImageIndex];
    this.prevImageDisabled = true;
  }

  nextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex === this.itemsPerPage) {
      this.nextPage();
    } else {
      this.loadCurrentImage();
    }

    this.setNavigationButtonsStatus();
  }

  prevImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.prevPage();
    } else {
      this.loadCurrentImage();
    }

    this.setNavigationButtonsStatus();
  }

  nextPage() {
    if (this.currentPage + 1 === this.totalPages) return;
    this.currentPage++;
    this.currentImageIndex = 0;
    this.firstMiniature = this.currentPage * this.itemsPerPage;
    this.lastMiniature = this.firstMiniature + this.itemsPerPage;
    this.imageUrls = this.images
      .slice(this.firstMiniature, this.lastMiniature)
      .map((i) => i.download_url);
    this.loadCurrentImage();
    this.setNavigationButtonsStatus();
  }

  prevPage() {
    if (this.currentPage === 0) return;
    this.currentPage--;
    this.currentImageIndex = this.itemsPerPage - 1;
    this.firstMiniature = this.currentPage * this.itemsPerPage;
    this.lastMiniature = this.firstMiniature + this.itemsPerPage;
    this.imageUrls = this.images
      .slice(this.firstMiniature, this.lastMiniature)
      .map((i) => i.download_url);
    this.loadCurrentImage();
    this.setNavigationButtonsStatus();
  }

  play(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;
    if (!!this.playback) {
      clearInterval(this.playback);
      this.playback;
      button.innerHTML = 'Play';
    } else {
      this.playback = setInterval(async () => await this.nextImage(), 3000);
      button.innerHTML = 'Stop';
    }
  }

  zoomIn() {
    this.imageWidth = '800px';
    this.imageHeight = '533px';
    this.zoomInDisabled = true;
    this.zoomOutDisabled = false;
  }

  zoomOut() {
    this.imageWidth = '500px';
    this.imageHeight = '333px';
    this.zoomInDisabled = false;
    this.zoomOutDisabled = true;
  }

  private loadCurrentImage = () =>
    (this.currentImageUrl = this.imageUrls[this.currentImageIndex]);

  private setNavigationButtonsStatus() {
    this.nextImageDisabled =
      this.currentImageIndex === this.itemsPerPage - 1 &&
      this.currentPage === this.totalPages - 1;
    this.prevImageDisabled =
      this.currentImageIndex === 0 && this.currentPage === 0;
      this.nextPageDisabled = this.currentPage + 1 === this.totalPages;
      this.prevPageDisabled = this.currentPage === 0;
  }
}
