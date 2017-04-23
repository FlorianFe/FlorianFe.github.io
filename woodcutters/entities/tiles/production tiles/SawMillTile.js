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
var SawMillTile = (function (_super) {
    __extends(SawMillTile, _super);
    function SawMillTile() {
        return _super.call(this, 3, 3, 1) || this;
    }
    SawMillTile.prototype.isTileOfInputResourceType = function (tile) {
        return (tile instanceof WoodCutterTile);
    };
    return SawMillTile;
}(ProductionTile));
//# sourceMappingURL=SawMillTile.js.map