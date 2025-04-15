"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  title: string;
  description: string;
  imagePath: string;
  link : string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "dakimakura club RPC",
    description: "dakimakura club // test net edition // remote procedure call",
    imagePath: "/images/rpc.svg",
    link : "https://magiceden.us/collections/monad-testnet/0x79a0da403a091b41e9bf323a9f621050cc38efa4"
  },
  {
    title: "extremely online with dakimakura club",
    description: `"extremely online with dakimakura club" is a limited edition ERC-1155 digital collectible on the monad test net`,
    imagePath: "/images/extreme.svg",
    link: "https://magiceden.io/collections/monad-testnet/0x7350558fff30b6d4404b03d223614afe116c12a7"
  },
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="bg-gray-100 p-2 sm:p-4 border-2 border-navy my-4">
      <h2 className="bg-navy text-white p-2 font-bold text-center text-xl">:: DAKIMAKURA CLUB GALLERY ::</h2>
      <p className="my-4">
        Our collection on Monad Testnet.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="border-2 border-navy p-2 bg-white cursor-pointer hover:bg-yellow-100 transition-colors"
            onClick={() => setSelectedImage(item)}
          >
            <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-50">
              <Image
                src={item.imagePath}
                alt={item.title}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-bold mt-2 text-navy text-sm">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 max-w-lg w-full border-4 border-navy">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-navy">{selectedImage.title}</h2>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-red-500 text-white w-8 h-8 flex items-center justify-center font-bold rounded-full"
              >
                X
              </button>
            </div>

            <div className="flex justify-center my-4 bg-gray-50 p-4">
              <Image
                src={selectedImage.imagePath}
                alt={selectedImage.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            <p className="mb-4">{selectedImage.description}</p>

            <div className="text-right space-x-4">
            <button
                onClick={() => {
                  if (selectedImage?.link) {
                    window.open(selectedImage.link, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="bg-blue-500 text-black px-4 py-1 font-bold border-2 border-gray-400 border-outset hover:bg-orange-400"
              >
                Mint
              </button>

              <button
                onClick={() => setSelectedImage(null)}
                className="bg-orange-500 text-black px-4 py-1 font-bold border-2 border-gray-400 border-outset hover:bg-orange-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-100 border border-dashed border-red-600 text-center">
        <p className="font-bold">Fun Fact:</p>
        <p>&ldquo;slowafk is gayest and weebs member on monad community.&rdquo;</p>
        <p className="text-sm italic mt-2">(this is jokes, dont take it seriously)</p>
      </div>
    </section>
  );
};

export default GallerySection;
