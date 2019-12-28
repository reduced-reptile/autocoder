// Copyright (C) 2019 Raymond Mendelovits
//
// This file is part of Autocoder.
//
// Autocoder is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Autocoder is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Autocoder.  If not, see <http://www.gnu.org/licenses/>.

import { CodeBuilder } from './classes/CodeBuilder';
import { StatusCodes } from './enums/StatusCodes';
import { IProblem } from './interfaces/IProblem';

function autocoder(step: string, lang: string, data: IProblem) {
  switch (step) {
    case 'code':
      const codeBuilder = new CodeBuilder(lang, data);
      return codeBuilder.buildCode();
    default:
      return {
        message: 'Invalid step ' + step,
        status: StatusCodes.BadRequest,
      };
  }
}

module.exports = autocoder;
