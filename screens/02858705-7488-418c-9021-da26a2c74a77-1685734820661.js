jQuery("#simulation")
  .on("click", ".s-02858705-7488-418c-9021-da26a2c74a77 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
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
                    "target": [ "#s-Group_3" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_17 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_16 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_8 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_15 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-Group_4" ],
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
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f0aff874-90f2-4114-974b-d0a846a783ea",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Path_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f0aff874-90f2-4114-974b-d0a846a783ea",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f0aff874-90f2-4114-974b-d0a846a783ea",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/534f9939-2091-48c3-9cc7-96a1b052e885",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Path_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/534f9939-2091-48c3-9cc7-96a1b052e885",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/534f9939-2091-48c3-9cc7-96a1b052e885",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ef37715e-27bf-4585-841a-37eaee568d10",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Path_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ef37715e-27bf-4585-841a-37eaee568d10",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Paragraph_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ef37715e-27bf-4585-841a-37eaee568d10",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02858705-7488-418c-9021-da26a2c74a77",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Paragraph_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02858705-7488-418c-9021-da26a2c74a77",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Paragraph_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-02858705-7488-418c-9021-da26a2c74a77 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02858705-7488-418c-9021-da26a2c74a77",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Path_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02858705-7488-418c-9021-da26a2c74a77",
                    "transition": {
                      "type": "fade",
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
    } else if(jFirer.is("#s-Path_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_3" ],
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
    }
  });