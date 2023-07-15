const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;
const cors = require('cors');
const dbFilePath = 'db.json';

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    try {
        // db.json dosyasını oku
        const data = fs.readFileSync('db.json', 'utf8');
        const jsonData = JSON.parse(data);

        // Okunan veriyi kullanarak istediğiniz işlemleri yapabilirsiniz
        // Örneğin, veriyi bir değişkene atayabilir veya döngü ile tüm verileri dolaşabilirsiniz

        res.json(jsonData); // Okunan veriyi JSON formatında yanıt olarak döndürme örneği
    } catch (error) {
        console.error('Veri okuma hatası:', error);
        res.status(500).json({ error: 'Veri okuma hatası' });
    }
});



// Admin kaydı için POST isteğini işle
app.post('/api/admins', (req, res) => {
    const { name, email, corporationNo, birthDay, password } = req.body;

    // db.json dosyasından veriyi oku
    const data = fs.readFileSync('db.json');
    const db = JSON.parse(data);

    // Son ID'yi al
    const lastId = db.admins.length > 0 ? db.admins[db.admins.length - 1].adminId : 0;

    // Yeni adminin ID'sini belirle
    const newId = lastId + 1;

    // Yeni admini oluştur
    const newAdmin = {
        adminId: newId,
        name,
        email,
        corporationNo,
        birthDay,
        password
    };

    // admins veri kümesine yeni admini ekle
    db.admins.push(newAdmin);

    // db.json dosyasına veriyi kaydet
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2));

    // Başarılı bir yanıt döndür
    res.status(200).json(newAdmin);
});

app.post('/api/students', (req, res) => {
    const { name, email, schoolNo, birthDay, password, courses } = req.body;

    // db.json dosyasından veriyi oku
    const data = fs.readFileSync('db.json');
    const db = JSON.parse(data);

    // Son ID'yi al
    const lastId = db.students.length > 0 ? db.students[db.students.length - 1].studentId : 0;

    // Yeni adminin ID'sini belirle
    const newId = lastId + 1;

    // Yeni admini oluştur
    const newStudent = {
        studentId: newId,
        name,
        email,
        schoolNo,
        birthDay,
        password,
        courses

    };

    // admins veri kümesine yeni admini ekle
    db.students.push(newStudent);

    // db.json dosyasına veriyi kaydet
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2));

    // Başarılı bir yanıt döndür
    res.status(200).json(newStudent);
});

app.post('/api/admins/login', (req, res) => {
    const { corporationNo, password } = req.body;

    // db.json dosyasından veriyi oku ve giriş kontrolünü yap
    const data = fs.readFileSync('db.json');
    const db = JSON.parse(data);

    const matchedAdmin = db.admins.find(
        (admin) =>
            admin.corporationNo === corporationNo && admin.password === password
    );

    if (matchedAdmin) {
        console.log('Login başarılı', matchedAdmin);
        res.status(200).json({ message: 'Login başarılı' });
    } else {
        console.log('Login başarısız');
        res.status(401).json({ error: 'Login başarısız' });
    }
});
app.post('/api/students/login', (req, res) => {
    const { schoolNo, password } = req.body;

    // db.json dosyasından veriyi oku ve giriş kontrolünü yap
    const data = fs.readFileSync('db.json');
    const db = JSON.parse(data);

    const matchedStudent = db.students.find(
        (student) =>
            student.schoolNo === schoolNo && student.password === password
    );

    if (matchedStudent) {
        console.log('Login başarılı', matchedStudent);
        res.status(200).json({ message: 'Login başarılı' });
    } else {
        console.log('Login başarısız');
        res.status(401).json({ error: 'Login başarısız' });
    }
});


// Admin listesi için GET isteğini işle
app.get('/api/admins', (req, res) => {
    try {
        // db.json dosyasını oku
        const data = fs.readFileSync(dbFilePath, 'utf8');
        const jsonData = JSON.parse(data);

        // admins verisini döndür
        const admins = jsonData.admins;
        res.json(admins);
    } catch (error) {
        console.error('Admin verilerini okuma hatası:', error);
        res.status(500).json({ error: 'Admin verilerini okuma hatası' });
    }
});

// Öğrenci listesi için GET isteğini işle
app.get('/api/students', (req, res) => {
    try {
        // db.json dosyasını oku
        const data = fs.readFileSync(dbFilePath, 'utf8');
        const jsonData = JSON.parse(data);

        // students verisini döndür
        const students = jsonData.students;
        res.json(students);
    } catch (error) {
        console.error('Öğrenci verilerini okuma hatası:', error);
        res.status(500).json({ error: 'Öğrenci verilerini okuma hatası' });
    }
});



app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
