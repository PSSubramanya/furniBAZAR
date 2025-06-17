import imagePath from '../constants/imagePath';

export const furnitureCategories = [
  {
    id: '0',
    name: 'Arm Chair',
    image: imagePath?.armChairIcon,
    selectedImage: imagePath?.armChairIconColored,
  },
  {
    id: '1',
    name: 'Table Light',
    image: imagePath?.tableLampIcon,
    selectedImage: imagePath?.tableLampIconColored,
  },
  {
    id: '2',
    name: 'Sofa',
    image: imagePath?.sofaIcon,
    selectedImage: imagePath?.sofaIconColored,
  },
  {
    id: '3',
    name: 'Dressing Table',
    image: imagePath?.dressingTableIcon,
    selectedImage: imagePath?.dressingTableIconColored,
  },
  {
    id: '4',
    name: 'Bed',
    image: imagePath?.bedIcon,
    selectedImage: imagePath?.bedIconColored,
  },
  {
    id: '5',
    name: 'Bedside Table',
    image: imagePath?.bedsideTable,
    selectedImage: imagePath?.bedsideTableColored,
  },
  {
    id: '6',
    name: 'Wardrobe',
    image: imagePath?.wardrobeIcon,
    selectedImage: imagePath?.wardrobeIconColored,
  },
];

export const carouselOfferData = [
  {
    id: 0,
    header: "Today's IKEA special !",
    description: 'Get discount on every order. Valid only for today',
    discount: '25%',
    coverImage: imagePath?.furnitureImages2,
  },
  {
    id: 1,
    header: 'NEELKAMAL Sunday !',
    description: 'A flat discount on every order for this month.',
    discount: '16%',
    coverImage: imagePath?.lightStandImage1,
  },
  {
    id: 2,
    header: 'Godrej Maha Sale !',
    description: 'Discount sale on wardrobes this festival.',
    discount: '20%',
    coverImage: imagePath?.wardrobeImage,
  },
];

