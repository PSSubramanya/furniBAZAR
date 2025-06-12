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
    id: '1',
    name: 'Cream Sofa',
    image: [imagePath?.armChair2],
    companyName: 'ANDERSSEN VOLL',
    rating: '4.2',
    price: '4,240',
  },
  {
    id: '2',
    name: 'Red Throne',
    image: [imagePath?.armChair3],
    companyName: 'ANDERSSEN VOLL',
    rating: '4.8',
    price: '20,240',
  },
  {
    id: '3',
    name: 'Leather Brown Sofa',
    image: [imagePath?.armChair4],
    companyName: 'ANDERSSEN VOLL',
    rating: '4.8',
    price: '20,240',
  },
  {
    id: '4',
    name: 'Leather Sofa',
    image: [imagePath?.armChair5],
    companyName: 'IKEA',
    rating: '4.6',
    price: '33,240',
  },
  {
    id: '5',
    name: 'Dark Chocoloate Sofa',
    image: [imagePath?.armChair6],
    companyName: 'GODREJ',
    rating: '4.0',
    price: '8,240',
  },
  {
    id: '6',
    name: 'Wider Sofa',
    image: [imagePath?.armChair7],
    companyName: 'ANDERSSEN VOLL',
    rating: '4.2',
    price: '13,240',
  },
  {
    id: '7',
    name: 'Lounge Chair',
    image: [imagePath?.armChair8],
    companyName: 'IKEA',
    rating: '4.0',
    price: '6,240',
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
    image: [imagePath?.light1],
    companyName: 'MONICA FORSTER',
    rating: '4.6',
    price: '1,240',
  },
  {
    id: '1',
    name: 'White Table Light',
    image: [imagePath?.light2],
    companyName: 'IKEA',
    rating: '4.8',
    price: '2,199',
  },
  {
    id: '2',
    name: 'Cord Light',
    image: [imagePath?.light3],
    companyName: 'IKEA',
    rating: '4.2',
    price: '1,699',
  },
  {
    id: '3',
    name: 'White Curved Light',
    image: [imagePath?.light4],
    companyName: 'IKEA',
    rating: '4.1',
    price: '1,499',
  },
  {
    id: '4',
    name: 'Stand Light',
    image: [imagePath?.light5],
    companyName: 'IKEA',
    rating: '4.1',
    price: '2,500',
  },
  {
    id: '5',
    name: 'Long Neck Light',
    image: [imagePath?.light8],
    companyName: 'Godrej',
    rating: '4.1',
    price: '2,100',
  },
  {
    id: '6',
    name: 'Table Light',
    image: [imagePath?.light9],
    companyName: 'Godrej',
    rating: '3.6',
    price: '800',
  },
  {
    id: '7',
    name: 'Long Neck Table Light',
    image: [imagePath?.light11],
    companyName: 'Godrej',
    rating: '4.0',
    price: '1,200',
  },
  {
    id: '8',
    name: 'Pinky Light',
    image: [imagePath?.light13],
    companyName: 'IKEA',
    rating: '4.0',
    price: '2,000',
  },
  {
    id: '9',
    name: 'Baby Light',
    image: [imagePath?.light14],
    companyName: 'IKEA',
    rating: '4.1',
    price: '2,300',
  },
];

export const sofasList = [
  {
    id: '0',
    name: 'Grey Double Seater',
    image: [imagePath?.sofa1],
    companyName: 'MONICA FORSTER',
    rating: '4.6',
    price: '26,240',
  },
  {
    id: '1',
    name: 'Brown Single Couch',
    image: [imagePath?.sofa2],
    companyName: 'MONICA FORSTER',
    rating: '4.4',
    price: '16,000',
  },
  {
    id: '2',
    name: 'Recliner Swinging Couch',
    image: [imagePath?.sofa5, imagePath?.sofa6],
    companyName: 'MONICA FORSTER',
    rating: '4.6',
    price: '18,200',
  },
  {
    id: '3',
    name: 'Mega Sofa',
    image: [imagePath?.sofa7],
    companyName: 'MONICA FORSTER',
    rating: '4.5',
    price: '25,000',
  },
  {
    id: '4',
    name: 'Kingstyle Sofa',
    image: [imagePath?.sofa9],
    companyName: 'MONICA FORSTER',
    rating: '4.2',
    price: '8,640',
  },
  {
    id: '5',
    name: 'Gamer Couch',
    image: [imagePath?.sofa10],
    companyName: 'MONICA FORSTER',
    rating: '4.8',
    price: '31,640',
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
