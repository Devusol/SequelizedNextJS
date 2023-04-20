import Users from "../../database/Models/Users"

export default async function handler(req, res) {
    console.log("test route", req.body)

    try {

        const users = await Users.findAll({ raw: true })
        console.log("Users: ", users)
        res.status(200).json({
            success: true,
            totalRecords: users.length,
            data: users
        })
    } catch (err) {
        console.log("ERR: ", err)
        res.status(400).json({ success: false, error: err.message })
    }

}