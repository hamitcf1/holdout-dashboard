# 📊 Holdout — İlerleme Panosu

Holdout uygulamasının geliştirme ilerlemesini takip eden **dahili pano**. Ana pazarlama sitesinden (holdout) **ayrı bir repo**dur; PC'de `Desktop/Streak/dashboard` klasöründe yaşar ama kendi git reposu + kendi GitHub Pages sitesidir.

🔗 Canlı: https://hamitcf1.github.io/holdout-dashboard/

## İçerik
- MVP geri sayımı (canlı) + MVP ilerleme halkası
- İstatistikler (geçen gün, kalan gün, tamamlanan görevler, faz ilerlemesi)
- Hedefler (kullanıcı, gelir, K faktörü, premium dönüşüm)
- Yol haritası — görsel zaman çizelgesi + yazısal faz/görev listesi

## Güncelleme
Tek kaynak: **`dashboard.js` içindeki `CONFIG`**. Tarihleri, hedef değerleri ve görev `d: true/false` durumlarını oradan düzenle, sonra:

```
git add -A
git commit -m "ilerleme güncellemesi"
git push
```

GitHub Pages ~1 dakikada otomatik yeniden yayınlar.

## Dosyalar
- `index.html` — yapı
- `dashboard.css` — stiller (Holdout tasarım sistemi)
- `dashboard.js` — `CONFIG` + render mantığı
