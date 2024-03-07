import { Component } from '@angular/core';
import {TestService} from "../shared/test/test.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public testContent: any;

  constructor(protected testService: TestService) {
    this.testContent = this.testService.getRandomQuestion();
    console.log(this.testContent);

  }


}
