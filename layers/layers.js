var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AnalizailociowaVMapiSentinel_1 = new ol.format.GeoJSON();
var features_AnalizailociowaVMapiSentinel_1 = format_AnalizailociowaVMapiSentinel_1.readFeatures(json_AnalizailociowaVMapiSentinel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalizailociowaVMapiSentinel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalizailociowaVMapiSentinel_1.addFeatures(features_AnalizailociowaVMapiSentinel_1);
var lyr_AnalizailociowaVMapiSentinel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalizailociowaVMapiSentinel_1, 
                style: style_AnalizailociowaVMapiSentinel_1,
                popuplayertitle: 'Analiza ilościowa - VMap i Sentinel',
                interactive: true,
    title: 'Analiza ilościowa - VMap i Sentinel<br />\
    <img src="styles/legend/AnalizailociowaVMapiSentinel_1_0.png" /> -93 - -23<br />\
    <img src="styles/legend/AnalizailociowaVMapiSentinel_1_1.png" /> -23 - 0<br />\
    <img src="styles/legend/AnalizailociowaVMapiSentinel_1_2.png" /> 0 - 7<br />\
    <img src="styles/legend/AnalizailociowaVMapiSentinel_1_3.png" /> 7 - 30<br />\
    <img src="styles/legend/AnalizailociowaVMapiSentinel_1_4.png" /> 30 - 100<br />' });
var format_AnalizailociowaWIGiVMap_2 = new ol.format.GeoJSON();
var features_AnalizailociowaWIGiVMap_2 = format_AnalizailociowaWIGiVMap_2.readFeatures(json_AnalizailociowaWIGiVMap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalizailociowaWIGiVMap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalizailociowaWIGiVMap_2.addFeatures(features_AnalizailociowaWIGiVMap_2);
var lyr_AnalizailociowaWIGiVMap_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalizailociowaWIGiVMap_2, 
                style: style_AnalizailociowaWIGiVMap_2,
                popuplayertitle: 'Analiza ilościowa - WIG i VMap',
                interactive: true,
    title: 'Analiza ilościowa - WIG i VMap<br />\
    <img src="styles/legend/AnalizailociowaWIGiVMap_2_0.png" /> -93 - -23<br />\
    <img src="styles/legend/AnalizailociowaWIGiVMap_2_1.png" /> -23 - 0<br />\
    <img src="styles/legend/AnalizailociowaWIGiVMap_2_2.png" /> 0 - 7<br />\
    <img src="styles/legend/AnalizailociowaWIGiVMap_2_3.png" /> 7 - 30<br />\
    <img src="styles/legend/AnalizailociowaWIGiVMap_2_4.png" /> 30 - 100<br />' });
var format_Zasiggdzierzekapynazawsze_3 = new ol.format.GeoJSON();
var features_Zasiggdzierzekapynazawsze_3 = format_Zasiggdzierzekapynazawsze_3.readFeatures(json_Zasiggdzierzekapynazawsze_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zasiggdzierzekapynazawsze_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zasiggdzierzekapynazawsze_3.addFeatures(features_Zasiggdzierzekapynazawsze_3);
var lyr_Zasiggdzierzekapynazawsze_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zasiggdzierzekapynazawsze_3, 
                style: style_Zasiggdzierzekapynazawsze_3,
                popuplayertitle: 'Zasięg, gdzie rzeka płynęła zawsze',
                interactive: false,
                title: '<img src="styles/legend/Zasiggdzierzekapynazawsze_3.png" /> Zasięg, gdzie rzeka płynęła zawsze'
            });
var format_Zasiggdzierzekapynakiedykolwiek_4 = new ol.format.GeoJSON();
var features_Zasiggdzierzekapynakiedykolwiek_4 = format_Zasiggdzierzekapynakiedykolwiek_4.readFeatures(json_Zasiggdzierzekapynakiedykolwiek_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zasiggdzierzekapynakiedykolwiek_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zasiggdzierzekapynakiedykolwiek_4.addFeatures(features_Zasiggdzierzekapynakiedykolwiek_4);
var lyr_Zasiggdzierzekapynakiedykolwiek_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zasiggdzierzekapynakiedykolwiek_4, 
                style: style_Zasiggdzierzekapynakiedykolwiek_4,
                popuplayertitle: 'Zasięg, gdzie rzeka płynęła kiedykolwiek',
                interactive: false,
                title: '<img src="styles/legend/Zasiggdzierzekapynakiedykolwiek_4.png" /> Zasięg, gdzie rzeka płynęła kiedykolwiek'
            });
var format_RzekazmapyarchiwalnejWIG_5 = new ol.format.GeoJSON();
var features_RzekazmapyarchiwalnejWIG_5 = format_RzekazmapyarchiwalnejWIG_5.readFeatures(json_RzekazmapyarchiwalnejWIG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RzekazmapyarchiwalnejWIG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RzekazmapyarchiwalnejWIG_5.addFeatures(features_RzekazmapyarchiwalnejWIG_5);
var lyr_RzekazmapyarchiwalnejWIG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RzekazmapyarchiwalnejWIG_5, 
                style: style_RzekazmapyarchiwalnejWIG_5,
                popuplayertitle: 'Rzeka z mapy archiwalnej WIG',
                interactive: false,
                title: '<img src="styles/legend/RzekazmapyarchiwalnejWIG_5.png" /> Rzeka z mapy archiwalnej WIG'
            });
