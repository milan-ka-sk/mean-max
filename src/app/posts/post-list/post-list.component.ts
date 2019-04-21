import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: 'title 1', content: 'content 1 ....'},
  //   {title: 'title 2', content: 'content 2 ....'},
  //   {title: 'title 3', content: 'content 3 ....'}
  // ];

  posts = [];

  constructor() { }

  ngOnInit() {
  }

}
