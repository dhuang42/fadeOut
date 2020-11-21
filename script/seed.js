'use strict'

const db = require('../server/db')
const {User, Film} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const films = await Promise.all([
    Film.create({
      title: 'Parasite',
      posterUrl: '/posters/parasite.png',
      director: 'Bong Joon-ho',
      releaseYear: 2019,
      runtime: 132,
      tagline: 'Act like you own the place.',
      logline:
        'All unemployed, Ki-taek’s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.'
    }),
    Film.create({
      title: 'Ford v Ferrari',
      posterUrl: '/posters/fordvferrari.png',
      director: 'James Mangold',
      releaseYear: 2019,
      runtime: 152,
      tagline: 'They took the American dream for a ride',
      logline:
        'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.'
    }),
    Film.create({
      title: 'The Irishman',
      posterUrl: '/posters/theirishman.png',
      director: 'Martin Scorsese',
      releaseYear: 2019,
      runtime: 209,
      tagline: 'His story changed history',
      logline:
        'Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.'
    }),
    Film.create({
      title: 'Jojo Rabbit',
      posterUrl: '/posters/jojorabbit.png',
      director: 'Taika Waititi',
      releaseYear: 2019,
      runtime: 108,
      tagline: 'An anti-hate satire.',
      logline:
        'A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.'
    }),
    Film.create({
      title: 'Joker',
      posterUrl: '/posters/joker.png',
      director: 'Todd Phillips',
      releaseYear: 2019,
      runtime: 122,
      tagline: 'Put on a happy face.',
      logline:
        'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.'
    }),
    Film.create({
      title: 'Marriage Story',
      posterUrl: '/posters/marriagestory.png',
      director: 'Noah Baumbach',
      releaseYear: 2019,
      runtime: 137,
      tagline: 'Where there’s a love, there’s a way.',
      logline:
        'A stage director and an actress struggle through a grueling, coast-to-coast divorce that pushes them to their personal extremes.'
    }),
    Film.create({
      title: '1917',
      posterUrl: '/posters/1917.png',
      director: 'Sam Mendes',
      releaseYear: 2019,
      runtime: 119,
      tagline: 'Time is the enemy',
      logline:
        'At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.'
    }),
    Film.create({
      title: 'Once Upon a Time in Hollywood',
      posterUrl: '/posters/onceuponatimehollywood.png',
      director: 'Quentin Tarantino',
      releaseYear: 2019,
      runtime: 161,
      tagline: 'In this town, it can all change… like that',
      logline:
        'Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${films.length} films`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
