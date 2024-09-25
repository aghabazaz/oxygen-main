import { Item } from "@/@types/filterProducts";

export const filterItem: Item[] = [
 { id: "1", name: "Block", type: "productType" },
 { id: "2", name: "Slab", type: "productType" },
 { id: "3", name: "Tile", type: "productType" },
 { id: "4", name: "‌‌Slab & Tile", type: "productType" },
];
export const sortItem: Item[] = [
 { id: "5", name: "Travertine", type: "stoneType" },
 { id: "6", name: "Crystal", type: "stoneType" },
 { id: "7", name: "Marbel", type: "stoneType" },
];
export const useItem: Item[] = [
 { id: "8", name: "indoor", type: "useLocation" },
 { id: "9", name: "outdoor", type: "useLocation" },
];
export const inventoryItem: Item[] = [
 { id: "10", name: "available", type: "hasInventory" },
 { id: "11", name: "unavailable", type: "hasInventory" },
];
