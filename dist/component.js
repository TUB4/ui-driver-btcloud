/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-btcloud/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    driverName: 'btcloud',
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      var config = this.get("store").createRecord({
        type        : 'btcloudConfig',
        endpoint    : 'https://ccp.cloud.bt.com/client/api',
        apiKey      : '',
        secretKey   : '',
        zone        : '',
        template    : '',
        serviceOffering   : '',
        ssl         : false,
      });

      this.set('model', this.get('store').createRecord({
        type: 'machine',
        'btcloudConfig': config,
      }));
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors')||[];

      // Add more specific errors

      // Check something and add an error entry if it fails:
      if ( parseInt(this.get('model.btcloudConfig.size'),10) < 1024 )
      {
        errors.push('Size must be at least 1024 MB');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( errors.get('length') )
      {
        this.set('errors', errors);
        return false;
      }
      else
      {
        this.set('errors', null);
        return true;
      }
    },

    zones: [
      {
        'zone'   : 'GB-LON-GH-G-V-A-R-S-001',
        'uuid' : '84539b9c-078e-458a-ae26-c3ffc5bb1ec9',
      },
      {
        'zone'   : 'CO-BOG-NIM-G-V-A-R-S-001',
        'uuid' : 'abf40e57-0457-4341-aed2-a93f9350cc32',
      },
      {
        'zone'   : 'US-NEW-NUT-G-V-A-R-S-001',
        'uuid' : 'f236c7e1-58fa-468b-9978-247670615f24',
      },
      {
        'zone'   : 'BR-SAO-HOR-G-V-A-R-S-001',
        'uuid' : '9e050525-b4e2-42e0-bbd8-cabf9e823057',
      },
      {
        'zone'   : 'GB-CRO-BN-G-V-A-R-S-001',
        'uuid' : '19f323cd-8a61-4d08-9807-744078e2fd62',
      },
      {
        'zone'   : 'SG-SIN-KB-G-V-A-R-S-001',
        'uuid' : '6f0ae958-541f-4cc9-81b8-d4f3cf16c0d4',
      },
      {
        'zone'   : 'ES-MAD-GS-G-V-A-R-S-001',
        'uuid' : '91e6ace8-4600-46e5-840e-af8e345ba64c',
      },
      {
        'zone'   : 'HK-HON-WH-G-V-A-R-S-001',
        'uuid' : '4abee8f1-69cb-4def-9c65-40f824414a3e',
      },
      {
        'zone'   : 'IT-MIL-MN-G-V-A-R-S-001',
        'uuid' : '42c77acf-22b9-40b3-b1d8-2aa34476bb1c',
      },
      {
        'zone'   : 'FR-PAR-PS-G-V-A-R-S-001',
        'uuid' : 'a29cd4b1-9dd5-42f9-a8ca-5739a674d7c3',
      },
      {
        'zone'   : 'DE-FRT-FT-G-V-A-R-S-001',
        'uuid'  : '603fff7a-137f-4022-8f52-0cfbddaf145e',
      },
      {
        'zone'   : 'CN-SHA-SH-G-V-A-R-S-001',
        'uuid'  : '27892dd9-39f4-4f83-9d28-c536013420ed',
      },
      {
        'zone'   : 'MX-MEX-MX-G-V-A-R-S-002',
        'uuid'  : '16b485b0-c785-453f-ab5f-43375005a046',
      },
      {
        'zone'   : 'IN-BAN-BG-G-V-A-R-S-001',
        'uuid'  : 'ed94590a-7275-4f22-a2cb-3d336265a634',
      },
      {
        'zone'   : 'AR-BUE-WD-G-V-A-R-S-001',
        'uuid'  : '56eb8e5b-b3d3-4e3d-aff3-f2f9e43f313f',
      },
      {
        'zone'   : 'SA-RYA-RY-G-V-A-R-S-001',
        'uuid'  : '99b9e330-fbde-49e7-a88e-0c16e87b63a5',
      },
      {
        'zone'   : 'ZA-JNB-JB-G-V-A-R-S-001',
        'uuid'  : 'f63f4cc3-1dc5-4391-8954-d1f563de7e57',
      },
      {
        'zone'   : 'JP-TYO-AT-G-V-A-R-S-001',
        'uuid'  : '394c4a97-fe74-4830-9ee4-87ca2f7fe083',
      },
      {
        'zone'   : 'NL-NIE-NN-G-V-A-R-S-002',
        'uuid'  : 'd8378d44-50cf-40e7-bb8e-e9586e3ed9fd',
      },
      {
        'zone'   : 'NL-RTM-RM-G-V-A-R-S-001',
        'uuid'  : '05040d1c-b117-4e9b-9dc6-ee5f8c13c2bb',
      },
      {
        'zone'   : 'GB-CRO-BN-G-V-A-R-S-002',
        'uuid'  : '820214af-9350-459b-8708-6c622c104bf5',
      },
      {
        'zone'   : 'IE-DUB-DU-G-V-A-R-S-001',
        'uuid'  : 'd17c1c17-8b4b-42bc-bc4e-17725abf96a8',
      },
    ],

    // Any computed properties or custom logic can go here
  });
});
;
define("ui/components/machine/driver-btcloud/template",["exports","ember","ui/mixins/driver"],function(exports,_ember,_uiMixinsDriver){

exports["default"] = Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 76,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","horizontal-form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container-fluid");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("ACCOUNT ACCESS");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Endpoint");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("API Key");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-10");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Secret Key");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-10");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("VIRTUAL MACHINE");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Availability Zone");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-8");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Service Offering");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-10");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Template");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-sm-12 col-md-10");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var morphs = new Array(10);
      morphs[0] = dom.createMorphAt(element1,1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element1, [5, 3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element1, [7, 3]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element1, [9, 3]),1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element1, [13, 3]),1,1);
      morphs[5] = dom.createMorphAt(dom.childAt(element1, [15, 3]),1,1);
      morphs[6] = dom.createMorphAt(dom.childAt(element1, [17, 3]),1,1);
      morphs[7] = dom.createMorphAt(element1,19,19);
      morphs[8] = dom.createMorphAt(element0,4,4);
      morphs[9] = dom.createMorphAt(element0,7,7);
      return morphs;
    },
    statements: [
      ["inline","partial",["host/add-common"],[],["loc",[null,[3,4],[3,33]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.btcloudConfig.endpoint",["loc",[null,[13,34],[13,62]]]]],[],[]],"classNames","form-control"],["loc",[null,[13,8],[13,90]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.btcloudConfig.apiKey",["loc",[null,[21,34],[21,60]]]]],[],[]],"classNames","form-control","placeholder","Your BT Cloud Compute API Key"],["loc",[null,[21,8],[21,132]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.btcloudConfig.secretKey",["loc",[null,[29,34],[29,63]]]]],[],[]],"classNames","form-control","placeholder","Your BT Cloud Compute Secret Key"],["loc",[null,[29,8],[29,138]]]],
      ["inline","new-select",[],["classNames","form-control","content",["subexpr","@mut",[["get","zones",["loc",[null,[43,18],[43,23]]]]],[],[]],"optionLabelPath","zone","optionValuePath","uuid","value",["subexpr","@mut",[["get","model.btcloudConfig.location",["loc",[null,[46,16],[46,44]]]]],[],[]]],["loc",[null,[41,8],[47,10]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.btcloudConfig.serviceOffering",["loc",[null,[55,34],[55,69]]]]],[],[]],"classNames","form-control"],["loc",[null,[55,8],[55,97]]]],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","model.btcloudConfig.template",["loc",[null,[63,34],[63,62]]]]],[],[]],"classNames","form-control"],["loc",[null,[63,8],[63,90]]]],
      ["inline","partial",["host/add-options"],[],["loc",[null,[67,4],[67,34]]]],
      ["inline","top-errors",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[71,22],[71,28]]]]],[],[]]],["loc",[null,[71,2],[71,30]]]],
      ["inline","save-cancel",[],["save","save","cancel","cancel"],["loc",[null,[74,2],[74,45]]]]
    ],
    locals: [],
    templates: []
  };
}()));;

});
