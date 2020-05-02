Blockly.JavaScript['ultrasonic_setup'] = function(block) {
  var value_echo = block.getFieldValue('ECHO');
  var value_trig = block.getFieldValue('TRIG');
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
  `
  #EXTINC#include <Ultrasonic.h>#END
  #VARIABLEULTRASONIC ${variable_instance};#END
  ${variable_instance}.begin(${value_echo}, ${value_trig});
  \n
  `;
  return code;
};

Blockly.JavaScript['ultrasonic_read_distance_cm'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = `(uint8_t)${variable_instance}.read_distance_cm()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};