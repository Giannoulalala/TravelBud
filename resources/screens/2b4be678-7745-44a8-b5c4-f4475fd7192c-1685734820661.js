jQuery("#simulation")
  .on("click", ".s-2b4be678-7745-44a8-b5c4-f4475fd7192c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_14" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_40 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_40 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_10" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-370.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(103,80,164,0.08)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(255,255,255,0.0)"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_8" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "0.0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0.0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8DEF8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-2b4be678-7745-44a8-b5c4-f4475fd7192c #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F3EDF7"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3a0b30a7-0da9-4bbe-a91f-bc760a23066c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_147")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_10" ],
                    "top": {
                      "type": "exprvalue",
                      "value": "0"
                    },
                    "left": {
                      "type": "exprvalue",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });