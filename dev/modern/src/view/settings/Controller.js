Ext.define('MobileJudge.view.settings.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settings',

    //model: null,

    init: function(view) {
        this.model = view.getViewModel();
    },

    onTermsLoaded: function() {
        var select = this.getReferences().termSelector,
            rec = select.getStore().findRecord('active', true);
        select.setValue(rec.get('id'));
        console.log("load");
    },

    onNewTermClick: function() {
        var me = this,
            select = me.getReferences().termSelector,
            store = me.model.getStore('terms'),
            now = new Date(),
            month = now.getMonth(),
            rec = new MobileJudge.model.settings.Term({
                name: 'New Term',
                start: now,
                end: now,
                deadline: now
            });

        store.rejectChanges();
        store.insert(0, rec);
        select.setValue(rec);
    },

    onSaveTermClick: function() {
        console.log("save");
        var me = this,
            form = me.getReferences().termForm,
            store = me.model.getStore('terms'),
            rec = me.model.get('selectedTerm'),
            changed = false;
        console.log("save after var me");
        //if (!form.isValid()) return;
        if (rec.modified && rec.modified.active === false && rec.get('active'))
        {
            console.log("before changed is rec");
            changed = rec.get('name');
            console.log("after changed is changed");
        }
        store.sync({
            success: function() {
                console.log("Inside success");
                if (changed) Ext.GlobalEvents.fireEvent('termChanged', changed);
                console.log(changed);
            }
        });
        console.log("save end");
    },

    onDeleteTermClick: function() {
        var me = this,
            store = me.model.getStore('terms'),
            rec = me.model.get('selectedTerm');
        Ext.Msg.confirm('Delete', 'Are you sure you want to delete the selected record?',
            function(choice) {
                if (choice !== 'yes') return;
                var sync = !rec.phantom;
                store.remove(rec);
                if (sync) store.sync();
                me.onTermsLoaded(store);
            }, this);
    },

    onMakeActiveTerm: function() {
        var me = this, rec = me.model.get('selectedTerm');
        rec.set('active', true);
        setTimeout(me.onSaveTermClick(), 300);
        console.log("hello");
    },

    onNewQuestionButtonClick: function(button) {
        var rec = new MobileJudge.model.settings.Question(),
            grid = button.up('grid'),
            editor = grid.getPlugins('gridEditor');
        grid.getStore().insert(0, rec);
        //if (editor) editor.startEdit(rec, 0);
    },

    onRefreshButtonClick: function(button) {
        var grid = button.up('grid'),
            store = grid.getStore();
        store.reload();
    }


});
