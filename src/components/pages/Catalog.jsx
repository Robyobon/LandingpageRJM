import { Link } from 'react-router-dom'
import '../../index.css'

const products = [
    {
      id: 1,
      name: 'Ninja 250 Fi Tahun 2014',
      href: '#',
      price: 'RP 29.000.000',
      imageSrc: 'https://www.totalmotorcycle.com/wp-content/uploads/2017/11/2018-Kawasaki-Ninja-400ABS3.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Honda CRF 150CC',
      href: '/product',
      price: 'RP 20.000.000',
      imageSrc: 'https://th.bing.com/th/id/R.7beb54e8c37e65065eb3cf89212f6615?rik=3Bp7XLS61deUxg&riu=http%3a%2f%2fwww.flamingotravel.com.vn%2fwp-content%2fuploads%2f2014%2f12%2fhonda-crf150L-copy.jpg&ehk=0qKeFW1Fojf19saiOoCVIGWsLt4DZeJ0hO%2fvZKkHDOk%3d&risl=&pid=ImgRaw&r=0',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'HONDA VARIO 2015',
      href: '#',
      price: 'RP 7.000,000',
      imageSrc: 'https://4.bp.blogspot.com/-AnvreUnCSCc/VRwA3N5kkWI/AAAAAAAAa0Y/NLxze-b751o/s1600/Honda%2BVario%2B125%2B2015.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Honda Beat 2018',
      href: '#',
      price: 'RP 12.000.000',
      imageSrc: 'https://th.bing.com/th/id/OIP.eleYWLAg6RxL5lIuXxRT9AAAAA?rs=1&pid=ImgDetMain',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Beat street 2021',
      href: '#',
      price: '15.000.000',
      imageSrc: 'https://asset.kompas.com/crops/RZJaS-YBGKOVAgLg3hNLRiQ4Ng0=/0x0:991x661/750x500/data/photo/2018/10/29/18585422.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'NMX',
      href: '#',
      price: 'RP 16.000.000',
      imageSrc: 'https://th.bing.com/th/id/OIP.qNFxD85cK_y5-zqO-WJKaAHaFR?rs=1&pid=ImgDetMain',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'MIO M3',
      href: '#',
      price: '8.000.000',
      imageSrc: 'https://i0.wp.com/bmspeed7.com/wp-content/uploads/2020/01/Yamaha-Mio-M3-2020-Warna-Metallic-Red.jpg?fit=2048%2C1604&ssl=1',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 8,
      name: 'MIO J',
      href: '#',
      price: '6.000.000',
      imageSrc: 'https://th.bing.com/th/id/R.ad119cb506673737d33890dcd213b930?rik=rpSZX9L8e0o7xA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-UoAxq3pwEN4%2fUUH__BNfkjI%2fAAAAAAAAPAI%2fr9Q7Wz1j6SQ%2fs1600%2f4.png&ehk=pUi7%2bwnSa0PGGVk1YPpyRtuXFKKCQLxjD2dXMp2aCZ8%3d&risl=&pid=ImgRaw&r=0',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 9,
      name: 'Honda Scoopy 2018',
      href: '#',
      price: '12.000.000',
      imageSrc: 'https://imgcdn.zigwheels.co.th/large/gallery/color/90/1683/honda-scoopy-i-2018-color-863292.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-center text-black text-4xl relative top-[-20px]">Products</h1>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <Link to={"/product"} key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  