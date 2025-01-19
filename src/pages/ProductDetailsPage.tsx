import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, TruckIcon, ShieldCheck, RotateCcw, X, Facebook, Twitter, Linkedin, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { calculateDiscountedPrice, formatPrice } from '../utils/product';
import { Product } from '../types/product';
import { supabase } from '../lib/supabase';

export function ProductDetailsPage() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(` ${product.name} السلام عليكم ، مهتم بشراء `);

  const WPnumber = product.category_id == "cdf259b8-c660-4af3-bb55-aaa4a12ee081" ? 212773630619 : 212601102257; 

  const whatsappLink = `https://wa.me/${WPnumber}?text=${whatsappMessage}`;

  const discountedPrice = calculateDiscountedPrice(product.price, product.discount);

  // Mock additional images
  const productImages = [
    product.image_url,
    product.image_url.replace('w=800', 'w=801'),
    product.image_url.replace('w=800', 'w=802'),
    product.image_url.replace('w=800', 'w=803'),
  ];

  const features = [
    { icon: TruckIcon, title: 'Free Delivery', description: 'For orders over 1000 dhs' },
    { icon: ShieldCheck, title: 'Genuine Product', description: '100% authentic guarantee' },
    { icon: RotateCcw, title: 'Easy Returns', description: '30-day return policy' },
  ];

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: {
      ...product,
      id: product.id,
      image: product.image_url,
      categoryId: product.category_id
    }});
  };
  
  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-24">
      {/* Image Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={productImages[selectedImage]}
            alt={product.name}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Share this product</h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Twitter className="w-6 h-6 text-blue-400" />
                <span className="text-sm">Twitter</span>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-700" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <button
                onClick={handleCopyLink}
                className="flex flex-col items-center gap-2 p-3 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <LinkIcon className="w-6 h-6 text-gray-600" />
                <span className="text-sm">Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div 
              className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            >
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-gray-100 ${
                    selectedImage === index ? 'ring-2 ring-[#fb7701]' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-500 mt-1">By {product.author}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-gray-600">{product.rating}</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">{product.reviews_count} reviews</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(discountedPrice)} dhs
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.price)} dhs
                    </span>
                    <span className="text-sm font-medium text-red-600">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>
              {product.stock > 0 ? (
                <p className="text-green-600 text-sm">
                  In Stock ({product.stock} available)
                </p>
              ) : (
                <p className="text-red-600 text-sm">Out of Stock</p>
              )}
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="grid sm:flex gap-4">
              {/* <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-[#fb7701] text-white py-3 rounded-lg font-semibold hover:bg-[#e66901] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button> */}

              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#128C7E] transition-colors text-lg font-medium mb-4"
              >
                <MessageCircle className="w-6 h-6" />
                Contact via WhatsApp
              </a>
              <div className='grid-cols-2 grid gap-2'>

              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 border rounded-lg hover:bg-gray-50 transition-colors ${
                  isLiked ? 'text-red-500 border-red-500' : ''
                }`}
              >
                <Heart className={`w-5 h-5 !inline ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button 
                onClick={handleShare}
                className="p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Share2 className="w-5 h-5 !inline" />
              </button>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="text-center">
                    <feature.icon className="w-6 h-6 mx-auto text-[#fb7701] mb-2" />
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                    <p className="text-gray-500 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}