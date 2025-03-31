import stripe from '@/lib/stripe'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

// 明確標記為 SERVER 端日誌以便在終端機中更容易識別
console.log('\n\n===== [SERVER] Stripe Webhook 路由初始化 =====')
console.log('[SERVER] test3')

console.log('===== [SERVER] 初始化完成 =====\n\n')

// 新增 GET 方法，以便可以在瀏覽器中訪問
export async function GET() {
  console.log('[SERVER] 收到 GET 請求')
  return NextResponse.json({ message: 'Stripe Webhook 路由已初始化' })
}

export async function POST(req) {
  console.log('[SERVER] 收到 Stripe Webhook 請求')
  try {
    const body = await req.text()
    const signature = headers().get('stripe-signature')

    let data
    let eventType
    let event

    if (!signature) {
      return NextResponse.json({ error: 'Missing stripe signature' }, { status: 400 })
    }

    // 驗證 webhook 簽章
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        'whsec_c0a26b80b94a3068ca42a1dafc7e4f10aa96a5bac9def772dacdae2aa19d8c15'
      )
    } catch (err) {
      console.error(`Webhook signature verification failed. ${err.message}`)
      return NextResponse.json({ error: err.message }, { status: 400 })
    }

    data = event.data
    eventType = event.type
    console.log(eventType)

    // 處理不同類型的 webhook 事件
    switch (eventType) {
      case 'payment_intent.succeeded': {
        const paymentIntent = data.object
        // 處理成功付款邏輯
        console.log('paymentIntent', paymentIntent)
        console.log('test2')
        break
      }

      case 'payment_intent.payment_failed': {
        // 處理付款失敗邏輯
        break
      }
      // 可以根據需求添加其他事件處理
      default: {
        console.log(`未處理的事件類型：${eventType}`)
        break
      }
    }
    console.log('test')
    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Webhook 錯誤:', err)
    return NextResponse.json({ error: 'Webhook 處理錯誤' }, { status: 400 })
  }
}
