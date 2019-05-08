import { Component, OnInit } from '@angular/core';
import {JsonplaceholderService} from '../../services/jsonplaceholder.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(
    private jsphService: JsonplaceholderService
  ) { }

  ngOnInit() {
    this.jsphService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
