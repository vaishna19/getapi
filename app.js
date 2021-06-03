const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memorynode :');
const db = new Sequelize('employee', 'root', 'vaishveer19', {
  host: 'localhost',
  dialect: 'mysql'
});
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const courses = [
  { firstName:'vaishu', lastName: 'jasper',employeeId:'22' ,employeePlace:'udumalpet' , employeeQualification:"B.Tech"}
]
app.get('/',( req, res) => {
    res.send('Hello world');
});
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
app.get('/api/posts/:id',(req, res)=> {
    const course = courses.find(c=>c.id === parseInt(req.params.id))
  if (!course) res.status(404).send('id not found')
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
app.get('/api/users',(req, res) => {
  let sql = "SELECT * FROM User";
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
// let sql = "SELECT * FROM User";
// let query = db.query(sql, (err, results) => {
//   if (err) throw err;
//   res.send(JSON.stringify({ "status": 200, "error": null, "response": results }))
// });
// User.hasOne(User, {
//     foreignKey: "firstName"
// });
// User1.belongsTo(User1);

db.sync()
// module.exports = {
//   getAllCompany
// }