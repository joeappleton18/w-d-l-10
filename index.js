const express = require('express');
const ejs = require('ejs');

const PORT = 8000;
const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_NAME = 'university_web';
const DB_PASSWORD = '';
const DB_PORT = 3306;

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


app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});

