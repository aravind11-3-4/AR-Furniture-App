import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FurnitureItem from '../components/FurnitureItem'; // Assuming FurnitureItem component exists
import Header from '../components/Header'; // Assuming Header component exists
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ onAddToCart }) => {
  const navigation = useNavigation();

  // List of furniture items
  const furnitureItems = [
    {
      id: 1,
      title: 'Dining Table',
      price: 59900.99,
      image: 'https://media.sketchfab.com/models/d6e30b5e17d84e65ae90ce564727487e/thumbnails/f0e2d4d03ea44ff6b677b5a63660bcc3/aed831bee1c04ec4ac654ca723145365.jpeg',
      description: 'A stylish glass dining table.',
      modelUrl: 'https://sketchfab.com/models/d6e30b5e17d84e65ae90ce564727487e/embed?ui_theme=dark', // 3D model URL
    },
    {
      id: 2,
      title: 'Modern Sofa',
      price: 79900.99,
      image: 'https://media.sketchfab.com/models/92184d1f1c21498a8bd7b5a3f5d9635b/thumbnails/afa283f81abf4cf8b09152c11289f60f/3d456ec1a2eb49be9e0c834de9a4d068.jpeg',
      description: 'A comfortable and stylish modern sofa.',
      modelUrl: 'https://sketchfab.com/models/92184d1f1c21498a8bd7b5a3f5d9635b/embed?ui_theme=dark', // Another 3D model URL
    },
    {
      id: 3,
      title: 'Coffee Table',
      price: 29900.99,
      image: 'https://media.sketchfab.com/models/72e1d594a07242d3a8fbe7ea57513cd3/thumbnails/2c0140f892c343b186390d328492f4c6/3d1bba0562be48c59c6fa9e0f79dc8f6.jpeg',
      description: 'A minimalist coffee table.',
      modelUrl: 'https://sketchfab.com/models/72e1d594a07242d3a8fbe7ea57513cd3/embed?ui_theme=dark', // Another 3D model URL
    },
    {
      id: 4,
      title: 'Bookshelf',
      price: 199000.99,
      image: 'https://media.sketchfab.com/models/e271b784fb9449b78771e21518368ba0/thumbnails/cc52854fbb734cbba8b250ca2c8e483d/0f11cfc9aa11472b97cac63a2a37632b.jpeg',
      description: 'A modern bookshelf to organize your books.',
      modelUrl: 'https://sketchfab.com/models/e271b784fb9449b78771e21518368ba0/embed?ui_theme=dark',
    },
    {
      id: 5,
      title: 'Armchair',
      price: 399000.99,
      image: 'https://media.sketchfab.com/models/4f7d3af4c3fe40569983a894b7140904/thumbnails/83dcc2e32b9140da8559cba3e58cfb9e/0a993b7f6de148de8583eeb92be5af52.jpeg',
      description: 'A comfortable armchair with a modern design.',
      modelUrl: 'https://sketchfab.com/models/4f7d3af4c3fe40569983a894b7140904/embed?ui_theme=dark',
    },
    {
      id: 6,
      title: 'Recliner Chair',
      price: 450000.99,
      image: 'https://media.sketchfab.com/models/55eb4fd286944d1c9436ad3943a73c00/thumbnails/2a60e77d38b647c8a4aa0a90bc82ff35/0ed627106b754caeb4b11635159918b4.jpeg',
      description: 'A luxurious recliner chair with massage feature.',
      modelUrl: 'https://sketchfab.com/models/55eb4fd286944d1c9436ad3943a73c00/embed?ui_theme=dark',
    },
    {
      id: 7,
      title: 'Bed Frame',
      price: 799000.99,
      image: 'https://media.sketchfab.com/models/a349546c992f4a80a1e8e7e0ff5f0925/thumbnails/73a21b2df3a14750bd8d68599b340fcb/d30bb7bc76724f12847fb6f2787cb1a1.jpeg',
      description: 'A wooden bed frame with a minimalist design.',
      modelUrl: 'https://sketchfab.com/models/a349546c992f4a80a1e8e7e0ff5f0925/embed?ui_theme=dark',
    },
    {
      id: 8,
      title: 'Wall Mirror',
      price: 150000.00,
      image: 'https://media.sketchfab.com/models/0a6e9fb121d442c1a47dc39470767f03/thumbnails/5d6d09afa33f4a89861ecbc13cdedff7/dbb4f2b4eb7241d8bd41dc84c97d69db.jpeg',
      description: 'A large, elegant wall mirror.',
      modelUrl: 'https://sketchfab.com/models/0a6e9fb121d442c1a47dc39470767f03/embed?ui_theme=dark',
    },
    {
      id: 9,
      title: 'Desk',
      price: 499000.99,
      image: 'https://media.sketchfab.com/models/f26030d09d73422f8ff270425c7c63e0/thumbnails/4f6aec0dbd0b493cbedcd2a9d8578877/6ca70221e0b6480ba54458611f438dff.jpeg',
      description: 'A sleek modern desk for your home office.',
      modelUrl: 'https://sketchfab.com/models/f26030d09d73422f8ff270425c7c63e0/embed?ui_theme=dark',
    },
    {
      id: 10,
      title: 'TV Stand',
      price: 349000.99,
      image: 'https://media.sketchfab.com/models/031c144e6de846fb9e86ad78aac1fba2/thumbnails/75cb82752cc44990a15356fa604e445f/a04bccde06134f578a5e47ccf2e9dc09.jpeg',
      description: 'A modern TV stand with storage space.',
      modelUrl: 'https://sketchfab.com/models/031c144e6de846fb9e86ad78aac1fba2/embed?ui_theme=dark',
    },
    {
      id: 11,
      title: 'Reclining Sofa',
      price: 899000.99,
      image: 'https://media.sketchfab.com/models/f23677edc80142f8a76a6516a979cbd9/thumbnails/5eb33c4416424a28a517c844017dc80b/fd42b00f12b44a27977568aa40c37c6c.jpeg',
      description: 'A reclining sofa with plush cushions.',
      modelUrl: 'https://sketchfab.com/models/f23677edc80142f8a76a6516a979cbd9/embed?ui_theme=dark',
    },
    {
      id: 12,
      title: 'Side Table',
      price: 1200000.00,
      image: 'https://media.sketchfab.com/models/a8a07aa0da264ecd8c445ab3b85d7a2e/thumbnails/5a08e2c5abbe40f5990f492d654f573e/ae85a1eb0ed54a37bd381442afac6ae2.jpeg',
      description: 'A sleek side table for your living room.',
      modelUrl: 'https://sketchfab.com/models/a8a07aa0da264ecd8c445ab3b85d7a2e/embed?ui_theme=dark',
    },
    {
      id: 13,
      title: 'Bar Stool',
      price: 8900000.99,
      image: 'https://media.sketchfab.com/models/880b2ead4b19445896522bd9b6e46517/thumbnails/795519602b2c4033adfc337d2cb84c30/1b272accc7dc4903a8bdeb8a3a7a605e.jpeg',
      description: 'A comfortable bar stool for modern kitchens.',
      modelUrl: 'https://sketchfab.com/models/880b2ead4b19445896522bd9b6e46517/embed?ui_theme=dark',
    },
    {
      id: 14,
      title: 'Storage Bench',
      price: 16000.00,
      image: 'https://media.sketchfab.com/models/1a4c34b3eac34a878d55d692d257352a/thumbnails/53259d16194f48619812778b853b9397/d048c53b691f42679619ab3c329cbfd9.jpeg',
      description: 'A versatile storage bench for extra seating.',
      modelUrl: 'https://sketchfab.com/models/1a4c34b3eac34a878d55d692d257352a/embed?ui_theme=dark',
    },
    {
      id: 15,
      title: 'Dresser',
      price: 450000.00,
      image: 'https://media.sketchfab.com/models/b9bf7191e88f40a590c0c0a984f16f2b/thumbnails/856f79c511d843fe9476e089fff227ac/f0066fe855f8449aa3ae570d4b390ad6.jpeg',
      description: 'A wooden dresser with elegant handles.',
      modelUrl: 'https://sketchfab.com/models/b9bf7191e88f40a590c0c0a984f16f2b/embed?ui_theme=dark',
    },
    {
      id: 16,
      title: 'Lounge Chair',
      price: 350000.00,
      image: 'https://media.sketchfab.com/models/ddab2f2c25e944fba590a8d51bbf8174/thumbnails/7537fd9359094e8aa0d96a005175221c/2d7fa0c0eae44bb9b19f334db00ec7d6.jpeg',
      description: 'A lounge chair perfect for relaxation.',
      modelUrl: 'https://sketchfab.com/models/ddab2f2c25e944fba590a8d51bbf8174/embed?ui_theme=dark',
    },
    {
      id: 17,
      title: 'Console Table',
      price: 250000.00,
      image: 'https://media.sketchfab.com/models/622217096a9444eb92fb5b9ad65e7c01/thumbnails/0caf4ced24274f2f97bc404178073ad0/3376fb8f42f54fd2a8b7bc278770d072.jpeg',
      description: 'A stylish console table for your entryway.',
      modelUrl: 'https://sketchfab.com/models/622217096a9444eb92fb5b9ad65e7c01/embed?ui_theme=dark',
    },
    {
      id: 18,
      title: 'Coat Rack',
      price: 70000.00,
      image: 'https://media.sketchfab.com/models/aeeef9cd82794e5786a1617cb59e16ba/thumbnails/614dfc8c26c54863a026d7eced6ae359/76df3dbf0f8843b291f0e46a9e3f2833.jpeg',
      description: 'A coat rack for your hallway or bedroom.',
      modelUrl: 'https://sketchfab.com/models/aeeef9cd82794e5786a1617cb59e16ba/embed?ui_theme=dark',
    },
    {
      id: 19,
      title: 'Ottoman',
      price: 18000.00,
      image: 'https://media.sketchfab.com/models/309931e592d34908bba5e6554a52cf32/thumbnails/28b8897e3a634c058cdf6e85f1eed230/001b2021fd3a40e3a268f51f76decec6.jpeg',
      description: 'A plush ottoman for extra comfort.',
      modelUrl: 'https://sketchfab.com/models/309931e592d34908bba5e6554a52cf32/embed?ui_theme=dark',
    },
    {
      id: 20,
      title: 'Shoe Rack',
      price: 900000.00,
      image: 'https://media.sketchfab.com/models/f1aef37711344c1ebf82f0b99e6696cf/thumbnails/d116389a742a46f7a789c2591c50271f/dd437d7e5c6a4548a0f28e9cb0e0a2be.jpeg',
      description: 'A space-saving shoe rack for your home.',
      modelUrl: 'https://sketchfab.com/models/f1aef37711344c1ebf82f0b99e6696cf/embed?ui_theme=dark',
    },
  ];

  // Handle the Buy Now button click
  const handleBuyNow = (item) => {
    navigation.navigate('Payment', { item });
  };

  // Handle the View Details button click
  const handleViewDetails = (item) => {
    navigation.navigate('ItemDetails', { item }); // Pass the item with model URL to ItemDetails
  };

  // Navigate to AdminScreen (for admin users)
  const handleAdminClick = () => {
    navigation.navigate('Admin'); // Navigate to AdminScreen
  };

  // Navigate to NewItemScreen (to add a new item)
  const handleNewItemClick = () => {
    navigation.navigate('NewItemScreen'); // Navigate to New Item Screen
  };

  return (
    <View style={styles.container}>
      <Header />
      
      {/* Admin Button */}
      <TouchableOpacity
        style={styles.adminButton}
        onPress={handleAdminClick} // Navigate to AdminScreen
      >
        <Text style={styles.buttonText}>👨‍💻Admin</Text>
      </TouchableOpacity>

      {/* New Item Button */}
      <TouchableOpacity
        style={styles.adminButton}
        onPress={handleNewItemClick} // Navigate to NewItemScreen
      >
        <Text style={styles.buttonText}>New Products📢</Text>
      </TouchableOpacity>

      <FlatList
        data={furnitureItems}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <FurnitureItem item={item} onAddToCart={onAddToCart} />

            {/* Buy Now button */}
            <TouchableOpacity
              style={[styles.button, styles.buyNowButton]}
              onPress={() => handleBuyNow(item)}
            >
              <Text style={styles.buttonText}>Buy Now 💸 </Text>
            </TouchableOpacity>

            {/* View Details button */}
            <TouchableOpacity
              style={[styles.button, styles.viewDetailsButton]}
              onPress={() => handleViewDetails(item)} // Navigate to the details page
            >
              <Text style={styles.buttonText}>3D View</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 10,
  },
  itemWrapper: {
    marginBottom: 20,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  listContent: {
    paddingBottom: 20,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buyNowButton: {
    backgroundColor: '#FF5733', // A bold color for the Buy Now button
  },
  viewDetailsButton: {
    backgroundColor: '#1CAAD9', // A softer color for the View Details button
  },
  adminButton: {
    backgroundColor: '#DC143C', // A different color for the Admin Button
    paddingVertical: 12,
    borderRadius: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
