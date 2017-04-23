
class WoodCutterTile extends ProductionTile
{
  constructor()
  {
    super(
      2, // priority
      3, // resources needed
      1  // resources produced
    );
  }

  isTileOfInputResourceType(tile : Tile) : boolean
  {
    return (tile instanceof TreeTile);
  }
}
