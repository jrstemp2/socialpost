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
   { title: 'first', thought: 'Really? were you expecting better? Shame', votes: 2 },
   { title: 'Second', thought: 'Ok, I do have thoughts some times', votes: 0 },
   { title: 'Where is My Mind', thought: 'See Trash Fires' , votes : 0 },
  ]

  onSubmit(post:Post) {
    this.posts.unshift(post);
  }

  onDelete(post:Post) {
    this.posts = this.posts.filter( p => p != post);
  }

}
