module.exports = function(sequelize, DataTypes) {
	var term = sequelize.define('term', {
		id: {
			type: DataTypes.INTEGER(5),
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		start: {
			type: DataTypes.DATE,
			allowNull: true
		},
		end: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deadline: {
			type: DataTypes.DATE,
			allowNull: true
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		allowJudgeLogin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
			field: 'allowjudgelogin'
		},
		showGrades: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
			field: 'showgrades'
		},
		studentsPerJudge: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: 0,
			field: 'studentsperjudge'
		},
		location: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mapImageUrl: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mapimageurl'
		},
		srProjectUrl: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'srprojecturl'
		},
		srProjectToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'srprojecttoken'
		},
		liveUrl: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'liveurl'
		},
		developmentUrl: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'devurl'
		},
		noProfileImageUrl: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mailFrom: {
			type: DataTypes.STRING,
			allowNull: false
		},
		resetPasswordTemplate: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: 3
		},
		confirmTemplate: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: 3
		},
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 57c573111bc8ac58e4d3b6be1aff92a294172f70
		acceptanceConfirmation: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: 3
		},
<<<<<<< HEAD
=======
>>>>>>> b4d4eb2f8b51bc3dc3b390db4f0548e4a1c8c84f
=======
>>>>>>> 57c573111bc8ac58e4d3b6be1aff92a294172f70
		rejectInviteTemplate: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: 3
		},
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 57c573111bc8ac58e4d3b6be1aff92a294172f70
		acceptInviteTemplate: {
                        type: DataTypes.INTEGER(3),
                        allowNull: false,
                        defaultValue: 3
                },
<<<<<<< HEAD
=======
>>>>>>> b4d4eb2f8b51bc3dc3b390db4f0548e4a1c8c84f
=======
>>>>>>> 57c573111bc8ac58e4d3b6be1aff92a294172f70
		removeInviteTemplate: {
			type: DataTypes.INTEGER(3),
			allowNull: false,
			defaultValue: 3
		},
		display: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		}
	}, {
		classMethods: {
			associate: function (models) {
				term.hasMany(models.email);
				term.hasMany(models.project);
				term.hasMany(models.user, {
					as: 'Students',
					scope: {role: 1}
				});
				term.hasMany(models.user, {
					as: 'Judges',
					scope: {role: 2}
				});
			},
			getActiveTerm: function() {
				return term.scope('active').findOne();
			}
		},
		scopes: {
			active: {
				where: {
					active: true
				},
				limit: 1
			}
		}
	});

	return term;
};
