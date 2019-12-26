"use strict";
exports.__esModule = true;
var StatusCodes_1 = require("./enums/StatusCodes");
function autocoder(step, lang, data) {
    switch (step) {
        case 'code':
            return {
                code: 'puts "Hello world!"',
                status: StatusCodes_1.StatusCodes.OK
            };
        default:
            return {
                message: 'Invalid step ' + step,
                status: StatusCodes_1.StatusCodes.BadRequest
            };
    }
}
module.exports = autocoder;
