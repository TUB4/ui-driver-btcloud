/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    driverName: '%%DRIVERNAME%%',
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      var config = this.get("store").createRecord({
        type        : '%%DRIVERNAME%%Config',
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
        '%%DRIVERNAME%%Config': config,
      }));
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors')||[];

      // Add more specific errors

      // Check something and add an error entry if it fails:
      if ( parseInt(this.get('model.%%DRIVERNAME%%Config.size'),10) < 1024 )
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

    // Any computed properties or custom logic can go here

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

  });
});
