
abstract class Level
{
  protected tileMap : TileMap;
  protected availableTileList : Array<Tile>;

  private description : string;

  private won : boolean;
  private finished : boolean;

  constructor(tileMap : TileMap, availableTileList : Array<Tile>, description : string)
  {
    this.tileMap = tileMap;
    this.availableTileList = availableTileList;

    this.won = false;
    this.finished = false;

    this.description = description;
  }

  public isFinished()
  {
    return this.finished;
  }

  public isWon()
  {
    return this.won;
  }

  public setTileFromAvailableTileList(x : number, y : number)
  {
    let previousTileOnPosition = this.tileMap.getTile(x, y);

    if(previousTileOnPosition instanceof EmptyTile)
    {
      let tile = this.availableTileList.shift();
      this.tileMap.setTile(x, y, tile);
      this.update();

      if(this.availableTileList.length <= 0)
      {
        this.won = this.isWinningConditionPassed();
        this.finished = true;
      }
    }
  }

  public update()
  {
    this.tileMap.update();
  }

  protected abstract isWinningConditionPassed() : boolean;
}
