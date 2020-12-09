/* STRING UTILS HELPER ***************************************************/
if (!String.prototype.isNullOrEmpty) {
    String.prototype.isNullOrEmpty = function () {
        return [null, undefined, ""].indexOf(this) > -1 || this.trim().length === 0;
    };
}
