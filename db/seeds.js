const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const env = require('../config/config');

mongoose.connect(env.db);

const Item = require('../models/item');
Item.collection.drop();

Item
.create([{
  title: 'Great hair straightener!',
  category: 'electrical beauty',
  type: 'hair straighteners',
  make: 'GHD',
  model: '3.1B',
  photo: ['src/images/hair-straighteners1.png', 'src/images/hair-straighteners2.png', 'src/images/hair-straighteners3.png'],
  noteFromTheOwner: 'I am happy to lend my hair straighteners to whoever needs it.'
}, {
  title: 'good hairdryer',
  category: 'electrical beauty',
  type: 'hair dryer',
  make: 'Parlux',
  photo: ['src/images/hair-dryer-1.png'],
  noteFromTheOwner: ''
}, {
  title: 'Camping table and chairs, good conditions',
  category: 'outdoors',
  type: 'folding picnic table & chairs',
  make: 'Outsunny',
  photo: ['src/images/camping-table.png'],
  noteFromTheOwner: '4 seats and 1 table foldable'
}, {
  title: 'Camping gas stove in good working order',
  category: 'outdoors',
  type: 'camping gas stove',
  make: '	Delux super bleuet',
  photo: ['src/images/campingstove1.png', 'src/images/campingstove2.png', 'src/images/campingstove3.png'],
  noteFromTheOwner: 'Small camping gas stove ideal for minimal camping or days out.In working order.'
}, {
  title: 'Portable outdoors camping tent',
  category: 'outdoors',
  type: 'camping tent',
  make: 'Unbranded',
  photo: ['src/images/tent1.png', 'src/images/tent2.png', 'src/images/tent3.png'],
  noteFromTheOwner: 'This is a great camping tent that can be used as a canopy or even a tent shelter.'
}, {
  title: 'Nice double camping airbed',
  category: 'outdoors',
  type: 'camping airbed',
  make: '	Garden Mile',
  photo: ['src/images/campingbed1.png', 'src/images/campingbed2.png'],
  noteFromTheOwner: 'Waterproof self-inflating mattress with pillows which protects you from damp grass, sand, and bleachers.'
}, {
  title: 'Handy mini tool kit with various tools',
  category: 'DIY',
  type: 'screwdriver drive sockets',
  make: 'Unbranded',
  photo: ['src/images/toolbox1.png', 'src/images/toolbox2.png'],
  noteFromTheOwner: 'This is a 25 piece mini tool kit that has never been used and has been in a shed collecting dust.'
}, {
  title: 'Challenge cordless drill driver',
  category: 'DIY',
  type: 'drill',
  make: 'Challenge',
  model: 'CDT118F',
  photo: ['src/images/drill1.png', 'src/images/drill2.png'],
  noteFromTheOwner: 'Challenge CDT118F cordless drill driver. 18v'
}, {
  title: 'Chop saw',
  category: 'DIY',
  type: 'chop saw',
  make: 'Makita',
  photo: ['src/images/chopsaw.png'],
  noteFromTheOwner: 'makita chop saw, 240 volt, only used twice, works perfectly. Would be happy to help on any work you are undertaking.'
}, {
  title: 'Carving chisels & gouges old tools',
  category: 'DIY',
  type: 'carving chisels',
  make: ' by H Taylor',
  photo: ['src/images/carvingchisels1.png'],
  noteFromTheOwner: 'It is a set of 10 vintage carving chisels & gouges old tools by H Taylor. The chisels measure between 7 1/4" - 9 1/2" long x between 1/8" - 5/8" wide blades.'
}, {
  title: 'Builders wheel barrow',
  category: 'gardening',
  type: 'wheel barrow',
  make: '	Builders Wheelbarrow',
  photo: ['src/images/barrow1.png', 'src/images/barrow2.png']
}, {
  title: 'Mini gardening tools set' ,
  category: 'gardening',
  type: '	gardening set',
  make: 'Urneeds',
  photo: ['src/images/gardeningtool1.png', 'src/images/gardeningtool2.png'],
  noteFromTheOwner: 'Everything you need to love and care for your plants, all in one roomy, compact bag. It contains one mini shovel, one mini spade, one mini claw tool, one branch & twig pruner and one leaf & flower trimmer.'
}, {
  title: 'Petrol Rotary Lawnmower',
  category: 'gardening',
  type: 'lawnmower',
  make: 'Honda',
  model: 'HR173 17 inch',
  photo: ['src/images/mower1.png', 'src/images/mower2.png'],
  noteFromTheOwner: 'Keep your grass clean! Recently serviced with new oil, air filter and plug. Newly sharpened blade'
}, {
  title: 'Garden tool kit',
  category: 'gardening',
  type: 'garden tool kit',
  make: 'A Syle',
  photo: ['src/images/gardentoolkit.png'],
  noteFromTheOwner: 'Good quality gardening set including a shovel, a hoe, a bow, a rake, a steel rake and a scraper.'
}, {
  title: 'Kenwood blender',
  category: 'kitchen',
  type: 'blender',
  make: 'Kenwood',
  model: 'kMix BLX50',
  photo: ['src/images/blender1.png', 'src/images/blender2.png'],
  noteFromTheOwner: 'Good little blender for smoothies and dips and sauces. Nice glass bottle, nothing a dishwasher could not blast off'
}, {
  title: 'Juicer',
  category: 'kitchen',
  type: 'juicer',
  make: 'Phillips',
  photo: ['src/images/juicer1.png', 'src/images/juicer2.png'],
  noteFromTheOwner: 'I am happy to lend my juicer to anyone '
}, {
  title: 'Spiralizer',
  category: 'kitchen',
  type: 'spiralizer',
  make: 'Lakeland',
  photo: ['src/images/spiralizer.png'],
  noteFromTheOwner: 'Make spirals and beautiful rubons.'
}, {
  title: 'Great powerful hand mixer',
  category: 'kitchen',
  type: 'mixer',
  make: 'Breville',
  model: 'VFP069',
  photo: ['src/images/handmixer.png'],
  noteFromTheOwner: 'Breville Hand Mixers have a 200 watt motor and 5 speed settings.'
}, {
  title: 'Amazing raclette party!',
  category: 'kitchen',
  type: 'raclette',
  make: 'Tefal',
  photo: ['src/images/raclette.png'],
  noteFromTheOwner: 'Enjoy a great raclette party with your friends. Have 6 little pans.'
}, {
  title: 'Jaws',
  category: 'entertainment',
  type: 'dvd',
  photo: ['src/images/jawsdvd.png']
}, {
  title: 'Pulp Fiction - To watch!',
  category: 'entertainment',
  type: 'dvd',
  photo: ['src/images/pulpfictiondvd.png'],
  noteFromTheOwner: 'The greatest movie I have ever seen! '
}, {
  title: 'Baby Boss',
  category: 'entertainment',
  type: 'dvd',
  photo: ['src/images/babybossdvd.png'],
  noteFromTheOwner: 'I really enjoyed that movie and I really want to share the joy.'
}, {
  title: 'Hackers',
  category: 'entertainment',
  type: 'dvd',
  photo: ['src/images/Hackersdvd.png'],
  noteFromTheOwner: 'This is the reason I became a coder. Must watch!'
}]);
