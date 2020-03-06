import React from 'react';

class NumberService{

    _apiBase = 'http://numbersapi.com/';
    async getNumberInfo(number){
        const res = await fetch(`${this._apiBase}${number}`)
        if (!res.ok){
            throw new Error(`azazaza it is my first ERROR`)
        }
        return await res.json();
    }

}