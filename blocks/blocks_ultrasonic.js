Blockly.Blocks['ultrasonic_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("ultrasonic1",null,["Plugin.Ultrasonic"],["Plugin.Ultrasonic"]),"instance")
        .appendField("setup (ECHO")
        .appendField(new Blockly.FieldTextInput("4"), "ECHO")
        .appendField(", TRIG")
        .appendField(new Blockly.FieldTextInput("5"), "TRIG")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['ultrasonic_read_distance_cm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("ultrasonic1",null,["Plugin.Ultrasonic"],["Plugin.Ultrasonic"]),"instance")
        .appendField("read distance (cm)");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
