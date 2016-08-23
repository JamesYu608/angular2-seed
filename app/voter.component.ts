import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div style="width: 20px;">
            <span class="glyphicon glyphicon-menu-up"></span>
            <span>{{ voteCount }}</span>
            <span class="glyphicon glyphicon-menu-down"></span>
        </div>
    `
})

export class VoterComponent {
    @Input('vote-count') voteCount = 15;
}