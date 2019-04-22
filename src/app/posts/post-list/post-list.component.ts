import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [
  //   {title: 'title 1', content: 'content 1 ....'},
  //   {title: 'title 2', content: 'content 2 ....'},
  //   {title: 'title 3', content: 'content 3 ....'}
  // ];

  posts: Post[] = [];
  private postSub: Subscription;

  constructor(private postsService: PostService ) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
