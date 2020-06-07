import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotal(): number {
    let total: number = 0;
    this.items.forEach((element) => {
      total += element.price;
    });
    return total;
  }
  //параметр скидки задается в процентах
  discountTotal(discount: number): number {
    return this.getTotal() * (1 - discount / 100);
  }

  removeItem(id: number): void {
    this.items.forEach((element) => {
      if (element.id === id) {
        this._items.splice(this.items.indexOf(element), 1);
      }
    });
  }
}
