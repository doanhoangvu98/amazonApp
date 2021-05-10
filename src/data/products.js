const products = [
  {
    id: '1',
    title:
      'Razer Blade 15 Base Gaming Laptop 2020: Intel Core i7-10750H 6-Core, NVIDIA GeForce GTX 1660 Ti',
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71a7XegTB0L._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81YAt4HBDxL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81DIUt8Q-oL._AC_SL1500_.jpg',
    ],
    options: ['Black', 'Space Grey'],
    avgRating: 4.2,
    ratings: 1325,
    price: 1.699,
    oldPrice: 1.799,
    description: `More Power. The 10th Gen Intel Core i7-10750H processor provides the ultimate level of performance with up to 5.0GHz Max Turbo and 6 cores
    Supercharger: The NVIDIA GeForce GTX 1660 Ti graphics is a blazing-fast supercharger for today’s most popular games
    More Frames: Incredible performance paired with the fast 120Hz 15.6" Full HD thin bezel display helps edge out the win
    Thin and Compact: The CNC aluminum unibody frame houses incredible performance in the most compact footprint possible, while remaining remarkably durable and just 0.78" thin
    Ready To Connect: Fully loaded with ample connectivity including a webcam, wireless-AC, Bluetooth 5, 2X USB Type-A, 2X Type-C ports, and more`,
  },
  {
    id: '2',
    title:
      'ASUS TUF VR Ready Gaming Laptop, 15.6" 144Hz FHD, Intel Core i7-11370H Up to 4.80 GHz',
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/613DVh7pu1L._AC_SL1000_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81yXSnj4ImL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81iZ0A-bl0L._AC_SL1500_.jpg',
    ],
    options: ['Black', 'Space Grey'],
    avgRating: 3.8,
    ratings: 2989,
    price: 32.98,
    oldPrice: 34.06,
    description: `We don't know when or if this item will be back in stock.
    【Memory & Storage】16 GB RAM | 512GB PCIe SSD, Bundled with WOOV 32GB Micro SD Card
    【Display】15.6" FHD (1920 x 1080) 16:9, anti-glare display, sRGB:100%,Refresh Rate:144Hz, IPS-level, Adaptive-Sync, Energy-efficient LED backlight
    【Processor】 11th Gen Intel Tiger Lake Core i7-11370H Quad-Core (3.3GHz-4.8GHz, 12MB Intel Smart Cache, 28W) | NVIDIA GeForce RTX 3060 6GB GDDR6 dedicated video memory
    【Ports】 Thunderbolt 4 with DisplayPort and Power Delivery, |3x USB 3.2 Gen 1 Type-A, | HDMI 2.0b | 3.5mm Combo Audio Jack| RJ-45 Jack
    【Features】Microsoft Windows 10 (64bit), Gigabit Ethernet LAN, Wi-Fi 6 802.11 ax (2x2), Backlit Keyboard`,
  },
  {
    id: '3',
    title:
      'Alienware m17 R3 17.3 inch FHD Gaming Laptop (Luna Light) Intel Core i7-10750H 10th Gen',
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/71hhY4ikVwL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81FXZRvXAbL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81ZLjoEzIzL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81FPkFyijIL._AC_SL1500_.jpg',
    ],
    options: ['Black', 'Space Grey'],
    avgRating: 3.8,
    ratings: 2.989,
    price: 3.206,
    description: `High-end materials like magnesium alloy, copper and steel provide a premium, lightweight and performance-driven gaming experience with iconic AlienFX lighting
    Our fastest panel yet offers 300Hz 300nits 3ms Full HD for smooth, high-speed motion graphics
    Alienware Cryo-Tech optimizes component cooling, which maximizes overall performance and keeps your laptop cool to the touch
    The new Alienware m17’s standard display features a 300Hz 3ms Full HD panel.
    At just 4.65lb and under 20.5mm thin, the new Alienware m17 is lighter and leaner than our previous m17`,
  },
  {
    id: '4',
    title:
      '2019 Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray',
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81aot0jAfFL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/91GRfDGDJIL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/91GsCwayBPL._AC_SL1500_.jpg',
    ],
    options: ['Black', 'Space Grey'],
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    description: `Ninth-generation 8-Core Intel Core i9 Processor
    Stunning 16-inch Retina Display with True Tone technology
    Touch Bar and Touch ID
    AMD Radeon Pro 5500M Graphics with GDDR6 memory
    Ultrafast SSD`,
  },
  {
    id: '5',
    title:
      'Apple iMac Pro 27-inch with Retina 5K Display: 3.0GHz 10-core Intel Xeon W - CTO',
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/51uW4HsnS0L._AC_SL1200_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/51Vls2347wL._AC_SL1200_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/51cG4L-scSL._AC_SL1200_.jpg',
    ],
    options: ['Black', 'Space Grey'],
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    description: `Apple 27" iMac Pro with Retina 5K Display (Late 2017) - Magic Keyboard with Numeric Keypad (Space Gray) - Magic Mouse 2 (Space Gray) - Lightning to USB Cable - Power Cord - Original Box
    Operating System: macOS
    Processor: Intel Xeon W 10-Core 3.0GHz (turbo 4.5GHz) 23.75MB cache
    Memory: 64GB DDR4 SDRAM 2666 MHz ECC
    Available Memory Slots: None`,
  },
  {
    id: '6',
    title: 'Mouse Havit Mechanical Keyboard Wired 89 Keys Gaming Keyboard',
    images: [
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg',
    ],
    options: ['Black', 'Space Grey'],
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    description: `This clear case Designed for phone 12 case / designed for phone 12 pro case. Support wireless charging.
    Screen Protection: Raised bezels around the screen help protect against scratches.
    Shockproof Corners: This clear case has shockproof corners for dropproof protection.
    Slim and Clear: Keeps your phone slim and stylish with the original beauty of your 12/12 pro.
    Scratch Resistant: The back made of hard PC holds up to daily wear and tear.`,
  },
  {
    id: '7',
    title:
      'Temdan Clear Case Compatible with iPhone 12 Case/Compatible with iPhone 12 Pro Case - Clear',
    images: [
      'https://images-na.ssl-images-amazon.com/images/I/71xrgPIhjzL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71lLnFyBPWL._AC_SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71fXHDXf5eL._AC_SL1500_.jpg',
    ],
    options: ['Black', 'Space Grey'],
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    description: `This clear case Designed for phone 12 case / designed for phone 12 pro case. Support wireless charging.
    Screen Protection: Raised bezels around the screen help protect against scratches.
    Shockproof Corners: This clear case has shockproof corners for dropproof protection.
    Slim and Clear: Keeps your phone slim and stylish with the original beauty of your 12/12 pro.
    Scratch Resistant: The back made of hard PC holds up to daily wear and tear.`,
  },
];

export default products;
