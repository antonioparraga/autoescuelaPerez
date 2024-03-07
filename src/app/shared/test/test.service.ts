//import data_A1.js to a variable:
import {Injectable} from "@angular/core";
import {data_A1} from "./data_A1";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  protected testContent = data_A1;

  public getTestContent(): any {
    console.log(this.testContent);

    return this.testContent;
  }

  public getRandomQuestion(): any {
    let randomIndex = Math.floor(Math.random() * this.testContent.length);
    return this.testContent[randomIndex];


  }


}
