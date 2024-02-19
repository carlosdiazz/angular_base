import { Component, EventEmitter, Output } from '@angular/core';

//Propio
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0,
    id: '',
  };

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter() {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0, id: '' };
  }
}
