import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req:any){
    try {
        const {query} = await req.json();
     
        const res = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${query}&days=6&aqi=no&alerts=no`
          );
          const data = res?.data;
          return NextResponse.json({
            success:true,
            data:data
          })
    } catch (error:any) {
        return NextResponse.json({
            success:false,
            message:error.message
        })
    }
}