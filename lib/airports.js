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

const D = `ISB,Islamabad,33.56,72.85,PK,PK
KHI,Karachi,24.91,67.16,PK,PK
LHE,Lahore,31.52,74.40,PK,PK
PEW,Peshawar,33.99,71.51,PK,PK
SKT,Sialkot,32.54,74.36,PK,PK
MUX,Multan,30.20,71.42,PK,PK
LYP,Faisalabad,31.37,72.99,PK,PK
UET,Quetta,30.25,66.94,PK,PK
GWD,Gwadar,25.24,62.33,PK,PK
KDU,Skardu,35.34,75.54,PK,PK
GIL,Gilgit,35.92,74.33,PK,PK
RYK,Rahim Yar Khan,28.38,70.28,PK,PK
SKZ,Sukkur,27.72,68.88,PK,PK`;

const rows = s => s.split("\n").map(l => l.split(","));
export const origins = rows(O).map(([code, city, lat, lon]) => ({ code, city, lat: +lat, lon: +lon }));
export const dests = rows(D).map(([code, city, lat, lon, region, cc]) => ({ code, city, lat: +lat, lon: +lon, region, cc }));
export const regions = { PK: "Pakistan" };