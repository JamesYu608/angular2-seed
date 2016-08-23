import {Component} from 'angular2/core';
import {VoterComponent} from "./voter.component";

@Component({
    selector: 'my-app',
    template: `
        <voter></voter>
    `,
    directives: [VoterComponent]
})

export class AppComponent {
}