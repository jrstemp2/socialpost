import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submit:EventEmitter = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  toot:Post = {
    title: '',
    thought: ''
  }

  submitPost():void {
    let outboundToot:Post = {
      title: this.toot.title,
      thought: this.toot.thought
    }
    this.submit.emit(outboundToot);

    this.toot.title = '';
    this.toot.thought = '';
  }

}
