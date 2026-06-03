/* ============================================================
   HOLDOUT — İlerleme Panosu
   Tek kaynak: aşağıdaki CONFIG. Tarihleri, hedefleri ve
   görevleri buradan düzenle — pano otomatik güncellenir.
   ============================================================ */

const CONFIG = {
  // --- Tarihler (YYYY-MM-DD) ---
  projectStart: "2026-05-01",
  mvpTarget:    "2026-08-31",
  launchTarget: "2026-09-30",

  // --- Hedefler ---
  goals: [
    { label: "Kullanıcı — 6. ay",     current: 0, target: 20000,  note: "İlk 6 ay hedefi (muhafazakâr senaryo)" },
    { label: "Kullanıcı — 12. ay",    current: 0, target: 100000, note: "12. ay hedefi (iyimser senaryo)" },
    { label: "Aylık gelir — 6. ay",   current: 0, target: 2050,   prefix: "$", note: "abonelik + reklam" },
    { label: "Aylık gelir — 12. ay",  current: 0, target: 15200,  prefix: "$" },
    { label: "K faktörü (viral)",     current: 0, target: 1.0,    decimals: 1, note: "her kullanıcı 1+ yeni kullanıcı getirmeli" },
    { label: "Premium dönüşüm",       current: 0, target: 5,      suffix: "%", note: "ödeme yapan kullanıcı oranı" }
  ],

  // --- Yol haritası fazları ---
  phases: [
    { name: "Faz 0 — Fikir & Doğrulama", short: "Faz 0\nFikir", start: "2026-05-01", end: "2026-05-31", mvp: true, tasks: [
      { t: "Fikir doğrulama", d: true },
      { t: "Uygulama ismi: Holdout", d: true },
      { t: "Mockup tasarımı", d: true },
      { t: "Rakip & konumlandırma analizi", d: true }
    ]},
    { name: "Faz 1 — Hazırlık & Tasarım", short: "Faz 1\nHazırlık", start: "2026-05-31", end: "2026-06-30", mvp: true, tasks: [
      { t: "Pazarlama websitesi (canlı)", d: true },
      { t: "Mobbin araştırması (onboarding/paywall)", d: false },
      { t: "Figma ekran tasarımları", d: false },
      { t: "Developer hesapları (Apple/Google)", d: false },
      { t: "Supabase şemasını finalize et", d: true },
      { t: "Design system & bileşen kütüphanesi", d: true }
    ]},
    { name: "Faz 2 — MVP Geliştirme", short: "Faz 2\nMVP", start: "2026-06-30", end: "2026-08-31", mvp: true, tasks: [
      // — Çekirdek —
      { t: "Giriş + auth (anonim/dev) + magic-link deep link (otp_expired dahil)", d: true },
      { t: "Düello oluşturma — multi-step (ne/hedef/süre/bahis)", d: true },
      { t: "Check-in + realtime + kanıt foto (Storage)", d: true },
      { t: "Davet linki + 4 haneli kod ile katılma", d: true },
      { t: "Düello detay zengin (dots, %, laf sokma, bahis, bu-hafta toggle, rakip ismi)", d: true },
      { t: "Düello bitiş ekranı (ödül + paylaş + premium CTA)", d: true },
      { t: "İstatistik + Profil + streak (geçmiş+gelecek hafta)", d: true },
      // — Solo / Quit —
      { t: "Solo habit REWORK: detay ekranı + multi-step create + preset picker", d: true },
      { t: "Bırakma/sobriety: temiz sayaç + relapse + kilometre taşı + preset picker", d: true },
      { t: "Quantity hedef + manuel input + birim seçimi + hedefte cap'leme", d: true },
      { t: "Per-habit destek/bilgi sayfaları (fayda + ipucu + 'bir daha gösterme')", d: true },
      { t: "Home birleşik 'Bugün' listesi (düello + solo + quit)", d: true },
      // — Gamification —
      { t: "Puan motoru (ledger + trigger, geri-alınabilir) + Home puan + PointsBurst", d: true },
      { t: "Haftalık ligler (5 tier, lazy terfi/düşme) + terfi paylaşımı", d: true },
      { t: "Görevler (Quests): günlük + aylık, ilerleme + ödül talep", d: true },
      // — Sosyal —
      { t: "Sosyal feed: başarım → paylaşım prompt'u + post/beğeni/yorum", d: true },
      { t: "Kullanıcı arama + username + public profil", d: true },
      { t: "Arkadaşlık (istek/kabul) + Herkes↔Arkadaşlar lig filtresi", d: true },
      // — Sistem —
      { t: "Local motivasyon bildirimleri + ayarlar (tür bazlı)", d: true },
      { t: "Premium UX: paywall + entitlement + grace + reklam kapısı + emoji paywall", d: true },
      { t: "RevenueCat dev-build (Test Store) canlı + paywall fix (çift-present/logIn)", d: true },
      { t: "Onboarding revamp (mechanic/why21/rules/paywall/söz-ver final + avatar seçici)", d: true },
      { t: "i18n: MVP'de TR+EN (RU/AZ/DE/FR standby, EN fallback) + cihaz dili", d: true },
      { t: "Light mode temeli (dark/light/system + boot uygula)", d: true },
      { t: "13 yaş yasal sınırı (app içi)", d: true },
      // — Native his / performans —
      { t: "Native his: ripple+haptic, liste giriş animasyonu, swipe-back", d: true },
      { t: "Loading azalt: kalıcı cache + skeleton + FlatList (yorum/arama/feed)", d: true },
      { t: "React Query (4 sekme) + optimistic mutations → sekme geçişi anında", d: true },
      { t: "Güvenlik kilidi: RLS rol/kolon write, RPC execute grant, proofs bucket", d: true },
      { t: "Timezone fix (localDay) — gece check-in serisi bozulmuyor", d: true },
      { t: "İptal/silme: çok adımlı yazılı onay (duel + solo + quit)", d: true },
      { t: "Onboarding: Düello/Solo seçimi + solo uyarı adımı + solo oluşturma", d: true },
      { t: "Auth: 6 haneli OTP kod girişi + davet akışı (token/code) onboarding", d: true }
    ]},
    { name: "Faz 3 — Yayın & Lansman", short: "Faz 3\nYayın", start: "2026-08-31", end: "2026-09-30", mvp: false, tasks: [
      { t: "App icon + marka varlıkları", d: true },
      { t: "Light mode cila (inline overlay'ler palete bağlı)", d: false },
      { t: "RevenueCat gerçek ödeme (Apple $99 / Google $25 + store ürünleri)", d: false },
      { t: "AdMob (gerçek reklam) + reklam→ödül ekranı + ATT/consent", d: false },
      { t: "Apple/Google giriş + hesap silme (Apple zorunlu)", d: false },
      { t: "EAS prod build + developer hesapları", d: false },
      { t: "Remote push (APNs/FCM)", d: false },
      { t: "Store görselleri + ASO + gizlilik etiketi/Data Safety + EULA", d: false },
      { t: "Web: 13-yaş/gizlilik + sosyal medya marka kiti (holdout sitesi)", d: false },
      { t: "Beta (TestFlight / Play internal) → submit", d: false },
      { t: "Lansman post serisi + Product Hunt → ilk 100 kullanıcı", d: false }
    ]},
    { name: "Faz 4 — MVP Sonrası", short: "Faz 4\nSonrası", start: "2026-09-30", end: "2026-12-31", mvp: false, tasks: [
      { t: "Avatar (emoji bedava / premium kilitli + foto premium)", d: true },
      { t: "Sosyal & Lig (akış + lig + arkadaşlık + yorum)", d: true },
      { t: "Cihaz senkronu (HealthKit/Health Connect) — adım/su", d: false },
      { t: "Oransal puan + öne-geçme bonusu", d: false },
      { t: "Market / loot box (puan harcama)", d: false },
      { t: "Per-habit soru adımları (kaç sigara/uyanma saati) + premium habitler (screen time/kalori)", d: false },
      { t: "Doomscroll motivasyon akışı", d: false },
      { t: "Uygulama kilidi (Screen Time, iOS) 🚀", d: false },
      { t: "Maskot + tutorial", d: false }
    ]}
  ]
};

