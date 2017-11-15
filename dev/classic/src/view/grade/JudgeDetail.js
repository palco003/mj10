Ext.create('Ext.data.Store', {
    storeId:'judgeDetailData',
    listeners:{
        load : function() {
            var grid = Ext.getCmp("JudgeGradeView");
        }
    },
    fields:['studentName','projectName', 'gradeAverage', 'status'],
    data:[]
});

Ext.define('MobileJudge.view.grade.GradeJudgeDetailWizard', {
    extend: 'Ext.window.Window',
    alias: 'widget.gradejudgedetailwizard',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Radio',
        'Ext.form.*',
        'Ext.layout.container.Accordion',
        'Ext.layout.container.Card',
        'Ext.Component'
    ],

    cls: 'wizardone',
    layout: 'card',
    listeners: {
        close: "updateJudgeMainStore"
    },

    loadData: function(record) {
        var ctrl = this.getController();

        $("#nameLabel").text(record.data.fullName);
        ctrl.loadJudgeSecondViewData(record.data);

    },

    bodyPadding: 10,
    scrollable: false,
    controller: 'grade',
    modal : true,
    width: 800,
    height: 600,
    title: "Judge Grades by Students",


    initComponent: function() {
        this.callParent(arguments);
    },



    tbar: {
        items: [
            {
                id: 'theJudgePanel',
                xtype: 'panel',
                width: 400,
                height: 40,
                items: [
                    {
                        items: [
                            {
                                xtype: 'label',
                                text: 'Name:',
                                readOnly : true
                            },
                            {
                                id: 'nameLabel',
                                xtype: 'label',
                                text: '',
                                readOnly : true,
                                style:'padding:0px 0px 0px 30px'
                            }
                        ]
                    },
                ]
            },
            {
                id: 'detailAllJudgeButton',
                xtype: 'image',
                src: '/resources/images/icons/RedYellowGreen.ico',
                width: 40,
                dataIndex: 'bool',
                sortable: false,
                hideable: false,
                listeners: {
                    el: {
                        click: 'globalJudgeSecondViewStatus'
                    }
                },
                tooltip: '',
                layout: {
                    align: 'right'
                }
            }
        ],
        renderTo: Ext.getBody()
    },

    items: [
        {
            itemId: 'middle',
            xtype: 'JudgeGradeView',
            flex: 1
        }
    ]
});

Ext.define('MobileJudge.view.grade.JudgeGradeView', {
    extend:'Ext.grid.Panel',
    alias: 'widget.JudgeGradeView',
    store: 'judgeDetailData',
    initComponent: function() {
        this.callParent()
    },
    listeners: {
        cellclick: function (iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
            var zRec = iColIdx;
            var data = Ext.getStore("judgeDetailData").data.items[iRowIdx];

            if (zRec < 2){
                Ext.widget('acceptgradewizard').show().loadData(data);

            }
        }
    },
    columns: [
        {
            xtype: 'gridcolumn',
            text: 'Student',
            dataIndex: 'student',
            flex: 2,
            width:120
        },
        {
            xtype: 'gridcolumn',
            text: 'Project',
            dataIndex: 'projectName',
            flex: 2,
            width:35
        },
        {
            xtype: 'gridcolumn',
            text: 'Accepted Grade',
            dataIndex: 'gradeAverage',
            flex: 2,
            width:35
        },
        {
            xtype: 'gridcolumn',
            text: 'Raw Grade',
            dataIndex: 'rawGrade',
            flex: 2,
            width:35
        },
        {
            id: 'secondViewStatus',
            xtype: 'actioncolumn',
            text: 'Status',
            flex: 1,
            items: [
                {
                    icon: '/resources/images/icons/Green.ico',
                    tooltip: 'Status',
                    handler: 'changeStatusJudgeSecondView'
                }
            ],
            renderer: function (value, metadata, record) {

                if(record.get('accepted') != null){
                    var green = false;
                    var red = false;
                    var yellow = false;

                    if (record.get('pending') == true) {
                        this.items[0].tooltip = 'Pending';
                        this.items[0].icon = '/resources/images/icons/Yellow.ico';
                        yellow = true;
                    }
                    if (record.get('accepted') == true) {
                        this.items[0].tooltip = 'Accepted';
                        this.items[0].icon = '/resources/images/icons/Green.ico';
                        green = true;
                    }
                    if(record.get('rejected') == true){
                        this.items[0].tooltip = 'Rejected';
                        this.items[0].icon = '/resources/images/icons/Red.ico';
                        red = true;
                    }

                    if (green && red && yellow) {
                        this.items[0].tooltip = 'Accepted|Pending|Rejected';
                        this.items[0].icon = '/resources/images/icons/RedYellowGreen.ico';
                    }else if(green && red) {
                        this.items[0].tooltip = 'Accepted|Rejected';
                        this.items[0].icon = '/resources/images/icons/RedGreen.ico';
                    }else if(green && yellow) {
                        this.items[0].tooltip = 'Accepted|Pending';
                        this.items[0].icon = '/resources/images/icons/YellowGreen.ico';
                    }else if(yellow && red) {
                        this.items[0].tooltip = 'Pending|Rejected';
                        this.items[0].icon = '/resources/images/icons/RedYellow.ico';
                    }
                }

            },
            width: 40,
            dataIndex: 'bool',
            sortable: false,
            hideable: false
        }
    ],
    floating: false,
    draggable: false,
    modal: true,
    closable: false,
    height: 500,
    width: 375,
    renderTo: Ext.get('grademodal')
});