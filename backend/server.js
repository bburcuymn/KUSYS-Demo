const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;
const cors = require('cors');

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
    const { name, email, password } = req.body;

    // db.json dosyasından veriyi oku
    const data = fs.readFileSync('db.json');
    const db = JSON.parse(data);

    // Son ID'yi al
    const lastId = db.admins.length > 0 ? db.admins[db.admins.length - 1].userId : 0;

    // Yeni adminin ID'sini belirle
    const newId = lastId + 1;

    // Yeni admini oluştur
    const newAdmin = {
        userId: newId,
        name,
        email,
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
    const { name, email, password } = req.body;

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
        password
    };

    // admins veri kümesine yeni admini ekle
    db.students.push(newStudent);

    // db.json dosyasına veriyi kaydet
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2));

    // Başarılı bir yanıt döndür
    res.status(200).json(newStudent);
});



app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
