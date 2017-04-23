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
    function WoodCutterTile() {
        return _super.call(this, 2, 3, 1) || this;
    }
    WoodCutterTile.prototype.isTileOfInputResourceType = function (tile) {
        return (tile instanceof TreeTile);
    };
    return WoodCutterTile;
}(ProductionTile));
//# sourceMappingURL=WoodCutterTile.js.map