import { getToken } from 'next-auth/jwt';
import { getCsrfToken, getSession } from 'next-auth/react';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const csrfToken = await getCsrfToken({ req });
  const session = await getSession({ req });
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
  console.log({ session, csrfToken, token, req: req.cookies });
  //debugger;

  NextResponse.next();
}
