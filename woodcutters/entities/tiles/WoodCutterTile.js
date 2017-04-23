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
var WoodCutterTile = (function (_super) {
    __extends(WoodCutterTile, _super);
    function WoodCutterTile(x, y) {
        return _super.call(this, x, y, 2) || this;
    }
    WoodCutterTile.prototype.update = function (tileMap) {
        console.log("woodcutter update");
        var ne = this.getNorthEastNeightbour(tileMap);
        var se = this.getSouthEastNeightbour(tileMap);
        var sw = this.getSouthWestNeightbour(tileMap);
        var nw = this.getNorthWestNeightbour(tileMap);
        this.value += this.sumNeightbour(ne);
        this.value += this.sumNeightbour(se);
        this.value += this.sumNeightbour(sw);
        this.value += this.sumNeightbour(nw);
        console.log(this.value);
    };
    WoodCutterTile.prototype.sumNeightbour = function (neightbour) {
        console.log(neightbour);
        if (neightbour instanceof TreeTile) {
            console.log("neightbour is instance of TreeTile");
            console.log(neightbour.getValue());
            if (neightbour.getValue() >= 3) {
                neightbour.decreaseValue(3);
                return 1;
            }
        }
        return 0;
    };
    return WoodCutterTile;
}(Tile));
//# sourceMappingURL=WoodCutterTile.js.map