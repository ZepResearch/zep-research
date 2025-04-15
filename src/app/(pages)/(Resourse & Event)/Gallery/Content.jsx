'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ImageGallery = () => {
  // Generate image paths dynamically
  const imagePaths = Array.from({ length: 13 }, (_, i) => `/gallery/${i + 1}.jpg`);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {imagePaths.map((path, index) => (
          <Dialog key={path}>
            <DialogTrigger asChild>
              <div 
                className="relative aspect-square cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedImage(path)}
              >
                <Image 
                  src={path} 
                  alt={`Gallery image ${index + 1}`} 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <Image 
                src={path} 
                alt={`Enlarged image ${index + 1}`} 
                width={800} 
                height={600} 
                className="w-full h-auto object-contain"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;