
abstract class Entity
{
  private type : string;

  constructor()
  {
    this.type = (<any>(this.constructor)).name;
  }
}
