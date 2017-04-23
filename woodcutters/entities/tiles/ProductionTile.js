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
var ProductionTile = (function (_super) {
    __extends(ProductionTile, _super);
    function ProductionTile(priority, inputResourcesNeeded, producedResources) {
        var _this = _super.call(this, priority) || this;
        _this.inputResourcesNeeded = inputResourcesNeeded;
        _this.producedResources = producedResources;
        return _this;
    }
    ProductionTile.prototype.update = function (tileMap, posX, posY) {
        var ne = this.getNorthEastNeightbour(tileMap, posX, posY);
        var se = this.getSouthEastNeightbour(tileMap, posX, posY);
        var sw = this.getSouthWestNeightbour(tileMap, posX, posY);
        var nw = this.getNorthWestNeightbour(tileMap, posX, posY);
        this.value += this.sumNeightbour(ne);
        this.value += this.sumNeightbour(se);
        this.value += this.sumNeightbour(sw);
        this.value += this.sumNeightbour(nw);
    };
    ProductionTile.prototype.sumNeightbour = function (neightbour) {
        if (this.isTileOfInputResourceType(neightbour)) {
            if (neightbour.getValue() >= this.inputResourcesNeeded) {
                neightbour.decreaseValue(this.inputResourcesNeeded);
                return this.producedResources;
            }
        }
        return 0;
    };
    return ProductionTile;
}(Tile));
//# sourceMappingURL=ProductionTile.js.map