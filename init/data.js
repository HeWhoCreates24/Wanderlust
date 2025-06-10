const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "amazing-pools"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "rooms"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "mountains"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "farms"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "amazing-pools"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "amazing-pools"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "iconic-cities"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "arctic"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "farms"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "iconic-cities"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "trending"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "farms"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "castles"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "amazing-pools"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "camping"
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "iconic-cities"
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "castles"
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castles"
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "trending"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "camping"
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "amazing-pools"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "farms"
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "castles"
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "iconic-cities"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "mountains"
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "trending"
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "arctic"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "amazing-pools"
  },
];

const sampleReviews = [
  {
    "comment": "Slept like a baby. Woke up crying and needing coffee.",
    "rating": 5,
    "createdAt": 1745073002709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 3,
    "createdAt": 1744986602709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 2,
    "createdAt": 1744813802709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 1,
    "createdAt": 1747578602709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 4,
    "createdAt": 1746455402709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 4,
    "createdAt": 1746369002709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 2,
    "createdAt": 1748442602709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 2,
    "createdAt": 1748615402709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 4,
    "createdAt": 1745332202709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 2,
    "createdAt": 1747319402709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 2,
    "createdAt": 1745073002709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 1,
    "createdAt": 1747751402709
  },
  {
    "comment": "Great location, friendly staff.",
    "rating": 5,
    "createdAt": 1748269802709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 4,
    "createdAt": 1744122602709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 5,
    "createdAt": 1746282602709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 4,
    "createdAt": 1748788202709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 5,
    "createdAt": 1747751402709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 5,
    "createdAt": 1746887402709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 5,
    "createdAt": 1744900202709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 3,
    "createdAt": 1747319402709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 5,
    "createdAt": 1747146602709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 1,
    "createdAt": 1745850602709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 4,
    "createdAt": 1744641002709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 2,
    "createdAt": 1749133802709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 5,
    "createdAt": 1746628202709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 5,
    "createdAt": 1745418602709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 4,
    "createdAt": 1746887402709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 4,
    "createdAt": 1749047402709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 4,
    "createdAt": 1745850602709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 3,
    "createdAt": 1746801002709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 5,
    "createdAt": 1748010602709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 4,
    "createdAt": 1744900202709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 5,
    "createdAt": 1745073002709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 1,
    "createdAt": 1747405802709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 5,
    "createdAt": 1745418602709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 5,
    "createdAt": 1745937002709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 2,
    "createdAt": 1745591402709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 3,
    "createdAt": 1748356202709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 5,
    "createdAt": 1747924202709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 3,
    "createdAt": 1748097002709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 1,
    "createdAt": 1746196202709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 3,
    "createdAt": 1748701802709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 4,
    "createdAt": 1746282602709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 5,
    "createdAt": 1744813802709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 1,
    "createdAt": 1745764202709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 4,
    "createdAt": 1749220202709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 2,
    "createdAt": 1745332202709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 5,
    "createdAt": 1747924202709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 4,
    "createdAt": 1745332202709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 4,
    "createdAt": 1745418602709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 5,
    "createdAt": 1744641002709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 3,
    "createdAt": 1745332202709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 4,
    "createdAt": 1748874602709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 5,
    "createdAt": 1748269802709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 1,
    "createdAt": 1744554602709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 1,
    "createdAt": 1749306602709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 3,
    "createdAt": 1744813802709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 1,
    "createdAt": 1746801002709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 3,
    "createdAt": 1747578602709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 4,
    "createdAt": 1745073002709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 3,
    "createdAt": 1748442602709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 3,
    "createdAt": 1744554602709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 1,
    "createdAt": 1746887402709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 4,
    "createdAt": 1748097002709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 3,
    "createdAt": 1746455402709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 4,
    "createdAt": 1747060202709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 2,
    "createdAt": 1747060202709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 2,
    "createdAt": 1744295402709
  },
  {
    "comment": "Great location, friendly staff.",
    "rating": 4,
    "createdAt": 1746801002709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 4,
    "createdAt": 1748529002709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 5,
    "createdAt": 1749047402709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 3,
    "createdAt": 1745850602709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 3,
    "createdAt": 1746109802709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 2,
    "createdAt": 1744986602709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 4,
    "createdAt": 1748097002709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 5,
    "createdAt": 1744295402709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 1,
    "createdAt": 1745159402709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 1,
    "createdAt": 1747924202709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 1,
    "createdAt": 1744381802709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 2,
    "createdAt": 1746628202709
  },
  {
    "comment": "Great location, friendly staff.",
    "rating": 5,
    "createdAt": 1745245802709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 2,
    "createdAt": 1749133802709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 5,
    "createdAt": 1745332202709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 1,
    "createdAt": 1749306602709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 5,
    "createdAt": 1745850602709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 3,
    "createdAt": 1748442602709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 1,
    "createdAt": 1746973802709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 2,
    "createdAt": 1748615402709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 5,
    "createdAt": 1747319402709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 2,
    "createdAt": 1746541802709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 5,
    "createdAt": 1745764202709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 3,
    "createdAt": 1744381802709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 2,
    "createdAt": 1748442602709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 4,
    "createdAt": 1745591402709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 4,
    "createdAt": 1747060202709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 3,
    "createdAt": 1746023402709
  },
  {
    "comment": "Great location, friendly staff.",
    "rating": 3,
    "createdAt": 1745937002709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 1,
    "createdAt": 1746023402709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 1,
    "createdAt": 1746887402709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 1,
    "createdAt": 1748961002709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 5,
    "createdAt": 1746628202709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 2,
    "createdAt": 1746369002709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 5,
    "createdAt": 1744209002709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 2,
    "createdAt": 1749133802709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 4,
    "createdAt": 1744641002709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 1,
    "createdAt": 1745850602709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 1,
    "createdAt": 1745850602709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 1,
    "createdAt": 1745332202709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 1,
    "createdAt": 1746887402709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 1,
    "createdAt": 1746628202709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 4,
    "createdAt": 1745073002709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 5,
    "createdAt": 1745677802709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 2,
    "createdAt": 1746455402709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 1,
    "createdAt": 1746455402709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 3,
    "createdAt": 1747319402709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 4,
    "createdAt": 1746973802709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 3,
    "createdAt": 1745245802709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 4,
    "createdAt": 1746801002709
  },
  {
    "comment": "Excellent hospitality and great food.",
    "rating": 4,
    "createdAt": 1747751402709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 2,
    "createdAt": 1748269802709
  },
  {
    "comment": "Amazing stay, very clean and comfortable.",
    "rating": 5,
    "createdAt": 1744986602709
  },
  {
    "comment": "Great location, friendly staff.",
    "rating": 1,
    "createdAt": 1744986602709
  },
  {
    "comment": "Fantastic view from the room. Highly recommend.",
    "rating": 3,
    "createdAt": 1746023402709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 2,
    "createdAt": 1744295402709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 4,
    "createdAt": 1746369002709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 2,
    "createdAt": 1746887402709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 3,
    "createdAt": 1744209002709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 2,
    "createdAt": 1749306602709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 1,
    "createdAt": 1744468202709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 1,
    "createdAt": 1749220202709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 1,
    "createdAt": 1747146602709
  },
  {
    "comment": "Great location, friendly staff.",
    "rating": 5,
    "createdAt": 1745505002709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 5,
    "createdAt": 1749306602709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 1,
    "createdAt": 1747924202709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 3,
    "createdAt": 1749133802709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 4,
    "createdAt": 1744468202709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 3,
    "createdAt": 1747837802709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 3,
    "createdAt": 1745591402709
  },
  {
    "comment": "Not as expected. Needs better maintenance.",
    "rating": 5,
    "createdAt": 1745591402709
  },
  {
    "comment": "Decent for the price. Could improve on cleanliness.",
    "rating": 1,
    "createdAt": 1746541802709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 3,
    "createdAt": 1747492202709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 4,
    "createdAt": 1748010602709
  },
  {
    "comment": "Great location, friendly staff.",
    "rating": 2,
    "createdAt": 1748788202709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 5,
    "createdAt": 1745850602709
  },
  {
    "comment": "Very good experience, waiting for my next weekend to stay here again",
    "rating": 2,
    "createdAt": 1747060202709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 5,
    "createdAt": 1745073002709
  },
  {
    "comment": "Loved the ambiance and the service.",
    "rating": 1,
    "createdAt": 1746541802709
  },
  {
    "comment": "Great location, friendly staff.",
    "rating": 4,
    "createdAt": 1745418602709
  },
  {
    "comment": "Average experience. Nothing special.",
    "rating": 2,
    "createdAt": 1745591402709
  },
  {
    "comment": "Had a pleasant stay. Will visit again.",
    "rating": 1,
    "createdAt": 1749220202709
  }
];



module.exports = { listings: sampleListings, reviews: sampleReviews};
