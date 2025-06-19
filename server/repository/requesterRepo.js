import db from "../database/db.js";
import AppError from "../error/AppError.js";

const addBloodRequest = async (name,email,requesterId,bloodGroup,state,city,contact,status) => {
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();
        const [result] = await conn.execute(
            `INSERT INTO bloodrequests (requester_id, blood_group, state, city, contact,status)
            VALUES (?,?,?,?,?,?)`,
            [requesterId,bloodGroup,state,city,contact,status]
        );
        console.log("Blood Request added successfully!");

        const [validDonors] = await conn.execute(
            `SELECT 
                d.donor_id, 
                u.name, 
                u.email, 
                u.phone, 
                d.blood_group, 
                u.state, 
                u.city, 
                d.last_donation_date, 
                d.total_donations
            FROM 
                donors d
            JOIN 
                users u ON d.user_id = u.user_id
            WHERE 
                d.blood_group = ? -- Replace ? with the required blood group
                AND u.state = ?   -- Replace ? with the required state
                AND u.city = ?    -- Replace ? with the required city
                AND DATE(d.last_donation_date) <= DATE_SUB(CURDATE(), INTERVAL 3 MONTH);
`,
            [bloodGroup,state,city]
        );
        console.log(validDonors);
        
        const notificationQuery = `
            INSERT INTO notifications (request_id, donor_id, status, notified_at) 
            VALUES (?, ?, 'pending', NOW());
        `;
        for (const donor of validDonors) {
            await conn.execute(notificationQuery, [result.insertId, donor.donor_id]);
        }
        await conn.commit();
        console.log("Notification added successfully!");
        return {
            id: result.insertId,
            requesterId: requesterId,
            name: name,
            email: email,
            bloodGroup: bloodGroup,
            state: state,
            city: city,
            contact: contact,
            status: status,
            donors: validDonors.map((donor) => ({ donorId: donor.donor_id,name: donor.name,phone: donor.phone, email: donor.email, status: 'pending', notifiedAt: new Date() })),
            
        };
    } catch (error) {
        await conn.rollback();
        console.error("Error adding request:", error);
        throw new AppError("Error adding request:", 400);
    }
    finally {
        conn.release();
    }
}
const getRequestById = async (id) => {
    const conn = await db.getConnection();
    try {
        const [request] = await conn.execute(
            `SELECT * FROM bloodrequests WHERE requester_id = ?`,
            [id]
        );
        console.log("Request fetched successfully!", request);
        return request;
    } catch (error) {
        console.error("Error fetching request:", error);
        throw new AppError("Error fetching request:", 400);
    }
    finally {
        conn.release();
    }
}

export default{
    addBloodRequest,
    getRequestById,
}