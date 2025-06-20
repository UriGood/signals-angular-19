import { Component, signal } from "@angular/core";

@Component({
    selector: '',
    templateUrl: 'counter-page.component.html',
    styles: `
        button{
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `
})
export class CounterPageComponent {

    counter = 10;
    counterSignal = signal(10);
    
    aumentarDisminuir(cantidad:number){
        if(cantidad === 0 ) {this.counter = 10; this.counterSignal.set(10); return}
        if((this.counter == 0 && cantidad < 0) || (this.counterSignal() == 0 && cantidad < 0)) return;
        this.counter += cantidad;
        this.counterSignal.update(value => value + cantidad);
    }

}