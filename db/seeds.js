const mongoose = require('mongoose');
const bluebird = require('bluebird');
const env      = require('../config/config');

const Item     = require('../models/item');
const User     = require('../models/user');
const Request  = require('../models/request');
const Category = require('../models/category');


mongoose.Promise = bluebird;
mongoose.connect(env.db);

Item.collection.drop();
User.collection.drop();
Request.collection.drop();


User
.create([
  {
    firstName: 'Suze',
    lastName: 'Shardlow',
    email: 'suze@ga.co',
    photo: 'https://avatars0.githubusercontent.com/u/6759411?v=4&s=460',
    dob: '2017-01-09T00:00:00.000Z',
    description: 'wendy',
    password: 'password',
    passwordConfirmation: 'password',
    items: [],
    sent_requests: [],
    received_requests: []
  },
  {
    firstName: 'Kenny',
    lastName: 'Smith',
    email: 'kenny@kenny.com',
    photo: 'http://www.fillmurray.com/300/300',
    dob: '2017-01-09T00:00:00.000Z',
    description: 'kenny',
    password: 'password',
    passwordConfirmation: 'password',
    items: [],
    sent_requests: [],
    received_requests: []
  },
  {
    firstName: 'Eric',
    lastName: 'Good',
    email: 'eric@eric.com',
    photo: 'http://www.fillmurray.com/300/300',
    dob: '2017-01-09T00:00:00.000Z',
    description: 'eric',
    password: 'password',
    passwordConfirmation: 'password',
    items: [],
    sent_requests: [],
    received_requests: []
  },
  {
    firstName: 'Jenny',
    lastName: 'Crow',
    email: 'jenny@jenny.com',
    photo: 'http://www.fillmurray.com/300/300',
    dob: '2017-01-09T00:00:00.000Z',
    description: 'jenny',
    password: 'password',
    passwordConfirmation: 'password',
    items: [],
    sent_requests: [],
    received_requests: []
  }
]).then(users => {
  console.log(`${users.length} users have been successfully created.`);

  return Category.create([
    {
      name: 'Electrical Beauty',
      items: []
    },
    {
      name: 'Outdoors',
      items: []
    },
    {
      name: 'Gardening',
      items: []
    },
    {
      name: 'DIY',
      items: []
    },
    {
      name: 'Entertainment',
      items: []
    },
    {
      name: 'Kitchen',
      items: []
    }
  ]).then(categories => {
    console.log(`${categories.length} categories have been successfully created.`);
    return Item.create([
      {
        title: 'Great hair straightener!',
        category: categories[0]._id,
        type: 'hair straighteners',
        make: 'GHD',
        model: '3.1B',
        photo: 'http://i.imgur.com/Xjrah0A.png',
        noteFromTheOwner: 'I am happy to lend my hair straighteners to whoever needs it.',
        owner: users[0]._id
      }, {
        title: 'good hairdryer',
        category: categories[0]._id,
        type: 'hair dryer',
        make: 'Parlux',
        photo: 'http://i.imgur.com/gNdCP54.png',
        noteFromTheOwner: '',
        owner: users[0]._id
      }, {
        title: 'Camping table and chairs, good conditions',
        category: categories[1]._id,
        type: 'folding picnic table & chairs',
        make: 'Outsunny',
        photo: 'http://i.imgur.com/556DjJo.png',
        noteFromTheOwner: '4 seats and 1 table foldable',
        owner: users[1]._id
      }, {
        title: 'Camping gas stove in good working order',
        category: categories[1]._id,
        type: 'camping gas stove',
        make: '	Delux super bleuet',
        photo: 'http://i.imgur.com/5Ymgtlp.png',
        noteFromTheOwner: 'Small camping gas stove ideal for minimal camping or days out.In working order.',
        owner: users[1]._id
      }, {
        title: 'Portable outdoors camping tent',
        category: categories[1]._id,
        type: 'camping tent',
        make: 'Unbranded',
        photo: 'http://i.imgur.com/YLSds6z.png',
        noteFromTheOwner: 'This is a great camping tent that can be used as a canopy or even a tent shelter.',
        owner: users[1]._id
      }, {
        title: 'Nice double camping airbed',
        category: categories[1]._id,
        type: 'camping airbed',
        make: '	Garden Mile',
        photo: ['http://i.imgur.com/FcT3jVN.png', 'http://i.imgur.com/axlxBMW.png'],
        noteFromTheOwner: 'Waterproof self-inflating mattress with pillows which protects you from damp grass, sand, and bleachers.',
        owner: users[1]._id
      }, {
        title: 'Handy mini tool kit with various tools',
        category: categories[3]._id,
        type: 'screwdriver drive sockets',
        make: 'Unbranded',
        photo: ['http://i.imgur.com/YKElfj8.png', 'http://i.imgur.com/21ZIB0v.png'],
        noteFromTheOwner: 'This is a 25 piece mini tool kit that has never been used and has been in a shed collecting dust.',
        owner: users[2]._id
      }, {
        title: 'Challenge cordless drill driver',
        category: categories[3]._id,
        type: 'drill',
        make: 'Challenge',
        model: 'CDT118F',
        photo: ['http://i.imgur.com/6AtTdm9.png', 'http://i.imgur.com/DMesI9z.png'],
        noteFromTheOwner: 'Challenge CDT118F cordless drill driver. 18v',
        owner: users[2]._id
      }, {
        title: 'Chop saw',
        category: categories[3]._id,
        type: 'chop saw',
        make: 'Makita',
        photo: ['http://i.imgur.com/uVGpCqn.png'],
        noteFromTheOwner: 'makita chop saw, 240 volt, only used twice, works perfectly. Would be happy to help on any work you are undertaking.',
        owner: users[2]._id
      }, {
        title: 'Carving chisels & gouges old tools',
        category: categories[3]._id,
        type: 'carving chisels',
        make: ' by H Taylor',
        photo: ['http://i.imgur.com/4B9GFDK.png'],
        noteFromTheOwner: 'It is a set of 10 vintage carving chisels & gouges old tools by H Taylor. The chisels measure between 7 1/4" - 9 1/2" long x between 1/8" - 5/8" wide blades.',
        owner: users[2]._id
      }, {
        title: 'Builders wheel barrow',
        category: categories[2]._id,
        type: 'wheel barrow',
        make: '	Builders Wheelbarrow',
        photo: 'http://i.imgur.com/7hgwoPC.png',
        owner: users[0]._id
      }, {
        title: 'Mini gardening tools set' ,
        category: categories[2]._id,
        type: '	gardening set',
        make: 'Urneeds',
        photo: 'http://i.imgur.com/GqUEOGd.png',
        noteFromTheOwner: 'Everything you need to love and care for your plants, all in one roomy, compact bag. It contains one mini shovel, one mini spade, one mini claw tool, one branch & twig pruner and one leaf & flower trimmer.',
        owner: users[0]._id
      }, {
        title: 'Petrol Rotary Lawnmower',
        category: categories[2]._id,
        type: 'lawnmower',
        make: 'Honda',
        model: 'HR173 17 inch',
        photo: 'http://i.imgur.com/kd0X3Nl.png',
        noteFromTheOwner: 'Keep your grass clean! Recently serviced with new oil, air filter and plug. Newly sharpened blade',
        owner: users[2]._id
      }, {
        title: 'Garden tool kit',
        category: categories[2]._id,
        type: 'garden tool kit',
        make: 'A Syle',
        photo: 'http://i.imgur.com/U4J3OHA.png',
        noteFromTheOwner: 'Good quality gardening set including a shovel, a hoe, a bow, a rake, a steel rake and a scraper.',
        owner: users[0]._id
      }, {
        title: 'Kenwood blender',
        category: categories[5]._id,
        type: 'blender',
        make: 'Kenwood',
        model: 'kMix BLX50',
        photo: ['http://i.imgur.com/afzpNu4.png', 'http://i.imgur.com/WPdiFgz.png'],
        noteFromTheOwner: 'Good little blender for smoothies and dips and sauces. Nice glass bottle, nothing a dishwasher could not blast off',
        owner: users[3]._id
      }, {
        title: 'Juicer',
        category: categories[5]._id,
        type: 'juicer',
        make: 'Phillips',
        photo: ['http://i.imgur.com/BhL7wHm.png', 'http://i.imgur.com/kccQFxP.png'],
        noteFromTheOwner: 'I am happy to lend my juicer to anyone ',
        owner: users[3]._id
      }, {
        title: 'Spiralizer',
        category: categories[5]._id,
        type: 'spiralizer',
        make: 'Lakeland',
        photo: ['http://i.imgur.com/L3ouw3h.png'],
        noteFromTheOwner: 'Make spirals and beautiful rubons.',
        owner: users[1]._id
      }, {
        title: 'Great powerful hand mixer',
        category: categories[5]._id,
        type: 'mixer',
        make: 'Breville',
        model: 'VFP069',
        photo: ['http://i.imgur.com/cgMPi79.png'],
        noteFromTheOwner: 'Breville Hand Mixers have a 200 watt motor and 5 speed settings.',
        owner: users[3]._id
      }, {
        title: 'Amazing raclette party!',
        category: categories[5]._id,
        type: 'raclette',
        make: 'Tefal',
        photo: ['http://i.imgur.com/o9gGyzK.png'],
        noteFromTheOwner: 'Enjoy a great raclette party with your friends. Have 6 little pans.',
        owner: users[1]._id
      }, {
        title: 'Jaws',
        category: categories[4]._id,
        type: 'dvd',
        photo: ['http://i.imgur.com/MXOeJVP.png'],
        owner: users[1]._id
      }, {
        title: 'Pulp Fiction - To watch!',
        category: categories[4]._id,
        type: 'dvd',
        photo: ['http://i.imgur.com/Scva1aL.png'],
        noteFromTheOwner: 'The greatest movie I have ever seen! ',
        owner: users[1]._id
      }, {
        title: 'Baby Boss',
        category: categories[4]._id,
        type: 'dvd',
        photo: ['http://i.imgur.com/18kOOem.png'],
        noteFromTheOwner: 'I really enjoyed that movie and I really want to share the joy.',
        owner: users[3]._id
      }, {
        title: 'Hackers',
        category: categories[4]._id,
        type: 'dvd',
        photo: ['http://i.imgur.com/CeohAUa.png'],
        noteFromTheOwner: 'This is the reason I became a coder. Must watch!',
        owner: users[3]._id
      }
    ]).then(items => {
      console.log(`${items.length} items have been successfully created.`);
      categories[0].items.push(items[0]._id);
      categories[0].save();
      categories[0].items.push(items[1]._id);
      categories[0].save();
      categories[1].items.push(items[2]._id);
      categories[1].save();
      categories[1].items.push(items[3]._id);
      categories[1].save();
      categories[1].items.push(items[4]._id);
      categories[1].save();
      categories[1].items.push(items[5]._id);
      categories[1].save();
      categories[3].items.push(items[6]._id);
      categories[3].save();
      categories[3].items.push(items[7]._id);
      categories[3].save();
      categories[3].items.push(items[8]._id);
      categories[3].save();
      categories[3].items.push(items[9]._id);
      categories[3].save();
      categories[2].items.push(items[10]._id);
      categories[2].save();
      categories[2].items.push(items[11]._id);
      categories[2].save();
      categories[2].items.push(items[12]._id);
      categories[2].save();
      categories[2].items.push(items[13]._id);
      categories[2].save();
      categories[5].items.push(items[14]._id);
      categories[5].save();
      categories[5].items.push(items[15]._id);
      categories[5].save();
      categories[5].items.push(items[16]._id);
      categories[5].save();
      categories[5].items.push(items[17]._id);
      categories[5].save();
      categories[5].items.push(items[18]._id);
      categories[5].save();
      categories[4].items.push(items[19]._id);
      categories[4].save();
      categories[4].items.push(items[20]._id);
      categories[4].save();
      categories[4].items.push(items[21]._id);
      categories[4].save();
      categories[4].items.push(items[22]._id);
      categories[4].save();
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
  });

});
