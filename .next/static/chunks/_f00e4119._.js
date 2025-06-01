(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/SlopeChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const formatGDP = (value)=>{
    if (value >= 1e12) return (value / 1e12).toFixed(1) + "T";
    if (value >= 1e9) return (value / 1e9).toFixed(1) + "B";
    if (value >= 1e6) return (value / 1e6).toFixed(1) + "M";
    if (value >= 1e3) return (value / 1e3).toFixed(1) + "K";
    return value.toString();
};
const SlopeChart = ({ data })=>{
    // Process data to get GDP for 2000 and 2023 per country
    const countryGDPs = [];
    const countryMap = new Map();
    data.forEach(({ country, year, gdp })=>{
        if (!countryMap.has(country)) {
            countryMap.set(country, {});
        }
        const entry = countryMap.get(country);
        if (year === 2000) {
            entry.gdp2000 = gdp;
        } else if (year === 2023) {
            entry.gdp2023 = gdp;
        }
    });
    countryMap.forEach((value, key)=>{
        if (value.gdp2000 !== undefined && value.gdp2023 !== undefined) {
            countryGDPs.push({
                country: key,
                gdp2000: value.gdp2000,
                gdp2023: value.gdp2023
            });
        }
    });
    // Sort countries by GDP 2023 descending
    countryGDPs.sort((a, b)=>b.gdp2023 - a.gdp2023);
    // Calculate chart dimensions and scales
    const width = 800;
    const height = 500;
    const margin = {
        top: 40,
        right: 40,
        bottom: 60,
        left: 60
    };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    // Get max GDP for scaling
    const maxGDP = Math.max(...countryGDPs.map((d)=>Math.max(d.gdp2000, d.gdp2023)));
    // Create scales
    const xScale = (value)=>{
        if (value === 2000) return margin.left;
        if (value === 2023) return margin.left + innerWidth;
        return 0;
    };
    const yScale = (gdp)=>{
        return margin.top + innerHeight - gdp / maxGDP * innerHeight;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto p-4 font-sans text-gray-900 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-6 text-center",
                children: "GDP Comparison 2000 vs 2023"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SlopeChart.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: width,
                height: height,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: margin.left,
                        y1: margin.top + innerHeight,
                        x2: margin.left + innerWidth,
                        y2: margin.top + innerHeight,
                        stroke: "#000",
                        strokeWidth: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SlopeChart.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: margin.left,
                        y: margin.top + innerHeight + 20,
                        textAnchor: "middle",
                        children: "2000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SlopeChart.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: margin.left + innerWidth,
                        y: margin.top + innerHeight + 20,
                        textAnchor: "middle",
                        children: "2023"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SlopeChart.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: margin.left,
                        y1: margin.top,
                        x2: margin.left,
                        y2: margin.top + innerHeight,
                        stroke: "#000",
                        strokeWidth: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SlopeChart.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: margin.left - 10,
                        y: margin.top + 10,
                        textAnchor: "end",
                        children: [
                            "$",
                            formatGDP(maxGDP)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/SlopeChart.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: margin.left - 10,
                        y: margin.top + innerHeight - 10,
                        textAnchor: "end",
                        children: "$0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SlopeChart.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    countryGDPs.map(({ country, gdp2000, gdp2023 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: xScale(2000),
                                    y1: yScale(gdp2000),
                                    x2: xScale(2023),
                                    y2: yScale(gdp2023),
                                    stroke: "#3b82f6",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SlopeChart.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: xScale(2000),
                                    cy: yScale(gdp2000),
                                    r: 5,
                                    fill: "#3b82f6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SlopeChart.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: xScale(2023),
                                    cy: yScale(gdp2023),
                                    r: 5,
                                    fill: "#3b82f6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SlopeChart.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: xScale(2000) - 10,
                                    y: yScale(gdp2000),
                                    textAnchor: "end",
                                    alignmentBaseline: "middle",
                                    fontSize: 12,
                                    children: formatGDP(gdp2000)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SlopeChart.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: xScale(2023) + 10,
                                    y: yScale(gdp2023),
                                    textAnchor: "start",
                                    alignmentBaseline: "middle",
                                    fontSize: 12,
                                    children: formatGDP(gdp2023)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SlopeChart.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: xScale(2000) - 10,
                                    y: yScale(gdp2000) - 15,
                                    textAnchor: "end",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    children: country
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/SlopeChart.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, country, true, {
                            fileName: "[project]/src/components/ui/SlopeChart.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SlopeChart.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SlopeChart.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
};
_c = SlopeChart;
const __TURBOPACK__default__export__ = SlopeChart;
var _c;
__turbopack_context__.k.register(_c, "SlopeChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SlopeChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SlopeChart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const csvData = "country,year,gdp\n" + "Afghanistan,2000,11283793920\n" + "Afghanistan,2023,45709816441\n" + "Albania,2000,14736835584\n" + "Albania,2023,22444407943\n" + "Algeria,2000,208554147840\n" + "Algeria,2023,568576354523\n" + "Angola,2000,23512182784\n" + "Angola,2023,109564802802\n" + "Argentina,2000,536480972800\n" + "Argentina,2023,864444473751\n" + "Armenia,2000,15244825600\n" + "Armenia,2023,21608530010\n" + "Australia,2000,692059308032\n" + "Australia,2023,1373028859238\n" + "Austria,2000,280410161152\n" + "Austria,2023,337330694046\n" + "Azerbaijan,2000,34255706112\n" + "Azerbaijan,2023,135828851231\n" + "Bahrain,2000,11032289280\n" + "Bahrain,2023,49220323350\n" + "Bangladesh,2000,200824291328\n" + "Bangladesh,2023,491299203543\n" + "Barbados,2000,3452406272\n" + "Barbados,2023,7650056525\n" + "Belarus,2000,91419115520\n" + "Belarus,2023,230860132306\n" + "Belgium,2000,345706889216\n" + "Belgium,2023,403487216781\n" + "Benin,2000,12746225664\n" + "Benin,2023,23509891191\n" + "Bolivia,2000,34126235648\n" + "Bolivia,2023,68228660531\n" + "Bosnia and Herzegovina,2000,27629709312\n" + "Bosnia and Herzegovina,2023,38991341703\n" + "Botswana,2000,13391002624\n" + "Botswana,2023,38007675737\n" + "Brazil,2000,1739727962112\n" + "Brazil,2023,3228976221674\n" + "Bulgaria,2000,67719766016\n" + "Bulgaria,2023,156706721785\n" + "Burkina Faso,2000,14546973696\n" + "Burkina Faso,2023,31858094004\n" + "Burundi,2000,4647178240\n" + "Burundi,2023,7169059321\n" + "Cambodia,2000,20435398656\n" + "Cambodia,2023,70272534020\n" + "Cameroon,2000,31207712768\n" + "Cameroon,2023,66130627290\n" + "Canada,2000,1137681367040\n" + "Canada,2023,2188824966120\n" + "Cape Verde,2000,1540942336\n" + "Cape Verde,2023,23582650986\n" + "Central African Republic,2000,3836505856\n" + "Central African Republic,2023,-11891182374\n" + "Chad,2000,5599887872\n" + "Chad,2023,19170928108\n" + "Chile,2000,233340518400\n" + "Chile,2023,407584903828\n" + "China,2000,5952682590208\n" + "China,2023,36672746758617\n" + "Colombia,2000,330615619584\n" + "Colombia,2023,735698927901\n" + "Comoros,2000,656399296\n" + "Comoros,2023,24579595095\n" + "Congo,2000,12472136704\n" + "Congo,2023,16221612682\n" + "Costa Rica,2000,36043079680\n" + "Costa Rica,2023,41730191629\n" + "Cote d'Ivoire,2000,41297596416\n" + "Cote d'Ivoire,2023,227688827726\n" + "Croatia,2000,57398796288\n" + "Croatia,2023,76163265025\n" + "Cuba,2000,44692111360\n" + "Cuba,2023,76708004399\n" + "Cyprus,2000,18447964160\n" + "Cyprus,2023,30305119977\n" + "Czechia,2000,174309523456\n" + "Czechia,2023,252345816290\n" + "Democratic Republic of Congo,2000,21854113792\n" + "Democratic Republic of Congo,2023,17308491491\n" + "Denmark,2000,208333668352\n" + "Denmark,2023,165278622876\n" + "Djibouti,2000,1258388224\n" + "Djibouti,2023,-3790617378\n" + "Dominica,2000,404483808\n" + "Dominica,2023,-5591698290\n" + "Dominican Republic,2000,56344969216\n" + "Dominican Republic,2023,106512795421\n" + "Ecuador,2000,85978890240\n" + "Ecuador,2023,195582119420\n" + "Egypt,2000,444250292224\n" + "Egypt,2023,996991361266\n" + "El Salvador,2000,31478454272\n" + "El Salvador,2023,37932960527\n" + "Equatorial Guinea,2000,6341192192\n" + "Equatorial Guinea,2023,21856696282\n" + "Estonia,2000,23525730304\n" + "Estonia,2023,36299499130\n" + "Eswatini,2000,5050303488\n" + "Eswatini,2023,6138608642\n" + "Ethiopia,2000,50326966272\n" + "Ethiopia,2023,265419405755\n" + "Finland,2000,169209757696\n" + "Finland,2023,325756960160\n" + "France,2000,2031676030976\n" + "France,2023,2600766484925\n" + "Gabon,2000,12538030080\n" + "Gabon,2023,38214290193\n" + "Gambia,2000,1955249664\n" + "Gambia,2023,3554084367\n" + "Georgia,2000,23550476288\n" + "Georgia,2023,45390217791\n" + "Germany,2000,2718560681984\n" + "Germany,2023,3053965747545\n" + "Ghana,2000,41569378304\n" + "Ghana,2023,100464357633\n" + "Greece,2000,223530909696\n" + "Greece,2023,264052580270\n" + "Guatemala,2000,68731617280\n" + "Guatemala,2023,75525547376\n" + "Guinea,2000,8142367744\n" + "Guinea,2023,19868424966\n" + "Guinea-Bissau,2000,1486201600\n" + "Guinea-Bissau,2023,-21026673064\n" + "Haiti,2000,12590117888\n" + "Haiti,2023,19080386236\n" + "Honduras,2000,21239306240\n" + "Honduras,2023,39075115620\n" + "Hong Kong,2000,218622148608\n" + "Hong Kong,2023,349274569597\n" + "Hungary,2000,134151503872\n" + "Hungary,2023,258159855149\n" + "Iceland,2000,9307402240\n" + "Iceland,2023,13382932970\n" + "India,2000,2804478640128\n" + "India,2023,6824447769097\n" + "Indonesia,2000,1138300157952\n" + "Indonesia,2023,2440677174673\n" + "Iran,2000,595554533376\n" + "Iran,2023,1975979930196\n" + "Iraq,2000,83019210752\n" + "Iraq,2023,659573493228\n" + "Ireland,2000,147722371072\n" + "Ireland,2023,164890456888\n" + "Israel,2000,158656380928\n" + "Israel,2023,250903064745\n" + "Italy,2000,1863751565312\n" + "Italy,2023,1602631548481\n" + "Jamaica,2000,17441468416\n" + "Jamaica,2023,27427631001\n" + "Japan,2000,4209652006912\n" + "Japan,2023,4514072299130\n" + "Jordan,2000,35825242112\n" + "Jordan,2023,71293539095\n" + "Kazakhstan,2000,142758084608\n" + "Kazakhstan,2023,524145390341\n" + "Kenya,2000,59408908288\n" + "Kenya,2023,120888217965\n" + "Kuwait,2000,71053967360\n" + "Kuwait,2023,309410424707\n" + "Kyrgyzstan,2000,15667564544\n" + "Kyrgyzstan,2023,37004346322\n" + "Laos,2000,12209285120\n" + "Laos,2023,56266160632\n" + "Latvia,2000,26727290880\n" + "Latvia,2023,38020814217\n" + "Lebanon,2000,25915975680\n" + "Lebanon,2023,65197624446\n" + "Lesotho,2000,3769602048\n" + "Lesotho,2023,18623232711\n" + "Liberia,2000,2767093504\n" + "Liberia,2023,11106725475\n" + "Libya,2000,49983451136\n" + "Libya,2023,308490258192\n" + "Lithuania,2000,36684800000\n" + "Lithuania,2023,63948487843\n" + "Luxembourg,2000,21937467392\n" + "Luxembourg,2023,31173561623\n" + "Madagascar,2000,19457200128\n" + "Madagascar,2023,54939554461\n" + "Malawi,2000,11274206208\n" + "Malawi,2023,9098866679\n" + "Malaysia,2000,305803231232\n" + "Malaysia,2023,1034591416249\n" + "Mali,2000,12490372096\n" + "Mali,2023,32008808958\n" + "Malta,2000,7963752448\n" + "Malta,2023,10280507116\n" + "Mauritania,2000,4838790144\n" + "Mauritania,2023,15591715353\n" + "Mauritius,2000,16933370880\n" + "Mauritius,2023,24386744267\n" + "Mexico,2000,1241194692608\n" + "Mexico,2023,1786565662754\n" + "Moldova,2000,12554043392\n" + "Moldova,2023,31551482991\n" + "Mongolia,2000,7225650176\n" + "Mongolia,2023,127811890566\n" + "Morocco,2000,136639291392\n" + "Morocco,2023,222032132428\n" + "Mozambique,2000,20141920256\n" + "Mozambique,2023,52282655353\n" + "Myanmar,2000,84093542400\n" + "Myanmar,2023,186142815496\n" + "Namibia,2000,11306497024\n" + "Namibia,2023,21664868815\n" + "Nepal,2000,39381725184\n" + "Nepal,2023,56005634662\n" + "Netherlands,2000,603803025408\n" + "Netherlands,2023,861855520796\n" + "New Zealand,2000,104942108672\n" + "New Zealand,2023,239154265559\n" + "Nicaragua,2000,13909592064\n" + "Nicaragua,2023,24778601622\n" + "Niger,2000,7478107648\n" + "Niger,2023,33254519886\n" + "Nigeria,2000,268133056512\n" + "Nigeria,2023,831326482860\n" + "North Korea,2000,37758033920\n" + "North Korea,2023,92395256808\n" + "Norway,2000,242751291392\n" + "Norway,2023,471532091030\n" + "Oman,2000,58124189696\n" + "Oman,2023,277170590696\n" + "Pakistan,2000,459798511616\n" + "Pakistan,2023,839881464795\n" + "Palestine,2000,16535485440\n" + "Palestine,2023,12152122982\n" + "Panama,2000,28706486272\n" + "Panama,2023,65933467576\n" + "Paraguay,2000,26799187968\n" + "Paraguay,2023,35403276561\n" + "Peru,2000,128561594368\n" + "Peru,2023,349748283234\n" + "Philippines,2000,327247659008\n" + "Philippines,2023,662402686337\n" + "Poland,2000,488207646720\n" + "Poland,2023,995988532231\n" + "Portugal,2000,238756380672\n" + "Portugal,2023,215017999093\n" + "Qatar,2000,30159720448\n" + "Qatar,2023,277623520874\n" + "Romania,2000,157839294464\n" + "Romania,2023,333824447190\n" + "Russia,2000,1547057496064\n" + "Russia,2023,2249325463838\n" + "Rwanda,2000,8053572096\n" + "Rwanda,2023,9063254829\n" + "Saint Lucia,2000,1100265088\n" + "Saint Lucia,2023,-8052902115\n" + "Sao Tome and Principe,2000,312853568\n" + "Sao Tome and Principe,2023,28453815810\n" + "Saudi Arabia,2000,488272429056\n" + "Saudi Arabia,2023,2114121526423\n" + "Senegal,2000,20439619584\n" + "Senegal,2023,44826131910\n" + "Serbia,2000,45972176896\n" + "Serbia,2023,126520153281\n" + "Seychelles,2000,1136006784\n" + "Seychelles,2023,5416666669\n" + "Sierra Leone,2000,3156876032\n" + "Sierra Leone,2023,9305872699\n" + "Singapore,2000,152153571328\n" + "Singapore,2023,423351382932\n" + "Slovakia,2000,74595098624\n" + "Slovakia,2023,136734632470\n" + "Slovenia,2000,43078787072\n" + "Slovenia,2023,55231951406\n" + "South Africa,2000,356072095744\n" + "South Africa,2023,949441163990\n" + "South Korea,2000,1086261690368\n" + "South Korea,2023,2212912925190\n" + "Spain,2000,1094998753280\n" + "Spain,2023,1518841197621\n" + "Sri Lanka,2000,114541756416\n" + "Sri Lanka,2023,83124224527\n" + "Sweden,2000,303452356608\n" + "Sweden,2023,461140017969\n" + "Switzerland,2000,315545354240\n" + "Switzerland,2023,409177787942\n" + "Syria,2000,125214244864\n" + "Syria,2023,90091929886\n" + "Taiwan,2000,591153922048\n" + "Taiwan,2023,1053767201724\n" + "Tajikistan,2000,10735321088\n" + "Tajikistan,2023,33486088186\n" + "Tanzania,2000,39001698304\n" + "Tanzania,2023,135028515137\n" + "Thailand,2000,579217719296\n" + "Thailand,2023,1054892713266\n" + "Togo,2000,5742626816\n" + "Togo,2023,8867989824\n" + "Trinidad and Tobago,2000,24996995072\n" + "Trinidad and Tobago,2023,55237608453\n" + "Tunisia,2000,71818854400\n" + "Tunisia,2023,90537091506\n" + "Turkey,2000,785054957568\n" + "Turkey,2023,1882753927766\n" + "Turkmenistan,2000,18299209728\n" + "Turkmenistan,2023,243463106005\n" + "Uganda,2000,28839086080\n" + "Uganda,2023,39645743045\n" + "Ukraine,2000,253196025856\n" + "Ukraine,2023,559050160782\n" + "United Arab Emirates,2000,160530694144\n" + "United Arab Emirates,2023,874672476540\n" + "United Kingdom,2000,1889565278208\n" + "United Kingdom,2023,2500577778984\n" + "United States,2000,12947416940544\n" + "United States,2023,16849829251726\n" + "Uruguay,2000,42357506048\n" + "Uruguay,2023,54298599052\n" + "Uzbekistan,2000,116875837440\n" + "Uzbekistan,2023,417181191981\n" + "Venezuela,2000,330236198912\n" + "Venezuela,2023,708932170462\n" + "Vietnam,2000,220383068160\n" + "Vietnam,2023,866796943351\n" + "World,2000,59897668435968\n" + "World,2023,114484668157798\n";
const parseCSV = (csv)=>{
    const lines = csv.trim().split("\\n");
    const result = [];
    for(let i = 1; i < lines.length; i++){
        const [country, yearStr, gdpStr] = lines[i].split(",");
        result.push({
            country: country,
            year: Number(yearStr),
            gdp: Number(gdpStr)
        });
    }
    return result;
};
function Home() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCountries, setSelectedCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const parsedData = parseCSV(csvData);
            setData(parsedData);
        }
    }["Home.useEffect"], []);
    // Filter data for selected countries and years 2000 and 2023
    const filteredData = data.filter((d)=>selectedCountries.includes(d.country) && (d.year === 2000 || d.year === 2023));
    console.log('Filtered data:', filteredData);
    // Get unique countries from data for dropdown options
    const countryOptions = Array.from(new Set(data.map((d)=>d.country))).sort();
    const handleCountryChange = (e)=>{
        const options = e.target.options;
        const selected = [];
        for(let i = 0; i < options.length; i++){
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        // Limit to max 5 countries
        if (selected.length > 5) {
            selected.splice(5);
        }
        setSelectedCountries(selected);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-gray-900 font-sans p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "country-select",
                        className: "block mb-2 font-semibold",
                        children: "Select up to 5 countries:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "country-select",
                        multiple: true,
                        size: 10,
                        className: "w-full border border-gray-300 rounded p-2",
                        onChange: handleCountryChange,
                        value: selectedCountries,
                        children: countryOptions.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: country,
                                children: country
                            }, country, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SlopeChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: filteredData
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 386,
        columnNumber: 5
    }, this);
}
_s(Home, "kQXdA7n/itUq/g4wFupaeoH7koo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_f00e4119._.js.map