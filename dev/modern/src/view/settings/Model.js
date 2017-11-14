Ext.define('MobileJudge.view.settings.Model', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.settings',

    stores: {
        terms: {
            type: 'terms',
            storeId: 'terms',
            listeners: {
                load: 'onTermsLoaded'
            }
        },
        questions: {
            type: 'questions',
            storeId: 'questions'
        },
        templates4Term: {
            type: 'templates',
            storeId: 'templates4Term'
        }
    },

    formulas: {
        selectedTerm: {
            bind: {
                bindTo: '{termSelector.selection}',
                deep: true
            },
            get: function(term) {
                return term;
            },
            set: function(term) {
                if (!term.isModel) term = this.getStore('terms').getById(term);
                this.set('selectedTerm', term);
            }
        }
    }

    //data: {
    /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    //}
});
