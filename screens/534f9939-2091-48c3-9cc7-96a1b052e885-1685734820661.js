jQuery("#simulation")
  .on("click", ".s-534f9939-2091-48c3-9cc7-96a1b052e885 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Path_22")) {
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_40 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_40 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#725DAB"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-534f9939-2091-48c3-9cc7-96a1b052e885 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#6750A4"
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
    }
  });