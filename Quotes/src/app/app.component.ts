import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Quotes=[
    
    new Quote(1,'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.','~ Pele',new Date(2019,10,14)),
    new Quote(2,'The best decisions aren’t made with your mind, but with your instinct.','~ Lionel Messi',new Date(2019,10,14)),
    new Quote(3,'If you don’t like something, change it. If you can’t change it, change your attitude.','~ Maya Angelou',new Date(2019,10,14)), 
    new Quote(4,'Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out.','~ Unknown',new Date(2019,10,14)),
    new Quote(5,'You control your future, your destiny. What you think about comes about. By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands – your own.','~ Mark Victor Hansen',new Date(2019,10,14)),
    new Quote(6,'You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I lived through this horror. I can take the next thing that comes along.','~ Eleanor Roosevelt' ,new Date(2019,10,14))
 ]
}

