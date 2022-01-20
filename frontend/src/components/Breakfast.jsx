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
          4 çeşit yöresel peynir, 2 çeşit zeytin, bal, kaymak, tereyağı, krem
          çikolata, isot ezmesi, çemen, murtuğa, 2 çeşit ev reçeli, böğürtlenli
          lor, domates, salatalık, yeşillik, biber, patlıcan ve patates
          kızartması, pişi, sucuklu yumurta, menemen ve sınırsız çay.
        </h4>
        <h2>Kişi Başı - 65 TL</h2>
        <h3>Çocuk - 30 TL</h3>
        <p>En az iki kişiliktir. </p>
        <p>Açılan her servis ücretlendirilir</p>
        <p>Bütün ürünler ve çaylar sınırsızdır.</p>
        <p>0-6 yaş arası ücretsiz</p>
        <p>6-10 yaş arası 30 TL</p>
      </div>
    </div>
  )
}

export default Breakfast
