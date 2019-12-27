# Copyright (C) 2019 Raymond Mendelovits
# 
# This file is part of Autocoder.
# 
# Autocoder is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# Autocoder is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with Autocoder.  If not, see <http://www.gnu.org/licenses/>.

require "json"

# Runner class for the crystal autocoder.
class Main

  def inputSection : String 
    print("speed limit: ")
    int1 = gets.not_nil!.to_i
    print("recorded speed of the car: ")
    int2 = gets.not_nil!.to_i
    JSON.build do |json|
      json.object do
        json.field "int1", int1
        json.field "int2", int2
      end
    end
  end

  def logicSection(data : String) : String
    input = JSON.parse(data)
    int1 = input["int1"].to_s.to_i
    int2 = input["int2"].to_s.to_i
    speeding = true
    fine = 500
    overLimit = int2 - int1
    if overLimit >= 1 && overLimit <= 20
      fine = 100
    elsif overLimit >= 21 && overLimit <= 30
      fine = 270
    elsif overLimit <= 0
      fine = 0
      speeding = false
    end
    JSON.build do |json|
      json.object do
        json.field "fine", fine
        json.field "speeding", speeding
      end
    end
  end

  def outputSection( outputVars : String) : Nil
    input = JSON.parse(outputVars)
    speeding = input["speeding"].as_bool
    fine = input["fine"].to_s.to_i
    if speeding
      puts "You are speeding and your fine is $" + fine.to_s
    else
      puts "Congratulations, you are within the speed limit!"
    end
  end

end

mainProgram = Main.new
data = mainProgram.inputSection
outputVars = mainProgram.logicSection(data)
mainProgram.outputSection(outputVars)
