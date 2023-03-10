import React from 'react';
import { render, screen } from '@testing-library/react'
import CountryList from '../CountryList';
import '@testing-library/jest-dom'

const mockData = [
    {
        "name": "Afghanistan",
        "topLevelDomain": [
            ".af"
        ],
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "callingCodes": [
            "93"
        ],
        "capital": "Kabul",
        "altSpellings": [
            "AF",
            "Afġānistān"
        ],
        "subregion": "Southern Asia",
        "region": "Asia",
        "population": 40218234,
        "latlng": [
            33,
            65
        ],
        "demonym": "Afghan",
        "area": 652230,
        "timezones": [
            "UTC+04:30"
        ],
        "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ],
        "nativeName": "افغانستان",
        "numericCode": "004",
        "flags": {
            "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        },
        "currencies": [
            {
                "code": "AFN",
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        ],
        "languages": [
            {
                "iso639_1": "ps",
                "iso639_2": "pus",
                "name": "Pashto",
                "nativeName": "پښتو"
            },
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "Oʻzbek"
            },
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "Türkmen"
            }
        ],
        "translations": {
            "br": "Afghanistan",
            "pt": "Afeganistão",
            "nl": "Afghanistan",
            "hr": "Afganistan",
            "fa": "افغانستان",
            "de": "Afghanistan",
            "es": "Afganistán",
            "fr": "Afghanistan",
            "ja": "アフガニスタン",
            "it": "Afghanistan",
            "hu": "Afganisztán"
        },
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "AFG",
        "independent": true
    },
    {
        "name": "Åland Islands",
        "topLevelDomain": [
            ".ax"
        ],
        "alpha2Code": "AX",
        "alpha3Code": "ALA",
        "callingCodes": [
            "358"
        ],
        "capital": "Mariehamn",
        "altSpellings": [
            "AX",
            "Aaland",
            "Aland",
            "Ahvenanmaa"
        ],
        "subregion": "Northern Europe",
        "region": "Europe",
        "population": 28875,
        "latlng": [
            60.116667,
            19.9
        ],
        "demonym": "Ålandish",
        "area": 1580,
        "timezones": [
            "UTC+02:00"
        ],
        "nativeName": "Åland",
        "numericCode": "248",
        "flags": {
            "svg": "https://flagcdn.com/ax.svg",
            "png": "https://flagcdn.com/w320/ax.png"
        },
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "languages": [
            {
                "iso639_1": "sv",
                "iso639_2": "swe",
                "name": "Swedish",
                "nativeName": "svenska"
            }
        ],
        "translations": {
            "br": "Åland",
            "pt": "Ilhas de Aland",
            "nl": "Ålandeilanden",
            "hr": "Ålandski otoci",
            "fa": "جزایر الند",
            "de": "Åland",
            "es": "Alandia",
            "fr": "Åland",
            "ja": "オーランド諸島",
            "it": "Isole Aland",
            "hu": "Åland-szigetek"
        },
        "flag": "https://flagcdn.com/ax.svg",
        "regionalBlocs": [
            {
                "acronym": "EU",
                "name": "European Union"
            }
        ],
        "independent": false
    }]


test('render CountryList witout crashing', async () => {
    render(
        <CountryList />
    )
    expect(screen.getByRole('columnheader', { name: /country name/i })).toBeTruthy()
    expect(screen.getByText(/please select country to view the details\.\.\.\.\.\./i)).toBeTruthy()
})