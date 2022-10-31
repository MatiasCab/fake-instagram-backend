import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Interfaces/Post';
import { ImageService } from 'src/app/Service/image.service';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss']
})
export class DiscoverPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private discoverImgsService: ImageService) { }

  ngOnInit(): void {
    this.discoverImgsService.getArrayOfImgs()
    .subscribe(imgs => {
      this.posts = imgs;
    });
  }

}
