import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public difficulty:number;
  public score:number;
  public nbrBtnCurrent:number;
  private timer;
  private ongoing;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
    params=>{
      this.difficulty=params.id;
      this.initGame();
    }
    );
    
  }
public onChildEmit(statut){
  if(statut)
  {
    this.score++;
    this.ongoing=true;
    this.nbrBtnCurrent=9;
  }
  else{
    this.gameOvER();
  }
}
private gameOvER():void{
  clearInterval(this.timer);
  alert("terminé : le score est : "+this.score)
}
  private initGame():void
  {
    this.ongoing=true;
    this.score=0;
    this.timer=setInterval(()=>{
      if(this.ongoing==false)
      this.gameOvER();
      this.nbrBtnCurrent=Math.floor(Math.random()*4)+1;
      this.ongoing=false;
    },2000/this.difficulty);
  }
}
