(function(window, undefined) {
  var dictionary = {
    "ef37715e-27bf-4585-841a-37eaee568d10": "Help",
    "c77ad3e2-6df2-42bf-8756-e2b7c65df66e": "EXPLORE",
    "a7843f01-b79f-48f0-aff0-98cd493c7918": "Sent",
    "e27bc9d7-4a14-4933-aab0-b34a8e3a7d3e": "map",
    "7af0e4da-675b-4387-972e-153494ebab70": "mapfollow",
    "02858705-7488-418c-9021-da26a2c74a77": "profilesec",
    "2b4be678-7745-44a8-b5c4-f4475fd7192c": "profileseccheck",
    "534f9939-2091-48c3-9cc7-96a1b052e885": "About Us",
    "2629ba92-d8d8-459e-9b08-a16b899e1f8d": "Museum Acropolis",
    "f0aff874-90f2-4114-974b-d0a846a783ea": "ConnectUs",
    "fe7a8823-36f1-4f6d-9de3-9b3f973e38a4": "arrive",
    "3ab5d5ab-693f-47bd-a8c2-8eeb4a9f694b": "Acropolis",
    "f591379b-0c3e-4538-a052-d4772cedd7bb": "GPS",
    "3a0b30a7-0da9-4bbe-a91f-bc760a23066c": "ARXIKH",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);