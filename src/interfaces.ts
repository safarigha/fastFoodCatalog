export interface CategoryList {
  id: number;
  name: string;
}

export interface LoadingProps {
  colorTheme?: string;
}

export interface FastFoodItem {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  imageUrl: string;
}

export interface FastFoodListProps {
  fastFoodItems: FastFoodItem[];
}

export interface CategoryListProps {
  filterItems: (categoryId: string | null) => void;
  children: React.ReactNode;
}

export interface SearchBarProps {
  className?: string;
  searchItems: (term: string | null) => void;
}
