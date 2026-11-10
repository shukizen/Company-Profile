"use client";

export function HeroGallery() {
  return (
    <div className="hero-gallery web-illustration" role="img" aria-label="Ilustrasi proses pembuatan website dengan pratinjau laptop, ponsel, dan kode">
      <div className="illustration-glow" aria-hidden="true" />
      <div className="illustration-orbit illustration-orbit--one" aria-hidden="true" />
      <div className="illustration-orbit illustration-orbit--two" aria-hidden="true" />

      <div className="floating-note note-code" aria-hidden="true">
        <span className="note-dots"><i /><i /><i /></span>
        <span className="code-row code-row--long" /><span className="code-row code-row--short" /><span className="code-row code-row--mid" />
        <span className="code-cursor" />
      </div>

      <div className="floating-note note-responsive" aria-hidden="true">
        <span className="responsive-icon"><i /><b /></span>
        <span><strong>Responsif</strong><small>Siap di semua layar</small></span>
        <span className="responsive-check">✓</span>
      </div>

      <div className="web-laptop" aria-hidden="true">
        <div className="laptop-screen">
          <div className="website-window">
            <div className="website-toolbar"><span /><span /><span /><i>bisnisanda.id</i></div>
            <div className="website-nav"><b><i /> studio</b><span>LAYANAN&nbsp;&nbsp; TENTANG&nbsp;&nbsp; KONTAK</span><em>Mulai proyek ↗</em></div>
            <div className="website-hero">
              <div className="website-copy"><small>WEBSITE YANG BEKERJA UNTUK BISNIS</small><strong>Ide hebat,<br /><i>tumbuh lebih jauh.</i></strong><p>Bangun kehadiran online yang membuat bisnis Anda mudah ditemukan.</p><b>Jelajahi layanan <i>↗</i></b></div>
              <div className="website-art"><span className="art-sun" /><span className="art-arch" /><span className="art-leaf art-leaf--one" /><span className="art-leaf art-leaf--two" /><span className="art-vase" /></div>
            </div>
            <div className="website-footer"><span>01 — STRATEGI</span><i /><span>DESAIN YANG PUNYA ARAH</span></div>
          </div>
        </div>
        <div className="laptop-base"><span /></div>
      </div>

      <div className="web-phone" aria-hidden="true">
        <div className="phone-camera" />
        <div className="phone-screen"><div className="phone-nav"><i /><span>studio</span><b>☰</b></div><div className="phone-art"><i /><b /><span /></div><small>DESAIN · STRATEGI · WEB</small><strong>Bisnis Anda,<br /><i>lebih dikenal.</i></strong><p>Website profesional untuk langkah berikutnya.</p><em>Lihat layanan&nbsp; ↗</em><div className="phone-lines"><i /><i /><i /></div></div>
      </div>

      <div className="floating-bubble bubble-design" aria-hidden="true"><span>✳</span></div>
      <div className="floating-bubble bubble-launch" aria-hidden="true"><span>↗</span></div>
      <div className="illustration-caption" aria-hidden="true"><span /> DARI IDE MENJADI WEBSITE</div>

    </div>
  );
}
