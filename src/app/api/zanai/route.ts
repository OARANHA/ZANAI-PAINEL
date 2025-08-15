import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || ''
  
  try {
    // Fazer proxy para o projeto Zanai
    const targetUrl = `http://localhost:3000/${path}`
    
    const response = await fetch(targetUrl, {
      headers: {
        // Repassar headers importantes
        'Accept': request.headers.get('Accept') || '*/*',
        'Content-Type': request.headers.get('Content-Type') || 'application/json',
      },
    })
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch from Zanai' },
        { status: response.status }
      )
    }
    
    const data = await response.text()
    
    return new NextResponse(data, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/html',
      },
    })
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || ''
  const body = await request.text()
  
  try {
    const targetUrl = `http://localhost:3000/${path}`
    
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Accept': request.headers.get('Accept') || '*/*',
        'Content-Type': request.headers.get('Content-Type') || 'application/json',
      },
      body: body,
    })
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to post to Zanai' },
        { status: response.status }
      )
    }
    
    const data = await response.text()
    
    return new NextResponse(data, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
      },
    })
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}