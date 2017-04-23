
class TreeTile extends ProductionTile
{
  constructor()
  {
    super(
      1, // priority
      0, // resources needed
      0.25  // resources produced
    );
  }

  isTileOfInputResourceType(tile : Tile) : boolean
  {
    return true;
  }
}
