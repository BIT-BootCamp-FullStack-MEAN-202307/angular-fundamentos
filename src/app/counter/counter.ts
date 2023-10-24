import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-counter',
    templateUrl: './counter.html'
})
export class Counter {
    counter = 0;

    @Input()
    title!: string;

    decrement() {
        this.counter--;
    }

    increment() {
        this.counter++;
    }

}