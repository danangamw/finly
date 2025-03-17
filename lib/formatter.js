const IDRupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

module.exports = {
  IDRupiah,
  USDollar,
};
