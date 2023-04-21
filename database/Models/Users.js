import { INTEGER, STRING, DATE } from "sequelize"
import db from "../db"

const Users = db.define('Users', {
    UserId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: STRING,
    Email: STRING,
    CreatedAt: {
        type: DATE,
        defaultValue: Date.now
    }
})

Users.sync()
    .then((result) => {
        console.log(result, "synchronized");
    })
    .catch((err) => {
        console.log("DB Sync Error: ", err)
    });

module.exports = Users


// const NarrativeSet = new mongoose.Schema({
//     narrativeSetType: {
//         type: String,
//         default: "practice"
//     },
//     name: String,
//     displayName: {
//         type: String,
//         require: true
//     },
//     updateBy: {
//         type: Schema.Types.ObjectId,
//         ref: "User"
//     },
//     orderId: {
//         type: Number
//     },
//     active: {
//         type: Boolean,
//         default: true
//     },
//     isPaid: {
//         type: Boolean,
//         default: false
//     },
//     createsAt: {
//         type: Date,
//         default: Date.now
//     }
// })

// module.exports = mongoose.model("NarrativeSet", NarrativeSet);