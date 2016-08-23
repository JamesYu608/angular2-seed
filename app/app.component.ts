import {Component} from 'angular2/core';
import {LikeComponent} from "./like.component";

@Component({
    selector: 'my-app',
    template: `
        <like [is-like]="post.isLike" [total-like]="post.totalLike" (change)="onLikeChange($event)"></like>
    `,
    directives: [LikeComponent]
})

export class AppComponent {
    post = {
        isLike: false,
        totalLike: 10
    };

    onLikeChange($event) {
        console.log($event);
    }
}