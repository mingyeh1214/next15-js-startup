import Stripe from 'stripe'
console.log('start')
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
console.log('end')
export default stripe
