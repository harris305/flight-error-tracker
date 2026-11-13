// code,city,lat,lon,region,country
const O = `JFK,New York,40.64,-73.78
EWR,Newark,40.69,-74.17
BOS,Boston,42.36,-71.01
IAD,Washington DC,38.95,-77.46
PHL,Philadelphia,39.87,-75.24
ATL,Atlanta,33.64,-84.43
CLT,Charlotte,35.21,-80.94
MIA,Miami,25.79,-80.29
MCO,Orlando,28.43,-81.31
ORD,Chicago,41.98,-87.9
DTW,Detroit,42.21,-83.35
MSP,Minneapolis,44.88,-93.22
DFW,Dallas,32.9,-97.04
IAH,Houston,29.98,-95.34
DEN,Denver,39.86,-104.67
SLC,Salt Lake City,40.79,-111.98
PHX,Phoenix,33.43,-112.01
LAS,Las Vegas,36.08,-115.15
LAX,Los Angeles,33.94,-118.41
SAN,San Diego,32.73,-117.19
SFO,San Francisco,37.62,-122.38
SEA,Seattle,47.45,-122.31
HNL,Honolulu,21.32,-157.92`;
const D = `LHR,London,51.47,-0.45,EU,GB
CDG,Paris,49.01,2.55,EU,FR
AMS,Amsterdam,52.31,4.76,EU,NL
FRA,Frankfurt,50.03,8.57,EU,DE
MAD,Madrid,40.49,-3.57,EU,ES
BCN,Barcelona,41.3,2.08,EU,ES
FCO,Rome,41.8,12.25,EU,IT
MXP,Milan,45.63,8.72,EU,IT
LIS,Lisbon,38.78,-9.14,EU,PT
DUB,Dublin,53.43,-6.27,EU,IE
CPH,Copenhagen,55.62,12.65,EU,DK
ARN,Stockholm,59.65,17.92,EU,SE
ATH,Athens,37.94,23.94,EU,GR
IST,Istanbul,41.26,28.74,EU,TR
PRG,Prague,50.1,14.26,EU,CZ
BUD,Budapest,47.44,19.26,EU,HU
WAW,Warsaw,52.17,20.97,EU,PL
ZRH,Zurich,47.46,8.55,EU,CH
VIE,Vienna,48.11,16.57,EU,AT
KEF,Reykjavik,63.99,-22.6,EU,IS
NRT,Tokyo,35.77,140.39,EA,JP
KIX,Osaka,34.43,135.23,EA,JP
ICN,Seoul,37.46,126.44,EA,KR
HKG,Hong Kong,22.31,113.91,EA,HK
TPE,Taipei,25.08,121.23,EA,TW
PVG,Shanghai,31.14,121.81,EA,CN
PEK,Beijing,40.08,116.58,EA,CN
DXB,Dubai,25.25,55.37,ME,AE
DOH,Doha,25.27,51.61,ME,QA
AUH,Abu Dhabi,24.43,54.65,ME,AE
TLV,Tel Aviv,32.01,34.89,ME,IL
AMM,Amman,31.72,35.99,ME,JO
UBN,Ulaanbaatar,47.84,106.77,EA,MN
RUH,Riyadh,24.96,46.7,ME,SA
JED,Jeddah,21.68,39.16,ME,SA
MCT,Muscat,23.59,58.28,ME,OM
BAH,Bahrain,26.27,50.63,ME,BH
KWI,Kuwait City,29.23,47.97,ME,KW
BEY,Beirut,33.82,35.49,ME,LB
KHI,Karachi,24.91,67.16,PK,PK
LHE,Lahore,31.52,74.4,PK,PK
ISB,Islamabad,33.56,72.85,PK,PK
PEW,Peshawar,33.99,71.51,PK,PK
SKT,Sialkot,32.54,74.36,PK,PK
MUX,Multan,30.2,71.42,PK,PK
TAS,Tashkent,41.26,69.28,CA,UZ
SKD,Samarkand,39.7,66.98,CA,UZ
ALA,Almaty,43.35,77.04,CA,KZ
NQZ,Astana,51.02,71.47,CA,KZ
FRU,Bishkek,43.06,74.48,CA,KG
DYU,Dushanbe,38.54,68.82,CA,TJ
ASB,Ashgabat,37.99,58.36,CA,TM`;
const rows = s => s.split("\n").map(l => l.split(","));
export const origins = rows(O).map(([code, city, lat, lon]) => ({ code, city, lat: +lat, lon: +lon }));
export const dests = rows(D).map(([code, city, lat, lon, region, cc]) => ({ code, city, lat: +lat, lon: +lon, region, cc }));
export const regions = { EU: "Europe", ME: "Middle East", EA: "East Asia", PK: "Pakistan", CA: "Central Asia" };
