var TileMap = (function () {
    function TileMap(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = new Array(width);
        for (var x = 0; x < this.width; x++) {
            this.tiles[x] = new Array(height);
            for (var y = 0; y < this.height; y++) {
                this.tiles[x][y] = new EmptyTile();
            }
        }
    }
    TileMap.prototype.getAllTiles = function () {
        var result = [];
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                result.push(this.tiles[x][y]);
            }
        }
        return result;
    };
    TileMap.prototype.getTile = function (x, y) {
        if (x < 0)
            return new EmptyTile();
        if (y < 0)
            return new EmptyTile();
        if (x >= this.width)
            return new EmptyTile();
        if (y >= this.height)
            return new EmptyTile();
        return this.tiles[x][y];
    };
    TileMap.prototype.setTile = function (x, y, tile) {
        this.tiles[x][y] = tile;
    };
    TileMap.prototype.update = function () {
        for (var priority = 0; priority < 10; priority++) {
            for (var x = 0; x < this.width; x++) {
                for (var y = 0; y < this.height; y++) {
                    if (this.tiles[x][y].getPriority() === priority) {
                        this.tiles[x][y].update(this, x, y);
                    }
                }
            }
        }
    };
    return TileMap;
}());
//# sourceMappingURL=TileMap.js.map