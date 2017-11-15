Ext.define('MobileJudge.view.unregs.Home', {
	extend: 'Ext.container.Container',
	xtype: 'unreghome',

	requires: [
		'Ext.ux.layout.ResponsiveColumn'
	],

	layout: 'responsivecolumn',
	cls: 'userProfile-container',

	controller: 'unregistered',
	viewModel: {
		data: {
		}
	},

	items: [
		{
			// Always 100% of container
			xtype: 'profile',
			userCls: 'big-100 small-100 shadow'
		}
	]

});
