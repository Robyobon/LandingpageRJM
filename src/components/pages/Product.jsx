

const ProductOverview = () => {
  return (
    <div className="product mx-auto">
    <div className=" mx-auto bg-white p-8 rounded shadow ">
      <img
        className="w-full object-cover mb-4 rounded"
        src="https://th.bing.com/th/id/R.7beb54e8c37e65065eb3cf89212f6615?rik=3Bp7XLS61deUxg&riu=http%3a%2f%2fwww.flamingotravel.com.vn%2fwp-content%2fuploads%2f2014%2f12%2fhonda-crf150L-copy.jpg&ehk=0qKeFW1Fojf19saiOoCVIGWsLt4DZeJ0hO%2fvZKkHDOk%3d&risl=&pid=ImgRaw&r=0"
        alt="Nama Produk"
      />
      <h2 className="text-2xl font-bold mb-4">Honda CRF 150CC</h2>
      <p className="text-gray-700 mb-4 text-lg">
        <strong>Merek:</strong> Honda<br />
        <strong>Varian:</strong> CRF<br />
        <strong>Tahun:</strong> 2020<br />
        <strong>Tipe bahan bakar:</strong> Bensin<br />
        <strong>Transmisi:</strong> Manual<br />
        <strong>Pajak:</strong> 4-2023<br />
        <strong>Biaya pajak:</strong> Rp. 429.500<br />
      </p>
      <div className="mb-4">
        <span className="text-gray-600">Harga: </span>
        <span className="text-green-600 font-bold">Rp. 20.000.000</span>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const phoneNumber = '0895391179850';
          const messageTemplate = 'Halo, saya tertarik untuk membeli motor crf ini.';
          const encodedMessage = encodeURIComponent(messageTemplate);
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
          window.location.href = whatsappUrl;
        }}
      >
        Beli Sekarang
      </button>
    </div>
  </div>
  );
};

export default ProductOverview;