import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 10;
  public mostrar_button = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    if (this.name === 'iroman') {
      this.name = 'batman';
    } else {
      this.name = 'iroman';
    }
  }

  changeButton(): void {
    this.mostrar_button = !this.mostrar_button;
  }

  changeAge(): void {
    if (this.age === 10) {
      this.age = 20;
    } else {
      this.age = 10;
    }
  }
}
