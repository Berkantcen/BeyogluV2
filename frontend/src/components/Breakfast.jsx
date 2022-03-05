import React from 'react'

const Breakfast = () => {
  return (
    <div className='category-item bg-dark'>
      <div className='category-item-name' style={{ fontSize: '2rem' }}>
        Diyarbakır Serpme Kahvaltı
      </div>
      <img src='https://s10.gifyu.com/images/breakfast-min.jpg' alt='' />

      <div className='breakfast-info'>
        <h4>
          <span>Soğuklar</span> : 4 çeşit yöresel peynir, 2 çeşit zeytin, bal,
          kaymak, tereyağı, krem çikolata, isot ezmesi, çemen, murtuğa,süzme
          yoğurtlu acı biber reçeli, 2 çeşit ev reçeli, böğürtlenli lor,
          domates, salatalık, yeşillik, mevsim meyveleri
        </h4>
        <h4>
          <span>Sıcaklar</span> : Biber, patlıcan ve patates kızartması, pişi,
          sucuklu yumurta, menemen, sigara böreği, yumurtalı ekmek, börek, sıcak
          helva ve çay.
        </h4>
        <h2>Kişi Başı - 70 TL</h2>
        <h3>Çocuk - 35 TL</h3>
        <p>En az iki kişiliktir. </p>
        <p>Açılan her servis ücretlendirilir</p>
        <p>Bütün ürünler ve çaylar sınırsızdır.</p>
        <p>0-6 yaş arası ücretsiz</p>
        <p>6-10 yaş arası 35 TL</p>
      </div>
    </div>
  )
}

export default Breakfast
