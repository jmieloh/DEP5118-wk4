var config = {
    style: 'mapbox://styles/jam-lo/cmtprx634003b01si2ono5fz7',
    accessToken: 'pk.eyJ1IjoiamFtLWxvIiwiYSI6ImNtdDlpM3JhMjA0Y2oyeHBzaWJpN3FqNGgifQ.KBJOiHD0dqHNCrE1O8TQYQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,

    // ---- speed dials (milliseconds) ----
    flyDuration: 4000,      // how long the map takes to fly between chapters
    scrollDuration: 1300,   // how long a panel takes to glide across
    
    // what the map shows behind the intro panel
    introLocation: {
        center: [103.80350, 1.29650],
        zoom: 15.2,
        pitch: 45,
        bearing: 20
    },

    // ---- intro panel ----
    // NOTE: this title is still the food-desert question from the earlier draft,
    // while the chapters are about HDB renewal. Suggested replacement:
    // 'Which ageing estates get renewed first?'
    title: 'How can we study existing spatial intelligence when approaching neighbourhood renewal?',
    eyebrow: 'Singapore · Public Housing',
    description: [
        'About four in five Singaporeans live in an HDB flat, and roughly one in three flats is now thirty years or older. HDB renews these estates through upgrading programmes meant to follow the community\'s changing needs. This story asks what evidence of that change the programmes read  and what they miss. It descends from every HDB building in Singapore to one estate, Stirling in Queenstown, mapping the amenities the plan provides against the ones residents build for themselves. It proposes this second, self-made spatial intelligence be read as evidence: <b> a brief for co-designing renewal</b>.'
    ],
    byline: 'by Jamie Loh',
    bylineMeta: 'DEP5118: Community Data Gathering &amp; Visualization · 2026',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',

    chapters: [
        {
            // ---------------- TEXT CHAPTER ----------------
            // type: 'text' is the default — the two-column paragraph card.
            id: 'first-container',
            hidden: false,
            title: 'A Nation in Public Housing',
            navTitle: 'A Nation in Public Housing',

            // The <br><br> is the column break: text before it goes in the left
            // column, text after it in the right. Keep one per chapter for an even card.
            description: 'There are now more than one million HDB flats, home to about eighty per cent of resident households, and nine in ten own their homes. But the stock is ageing: roughly one in three flats is thirty years or older, the point at which a flat first becomes eligible for upgrading. This first map shows every HDB building in Singapore; the scale of the public housing project, and the size of the renewal task ahead.',

            // Legend is now a list of dots. color = any CSS colour, label = the text.
            legend: [
                { color: 'rgb(81, 73, 49)', label: 'HDB building' }
            ],

            location: {
                center: [103.79304, 1.321],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'hdbexistingbuilding', opacity: 1, duration: 1800 },
                { layer: 'HDB NRP Zones', opacity: 0, duration: 1800 },
                { layer: 'stirlingestate-image-annotations', opacity: 0, duration: 1800 },
                { layer: 'stirlingwalk-mw-trackpoints', opacity: 0, duration: 1800 },
                { layer: 'community gardens', opacity: 0, duration: 1800 },
                { layer: 'playgrounds in queenstown', opacity: 0, duration: 1800 },
                { layer: 'fitness corners in queenstown', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase1 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase1', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase2 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase2', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase3 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase3', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase4 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase4', opacity: 0, duration: 1800 }
            ],
            onChapterExit: []
        },
        {
            // ---------------- TEXT CHAPTER ----------------
            id: 'second-container',
            hidden: false,
            title: 'How Renewal Is Decided',
            navTitle: 'How Renewal Is Decided',
            description: 'Ageing estates are renewed through two main programmes. Launched in 2007 by HDB, Remaking Our Heartland (ROH) works at town scale  tailored to <i>"the changing needs of the community."</i> The mechanism to renew responsively already exists in Singapore,  this story asks only that it read one more source of evidence from the ground up. <br><br><b>Four ROH Phases:</b><br> [1] Punggol, Yishun, Dawson; [2] East Coast, Hougang, Jurong Lake;  [3] Toa Payoh, Woodlands, Pasir Ris; and now,  [4] Ang Mo Kio, Bukit Merah, Choa Chu Kang and Queenstown. The Neighbourhood Renewal Programme (NRP) works at precinct or block scale, and proceeds only with at least 75% of resident support.',
            legend: [
                // swap these hex values for the ones in your Mapbox style
                { color: 'rgb(182, 214, 158)', label: 'ROH Phase 1 (2007)' },
                { color: 'rgb(163, 212, 226)', label: 'ROH Phase 2 (2011)' },
                { color: 'rgb(215, 190, 216)', label: 'ROH Phase 3 (2015)' },
                { color: 'rgb(234, 184, 183)', label: 'ROH Phase 4 (2023)' },
                { color: 'rgb(217, 206, 88)', label: 'NRP Zone' }
            ],
            location: {
                center: [103.79304, 1.321],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'hdbexistingbuilding', opacity: 1, duration: 1800 },
                { layer: 'HDB NRP Zones', opacity: 1, duration: 2000 },
                { layer: 'stirlingestate-image-annotations', opacity: 0, duration: 1800 },
                { layer: 'stirlingwalk-mw-trackpoints', opacity: 0, duration: 1800 },
                { layer: 'community gardens', opacity: 0, duration: 1800 },
                { layer: 'playgrounds in queenstown', opacity: 0, duration: 1800 },
                { layer: 'fitness corners in queenstown', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase1 line', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase1', opacity: 0.3, duration: 1800 },
                { layer: 'hdbrohzone-phase2 line', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase2', opacity: 0.3, duration: 1800 },
                { layer: 'hdbrohzone-phase3 line', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase3', opacity: 0.3, duration: 1800 },
                { layer: 'hdbrohzone-phase4 line', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase4', opacity: 0.3, duration: 1800 }
            ],
            onChapterExit: []
        },
        {
            // ---------------- TEXT CHAPTER ----------------
            id: 'fourth-container',
            hidden: false,
            title: 'What the Instituition Provides',
            navTitle: 'What the Instituition Provides',
            description: 'Queenstown is one of the oldest towns, and a current ROH 4 site whose renewal is being planned now through public engagement. This map shows the social amenities the plan provides for shared life: community gardens, playgrounds, fitness corners, sports facilities. <br><br> They are drawn from a standard catalogue of provisions; the upgrading menu itself lists residents\' corners, covered linkways, playgrounds, fitness corners and pavilions. This is the official vocabulary of shared space: the kinds of amenity the process knows how to build, and the baseline this proposal wants to widen.',
            legend: [
                { color: 'rgb(177, 37, 65)', label: 'Social Amenities Provided by Instituition' },
                { color: 'rgb(234, 184, 183)', label: 'ROH Phase 4 (2023)' },
                { color: 'rgb(217, 206, 88)', label: 'NRP Zone' }
            ],
            location: {
                center: [103.797, 1.29],
                zoom: 14.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'hdbexistingbuilding', opacity: 1, duration: 1800 },
                { layer: 'HDB NRP Zones', opacity: 1, duration: 1800 },
                { layer: 'stirlingestate-image-annotations', opacity: 0, duration: 1800 },
                { layer: 'stirlingwalk-mw-trackpoints', opacity: 0, duration: 1800 },
                { layer: 'community gardens', opacity: 1, duration: 1800 },
                { layer: 'playgrounds in queenstown', opacity: 1, duration: 1800 },
                { layer: 'fitness corners in queenstown', opacity: 1, duration: 1800 },
                { layer: 'sportsg sport facilities', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase1 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase1', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase2 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase2', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase3 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase3', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase4 line', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase4', opacity: 0.3, duration: 1800 }
            ],
            onChapterExit: []
        },
        {
            // ---------------- IMAGE CHAPTER ----------------
            // type: 'img' swaps the two text columns for a row of images.
            // Keeps the chapter number and title exactly like a text chapter.
            id: 'third-container',
             hideFromNav: true,                    // ← the only new line
             type: 'img',              // ← add
            layout: 'strip',    
            hidden: false,
            title: 'What the Instituition Provides',
            navTitle: 'What the Instituition Provides',
             label: 'Chapter 03',
            subtitle: 'Click on the arrow for a closer look into amenities around Stirling Estate, Queenstown',

            // 1–3 images read best at this card size. Leave src: '' for a placeholder.
            images: [
                { src: 'assets/QTSports.png', caption: 'Queenstown Sports Complex, opened in 2026' },
                { src: 'assets/QThill.jpeg', caption: 'Hill & Ribbon Adventure Playground' },
                { src: 'assets/QT.QSS.jpeg', caption: 'Queensway Secondary School Community Gardening' },
                { src: 'assets/QTcycling.webp', caption: 'New cycling path, after upgrading' }
                
            ],

            legend: [],
            location: {
                center: [103.803, 1.29650],
                zoom: 15.2,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'hdbexistingbuilding', opacity: 1, duration: 1800 },
                { layer: 'HDB NRP Zones', opacity: 1, duration: 1800 },
                { layer: 'stirlingestate-image-annotations', opacity: 0, duration: 1800 },
                { layer: 'stirlingwalk-mw-trackpoints', opacity: 0, duration: 1800 },
                { layer: 'community gardens', opacity: 1, duration: 1800 },
                { layer: 'playgrounds in queenstown', opacity: 1, duration: 1800 },
                { layer: 'fitness corners in queenstown', opacity: 1, duration: 1800 },
                { layer: 'sportsg sport facilities', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase1 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase1', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase2 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase2', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase3 line', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase3', opacity: 0, duration: 1800 },
                { layer: 'hdbrohzone-phase4 line', opacity: 1, duration: 1800 },
                { layer: 'hdbrohzone-phase4', opacity: 0.3, duration: 1800 }
            ],
            onChapterExit: []
        },
        {
            // ---------------- IMAGE CHAPTER · layout 'strip' (option B) ----------------
            // Filmstrip inside a normal card. Every image keeps its caption at a
            // readable width; arrows, edge fades and a counter show it scrolls.
            // Good for a sequence where each picture says something specific.
            id: 'sixth-container',
            
            hidden: false,
            title: 'What the Residents Provide',
            navTitle: 'What the Residents Provide',
            label: 'Chapter 04',
            description: 'This map documents my walk through Stirling Estate, documenting its self-made spatial fabric at street level. The traced route follows the corridors, void decks, and common areas surveyed on foot; each point marks an instance of resident appropriation: an object made, placed, or adapted in shared space. Recorded as unobtrusive evidence of use rather than reported after the fact, these traces are presented here prior to interpretation: an inventory of what residents have already built into the estate.',
            images: [
                { src: '', caption: '01 · Void deck, block 52' },
                
            ],
            legend: [
                { color: 'rgb(22, 25, 224)', label: 'Social Amenities Provided by Residents' },
                { color: 'rgb(177, 37, 65)', label: 'Social Amenities Provided by Instituition' },
                { color: '#f79604', label: 'Walk route' }
            ],
            location: {
                center: [103.8035, 1.2965],
                zoom: 17.5,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'stirlingwalk-mw-trackpoints', opacity: 1, duration: 1800 },
                { layer: 'stirlingestate-image-annotations', opacity: 1, duration: 1800 },
                { layer: 'hdbexistingbuilding', opacity: 1, duration: 1800 }
            ],
            onChapterExit: []
        },
        {
            // ---------------- IMAGE CHAPTER · layout 'sheet' (option C) ----------------
            // Full-page grid straight on the map — no panel, no background. The rail
            // (number, title, setCaption, legend) sits at the bottom at the same
            // height as every other chapter card and does not move while the sheet scrolls.
            // `columns` sets the grid width; 3 columns × 9 images = 3×3.
            id: 'seventh-container',
            hideFromNav: true,                    // ← the only new line
            type: 'img',
            label: 'Chapter 04',
            layout: 'sheet',
            columns: 3,
            hidden: false,
            title: 'What Residents Provide: <br> A Second Vocabulary',
            navTitle: 'Nine stops',
            setCaption: 'These tactical urbanisms form a second vocabulary of shared space. A guerrilla sunflower garden, potted plants assembled into a plot, a corner adapted for gathering: amenity types the official catalogue has no name for, each placed with a precision no standard supplied. Set beside the provided amenities of Chapter 3, they show a spatial intelligence the plan does not yet read. <br> <br>The proposal is specific:  these self-made amenities can be read as a brief, evidence for what the next ROH or NRP round should provide, in its creative specificity and where. This spatial intelligence treats residents as readers of space, bringing new flourshing environments.',
            images: [
                { src: 'assets/IMG_4263.JPG', caption: '01 · Sunflower Guerrilla Garden' },
                { src: 'assets/IMG_4266.JPG', caption: '02 · Swing Nook' },
                { src: 'assets/IMG_4270.JPG', caption: '03 · Stump Table Set' },
                { src: 'assets/IMG_4303.JPG', caption: '04 · Tropical Nook' },
                { src: 'assets/IMG_4320.JPG', caption: '05 · Outdoor Seating' },
                { src: 'assets/IMG_4273.JPG', caption: '06 · Void Deck Book Exchange' },
                { src: 'assets/IMG_4279.JPG', caption: '07 · Outdoor Kitchen' },
                { src: 'assets/IMG_4292.JPG', caption: '08 · Stumps Seating' },
                { src: 'assets/IMG_4294.JPG', caption: '09 · Verge Storage and Garden' }
            ],
            legend: [
                { color: 'rgb(22, 25, 224)', label: 'Social Amenities Provided by Residents' },
                { color: 'rgb(177, 37, 65)', label: 'Social Amenities Provided by Instituition' },
                { color: '#f79604', label: 'Walk route' }
            ],
            location: {
                center: [103.80350, 1.29650],
                zoom: 15.2,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: 'easeTo',   // the card covers the map here, so don't waste a flight
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
