import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <span
            class="glyphicon glyphicon-heart"
            [class.highligthted]="isLike"
            (click)="onClick()">
        </span>
        {{ totalLike }}
    `,
    styles: [`
        .glyphicon-heart {
            color: #CCC;
            cursor: pointer;
        }
        .highligthted {
            color: deeppink;
        }
    `]
})

export class LikeComponent {
    @Input('is-like') isLike = false;
    @Input('total-like') totalLike = 0;
    @Output() change = new EventEmitter();

    onClick() {
        this.isLike = !this.isLike;
        this.totalLike += this.isLike ? 1 : -1;
        this.change.emit({ like: this.isLike });
    }
}