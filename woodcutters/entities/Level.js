var Level = (function () {
    function Level(tileMap, availableTileList, description) {
        this.tileMap = tileMap;
        this.availableTileList = availableTileList;
        this.won = false;
        this.finished = false;
        this.description = description;
    }
    Level.prototype.isFinished = function () {
        return this.finished;
    };
    Level.prototype.isWon = function () {
        return this.won;
    };
    Level.prototype.setTileFromAvailableTileList = function (x, y) {
        var previousTileOnPosition = this.tileMap.getTile(x, y);
        if (previousTileOnPosition instanceof EmptyTile) {
            var tile = this.availableTileList.shift();
            this.tileMap.setTile(x, y, tile);
            this.update();
            if (this.availableTileList.length <= 0) {
                this.won = this.isWinningConditionPassed();
                this.finished = true;
            }
        }
    };
    Level.prototype.update = function () {
        this.tileMap.update();
    };
    return Level;
}());
//# sourceMappingURL=Level.js.map