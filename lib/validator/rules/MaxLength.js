var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Rule } from './Rule';
var MaxLength = /** @class */ (function (_super) {
    __extends(MaxLength, _super);
    function MaxLength() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultMessage = '{{field}} must have no more than {{- settings.length}} characters.';
        return _this;
    }
    MaxLength.prototype.check = function (value) {
        var maxLength = parseInt(this.settings.length, 10);
        if (!value || !maxLength || !value.hasOwnProperty('length')) {
            return true;
        }
        return (value.length <= maxLength);
    };
    return MaxLength;
}(Rule));
export { MaxLength };