import React from "react";

export interface ICity{
    weather:[
        {
            description: string,
            icon: string
        }
    ],
    main:{
        temp:number,
        feels_like:number,
        pressure: number,
        humidity: number
    },
    wind:{
        speed:number
    }
}