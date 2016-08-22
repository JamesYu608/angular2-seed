import {Component} from "angular2/src/core/metadata";

@Component({
    selector: 'favorite',
    template: `
        <span
            class="glyphicon"
            [class.glyphicon-star]="isFavorite"
            [class.glyphicon-star-empty]="!isFavorite"
            (click)="onClick()">
        </span>
    `
})

export class FavoriteComponent {
    isFavorite = false;

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}