export type MainState = {
  title: string;
};

export type ProductList = {
  name: string;
  description: string;
  category: string;
  tags: [string];
  image_url: string;
  price: number;
};

export interface State {
  productUpdating: boolean;
  showAddModal: boolean;
  total: number;
}

// or symbol?
export const productUpdating = "product/updating";
