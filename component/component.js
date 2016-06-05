define('ui/components/machine/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'ui/mixins/driver'],
	function(exports, _ember, _uiMixinsDriver) {
		exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
		driverName: '%%DRIVERNAME%%',

		// Write your component here, starting with setting 'model' to a machine with your config populated
		bootstrap: function() {
			var config = this.get("store").createRecord({
				type: '%%DRIVERNAME%%Config',
				endpoint		 : 'https://ccp.cloud.bt.com/client/api',
				apiKey: '',
				secretKey: '',
				zone: null,
				template: null,
				serviceOffering: null,
				ssl: false,
			});

			this.set('model', this.get('store').createRecord({
				type: 'machine',
				'%%DRIVERNAME%%Config': config,
			}));
		},

		actions: {
		    cloudAuth: function() {
		        this.set('step', 2);
		        this.apiRequest('listZones').then((res) => {
		            let zones = [];
		            res.listzonesresponse.zone.forEach((zone) => {
		                let obj = {
		                    id: zone.id,
		                    name: zone.name,
		                };
		                zones.push(obj);
		            });
		            this.set('avzones', zones);
		            this.set('step', 3);
		        }, (err) => {
		            let errors = this.get('errors') || [];
		            errors.pushObject(this.apiErrorMessage(err, '', '', 'Authentication failure'));
		            this.set('errors', errors);
		            this.set('step', 1);
		        });
		    },

			selectZone: function() {
			    this.set('step', 4);
			    this.apiRequest('listProjects').then((res) => {
			        let projects = [];
			        (res.listprojectsresponse.project || []).forEach((proj) => {
			            let obj = {
			                id: proj.id,
			                name: proj.name,
			            };
			            projects.push(obj);
			        });
			        this.set('projects', projects);
			        this.set('step', 5);

			    }, (err) => {
			        let errors = this.get('errors') || [];
			        errors.pushObject(this.apiErrorMessage(err, '', '', 'WARNING WILL ROBINSON!'));
			        this.set('errors', errors);
			        this.set('step', 3);
			    });
			},

			setProject: function() {
				this.set('step', 6);
              // TO BE COMPLETED
				this.set('step', 7);
	  	}
	  },

		apiRequest: function(command, params) {
			let url					= this.get('app.proxyEndpoint') + '/' + this.get('model.%%DRIVERNAME%%Config.endpoint');
			params					= params || {};
			params.command	= command;
			params.apiKey		= this.get('model.%%DRIVERNAME%%Config.apiKey');
			params.response = 'json';

			return this.ajaxPromise({url: url,
													method: 'POST',
													dataType: 'json',
													headers: {
														'Accept': 'application/json',
														'X-API-Headers-Restrict': 'Content-Length'
													},
													beforeSend: (xhr, settings) => {
														// Append 'rancher:' to Content-Type
														xhr.setRequestHeader('Content-Type',
																								 'rancher:' + settings.contentType);

														// Compute the signature
														let qs = settings.data.split('&')
																	.map((q) => q.replace(/\+/g, '%20'))
																	.map(Function.prototype.call, String.prototype.toLowerCase)
																	.sort()
																	.join('&');
														settings.data += '&signature=' + encodeURIComponent(AWS.util.crypto.hmac(
															this.get('model.%%DRIVERNAME%%Config.secretKey'), qs, 'base64', 'sha1'));
														return true;
													},
													data: params}, true);
		},

		ajaxPromise: function(opt, justBody) {
			var promise = new Ember.RSVP.Promise(function(resolve,reject) {
				Ember.$.ajax(opt).then(success,fail);
				function success(body, textStatus, xhr) {
					if ( justBody === true ){
						resolve(body, 'AJAX Response: '+ opt.url + '(' + xhr.status + ')');
					}
					else{
						resolve({xhr: xhr, textStatus: textStatus},'AJAX Response: '+ opt.url + '(' + xhr.status + ')');
				}}
				function fail(xhr, textStatus, err) {
					reject({xhr: xhr, textStatus: textStatus, err: err}, 'AJAX Error:' + opt.url + '(' + xhr.status + ')');
				}
			},'Raw AJAX Request: '+ opt.url);
			return promise;
		},

		apiErrorMessage: function(err, kind, prefix, def) {
			let answer = (err.xhr || {}).responseJSON || {};
			let text	 = (answer[kind] || {}).errortext;
			if (text) {
				return prefix + ": " + text;
			} else {
				return def;
			}
		},

		// Any computed properties or custom logic can go here
		step: 1,
		isStep1: Ember.computed.equal('step', 1),
		isStep2: Ember.computed.equal('step', 2),
		isStep3: Ember.computed.equal('step', 3),
		isStep4: Ember.computed.equal('step', 4),
		isStep5: Ember.computed.equal('step', 5),
		isStep6: Ember.computed.equal('step', 6),
		isStep7: Ember.computed.equal('step', 7),
		isGteStep3: Ember.computed.gte('step', 3),
		isGteStep4: Ember.computed.gte('step', 4),
		isGteStep5: Ember.computed.gte('step', 5),
		isGteStep6: Ember.computed.gte('step', 6),
		isGteStep7: Ember.computed.gte('step', 7),
	});
});
