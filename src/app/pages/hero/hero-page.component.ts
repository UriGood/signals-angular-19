import { Component, computed, signal, WritableSignal } from "@angular/core";
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'heropage-component',
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
})
export class HeroPageComponent{
    name:WritableSignal<string> = signal('Ironman');
    age:WritableSignal<number> = signal(45);

    heroDescription = computed(()=>{
        const description = `${this.name()} - ${this.age()}`
        return description;
    });

    capitalizedName = computed(()=>this.name().toUpperCase());
    // getHeroDescription(){
    //     return `${ this.name() + " - " + this.age() }`;
    // }

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Ironman ');
        this.age.set(45);
    }

    chageAge(){
        this.age.set(60);
    }
    

}