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

    // ---- intro panel ----
    // NOTE: this title is still the food-desert question from the earlier draft,
    // while the chapters are about HDB renewal. Suggested replacement:
    // 'Which ageing estates get renewed first?'
    title: 'Where are the food deserts in Singapore?',
    subtitle: 'Access to supermarkets and hawker centers from HDBs',
    eyebrow: 'Singapore · Public Housing',
    description: [
        'More than eight in ten Singaporeans live in a flat built and managed by the Housing &amp; Development Board — around 1.15 million dwelling units in all. Over a third of that stock is now ageing.',
        'Renewal already runs through two programmes, one at town scale and one at block scale, and both are meant to follow resident need. This story maps where they apply, and asks what one more source of evidence would change.'
    ],
    byline: 'Jamie Loh',
    bylineMeta: 'DEP5118 · Community Data Gathering &amp; Visualization · 2026',
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
            description: 'More than eight in ten Singaporeans live in a flat built and managed by the Housing & Development Board, this is around 1.15 million dwelling units in all. Over a third of that stock is now ageing.<br><br>This first map shows every HDB building in Singapore, the scale of the public housing project and the size of the renewal task ahead. It is the ground the rest of this story stands on. <a href="https://www.straitstimes.com/singapore/10-of-singaporeans-struggle-to-get-sufficient-safe-and-nutritious-food-smu-study"><strong>Read more</strong></a>',

            // Legend is now a list of dots. color = any CSS colour, label = the text.
            legend: [
                { color: '#B4472A', label: 'HDB building' }
            ],

            location: {
                center: [103.79304, 1.35969],
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
            description: 'Ageing estates are renewed through two main programmes: <b>Remaking Our Heartland (ROH)</b> works at town scale, a masterplan for a whole area, rolled out in phases. The <b>Neighbourhood Renewal Programme (NRP)</b> works at precinct or block scale. Both are meant to follow resident need.<br><br>This map shows where they apply: HDB buildings under the coloured boundaries of each programme. The mechanism to renew responsively already exists — this story asks only that it read one more source of evidence.',
            legend: [
                // swap these hex values for the ones in your Mapbox style
                { color: '#7C5FA8', label: 'ROH phase 1' },
                { color: '#5E7CB8', label: 'ROH phase 2' },
                { color: '#3F8E8E', label: 'ROH phase 3' },
                { color: '#C08A3E', label: 'ROH phase 4' },
                { color: '#3F7D6E', label: 'NRP zone' }
            ],
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
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
            // ---------------- IMAGE CHAPTER ----------------
            // type: 'img' swaps the two text columns for a row of images.
            // Keeps the chapter number and title exactly like a text chapter.
            id: 'third-container',
            type: 'img',
            hidden: false,
            title: 'How Renewal Is Decided',
            navTitle: 'Chapter three',

            // 1–3 images read best at this card size. Leave src: '' for a placeholder.
            images: [
                { src: '', caption: 'Stirling estate, before works' },
                { src: '', caption: 'Same block, after NRP upgrading' }
            ],

            legend: [],
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
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
            title: 'How Renewal Is Decided',
            navTitle: 'Chapter four',
            description: 'Ageing estates are renewed through two main programmes: <b>Remaking Our Heartland (ROH)</b> works at town scale, a masterplan for a whole area, rolled out in phases. The <b>Neighbourhood Renewal Programme (NRP)</b> works at precinct or block scale. Both are meant to follow resident need.<br><br>This map shows where they apply: HDB buildings under the coloured boundaries of each programme. The mechanism to renew responsively already exists — this story asks only that it read one more source of evidence.',
            legend: [
                { color: '#7C5FA8', label: 'ROH phase 1–4' },
                { color: '#3F7D6E', label: 'NRP zone' }
            ],
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
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
            // ---------------- TEXT CHAPTER (currently hidden) ----------------
            id: 'fifth-container',
            hidden: true,          // set to false to bring this chapter into the story
            title: 'Punggol / Senkang',
            navTitle: 'Punggol / Senkang',
            description: 'Our mapping excercise informs us that Punggol / Senkang is one of the most vulnerable areas regarding walkshed coverage to fresh food options.<br><br>Geographical mapping of areas where vulnerable households reside can aid in identifying food-insecure neighbourhoods and informing food aid organisations.',
            legend: [
                { color: '#9C3B22', label: 'Underserved blocks' }
            ],
            location: {
                center: [103.90280, 1.39981],
                zoom: 14.4,
                pitch: 45,
                bearing: 0
            },
            flyDuration: 6000,     // travels further — give it longer
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
