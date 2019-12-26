import { InputSection } from './classes/InputSection';
import { LogicSection } from './classes/LogicSection';
import { OutputSection } from './classes/OutputSection';
import { StatusCodes } from './enums/StatusCodes';
import { IProblem } from './interfaces/IProblem';

function autocoder(step: string, lang: string, data: IProblem) {
  switch (step) {
    case 'code':
      return {
        code: 'puts "Hello world!"',
        status: StatusCodes.OK,
      };
    default:
      return {
        message: 'Invalid step ' + step,
        status: StatusCodes.BadRequest,
      };
  }
}

module.exports = autocoder;
