import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

interface Character{
    id: number,
    name: string,
    power: number
}

@Component({
    selector:'',
    templateUrl:'./dragonball-page.component.html',
    imports:[FormsModule]
})
export class DragonBallPageComponent{

    name = signal('');
    power = signal(0);
    characters = signal<Character[]>( [
        { id:1 , name: 'Goku', power: 9001 },
        // { id:2 , name: 'Krilin', power: 9000 },
        // { id:3 , name: 'Pikoro', power: 8000 },
        // { id:4 , name: 'Chamcha', power: 500 },
        // { id:5 , name: 'Piccolo', power: 3000 },
    ]);

    constructor(){ }

    addCharacter(){
        console.log("hello");
        
        if(!this.name() || !this.power() || this.power() <= 0) return;
        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }
        this.characters.update(v => [...v, newCharacter]);

        this.resetFields();
    }


    resetFields(){
        this.name.set('');
        this.power.set(0);
    }

}