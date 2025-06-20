import { Component, inject, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add/dragonball-character-add.component";
import { DragonballService } from "../../services/dragonball.service";
import { Character } from "../../interfaces/character.interface";


@Component({
    templateUrl:'./dragonball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [CharacterListComponent, DragonballCharacterAddComponent],
 
})
export class DragonBallSuperPageComponent{ 
    // constructor(private listCharacters:DragonballService){} inyeccion tradicional
    public dragonballService = inject(DragonballService);
    characters = signal<Character[]>([]);

    // ngOnInit(): void {
    //     this.characters = this.dragonballService.getListCharacter();
    // }

    // addCharacter(emitedCharacter:Character){
    //     this.dragonballService.addCharacter(emitedCharacter);
    // }


}