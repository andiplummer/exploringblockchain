const {Users} = require('./server/db/Users')
const {db} = require('./server/db')

const seed = [
  { name: 'Andi Plummer' },
  { name: 'Mike Powers' }
]

async function runSeed() {
  try {
    // add {force: true} inside db.sync to drop all tables before seeding. NEVER DO THIS IN PRODUCTION 
    await db.sync()
    await Users.bulkCreate(seed)
    await db.close()
  } catch (error) {
   console.log(error)
  }
}

runSeed()