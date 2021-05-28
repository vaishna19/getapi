const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memorynode :');
const db = new Sequelize('employee', 'root', 'vaishveer19', {
  host: 'localhost',
  dialect: 'mysql'
});
const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.method);
    const { headers, url, method } = req;
    console.log(headers);
    console.log(url);
    console.log(method);
    res.setHeader('Content-Type', 'application.json');
    res.end(JSON.stringify({ firstName: "guru", lastName: "priya", employeeId: "2023", employeePlace: "rajapalayam", employeeQualification: "BE" }
    ));
});
const PORT = 5000;
server.listen(PORT, () => console.log('Server running on ${PORT}'));
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
// User.hasOne(User, {
//     foreignKey: "firstName"
// });
// User1.belongsTo(User1);

db.sync()