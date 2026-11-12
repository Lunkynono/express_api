import cron from 'node-cron'
import { members } from '../db.js'

cron.schedule('* * * * * *', () => {
  const date = new Date()

  //Lista de personas activas ya filtradas
  members
    .filter(member => {
      return member.status === 'active'
    })
    .forEach(member => {
      const daysRemaining = Math.ceil(
        (new Date(`${member.membershipExpires}T00:00:00`) -
          new Date(date.toDateString())) /
          (1000 * 60 * 60 * 24),
      )
      console.log(
        `Name: ${member.name}, Email: ${member.email}, Time remaining: ${daysRemaining} days`,
      )
    })
})
