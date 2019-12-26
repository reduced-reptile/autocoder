function autocoder(step, lang, data) {
    switch (step) {
        case 'code':
            return {
                status: 200,
                code: 'puts "Hello world!"'
            };
        default:
            return {
                status: 400,
                message: 'Invalid step ' + step
            };
    }
}
;
module.exports = autocoder;
