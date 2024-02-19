import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroName: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'Carlos',
    'Jose',
    'Diaz',
  ];
  public deletedHero?: string;

  public removeLastHero(): void {
    this.deletedHero = this.heroName.pop();
  }
}
