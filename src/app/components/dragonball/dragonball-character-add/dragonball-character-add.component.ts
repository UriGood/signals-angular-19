import {  Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
})
export class DragonballCharacterAddComponent {
  name = signal('UriGood');
  power = signal(150000);

  newCharacter = output<Character>()

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter: Character = {
      id: Math.floor(Math.random()*1000),
      name: this.name(),
      power: this.power(),
    };
    // this.characters.update((v) => [...v, newCharacter]);
    // console.log({newCharacter});
    // this.emiterCharater.emit(newCharacter);
    this.newCharacter.emit(newCharacter)
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
