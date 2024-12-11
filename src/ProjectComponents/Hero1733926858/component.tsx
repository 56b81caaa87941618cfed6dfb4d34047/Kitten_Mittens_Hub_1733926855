import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Introducing Kitten Mittens: Pawsitively Adorable Protection</h1>
          <p className="text-xl mb-6">Keep your feline friend's paws cozy and your furniture scratch-free with our stylish and comfortable kitten mittens.</p>
        </div>
        <div className="md:w-1/2">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Kitten_Mittens_Hub_1733926855/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpeg`} alt="Kitten Mittens" className="w-full h-auto rounded-lg shadow-md" />
        </div>
    </div>
    </div>
  );
};

export { Hero as component }