/* ---------------- helpers ---------------- */
const DAY = 86400000;
const parse = (s) => new Date(s + "T00:00:00");
const daysBetween = (a, b) => Math.round((b - a) / DAY);
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const pad = (n) => String(n).padStart(2, "0");
function fmtDate(d) { return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + "." + d.getFullYear(); }
function fmtNum(v, g) {
  const s = (g && g.prefix ? g.prefix : "") +
    Number(v).toLocaleString("tr-TR", { maximumFractionDigits: (g && g.decimals) || 0 }) +
    (g && g.suffix ? g.suffix : "");
  return s;
}
function phaseStatus(p, now) {
  const allDone = p.tasks.length > 0 && p.tasks.every(t => t.d);
  if (allDone) return "done";
  if (now >= parse(p.start) && now <= parse(p.end)) return "active";
  if (now > parse(p.end)) return "active"; 
  return "todo";
}
const tasksDone = (p) => p.tasks.filter(t => t.d).length;

/* ---------------- render ---------------- */
function render() {
  const now = new Date();
  const start = parse(CONFIG.projectStart);
  const mvp = parse(CONFIG.mvpTarget);

  document.getElementById("today").textContent = fmtDate(now);
  document.getElementById("mvp-date").textContent = fmtDate(mvp);
  document.getElementById("updated").textContent = fmtDate(now);

  const active = CONFIG.phases.find(p => phaseStatus(p, now) === "active") || CONFIG.phases[0];
  document.getElementById("phase-now").textContent = "Şu an: " + active.name.split(" — ")[0] + " (" + active.name.split(" — ")[1] + ")";

  // MVP progress
  const mvpPhases = CONFIG.phases.filter(p => p.mvp);
  const mvpTotal = mvpPhases.reduce((a, p) => a + p.tasks.length, 0);
  const mvpDoneN = mvpPhases.reduce((a, p) => a + tasksDone(p), 0);
  const mvpPct = mvpTotal ? Math.round(mvpDoneN / mvpTotal * 100) : 0;
  const C = 2 * Math.PI * 70;
  const fg = document.getElementById("ring-fg");
  if (fg) {
    fg.style.strokeDasharray = C;
    fg.style.strokeDashoffset = C * (1 - mvpPct / 100);
  }
  document.getElementById("ring-pct").textContent = mvpPct + "%";

  // stats (Bento asymmetric layout)
  const allTotal = CONFIG.phases.reduce((a, p) => a + p.tasks.length, 0);
  const allDoneN = CONFIG.phases.reduce((a, p) => a + tasksDone(p), 0);
  const elapsed = Math.max(0, daysBetween(start, now));
  const remain = Math.max(0, daysBetween(now, mvp));
  const milestones = CONFIG.phases.filter(p => phaseStatus(p, now) === "done").length;
  const f2 = CONFIG.phases.find(p => p.name.indexOf("Faz 2") === 0);
  
  const stats = [
    { v: elapsed, k: "Geçen gün (başlangıç)", span: 2 },
    { v: remain, k: "MVP'ye kalan gün", lime: true, span: 2 },
    { v: allDoneN + "<small>/" + allTotal + "</small>", k: "Tamamlanan adım", raw: true, span: 2 },
    { v: tasksDone(f2) + "<small>/" + f2.tasks.length + "</small>", k: "MVP görevleri", raw: true, span: 3 },
    { v: milestones + "<small>/" + CONFIG.phases.length + "</small>", k: "Tamamlanan faz", raw: true, span: 3 },
    { v: mvpPct + "<small>%</small>", k: "MVP ilerlemesi", raw: true, lime: true, span: 6 }
  ];

  document.getElementById("stats").innerHTML = stats.map((s, i) =>
    `<div class="stat" style="grid-column: span ${s.span}; animation: slideUp 0.8s var(--ease-spring) forwards; animation-delay: ${i * 0.08}s; opacity: 0;">
      <div class="v ${s.lime ? "" : "muted"}">${s.v}</div>
      <div class="k">${s.k}</div>
    </div>`
  ).join("");

  // goals
  document.getElementById("goals").innerHTML = CONFIG.goals.map((g, i) => {
    const pct = clamp(g.target ? g.current / g.target * 100 : 0, 0, 100);
    return `<div class="goal" style="animation: slideUp 0.8s var(--ease-spring) forwards; animation-delay: ${0.4 + i * 0.08}s; opacity: 0;">
      <div class="goal-top"><span class="goal-label">${g.label}</span>
        <span class="goal-val">${fmtNum(g.current, g)} <i>/ ${fmtNum(g.target, g)}</i></span></div>
      <div class="goal-bar"><span style="width:${pct}%"></span></div>
      ${g.note ? `<div class="goal-note">${g.note}</div>` : ""}
    </div>`;
  }).join("");

  // timeline
  const tEnd = parse(CONFIG.phases[CONFIG.phases.length - 1].end);
  const span = daysBetween(start, tEnd) || 1;
  const segHtml = CONFIG.phases.map(p => {
    const w = clamp(daysBetween(parse(p.start), parse(p.end)) / span * 100, 0, 100);
    const st = phaseStatus(p, now);
    return `<div class="tl-seg ${st}" style="width:${w}%"><span class="lab">${(p.short || p.name).replace(/\n/g, "<br>")}</span></div>`;
  }).join("");
  const todayPct = clamp(daysBetween(start, now) / span * 100, 0, 100);
  const mvpPctPos = clamp(daysBetween(start, mvp) / span * 100, 0, 100);
  const launchPctPos = clamp(daysBetween(start, parse(CONFIG.launchTarget)) / span * 100, 0, 100);
  
  document.getElementById("timeline").innerHTML =
    `<div class="tl-track" style="animation: fadeIn 1.2s var(--ease-out) forwards; opacity: 0;">
      ${segHtml}
      <div class="tl-today" style="left:${todayPct}%"></div>
    </div>
     <div class="tl-milestones" style="animation: fadeIn 1.2s var(--ease-out) forwards; animation-delay: 0.6s; opacity: 0;">
       <span class="tl-ms" style="left:${mvpPctPos}%">🎯 <b>MVP</b> ${fmtDate(mvp)}</span>
       <span class="tl-ms" style="left:${launchPctPos}%">🚀 Lansman ${fmtDate(parse(CONFIG.launchTarget))}</span>
     </div>`;

  // phases
  document.getElementById("phases").innerHTML = CONFIG.phases.map((p, i) => {
    const st = phaseStatus(p, now);
    const done = tasksDone(p), total = p.tasks.length;
    const pct = total ? Math.round(done / total * 100) : 0;
    const badge = st === "done" ? "Tamamlandı" : st === "active" ? "Devam ediyor" : "Bekliyor";
    const items = p.tasks.map(t =>
      `<li class="${t.d ? "done" : ""}"><span class="box">${t.d ? "✓" : ""}</span><span>${t.t}</span></li>`
    ).join("");
    return `<div class="phase ${st === "active" ? "is-active" : ""}" 
      style="animation: slideUp 1s var(--ease-spring) forwards; animation-delay: ${0.8 + i * 0.12}s; opacity: 0;">
      <div class="phase-head">
        <span class="phase-name">${p.name}</span>
        <span class="phase-badge ${st}">${badge}</span>
        <span class="phase-dates">${fmtDate(parse(p.start))} → ${fmtDate(parse(p.end))}</span>
      </div>
      <div class="phase-prog"><div class="bar"><span style="width:${pct}%"></span></div><div class="pct">${done}/${total}</div></div>
      <ul class="tasks">${items}</ul>
    </div>`;
  }).join("");
}

/* ---------------- live countdown ---------------- */
function tickCountdown() {
  const now = new Date();
  const target = parse(CONFIG.mvpTarget);
  let ms = target - now;
  if (ms < 0) ms = 0;
  const d = Math.floor(ms / DAY);
  const h = Math.floor(ms / 3600000) % 24;
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  document.getElementById("cd-days").textContent = d;
  document.getElementById("cd-h").textContent = pad(h);
  document.getElementById("cd-m").textContent = pad(m);
  document.getElementById("cd-s").textContent = pad(s);
}

render();
tickCountdown();
setInterval(tickCountdown, 1000);
