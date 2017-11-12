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

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">'+
  '<category name="Motion" colour="#4C97FF" secondaryColour="#3373CC">'+
  '</category>'+
  '<category name="Sound" colour="#D65CD6" secondaryColour="#BD42BD">'+
  '</category>'+
  '<category name="Events" colour="#FFD500" secondaryColour="#CC9900">'+
    '<block type="event_whenflagclicked" id="event_whenflagclicked"></block>'+
    '<block type="event_whenkeypressed" id="event_whenkeypressed">'+
    '</block>'+
    '<block type="event_whenthisspriteclicked" id="event_whenthisspriteclicked"></block>'+
    '<block type="event_whenbackdropswitchesto" id="event_whenbackdropswitchesto">'+
    '</block>'+
    '<block type="event_whengreaterthan" id="event_whengreaterthan">'+
      '<value name="VALUE">'+
        '<shadow type="math_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="event_whenbroadcastreceived" id="event_whenbroadcastreceived">'+
    '</block>'+
    '<block type="event_broadcast" id="event_broadcast">'+
      '<value name="BROADCAST_OPTION">'+
        '<shadow type="event_broadcast_menu"></shadow>'+
      '</value>'+
    '</block>'+
    '<block type="event_broadcastandwait" id="event_broadcastandwait">'+
      '<value name="BROADCAST_OPTION">'+
        '<shadow type="event_broadcast_menu"></shadow>'+
      '</value>'+
    '</block>'+
  '</category>'+
  '<category name="Control" colour="#FFAB19" secondaryColour="#CF8B17">'+
    '<block type="control_wait" id="control_wait">'+
      '<value name="DURATION">'+
        '<shadow type="math_positive_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_repeat" id="control_repeat">'+
      '<value name="TIMES">'+
        '<shadow type="math_whole_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_forever" id="control_forever"></block>'+
    '<block type="control_if" id="control_if"></block>'+
    '<block type="control_if_else" id="control_if_else"></block>'+
    '<block type="control_wait_until" id="control_wait_until"></block>'+
    '<block type="control_repeat_until" id="control_repeat_until"></block>'+
    '<block type="control_stop" id="control_stop"></block>'+
    '<block type="control_start_as_clone" id="control_start_as_clone"></block>'+
    '<block type="control_create_clone_of" id="control_create_clone_of">'+
      '<value name="CLONE_OPTION">'+
        '<shadow type="control_create_clone_of_menu"></shadow>'+
      '</value>'+
    '</block>'+
    '<block type="control_delete_this_clone" id="control_delete_this_clone"></block>'+
  '</category>'+
  '<category name="Sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">'+
  '</category>'+
  '<category name="Pen" colour="#00B295" secondaryColour="#0B8E69">'+
    '<block type="pen_clear" id="pen_clear"></block>'+
    '<block type="pen_stamp" id="pen_stamp"></block>'+
    '<block type="pen_pendown" id="pen_pendown"></block>'+
    '<block type="pen_penup" id="pen_penup"></block>'+
    '<block type="pen_setpencolortocolor" id="pen_setpencolortocolor">'+
      '<value name="COLOR">'+
        '<shadow type="colour_picker">'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="pen_changepencolorby" id="pen_changepencolorby">'+
      '<value name="COLOR">'+
        '<shadow type="math_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="pen_setpencolortonum" id="pen_setpencolortonum">'+
      '<value name="COLOR">'+
        '<shadow type="math_number">'+
          '<field name="NUM">0</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="pen_changepenshadeby" id="pen_changepenshadeby">'+
      '<value name="SHADE">'+
        '<shadow type="math_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="pen_setpenshadeto" id="pen_setpenshadeto">'+
      '<value name="SHADE">'+
        '<shadow type="math_number">'+
          '<field name="NUM">50</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="pen_changepensizeby" id="pen_changepensizeby">'+
      '<value name="SIZE">'+
        '<shadow type="math_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="pen_setpensizeto" id="pen_setpensizeto">'+
      '<value name="SIZE">'+
        '<shadow type="math_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="pen_changepentransparencyby" id="pen_changepentransparencyby">'+
      '<value name="TRANSPARENCY">'+
        '<shadow type="math_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="pen_setpentransparencyto" id="pen_setpentransparencyto">'+
      '<value name="TRANSPARENCY">'+
        '<shadow type="math_number">'+
          '<field name="NUM">50</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
  '</category>'+
  '<category name="Operators" colour="#40BF4A" secondaryColour="#389438">'+
    '<block type="operator_add" id="operator_add">'+
      '<value name="NUM1">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
      '<value name="NUM2">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_subtract" id="operator_subtract">'+
      '<value name="NUM1">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
      '<value name="NUM2">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_multiply" id="operator_multiply">'+
      '<value name="NUM1">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
      '<value name="NUM2">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_divide" id="operator_divide">'+
      '<value name="NUM1">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
      '<value name="NUM2">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_random" id="operator_random">'+
      '<value name="FROM">'+
        '<shadow type="math_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
      '<value name="TO">'+
        '<shadow type="math_number">'+
          '<field name="NUM">10</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_lt" id="operator_lt">'+
      '<value name="OPERAND1">'+
        '<shadow type="text">'+
          '<field name="TEXT"></field>'+
        '</shadow>'+
      '</value>'+
      '<value name="OPERAND2">'+
        '<shadow type="text">'+
          '<field name="TEXT"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_equals" id="operator_equals">'+
      '<value name="OPERAND1">'+
        '<shadow type="text">'+
          '<field name="TEXT"></field>'+
        '</shadow>'+
      '</value>'+
      '<value name="OPERAND2">'+
        '<shadow type="text">'+
          '<field name="TEXT"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_gt" id="operator_gt">'+
      '<value name="OPERAND1">'+
        '<shadow type="text">'+
          '<field name="TEXT"></field>'+
        '</shadow>'+
      '</value>'+
      '<value name="OPERAND2">'+
        '<shadow type="text">'+
          '<field name="TEXT"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_and" id="operator_and"></block>'+
    '<block type="operator_or" id="operator_or"></block>'+
    '<block type="operator_not" id="operator_not"></block>'+
    '<block type="operator_join" id="operator_join">'+
      '<value name="STRING1">'+
        '<shadow type="text">'+
          '<field name="TEXT">hello</field>'+
        '</shadow>'+
      '</value>'+
      '<value name="STRING2">'+
        '<shadow type="text">'+
          '<field name="TEXT">world</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_letter_of" id="operator_letter_of">'+
      '<value name="LETTER">'+
        '<shadow type="math_whole_number">'+
          '<field name="NUM">1</field>'+
        '</shadow>'+
      '</value>'+
      '<value name="STRING">'+
        '<shadow type="text">'+
          '<field name="TEXT">world</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_length" id="operator_length">'+
      '<value name="STRING">'+
        '<shadow type="text">'+
          '<field name="TEXT">world</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_contains" id="operator_contains">'+
      '<value name="STRING1">'+
        '<shadow type="text">'+
          '<field name="TEXT">hello</field>'+
        '</shadow>'+
      '</value>'+
      '<value name="STRING2">'+
        '<shadow type="text">'+
          '<field name="TEXT">world</field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_mod" id="operator_mod">'+
      '<value name="NUM1">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
      '<value name="NUM2">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_round" id="operator_round">'+
      '<value name="NUM">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
    '<block type="operator_mathop" id="operator_mathop">'+
      '<value name="NUM">'+
        '<shadow type="math_number">'+
          '<field name="NUM"></field>'+
        '</shadow>'+
      '</value>'+
    '</block>'+
  '</category>'+
  '<category name="Data" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">' +
  '</category>' +
  '</xml>';
