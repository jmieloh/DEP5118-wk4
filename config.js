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
    title: 'Where are the food deserts in Singapore?',
    subtitle: 'Access to supermarkets and hawker centers from HDBs',
    byline: 'By Chaewon Ahn',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Food deserts in Singapore',
            description: 'An SMU study published in 2020 reveals that 10.4% of Singaporeans struggle to get sufficient, safe and nutritious food. <a href="https://www.straitstimes.com/singapore/10-of-singaporeans-struggle-to-get-sufficient-safe-and-nutritious-food-smu-study"> <strong>Read more</strong></a> <br><br> In this visualization, we are interested in understanding where this phenomenon is happening geographically. This first map shows the location of supermarkets and hawker centers.<br><br><img src="assets/legend1.png" style="height:100%;width:100px;"></img>',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Access from HDB',
            description: 'When computing a 500 meter walkshed from each food places (supermarkets and hawker centers), we can start to understand where access to healthy food from HDBs remain limited.<br><br><img src="assets/legend2.png" style="height:100%; width:250px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
           id: 'third-container',
            alignment: 'right',
            hidden: true,
            title: 'Punggol / Senkang',
            description: 'Our mapping excercise informs us that Punggol / Senkang is one of the most vulnerable areas regarding walkshed coverage to fresh food options.<br><br> Geographical mapping of areas where vulnerable households reside can aid in identifying food-insecure neighbourhoods and informing food aid organisations.<br><br><img src="assets/legend3.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.90280, 1.39981],
                zoom: 14.4,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
