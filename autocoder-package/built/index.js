"use strict";
function autocoder(step, lang, data) {
    switch (step) {
        case 'code':
            return {
                code: 'puts "Hello world!"',
                status: 200
            };
        default:
            return {
                message: 'Invalid step ' + step,
                status: 400
            };
    }
}
module.exports = autocoder;
