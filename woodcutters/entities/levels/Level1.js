var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Level1 = (function (_super) {
    __extends(Level1, _super);
    function Level1() {
        var _this = this;
        var map = new TileMap(3, 6);
        var list = [];
        map.setTile(0, 0, new GrassTile());
        map.setTile(1, 0, new GrassTile());
        map.setTile(2, 0, new GrassTile());
        map.setTile(0, 1, new GrassTile());
        map.setTile(1, 1, new GrassTile());
        map.setTile(2, 1, new GrassTile());
        map.setTile(0, 2, new GrassTile());
        map.setTile(1, 2, new TreeTile());
        map.setTile(2, 2, new TreeTile());
        map.setTile(1, 4, new GrassTile());
        map.setTile(2, 4, new TreeTile());
        map.setTile(0, 5, new GrassTile());
        map.setTile(1, 5, new GrassTile());
        map.setTile(2, 5, new GrassTile());
        list.push(new WoodCutterTile());
        list.push(new GrassTile());
        list.push(new GrassTile());
        list.push(new GrassTile());
        var description = "Collect 3 Wood";
        _this = _super.call(this, map, list, description) || this;
        return _this;
    }
    Level1.prototype.isWinningConditionPassed = function () {
        var tiles = this.tileMap.getAllTiles();
        var wood = 0;
        for (var i = 0; i < tiles.length; i++) {
            if (tiles[i] instanceof WoodCutterTile) {
                wood += tiles[i].getValue();
            }
        }
        return (wood >= 3);
    };
    return Level1;
}(Level));
//# sourceMappingURL=Level1.js.map