export const armChairsList = [
  {
    id: '0',
    name: 'Yellow Ox Chair',
    description:
      'This Yellow Ox Chair is a bold and sculptural statement piece that combines comfort with striking aesthetics. Inspired by the strength and presence of an ox, this chair features a distinctive high-back design with curved armrests that evoke the shape of ox horns. Its vibrant yellow upholstery adds a modern and energetic touch, making it a standout addition to any space. Crafted with premium materials, the chair boasts a sturdy frame, plush cushioning, and a sleek finish that enhances both durability and style. Whether placed in a living room, office, or lounge area, the Yellow Ox Chair offers exceptional support and ergonomic comfort, making it perfect for relaxation or conversation. ',
    image: [imagePath?.armChair1],
    companyName: 'MONICA FORSTER',
    rating: '4.6',
    price: '16,240',
    commentsData: [
      {
        starCount: 5,
        comments: [
          {
            username: 'Revanth',
            profileIcon: '',
            comment:
              'Fantastic couch to relax on. I absolutely love this and I recommend it to my friends also.',
          },
          {
            username: 'Rahul',
            profileIcon: '',
            comment: 'Great gamer couch',
          },
          {
            username: 'Adithya',
            profileIcon: '',
            comment: 'This is a solid budget friendly comfy couch.',
          },
        ],
      },
      {
        starCount: 4,
        comments: [
          {
            username: 'Ajay',
            profileIcon: '',
            comment: 'Comfy seated armchair. A bit costly, yet worth it.',
          },
          {
            username: 'Rohan',
            profileIcon: '',
            comment:
              'I was a bit confused with the selection, but in the end this was worth it.',
          },
        ],
      },
      {
        starCount: 3,
        comments: [
          {
            username: 'Prajwal',
            profileIcon: '',
            comment: 'Nice couch',
          },
        ],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [
          {
            username: 'Subbu',
            profileIcon: '',
            comment: 'I expected better from this company.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Red Velvette Throne',
    description:
      'The Red Velvette Throne is a regal armchair that commands attention with its deep crimson velvet upholstery and ornate silhouette. Featuring a high back, crystal-tufted cushioning, and hand-carved detailing—often finished in gold leaf—it blends royal elegance with luxurious comfort. Perfect as a statement piece in a living room, studio, or event space, it offers both visual drama and plush seating fit for modern royalty',
    image: [imagePath?.armChair3],
    companyName: 'ANDERSSEN VOLL',
    rating: '4.8',
    price: '20,240',
    commentsData: [
      {
        starCount: 5,
        comments: [
          {
            username: 'Sasuke',
            profileIcon: '',
            comment:
              'Fantastic couch to relax on. I absolutely love this and I recommend it to my friends also.',
          },
        ],
      },
      {
        starCount: 4,
        comments: [
          {
            username: 'Rohan',
            profileIcon: '',
            comment:
              'I was a bit confused with the selection, but in the end this was worth it.',
          },
        ],
      },
      {
        starCount: 3,
        comments: [
          {
            username: 'Prajwal',
            profileIcon: '',
            comment: 'Nice couch',
          },
        ],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
  {
    id: '8',
    name: 'Savanna Easy Chair',
    image: [imagePath?.armChair9],
    varieties: [
      {
        id: '8_1',
        name: 'Savanna Easy Dusk Chair',
        description:
          'This Savanna Easy Chair comes in dusk color and it is a bold and sculptural statement piece that combines comfort with striking aesthetics. It stands out as an addition to any space. Crafted with premium materials, the chair boasts a sturdy frame, plush cushioning, and a sleek finish that enhances both durability and style, whether placed in a living room, office, or lounge area.',
        image: [imagePath?.armChair9],
        companyName: 'NILKAMAL',
        rating: '4.8',
        price: '20,240',
        color: '#DDD5AE',
        commentsData: [
          {
            starCount: 5,
            comments: [
              {
                username: 'Revanth',
                profileIcon: '',
                comment:
                  'Fantastic couch to relax on. I absolutely love this and I recommend it to my friends also.',
              },
              {
                username: 'Rahul',
                profileIcon: '',
                comment: 'Great gamer couch',
              },
              {
                username: 'Adithya',
                profileIcon: '',
                comment: 'This is a solid budget friendly comfy couch.',
              },
            ],
          },
          {
            starCount: 4,
            comments: [
              {
                username: 'Ajay',
                profileIcon: '',
                comment: 'Comfy seated armchair. A bit costly, yet worth it.',
              },
              {
                username: 'Rohan',
                profileIcon: '',
                comment:
                  'I was a bit confused with the selection, but in the end this was worth it.',
              },
            ],
          },
          {
            starCount: 3,
            comments: [
              {
                username: 'Prajwal',
                profileIcon: '',
                comment: 'Nice couch',
              },
            ],
          },
          {
            starCount: 2,
            comments: [],
          },
          {
            starCount: 1,
            comments: [
              {
                username: 'Subbu',
                profileIcon: '',
                comment: 'I expected better from this company.',
              },
            ],
          },
        ],
      },
      {
        id: '8_2',
        name: 'Savanna Easy Blue Chair',
        description:
          'This Savanna Easy Chair comes in navy blue color and it is a bold and sculptural statement piece that combines comfort with striking aesthetics. It stands out as an addition to any space. Crafted with premium materials, the chair boasts a sturdy frame, plush cushioning, and a sleek finish that enhances both durability and style, whether placed in a living room, office, or lounge area.',
        image: [imagePath?.armChair10],
        companyName: 'NILKAMAL',
        rating: '4.9',
        price: '22,240',
        color: '#5077CA',
        commentsData: [
          {
            starCount: 5,
            comments: [
              {
                username: 'Revanth',
                profileIcon: '',
                comment:
                  'Fantastic couch to relax on. I absolutely love this and I recommend it to my friends also.',
              },
              {
                username: 'Rahul',
                profileIcon: '',
                comment: 'Great gamer couch',
              },
              {
                username: 'Adithya',
                profileIcon: '',
                comment: 'This is a solid budget friendly comfy couch.',
              },
            ],
          },
          {
            starCount: 4,
            comments: [
              {
                username: 'Ajay',
                profileIcon: '',
                comment: 'Comfy seated armchair. A bit costly, yet worth it.',
              },
              {
                username: 'Rohan',
                profileIcon: '',
                comment:
                  'I was a bit confused with the selection, but in the end this was worth it.',
              },
            ],
          },
          {
            starCount: 3,
            comments: [
              {
                username: 'Prajwal',
                profileIcon: '',
                comment: 'Nice couch',
              },
            ],
          },
          {
            starCount: 2,
            comments: [],
          },
          {
            starCount: 1,
            comments: [
              {
                username: 'Subbu',
                profileIcon: '',
                comment: 'I expected better from this company.',
              },
            ],
          },
        ],
      },
      {
        id: '8_3',
        name: 'Savanna Easy Grey Chair',
        description:
          'This Savanna Easy Chair comes in grey color and it is a bold and sculptural statement piece that combines comfort with striking aesthetics. It stands out as an addition to any space. Crafted with premium materials, the chair boasts a sturdy frame, plush cushioning, and a sleek finish that enhances both durability and style, whether placed in a living room, office, or lounge area.',
        image: [imagePath?.armChair11],
        companyName: 'NILKAMAL',
        rating: '4.8',
        price: '20,240',
        color: '#CECDD1',
        commentsData: [
          {
            starCount: 5,
            comments: [
              {
                username: 'Revanth',
                profileIcon: '',
                comment:
                  'Fantastic couch to relax on. I absolutely love this and I recommend it to my friends also.',
              },
              {
                username: 'Rahul',
                profileIcon: '',
                comment: 'Great gamer couch',
              },
              {
                username: 'Adithya',
                profileIcon: '',
                comment: 'This is a solid budget friendly comfy couch.',
              },
            ],
          },
          {
            starCount: 4,
            comments: [
              {
                username: 'Ajay',
                profileIcon: '',
                comment: 'Comfy seated armchair. A bit costly, yet worth it.',
              },
              {
                username: 'Rohan',
                profileIcon: '',
                comment:
                  'I was a bit confused with the selection, but in the end this was worth it.',
              },
            ],
          },
          {
            starCount: 3,
            comments: [
              {
                username: 'Prajwal',
                profileIcon: '',
                comment: 'Nice couch',
              },
            ],
          },
          {
            starCount: 2,
            comments: [],
          },
          {
            starCount: 1,
            comments: [
              {
                username: 'Subbu',
                profileIcon: '',
                comment: 'I expected better from this company.',
              },
            ],
          },
        ],
      },
    ],
    companyName: 'NILKAMAL',
    rating: '4.8',
    price: '20,240',
  },
];

export const tableLightLists = [
  {
    id: '0',
    name: 'Mini Table Light',
    description:
      'The Mini Table Light is a compact and stylish lighting solution designed for small spaces and cozy corners. With its sleek form and soft glow, it’s perfect for bedside tables, desks, or decorative shelves. Despite its size, it offers focused illumination ideal for reading, working, or adding a warm accent to your room. Lightweight and portable, it blends functionality with charm—making it a versatile addition to any modern or minimalist setup',
    image: [imagePath?.light1],
    companyName: 'MONICA FORSTER',
    rating: '4.6',
    price: '1,240',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
  {
    id: '1',
    name: 'White Table Light',
    description:
      'The White Table Light is a minimalist and elegant lighting piece designed to blend seamlessly into any décor. With its clean lines and soft white finish, it casts a warm, ambient glow—perfect for reading, working, or creating a cozy atmosphere. Compact yet stylish, it’s ideal for bedside tables, desks, or accent corners where subtle sophistication is key.',
    image: [imagePath?.light2],
    companyName: 'IKEA',
    rating: '4.8',
    price: '2,199',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
  {
    id: '2',
    name: 'Cord Light',
    description:
      'The Cord Light is a minimalist table lamp that celebrates simplicity and raw design. Featuring an exposed bulb suspended from a sleek, fabric-wrapped cord, it offers a modern industrial vibe with a warm, ambient glow. Perfect for creative workspaces, bedside tables, or cozy reading nooks, this light adds character without clutter—proof that elegance can come from the essentials.',
    image: [imagePath?.light3],
    companyName: 'IKEA',
    rating: '4.2',
    price: '1,699',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
  {
    id: '9',
    name: 'Baby Light',
    description:
      'The Baby Light is a gentle, child-friendly table lamp designed to soothe and comfort little ones. With its soft glow, playful shape, and often silicone or BPA-free materials, it’s perfect for nurseries, bedside tables, or nighttime feedings. Many models feature tap controls, dimmable settings, and rechargeable batteries—making them both safe and convenient for parents and magical for kids.',
    image: [imagePath?.light14],
    companyName: 'IKEA',
    rating: '4.1',
    price: '2,300',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
];

export const sofasList = [
  {
    id: '0',
    name: 'Grey Double Seater',
    description:
      'The Grey Double Seater is a sleek and versatile sofa designed for modern living. Upholstered in soft grey fabric, it offers a neutral tone that complements any décor—from minimalist to cozy chic. With its compact two-seater design, it’s perfect for apartments, reading nooks, or as an accent piece in larger rooms. Plush cushions and a supportive frame ensure comfort without compromising on style, making it an ideal blend of form and function.',
    image: [imagePath?.sofa1],
    companyName: 'MONICA FORSTER',
    rating: '4.6',
    price: '26,240',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
  {
    id: '1',
    name: 'Brown Single Couch',
    description:
      'The Brown Single Couch is a cozy and compact seating solution that blends warmth with timeless style. Upholstered in rich brown fabric or leather, it offers a grounded, earthy tone that complements both modern and traditional interiors. With its supportive cushioning and sleek silhouette, it’s perfect for solo lounging in living rooms, reading corners, or office nooks—bringing comfort and character to any space.',
    image: [imagePath?.sofa2],
    companyName: 'MONICA FORSTER',
    rating: '4.4',
    price: '16,000',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
  {
    id: '2',
    name: 'Recliner Swinging Couch',
    description:
      'The Recliner Swinging Couch is the ultimate fusion of comfort and motion—designed for those who love to lounge and gently sway. With a reclining backrest and a smooth swinging base, it offers a unique relaxation experience that soothes both body and mind. Upholstered in plush fabric or leather, and supported by a sturdy frame, this couch is perfect for cozy evenings, reading sessions, or simply unwinding in style. It’s where the serenity of a swing meets the indulgence of a recliner.',
    image: [imagePath?.sofa5, imagePath?.sofa6],
    companyName: 'MONICA FORSTER',
    rating: '4.6',
    price: '18,200',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
  {
    id: '3',
    name: 'Mega Sofa',
    description:
      'The Mega Sofa is a bold, sculptural piece that blends minimalist design with luxurious comfort. Featuring a slender steel frame and generously overstuffed cushions, it offers a striking silhouette inspired by the softness of freshly baked loaves. Ideal for modern interiors, this sofa delivers both visual impact and deep relaxation—making it a standout in living rooms, lounges, or creative spaces',
    image: [imagePath?.sofa7],
    companyName: 'MONICA FORSTER',
    rating: '4.5',
    price: '25,000',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
  {
    id: '5',
    name: 'Gamer Couch',
    description:
      'The Gamer Couch is a performance-driven sofa designed for immersive play and all-day comfort. With features like reclining seats, adjustable headrests, built-in cup holders, and USB charging ports, it transforms any gaming setup into a command center. Upholstered in durable materials like faux leather or breathable fabric, it offers ergonomic support and a sleek, modern look—perfect for solo marathons or co-op showdowns.',
    image: [imagePath?.sofa10],
    companyName: 'MONICA FORSTER',
    rating: '4.8',
    price: '31,640',
    commentsData: [
      {
        starCount: 5,
        comments: [],
      },
      {
        starCount: 4,
        comments: [],
      },
      {
        starCount: 3,
        comments: [],
      },
      {
        starCount: 2,
        comments: [],
      },
      {
        starCount: 1,
        comments: [],
      },
    ],
  },
];

export const discountData = [
  {
    discountName: 'Monsoon Offer',
    discountCoupons: 'ABCD36',
    discountPrice: '10%',
  },
  {
    discountName: 'Monsoon Offer',
    discountCoupons: 'ABCD24',
    discountPrice: '10%',
  },
  {
    discountName: 'Monsoon Offer',
    discountCoupons: 'SHAG41',
    discountPrice: '10%',
  },
  {
    discountName: 'Referral Offer',
    discountCoupons: 'NEWBIE123456',
    discountPrice: '50',
  },
];
