import {Component} from 'angular2/core';
import {FavoriteComponent} from "./favorite.component";

@Component({
    selector: 'my-app',
    template: `
        <span class="glyphicon glyphicon-star"></span>
        <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    `,
    directives: [FavoriteComponent]
})

export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    };

    onFavoriteChange($event) {
        console.log($event);
    };
}