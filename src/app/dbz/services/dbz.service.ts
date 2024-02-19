import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

//Propio
import { Character } from '../interface/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Carlos Diaz',
      power: 500,
      id: uuid(),
    },
    {
      name: 'Jose Diaz',
      power: 200,
      id: uuid(),
    },
    {
      name: 'Adrian Diaz',
      power: 1000,
      id: uuid(),
    },
  ];

  public onNewCharacter(character: Character): void {
    const newCharactaer: Character = {
      ...character,
      id: uuid(),
    };
    this.characters.push(newCharactaer);
  }

  public onDeleteId(id: string): void {
    //this.characters.splice(id, 1);
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
