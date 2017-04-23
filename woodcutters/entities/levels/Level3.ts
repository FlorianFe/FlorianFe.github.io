class Level3 extends Level
{
  constructor()
  {
    let map = new TileMap(3, 6);
    let list : Array<Tile> = [];

    map.setTile(0, 0, new TreeTile());
    //map.setTile(1, 0, new TreeTile());
    //map.setTile(2, 0, new GrassTile());
    map.setTile(0, 1, new GrassTile());
    //map.setTile(1, 1, new GrassTile());
    map.setTile(2, 1, new GrassTile());
    map.setTile(0, 2, new TreeTile());
    //map.setTile(1, 2, new GrassTile());
    //map.setTile(2, 2, new GrassTile());
    map.setTile(0, 3, new GrassTile());
    map.setTile(1, 3, new GrassTile());
    //map.setTile(2, 3, new GrassTile());
    map.setTile(0, 4, new GrassTile());
    //map.setTile(1, 4, new GrassTile());
    //map.setTile(2, 4, new GrassTile());
    map.setTile(0, 5, new GrassTile());
    //map.setTile(1, 5, new GrassTile());
    map.setTile(2, 5, new GrassTile());

    list.push(new SawMillTile());
    list.push(new WoodCutterTile());
    list.push(new TreeTile());
    list.push(new TreeTile());
    list.push(new TreeTile());
    list.push(new WoodCutterTile());
    list.push(new TreeTile());
    list.push(new GrassTile());
    list.push(new TreeTile());

    let description = "Collect 3 Planks";

    super(map, list, description);
  }

  protected isWinningConditionPassed()
  {
    let tiles = this.tileMap.getAllTiles();
    let planks = 0;

    for(let i=0; i<tiles.length; i++)
    {
      if(tiles[i] instanceof SawMillTile)
      {
        planks += tiles[i].getValue();
      }
    }

    return (planks >= 3);
  }
}
