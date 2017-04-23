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
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(priority) {
        var _this = _super.call(this) || this;
        _this.value = 0;
        _this.priority = priority;
        return _this;
    }
    Tile.prototype.getValue = function () {
        return this.value;
    };
    Tile.prototype.getPriority = function () {
        return this.priority;
    };
    Tile.prototype.decreaseValue = function (decreasment) {
        if (this.value >= decreasment) {
            this.value -= decreasment;
        }
        else {
            throw Error("Not enougth value to decrease!");
        }
    };
    Tile.prototype.getNorthEastNeightbour = function (tileMap, posX, posY) {
        return (posY % 2 == 0) ?
            tileMap.getTile(posX, posY - 1) :
            tileMap.getTile(posX - 1, posY - 1);
    };
    Tile.prototype.getSouthEastNeightbour = function (tileMap, posX, posY) {
        return (posY % 2 === 0) ?
            tileMap.getTile(posX, posY + 1) :
            tileMap.getTile(posX - 1, posY + 1);
    };
    Tile.prototype.getSouthWestNeightbour = function (tileMap, posX, posY) {
        return (posY % 2 === 0) ?
            tileMap.getTile(posX + 1, posY + 1) :
            tileMap.getTile(posX, posY + 1);
    };
    Tile.prototype.getNorthWestNeightbour = function (tileMap, posX, posY) {
        return (posY % 2 === 0) ?
            tileMap.getTile(posX + 1, posY - 1) :
            tileMap.getTile(posX, posY - 1);
    };
    return Tile;
}(Entity));
//# sourceMappingURL=Tile.js.map