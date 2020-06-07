import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

describe('Cart:', () => {
  test('new cart should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
  });
  test('should add new items of Books, Movies and MusicAlbums', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(
      new Movie(263531, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин. / 02:17', 1349)
    );
    expect(cart.items.length).toBe(3);
  });
  test("getTotal() should return sum of item's prices in the cart", () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    expect(cart.getTotal()).toBe(2900);
  });
  test("discountTotal() should return sum of item's prices in the cart with exact discount", () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    expect(cart.discountTotal(10)).toBe(2610);
  });
  test("removeItem() should remove item with specified id from cart", () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.removeItem(1008);
    expect(cart.items.length).toBe(1);
  });
});
