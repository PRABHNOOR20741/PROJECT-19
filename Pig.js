class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    this.Visiblity = 255;

  }
  display()
  {
    console.log(this.body.speed);
    //making the pig disappear slowly when the bird hits it
    if(this.body.speed<3)
    {
    super.display();
    }
    else
    {
      //removing the pig and erasing it 
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity-5;
      //slowly making the value of pig 255(visibly) to 0(invisibly)
      tint(255,this.Visiblity);
      //showing a ghost image which doesn't have any values
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

};