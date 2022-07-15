import React from 'react'

const TepsiBreakfast = () => {
  return (
    <div className="category-item bg-light">
      <div className="category-item-name" style={{ fontSize: '2rem' }}>
        Beyoğlu Tepsi Kahvaltısı
      </div>
      <img
        src="https://s8.gifyu.com/images/WhatsApp-Image-2022-07-08-at-12.00.00-AM.jpg"
        alt=""
      />

      <div className="breakfast-info">
        <h4>
          <span>Soğuklar</span> : 4 çeşit yöresel peynir, 2 çeşit zeytin, bal,
          kaymak, tereyağı, krem çikolata, isot ezmesi, çemen, murtuğa,2 çeşit
          ev reçeli, böğürtlenli lor, domates, salatalık, yeşillik, mevsim
          meyveleri
        </h4>
        <h4>
          <span>Sıcaklar</span> : Biber, patlıcan ve patates kızartması, pişi,
          sahanda yumurta, menemen, 4 adet pişi ve 1 pot çay (Yaklaşık 8 adet)
        </h4>
        <h2>190 TL</h2>
        <p>Kişi sınırlaması yoktur</p>
        <p>İstenilen sayıda servis açılır</p>
      </div>
    </div>
  )
}

export default TepsiBreakfast
