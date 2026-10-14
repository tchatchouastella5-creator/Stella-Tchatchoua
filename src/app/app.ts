import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { Aside } from './aside/aside';
import { Bottom } from './bottom/bottom';
import { Left } from './left/left';
import { Meddle } from './meddle/meddle';
import { Right } from './right/right';
import { Top } from './top/top';

@Component({
  imports: [RouterOutlet, Header, Main, Footer, Aside, Bottom, Left, Meddle, Right, Top],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('firstprojet');
}
