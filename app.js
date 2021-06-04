const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memorynode :');
const db = new Sequelize('employee', 'root', 'vaishveer19', {
  host: 'localhost',
  dialect: 'mysql'
});
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.get("/", (req, res, next) => {
    User.findAll().then(data => res.send({
        success: "true",
        message: "get method",
        data,
    })).catch(err => console.log(err));
});
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log('listening on port ${port}...'))
const User = db.define('User',
 {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    },
  employeeId: {
    type: DataTypes.INTEGER            
    },
  employeePlace: {
    type: DataTypes.STRING
    },
  employeeQualification: {
    type: DataTypes.STRING            
  }
},
  {
  });
const User1 = db.define('User1',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    school: {
    type: DataTypes.STRING
    },
  address: {
    type: DataTypes.INTEGER            
    },
  place: {
    type: DataTypes.STRING            
    },
  },
);
db.sync({
    force: true
})
    .then(() => {
        const jane = User.bulkCreate([
            {
                firstName: "Priya",
                lastName: "Murugan",
                employeeId: "22",
                employeePlace: "Rjpm",
                employeeQualification:"B.Tech"
            }
        ])
    })
  .catch((err) => console.log(err))
  

// User.hasOne(User, {
//     foreignKey: "firstName"
// });
// User1.belongsTo(User1);

db.sync()
