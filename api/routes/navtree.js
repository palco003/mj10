module.exports = function(server, db) {
    server.get(apiPrefix + '/navtree', function (req, res, next) {
        switch (req.user.role) {
            case 1: // Student
                res.json({
                    expanded: true,
                    children: [
                        {
                            text: 'Home',
                            iconCls: 'x-fa fa-home',
                            viewType: 'studenthome',
                            routeId: 'home', // routeId defaults to viewType
                            leaf: true
                        },
                        {
                            text: 'Event Map',
                            iconCls: 'x-fa fa-map-marker',
                            viewType: 'eventmap',
                            routeId: 'map',
                            leaf: true
                        },
                        {
                            text: 'Stats',
                            iconCls: 'x-fa fa-bar-chart',
                            rowCls: 'nav-tree-badge nav-tree-badge-new',
                            viewType: 'student_stats',
                            routeId: 'stats',
                            leaf: true
                        }
                    ]
                });
                break;
            case 2: // Judge
                res.json({
                    expanded: true,
                    children: [
                        {
                            text: 'Home',
                            iconCls: 'x-fa fa-home',
                            viewType: 'judgehome',
                            routeId: 'home',
                            leaf: true
                        },
                        {
                            text: 'Event Map',
                            iconCls: 'x-fa fa-map-marker',
                            viewType: 'eventmap',
                            routeId: 'map',
                            leaf: true
                        },
                        {
                            text: 'Stats',
                            iconCls: 'x-fa fa-bar-chart',
                            rowCls: 'nav-tree-badge nav-tree-badge-new',
                            viewType: 'judge_stats', //'charts',
                            routeId: 'stats',
                            leaf: true
                        }
                    ]
                });
                break;
            case 3: // Admin
                res.json({
                    expanded: true,
                    children: [
                        {
                            text: 'Home',
                            iconCls: 'x-fa fa-home',
                            viewType: 'adminhome',
                            routeId: 'home',
                            leaf: true
                        },
                        {
                            text: 'Event Map',
                            iconCls: 'x-fa fa-map-marker',
                            viewType: 'eventmap',
                            routeId: 'map',
                            leaf: true
                        },
                        {
                            text: 'Email',
                            iconCls: 'x-fa fa-send',
                            rowCls: 'nav-tree-badge nav-tree-badge-hot',
                            routeId: 'email',
                            leaf: true
                        },
                        {
                            text: 'People',
                            iconCls: 'x-fa fa-group',
                            routeId: 'people',
                            leaf: true
                        },
                        {
                            text: 'Grades',
                            iconCls: 'x-fa fa-book',
                            viewType: 'grade',
                            routeId: 'grade',
                            leaf: true
                        },
                        {
                            text: 'Stats',
                            iconCls: 'x-fa fa-bar-chart',
                            rowCls: 'nav-tree-badge nav-tree-badge-new',
                            viewType: 'admin_stats', //'charts',
                            routeId: 'stats',
                            leaf: true
                        },
                        {
                            text: 'Settings',
                            iconCls: 'x-fa fa-gears',
                            routeId: 'settings',
                            leaf: true
                        }
                    ]
                });
                break;
            case 4: // UnregJudge
                res.json({
                    expanded: true,
                    children: [
                        {
                            text: 'Home',
                            iconCls: 'x-fa fa-home',
<<<<<<< HEAD
                            viewType: 'unreghome',
=======
                            viewType: 'studenthome',
>>>>>>> b4d4eb2f8b51bc3dc3b390db4f0548e4a1c8c84f
                            routeId: 'home', // routeId defaults to viewType
                            leaf: true
                        },
                        {
<<<<<<< HEAD
                            text: 'Unregistered Judges',
                            iconCls: 'x-fa fa-group',
                            //viewType: 'unregistered',
                            routeId: 'unregistered',
=======
                            text: 'Event Map',
                            iconCls: 'x-fa fa-map-marker',
                            viewType: 'eventmap',
                            routeId: 'map',
>>>>>>> b4d4eb2f8b51bc3dc3b390db4f0548e4a1c8c84f
                            leaf: true
                        }
                    ]
                });
                break;
        }
        return next();
    });
};
