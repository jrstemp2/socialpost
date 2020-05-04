import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts:Post[] = [
   { title: 'first', thought: 'Really? were you expecting better? Shame' },
   { title: 'Second', thought: 'Ok, I do have thoughts some times' },
   { title: 'Where is My Mind', thought: 'See Trash Fires' },
  ]

  addPost(post:Post) {
    console.log(post);
    this.posts.unshift(post);
  }

}
