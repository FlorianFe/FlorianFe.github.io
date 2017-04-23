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
var Level3 = (function (_super) {
    __extends(Level3, _super);
    function Level3() {
        var _this = this;
        var map = new TileMap(3, 6);
        var list = [];
        map.setTile(0, 0, new TreeTile());
        map.setTile(0, 1, new GrassTile());
        map.setTile(2, 1, new GrassTile());
        map.setTile(0, 2, new TreeTile());
        map.setTile(0, 3, new GrassTile());
        map.setTile(1, 3, new GrassTile());
        map.setTile(0, 4, new GrassTile());
        map.setTile(0, 5, new GrassTile());
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
        var description = "Collect 3 Planks";
        _this = _super.call(this, map, list, description) || this;
        return _this;
    }
    Level3.prototype.isWinningConditionPassed = function () {
        var tiles = this.tileMap.getAllTiles();
        var planks = 0;
        for (var i = 0; i < tiles.length; i++) {
            if (tiles[i] instanceof SawMillTile) {
                planks += tiles[i].getValue();
            }
        }
        return (planks >= 3);
    };
    return Level3;
}(Level));
//# sourceMappingURL=Level3.js.map