// ============================================
// ZENITH COFFEE - WEBSITE CONFIGURATION
// ============================================
// Edit this file to customize your website!
// Simply change the text and image paths below.
// ============================================

const SITE_CONFIG = {

    // ===== COMPANY INFO =====
    companyName: "Zenith Coffee",
    tagline: "Premium koffie voor echte liefhebbers",
    foundedYear: "2020",

    // ===== CONTACT INFO =====
    contact: {
        address: "bakerstreet 33, aalst",
        phone: "+32 12 345 6789",
        email: "contact@zenithcoffee.be",
        hours: "Ma-Vr: 08:00 - 18:00"
    },

    // ===== SOCIAL MEDIA =====
    socialMedia: {
        facebook: "www.facebook.com",
        instagram: "www.instagram.com",
        twitter: "www.twitter.com",
        linkedin: "www.linkedin.com"
    },

    // ===== LOGO & IMAGES =====
    images: {
        logo: "assets/images/logo-4.png",
        heroLogo: "assets/images/logo-2.png"
    },

    // ===== HOMEPAGE =====
    homepage: {
        heroTitle: "Welkom bij Zenith Coffee",
        heroSubtitle: "Ontdek de perfecte koffiebeleving met onze premium selectie",
        featuredProductsTitle: "Onze Featured Producten",
        featuredProductsSubtitle: "Handgeselecteerde premium koffiebonen van over de hele wereld",
        ctaTitle: "Klaar om de perfecte koffie te ontdekken?",
        ctaSubtitle: "Bezoek onze winkel of bestel online voor thuisbezorging"
    },

    // ===== PRODUCTS =====
    products: [
        {
            name: "Espresso Deluxe",
            description: "Rijke en volle body met tonen van donkere chocolade en karamel",
            price: "12,99",
            image: "assets/images/Zenith-koffie-2.PNG",
            categories: ["espresso", "dark"]
        },
        {
            name: "Smooth Arabica",
            description: "Zachte smaak met hints van karamel en noten",
            price: "14,99",
            image: "assets/images/Zenith-koffie-4.PNG",
            categories: ["arabica", "light"]
        },
        {
            name: "Dark Roast Blend",
            description: "Krachtige smaak met een intense aftertaste",
            price: "13,99",
            image: "☕", // Use emoji if no image
            categories: ["dark"]
        },
        {
            name: "Morning Sunrise",
            description: "Lichte branding voor een frisse start van de dag",
            price: "11,99",
            image: "☕",
            categories: ["light", "arabica"]
        },
        {
            name: "Caramel Delight",
            description: "Zoete noten met een vleugje vanille",
            price: "15,99",
            image: "☕",
            categories: ["arabica", "light"]
        },
        {
            name: "Bold Colombian",
            description: "Authentieke Colombiaanse koffie met karakter",
            price: "16,99",
            image: "☕",
            categories: ["arabica", "dark"]
        },
        {
            name: "Italian Roast",
            description: "Traditionele Italiaanse espresso met diepe smaak",
            price: "14,99",
            image: "☕",
            categories: ["espresso", "dark"]
        },
        {
            name: "Brazilian Santos",
            description: "Zachte Braziliaanse koffie met lage zuurgraad",
            price: "13,49",
            image: "☕",
            categories: ["arabica", "light"]
        },
        {
            name: "Ethiopian Yirgacheffe",
            description: "Fruitige tonen met bloemige ondertonen",
            price: "17,99",
            image: "☕",
            categories: ["arabica", "light"]
        },
        {
            name: "French Roast",
            description: "Zeer donkere branding met rokerige tonen",
            price: "14,49",
            image: "☕",
            categories: ["dark"]
        },
        {
            name: "Costa Rican Tarrazu",
            description: "Uitgebalanceerde smaak met citrus hints",
            price: "15,49",
            image: "☕",
            categories: ["arabica", "light"]
        },
        {
            name: "Kenya AA",
            description: "Complex met wijn-achtige body en bessen tonen",
            price: "18,99",
            image: "☕",
            categories: ["arabica", "light"]
        }
    ],

    // ===== ABOUT US PAGE =====
    aboutUs: {
        pageTitle: "Ons Verhaal",
        pageSubtitle: "Van passie voor koffie tot premium kwaliteit in elke kop",

        story: {
            title: "Het Begin van Zenith Coffee",
            paragraphs: [
                "In 2020 begon Zenith Coffee als een droom van koffieliefhebbers die geloofden dat elke kop koffie een bijzondere ervaring moet zijn. Wat startte in een klein café in Aalst, groeide uit tot een gepassioneerde zoektocht naar de beste koffiebonen ter wereld.",
                "Onze oprichters, Anna en Thomas, reisden door Latijns-Amerika, Afrika en Azië om rechtstreeks contact te leggen met koffieboeren. Ze leerden over traditionele oogstmethoden, duurzame teelt en de kunst van perfecte branding.",
                "Vandaag werken we samen met kleine coöperaties die dezelfde passie en toewijding delen. Elke boon die we selecteren, elke blend die we creëren, vertelt een verhaal van vakmanschap en zorg."
            ]
        },

        values: [
            {
                icon: "eco",
                title: "Duurzaamheid",
                description: "We werken exclusief met biologische en fair trade gecertificeerde koffieboeren die respect hebben voor mens en natuur."
            },
            {
                icon: "verified",
                title: "Kwaliteit",
                description: "Elke batch wordt met de hand geselecteerd en geproefd. Alleen de beste bonen bereiken onze klanten."
            },
            {
                icon: "favorite",
                title: "Passie",
                description: "Koffie is voor ons meer dan een product - het is een kunst, een cultuur en een dagelijkse bron van vreugde."
            }
        ],

        team: [
            {
                name: "Anna van Berg",
                role: "Medeoprichter & CEO",
                description: "Expert in koffieteelt en directe handel",
                emoji: "👩‍💼"
            },
            {
                name: "Thomas De Vries",
                role: "Medeoprichter & Master Roaster",
                description: "15 jaar ervaring in koffiebranding",
                emoji: "👨‍💼"
            },
            {
                name: "Lucas Vermeer",
                role: "Head of Quality Control",
                description: "Gecertificeerd Q-Grader",
                emoji: "👨‍🔬"
            },
            {
                name: "Sophie Janssen",
                role: "Head Barista",
                description: "Meervoudig Belgisch kampioen latte art",
                emoji: "👩‍🍳"
            }
        ],

        process: [
            {
                title: "Selectie",
                description: "We bezoeken koffieplantages wereldwijd en selecteren alleen de beste bonen uit biologische teelt."
            },
            {
                title: "Import",
                description: "Directe handel met boeren garandeert eerlijke prijzen en vers transport binnen 2 weken na oogst."
            },
            {
                title: "Branding",
                description: "Onze master roaster brand in kleine batches met precisie en aandacht voor elk profiel."
            },
            {
                title: "Kwaliteitscontrole",
                description: "Elke batch wordt geproefd en beoordeeld volgens internationale cupping standards."
            },
            {
                title: "Verpakking & Levering",
                description: "We verpakken met zorg en leveren snel, zodat u altijd verse koffie ontvangt."
            }
        ]
    },

    // ===== CAREERS PAGE =====
    careers: {
        pageTitle: "Word Deel van Ons Team",
        pageSubtitle: "We zoeken gepassioneerde mensen die net als wij geloven in de kracht van goede koffie",

        jobs: [
            {
                title: "Barista",
                type: "Voltijds",
                location: "Aalst",
                isNew: true,
                description: "We zoeken een enthousiaste barista met passie voor koffie en klantcontact. Ervaring met espressomachines is een plus.",
                requirements: [
                    "Ervaring met koffiebereiding",
                    "Klantgericht en communicatief",
                    "Flexibel inzetbaar"
                ]
            },
            {
                title: "Coffee Roaster",
                type: "Voltijds",
                location: "Aalst",
                isNew: false,
                description: "Ervaren roaster gezocht voor ons team. Kennis van verschillende brandprofielen en kwaliteitscontrole is essentieel.",
                requirements: [
                    "Minimaal 2 jaar ervaring met koffiebranding",
                    "Kennis van verschillende brandingstechnieken",
                    "Oog voor detail en kwaliteit"
                ]
            },
            {
                title: "Shop Manager",
                type: "Voltijds",
                location: "Aalst",
                isNew: false,
                description: "Leidinggevende rol in onze koffiebar. Je bent verantwoordelijk voor het team, planning en operationele zaken.",
                requirements: [
                    "Leidinggevende ervaring in horeca",
                    "Sterke organisatorische vaardigheden",
                    "Passie voor koffie en klantbeleving"
                ]
            },
            {
                title: "Marketing Specialist",
                type: "Voltijds",
                location: "Aalst",
                isNew: true,
                description: "Creatieve marketeer om ons merk verder uit te bouwen. Social media, content creatie en campagnes behoren tot je takenpakket.",
                requirements: [
                    "Ervaring met social media marketing",
                    "Creatief en sterk in contentcreatie",
                    "Kennis van digitale marketing tools"
                ]
            }
        ],

        benefits: [
            {
                icon: "payments",
                title: "Competitief Salaris",
                description: "Eerlijke verloning met ruimte voor groei en ontwikkeling"
            },
            {
                icon: "school",
                title: "Opleidingen",
                description: "Barista trainingen en professionele ontwikkeling"
            },
            {
                icon: "groups",
                title: "Leuk Team",
                description: "Werk samen met gepassioneerde koffieliefhebbers"
            },
            {
                icon: "coffee",
                title: "Gratis Koffie",
                description: "Onbeperkt toegang tot onze premium koffie"
            }
        ]
    }

};

// Export for use in HTML pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
