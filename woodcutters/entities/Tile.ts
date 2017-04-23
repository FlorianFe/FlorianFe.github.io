
abstract class Tile extends Entity
{
  private priority : number;
  protected value : number;

  constructor(priority : number)
  {
    super();

    this.value = 0;
    this.priority = priority;
  }

  public abstract update(tileMap : TileMap, posX: number, posY : number) : void;

  public getValue()
  {
    return this.value;
  }

  public getPriority()
  {
    return this.priority;
  }

  public decreaseValue(decreasment: number)
  {
    if(this.value >= decreasment)
    {
      this.value -= decreasment;
    }
    else
    {
      throw Error("Not enougth value to decrease!");
    }
  }

  protected getNorthEastNeightbour(tileMap : TileMap, posX: number, posY : number) : Tile
  {
    return (posY % 2 == 0) ?
      tileMap.getTile(posX, posY - 1) :
      tileMap.getTile(posX - 1, posY - 1);
  }

  protected getSouthEastNeightbour(tileMap : TileMap, posX: number, posY : number) : Tile
  {
    return (posY % 2 === 0) ?
      tileMap.getTile(posX, posY + 1) :
      tileMap.getTile(posX - 1, posY + 1);
  }

  protected getSouthWestNeightbour(tileMap : TileMap, posX: number, posY : number) : Tile
  {
    return (posY % 2 === 0) ?
      tileMap.getTile(posX + 1, posY + 1) :
      tileMap.getTile(posX, posY + 1);
  }

  protected getNorthWestNeightbour(tileMap : TileMap, posX: number, posY : number) : Tile
  {
    return (posY % 2 === 0) ?
      tileMap.getTile(posX + 1, posY - 1) :
      tileMap.getTile(posX, posY - 1);
  }
}