var format_RzekazbazyVMap_6 = new ol.format.GeoJSON();
var features_RzekazbazyVMap_6 = format_RzekazbazyVMap_6.readFeatures(json_RzekazbazyVMap_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RzekazbazyVMap_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RzekazbazyVMap_6.addFeatures(features_RzekazbazyVMap_6);
var lyr_RzekazbazyVMap_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RzekazbazyVMap_6, 
                style: style_RzekazbazyVMap_6,
                popuplayertitle: 'Rzeka z bazy VMap',
                interactive: false,
                title: '<img src="styles/legend/RzekazbazyVMap_6.png" /> Rzeka z bazy VMap'
            });
var format_RzekazezdjciasatelitarnegoSentinel_7 = new ol.format.GeoJSON();
var features_RzekazezdjciasatelitarnegoSentinel_7 = format_RzekazezdjciasatelitarnegoSentinel_7.readFeatures(json_RzekazezdjciasatelitarnegoSentinel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RzekazezdjciasatelitarnegoSentinel_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RzekazezdjciasatelitarnegoSentinel_7.addFeatures(features_RzekazezdjciasatelitarnegoSentinel_7);
var lyr_RzekazezdjciasatelitarnegoSentinel_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RzekazezdjciasatelitarnegoSentinel_7, 
                style: style_RzekazezdjciasatelitarnegoSentinel_7,
                popuplayertitle: 'Rzeka ze zdjęcia satelitarnego Sentinel',
                interactive: false,
                title: '<img src="styles/legend/RzekazezdjciasatelitarnegoSentinel_7.png" /> Rzeka ze zdjęcia satelitarnego Sentinel'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AnalizailociowaVMapiSentinel_1.setVisible(true);lyr_AnalizailociowaWIGiVMap_2.setVisible(true);lyr_Zasiggdzierzekapynazawsze_3.setVisible(true);lyr_Zasiggdzierzekapynakiedykolwiek_4.setVisible(true);lyr_RzekazmapyarchiwalnejWIG_5.setVisible(true);lyr_RzekazbazyVMap_6.setVisible(true);lyr_RzekazezdjciasatelitarnegoSentinel_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AnalizailociowaVMapiSentinel_1,lyr_AnalizailociowaWIGiVMap_2,lyr_Zasiggdzierzekapynazawsze_3,lyr_Zasiggdzierzekapynakiedykolwiek_4,lyr_RzekazmapyarchiwalnejWIG_5,lyr_RzekazbazyVMap_6,lyr_RzekazezdjciasatelitarnegoSentinel_7];
lyr_AnalizailociowaVMapiSentinel_1.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SENTINEL_V': 'PROCENT POKRYCIA', 'VMAP_WIG1': 'VMAP_WIG1', });
lyr_AnalizailociowaWIGiVMap_2.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SENTINEL_V': 'SENTINEL_V', 'VMAP_WIG1': 'PROCENT POKRYCIA', });
lyr_Zasiggdzierzekapynazawsze_3.set('fieldAliases', {'FID_Raster': 'FID_Raster', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_VMAP_M': 'FID_VMAP_M', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_rzeka_': 'FID_rzeka_', 'Id_12': 'Id_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zasiggdzierzekapynakiedykolwiek_4.set('fieldAliases', {'FID_Raster': 'FID_Raster', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_rzeka_': 'FID_rzeka_', 'Id_1': 'Id_1', 'FID_VMAP_M': 'FID_VMAP_M', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RzekazmapyarchiwalnejWIG_5.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RzekazbazyVMap_6.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RzekazezdjciasatelitarnegoSentinel_7.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AnalizailociowaVMapiSentinel_1.set('fieldImages', {'Id': 'TextEdit', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SENTINEL_V': 'TextEdit', 'VMAP_WIG1': 'TextEdit', });
lyr_AnalizailociowaWIGiVMap_2.set('fieldImages', {'Id': 'TextEdit', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SENTINEL_V': 'TextEdit', 'VMAP_WIG1': 'TextEdit', });
lyr_Zasiggdzierzekapynazawsze_3.set('fieldImages', {'FID_Raster': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'FID_VMAP_M': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_rzeka_': 'TextEdit', 'Id_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zasiggdzierzekapynakiedykolwiek_4.set('fieldImages', {'FID_Raster': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'FID_rzeka_': 'TextEdit', 'Id_1': 'TextEdit', 'FID_VMAP_M': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RzekazmapyarchiwalnejWIG_5.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RzekazbazyVMap_6.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RzekazezdjciasatelitarnegoSentinel_7.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AnalizailociowaVMapiSentinel_1.set('fieldLabels', {'Id': 'hidden field', 'GRID_ID': 'hidden field', 'PERCENTAGE': 'hidden field', 'PERCENTA_1': 'hidden field', 'PERCENTA_2': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'SENTINEL_V': 'inline label - visible with data', 'VMAP_WIG1': 'hidden field', });
lyr_AnalizailociowaWIGiVMap_2.set('fieldLabels', {'Id': 'hidden field', 'GRID_ID': 'hidden field', 'PERCENTAGE': 'hidden field', 'PERCENTA_1': 'hidden field', 'PERCENTA_2': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'SENTINEL_V': 'hidden field', 'VMAP_WIG1': 'inline label - visible with data', });
lyr_Zasiggdzierzekapynazawsze_3.set('fieldLabels', {'FID_Raster': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'FID_VMAP_M': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_rzeka_': 'no label', 'Id_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zasiggdzierzekapynakiedykolwiek_4.set('fieldLabels', {'FID_Raster': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'FID_rzeka_': 'no label', 'Id_1': 'no label', 'FID_VMAP_M': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RzekazmapyarchiwalnejWIG_5.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RzekazbazyVMap_6.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RzekazezdjciasatelitarnegoSentinel_7.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RzekazezdjciasatelitarnegoSentinel_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});