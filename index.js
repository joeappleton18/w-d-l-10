const express = require('express');
const ejs = require('ejs');
const client = require('mysql');
const mysql = require('mysql');

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {

	res.render('index', {
		studentCount: 10,
		academicCount: 20,
		departmentCount: 20,
		courseCount: 15
	});
});


app.get('/students', async (req, res) => {
	res.render('students', { students: [] });

});

app.get('/students/edit/:id', async (req, res) => {
	res.render('student_edit', { student: {}, courses: [], message: '' });
});

app.post('/students/edit/:id', async (req, res) => {

});


app.listen(process.env.PORT, () => {
	console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

