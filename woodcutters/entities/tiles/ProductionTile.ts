
abstract class ProductionTile extends Tile
{
  private inputResourcesNeeded : number;
  private producedResources : number;

  constructor(priority : number, inputResourcesNeeded : number, producedResources : number)
  {
    super(priority);
    this.inputResourcesNeeded = inputResourcesNeeded;
    this.producedResources = producedResources;
  }

  public update(tileMap : TileMap, posX : number, posY : number) : void
  {
    let ne = this.getNorthEastNeightbour(tileMap, posX, posY);
    let se = this.getSouthEastNeightbour(tileMap, posX, posY);
    let sw = this.getSouthWestNeightbour(tileMap, posX, posY);
    let nw = this.getNorthWestNeightbour(tileMap, posX, posY);

    this.value += this.sumNeightbour(ne);
    this.value += this.sumNeightbour(se);
    this.value += this.sumNeightbour(sw);
    this.value += this.sumNeightbour(nw);
  }

  private sumNeightbour(neightbour : Tile)
  {
    if(this.isTileOfInputResourceType(neightbour))
    {
      if(neightbour.getValue() >= this.inputResourcesNeeded)
      {
        neightbour.decreaseValue(this.inputResourcesNeeded);
        return this.producedResources;
      }
    }

    return 0;
  }

  protected abstract isTileOfInputResourceType(tile : Tile) : boolean;
}
