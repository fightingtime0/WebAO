// NOTE: user will replace image paths with actual photos downloaded from Instagram (@angelsoath)

export interface Product {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  description: string;
  sizes: string[];
  tokopediaUrl: string;
  images: {
    front: string;
    back: string;
    side: string;
    editorial: string;
  };
}

export const heroProduct: Product = {
  id: 'ao-script-hoodie',
  name: 'AO SCRIPT HOODIE',
  price: 299000,
  priceFormatted: 'Rp 299.000',
  description:
    'Heavyweight fleece. Oversized silhouette. Script logo on back, wordmark on chest. The piece that started it all.',
  sizes: ['S', 'M', 'L', 'XL'],
  tokopediaUrl: 'https://www.tokopedia.com/angelsoath',
  images: {
    front: '/images/hoodie-front.png',
    back: '/images/hoodie-back.png',
    side: '/images/hoodie-side.png',
    editorial: '/images/editorial.png',
  },
};
