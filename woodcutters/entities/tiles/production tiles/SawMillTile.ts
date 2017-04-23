
class SawMillTile extends ProductionTile
{
  constructor()
  {
    super(
      3, // priority
      3, // resources needed
      1  // resources produced
    );
  }

  isTileOfInputResourceType(tile : Tile) : boolean
  {
    return (tile instanceof WoodCutterTile);
  }
}
