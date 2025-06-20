import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');
    console.log("uno");
    return characters ? JSON.parse(characters) :  [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
    constructor() {console.log("dos"); }

    characters = signal<Character[]>(loadFromLocalStorage());
    
    

    // getItemsLocalStorage(){
    //     let charactersLocalStorage = localStorage.getItem('lengthCharacters');
        
    //     if(!charactersLocalStorage){
    //         localStorage.setItem('lengthCharacters', JSON.stringify(this.characters()));        
    //     }
    
    // }

    saveToLocalStorage = effect(()=>{
        localStorage.setItem('characters', JSON.stringify(this.characters()));    
        console.log("tres");
    })

    get charactersMetod(){
        return this.characters();
    }

    addCharacter(emitedCharacter:Character){
        this.characters.update(v => [...v, emitedCharacter]);
    }

    
}