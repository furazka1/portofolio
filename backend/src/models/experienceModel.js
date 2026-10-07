
const db = require("../config/db");

// Ini Tampilkan semua data

const getAllExperiences = async () => {
    const [rows] = await db.query("SELECT * FROM experiences ORDER BY start_date, end_date"); 
    return rows;
};

// ini tampilkan semua data berdasarkan id 

const getExperiencesById = async (id) => { 
    const [rows] = await db.query('SELECT * FROM experiences WHERE id = ?', [id]);
    return rows[0];
};

// membuat data

const createExperience = async (data) => {
    const {type, title, company, location, start_date, end_date, is_current, description} = data;
    const [result] = await db.query (
        'INSERT INTO experiences (type, title, company, location, start_date, end_date, is_current, description) VALUES (?,?,?,?,?,?,?,?)',
        [type, title, company, location, start_date, end_date, is_current, description]
    );
    return result;
};

// mengedit data

const updateExperience = async (id, data) => {
    const {type, title, company, location, start_date, end_date, is_current, description} = data;
    const [result] = await db.query(
        'UPDATE experiences SET type = ?, title = ?, company = ?, location = ?, start_date = ?, end_date = ?, is_current = ?, description = ? WHERE id = ?',
        [type, title, company, location, start_date, end_date, is_current, description, id]
    );
    return result;
}

// menghapus data

const  deleteExperience = async (id) => {
    const [result] = await db.query ('DELETE FROM experiences WHERE id = ?', [id]);
    return result;
};

module.exports = { getAllExperiences, getExperiencesById, createExperience, updateExperience, deleteExperience };      