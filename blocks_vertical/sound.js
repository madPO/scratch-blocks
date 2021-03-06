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

goog.provide('Blockly.Blocks.sound');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['sound_sound'] = {
  /**
   * Block to play sound.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Включить первую запись",
      "args0": [
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_play'] = {
  /**
   * Block to play sound.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Включить %1 запись",
      "args0": [
        {
          "type": "input_value",
          "name": "WHAT"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_mute'] = {
  /**
   * Block to play sound.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Выключить звук",
      "args0": [
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};
