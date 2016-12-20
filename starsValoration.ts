
import { Component, Input } from "@angular/core";
@Component({
  selector: "stars-valoration",
  templateUrl : "starsValoration.html"
})
export class StarsValorationComponent {
  @Input() valoration: number = Math.floor(Math.random() * 100);
  @Input() starsNumber: number = 5;
  @Input() starSize: number = 20;
  @Input() color: string = "#ffaf1d";
  @Input() fontSize: string = "25px";

  stars: Array<any> = [];
  constructor() {
  }
  ngOnInit() {
    this.printStars(this.starsNumber, this.starSize);
  }
  printStars(starsNumber, starSize) {
    let start = 1;
    let end = starSize;
    let valoration = this.valoration + 1;
    for (let idx = 1; idx <= starsNumber ; idx++) {
      let finishStar = idx * end;
      let initStar = finishStar - (starSize - 1);
      let middleStar = finishStar - (starSize / 2);
      if (valoration >= finishStar) {
        this.stars.push("md-star");
      } else if ((valoration >= initStar && valoration < middleStar) || (valoration < initStar)) {
        this.stars.push("md-star-outline");
      } else if (valoration >= middleStar && valoration < finishStar) {
        this.stars.push("md-star-half");
      }
    }
  }
}
