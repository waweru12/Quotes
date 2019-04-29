import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'vote-box',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
numberOfLikes : number = 0;
numberOfDislikes : number = 0

likeButtonClick() {
this.numberOfLikes++;
}
 
dislikeButtonClick() {
  this.numberOfDislikes++;
}
  constructor() { }

  ngOnInit() {
  }

}