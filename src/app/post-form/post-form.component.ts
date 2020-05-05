import { Component, OnInit, Output, EventEmitter, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submit = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  toot:Post = {
    title: '',
    thought: '',
    votes: 0
  }

  submitPost():void {
    // verify valid toot! 
    if (this.toot.title == '' || this.toot.thought == '') return;
    

    let outboundToot:Post = {
      title: this.toot.title,
      thought: this.toot.thought,
      votes: 0
    }
    this.submit.emit(outboundToot);

    this.toot.title = '';
    this.toot.thought = '';
  }

}
