const express = require('express');
const router = express.Router();

// Öğrenci oluşturma endpoint'i
router.post('/students', (req, res) => {
    // İstek gövdesinden alınan verilerle yeni öğrenci oluşturulur ve kaydedilir
});

// Öğrenci güncelleme endpoint'i
router.put('/students/:id', (req, res) => {
    // İstenen ID'ye sahip öğrenci güncellenir
});

// Öğrenci silme endpoint'i
router.delete('/students/:id', (req, res) => {
    // İstenen ID'ye sahip öğrenci silinir
});

// Tüm öğrencileri listeleme endpoint'i
router.get('/students', (req, res) => {
    // Tüm öğrenciler veritabanından alınır ve döndürülür
});

// Seçili öğrenci detaylarını getirme endpoint'i
router.get('/students/:id', (req, res) => {
    // İstenen ID'ye sahip öğrenci veritabanından alınır ve döndürülür
});

// Diğer API endpoint'lerini buraya ekleyebilirsiniz

module.exports = router;
