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
NRT,Tokyo,35.77,140.39,AS,JP
KIX,Osaka,34.43,135.23,AS,JP
ICN,Seoul,37.46,126.44,AS,KR
HKG,Hong Kong,22.31,113.91,AS,HK
TPE,Taipei,25.08,121.23,AS,TW
PVG,Shanghai,31.14,121.81,AS,CN
PEK,Beijing,40.08,116.58,AS,CN
SIN,Singapore,1.36,103.99,AS,SG
BKK,Bangkok,13.69,100.75,AS,TH
KUL,Kuala Lumpur,2.75,101.71,AS,MY
MNL,Manila,14.51,121.02,AS,PH
SGN,Ho Chi Minh City,10.82,106.66,AS,VN
HAN,Hanoi,21.22,105.81,AS,VN
CGK,Jakarta,-6.13,106.66,AS,ID
DPS,Bali,-8.75,115.17,AS,ID
DEL,Delhi,28.56,77.1,AS,IN
BOM,Mumbai,19.09,72.87,AS,IN
CMB,Colombo,7.18,79.88,AS,LK
MLE,Maldives,4.19,73.53,AS,MV
SYD,Sydney,-33.94,151.18,OC,AU
MEL,Melbourne,-37.67,144.84,OC,AU
BNE,Brisbane,-27.38,153.12,OC,AU
PER,Perth,-31.94,115.97,OC,AU
AKL,Auckland,-37.01,174.79,OC,NZ
NAN,Fiji,-17.76,177.44,OC,FJ
DXB,Dubai,25.25,55.37,ME,AE
DOH,Doha,25.27,51.61,ME,QA
AUH,Abu Dhabi,24.43,54.65,ME,AE
TLV,Tel Aviv,32.01,34.89,ME,IL
AMM,Amman,31.72,35.99,ME,JO
JNB,Johannesburg,-26.14,28.25,AF,ZA
CPT,Cape Town,-33.97,18.6,AF,ZA
CAI,Cairo,30.12,31.41,AF,EG
CMN,Casablanca,33.37,-7.59,AF,MA
NBO,Nairobi,-1.32,36.93,AF,KE
ADD,Addis Ababa,8.98,38.8,AF,ET
LOS,Lagos,6.58,3.32,AF,NG
ACC,Accra,5.61,-0.17,AF,GH
GRU,Sao Paulo,-23.43,-46.47,SA,BR
GIG,Rio de Janeiro,-22.81,-43.25,SA,BR
EZE,Buenos Aires,-34.82,-58.54,SA,AR
SCL,Santiago,-33.39,-70.79,SA,CL
BOG,Bogota,4.7,-74.14,SA,CO
LIM,Lima,-12.02,-77.11,SA,PE
UIO,Quito,-0.14,-78.49,SA,EC
MEX,Mexico City,19.44,-99.07,LA,MX
CUN,Cancun,21.04,-86.87,LA,MX
SJO,San Jose CR,9.99,-84.21,LA,CR
PTY,Panama City,9.07,-79.38,LA,PA
PUJ,Punta Cana,18.57,-68.36,LA,DO
NAS,Nassau,25.04,-77.47,LA,BS
MBJ,Montego Bay,18.5,-77.91,LA,JM`;
const rows = s => s.split("\n").map(l => l.split(","));
export const origins = rows(O).map(([code, city, lat, lon]) => ({ code, city, lat: +lat, lon: +lon }));
export const dests = rows(D).map(([code, city, lat, lon, region, cc]) => ({ code, city, lat: +lat, lon: +lon, region, cc }));
export const regions = { EU: "Europe", AS: "Asia", OC: "Australia & Pacific", ME: "Middle East", AF: "Africa", SA: "South America", LA: "Mexico, Central America & Caribbean" };
