/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.motion');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['motion_start'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "В начальное положение",
      "args0": [
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['motion_go'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    var servDropdown = new Blockly.FieldDropdown(function() {
      var servNumber = [];
      for(var i =0; i < 19;i++){
        servNumber.push([i.toString(),i]);
      }
      return servNumber;
    },function(option){});
    this.appendDummyInput()
    .appendField('Сервопривод')
    .appendField(servDropdown, 'SERV_OPTION') 
    .appendField('перевести в позицию')
    .appendField(new Blockly.FieldLabel('0'), 'POSITION')
    .appendField('за')
    .appendField(new Blockly.FieldLabel('0'), 'SECONDS')
    .appendField('секунд');
    this.setCategory(Blockly.Categories.motion);
    this.setColour(Blockly.Colours.motion.primary,
      Blockly.Colours.motion.secondary,
      Blockly.Colours.motion.tertiary
    );
    this.setNextStatement(true);
    this.setPreviousStatement(true); 
  }
};

Blockly.Blocks['motion_move'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    var servDropdown = new Blockly.FieldDropdown(function() {
      var servNumber = [];
      for(var i =0; i < 19;i++){
        servNumber.push([i.toString(),i]);
      }
      return servNumber;
    },function(option){});
    this.appendDummyInput()
    .appendField('Сервопривод')
    .appendField(servDropdown, 'SERV_OPTION')
    .appendField('подготовить к переводу в позицию')
    .appendField(new Blockly.FieldNumber('0'), 'POSITION')
    .appendField('за')
    .appendField(new Blockly.FieldNumber('0'), 'SECONDS')
    .appendField('секунд');
    this.setCategory(Blockly.Categories.motion);
    this.setColour(Blockly.Colours.motion.primary,
      Blockly.Colours.motion.secondary,
      Blockly.Colours.motion.tertiary
    );
    this.setNextStatement(true);
    this.setPreviousStatement(true); 
  }
};

Blockly.Blocks['motion_commit'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Выполнить подготовленные команды",
      "args0": [
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['motion_set'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    var servDropdown = new Blockly.FieldDropdown(function() {
      var servNumber = [];
      for(var i =0; i < 19;i++){
        servNumber.push([i.toString(),i]);
      }
      return servNumber;
    },function(option){});
    this.appendDummyInput()
    .appendField('Сервопривод')
    .appendField(servDropdown, 'SERV_OPTION')
    .appendField('перевести в позицию')
    .appendField(new Blockly.FieldNumber('0'), 'POSITION');
    this.setCategory(Blockly.Categories.motion);
    this.setColour(Blockly.Colours.motion.primary,
      Blockly.Colours.motion.secondary,
      Blockly.Colours.motion.tertiary
    );
    this.setNextStatement(true);
    this.setPreviousStatement(true); 
  }
};

