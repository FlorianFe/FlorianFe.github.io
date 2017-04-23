
class TileMap
{
  private tiles : Array<Array<Tile>>;
  private width : number;
  private height : number;

  constructor(width: number, height: number)
  {
    this.width = width;
    this.height = height;

    this.tiles = new Array(width);

    for(let x=0; x<this.width; x++)
    {
      this.tiles[x] = new Array(height);

      for(let y=0; y<this.height; y++)
      {
        this.tiles[x][y] = new EmptyTile();
      }
    }
  }

  public getAllTiles() : Array<Tile>
  {
    let result = [];

    for(let x=0; x<this.width; x++)
    {
      for(let y=0; y<this.height; y++)
      {
        result.push(this.tiles[x][y]);
      }
    }

    return result;
  }

  public getTile(x : number, y : number)
  {
    if(x < 0) return new EmptyTile();
    if(y < 0) return new EmptyTile();
    if(x >= this.width) return new EmptyTile();
    if(y >= this.height) return new EmptyTile();

    return this.tiles[x][y];
  }

  public setTile(x : number, y : number, tile: Tile)
  {
    this.tiles[x][y] = tile;
  }

  public update()
  {
    for(let priority=0; priority<10; priority++)
    {
      for(let x=0; x<this.width; x++)
      {
        for(let y=0; y<this.height; y++)
        {
          if(this.tiles[x][y].getPriority() === priority)
          {
            this.tiles[x][y].update(this, x, y);
          }
        }
      }
    }
  }
}
