import { Product, Category, Brand, Order, defaultProducts, defaultCategories, defaultBrands, defaultOrders } from "@/data/mockData";

function getOrInit<T>(key: string, defaults: T): T {
  const stored = localStorage.getItem(key);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(key, JSON.stringify(defaults));
  return defaults;
}

function save<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getProducts(): Product[] { return getOrInit("ortho_products", defaultProducts); }
export function saveProducts(p: Product[]) { save("ortho_products", p); }

export function getCategories(): Category[] { return getOrInit("ortho_categories", defaultCategories); }
export function saveCategories(c: Category[]) { save("ortho_categories", c); }

export function getBrands(): Brand[] { return getOrInit("ortho_brands", defaultBrands); }
export function saveBrands(b: Brand[]) { save("ortho_brands", b); }

export function getOrders(): Order[] { return getOrInit("ortho_orders", defaultOrders); }
export function saveOrders(o: Order[]) { save("ortho_orders", o); }
