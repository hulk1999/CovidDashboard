const mapData = {src: "https://ncov.vncdc.gov.vn/viet-nam.html", updated: "2021-09-13 06:00", data: [{vName:"Hà Nội",cases:4173,deaths:0,value:1.2424819865,iso3166_2:"VN-HN"},{vName:"Hồ Chí Minh",cases:32902,deaths:12974,value:15.9609973804,iso3166_2:"VN-SG"},{vName:"Hà Giang",cases:20,deaths:0,value:0.0025222271,iso3166_2:"VN-03"},{vName:"Cao Bằng",cases:0,deaths:0,value:0.0,iso3166_2:"VN-04"},{vName:"Bắc Kạn",cases:6,deaths:0,value:0.0012345679,iso3166_2:"VN-53"},{vName:"Tuyên Quang",cases:1,deaths:0,value:0.0001704187,iso3166_2:"VN-07"},{vName:"Lào Cai",cases:97,deaths:0,value:0.0152419862,iso3166_2:"VN-02"},{vName:"Điện Biên",cases:62,deaths:0,value:0.0064980663,iso3166_2:"VN-71"},{vName:"Lai Châu",cases:1,deaths:0,value:0.0001102682,iso3166_2:"VN-01"},{vName:"Sơn La",cases:251,deaths:0,value:0.0177717988,iso3166_2:"VN-05"},{vName:"Yên Bái",cases:3,deaths:0,value:0.0004355717,iso3166_2:"VN-06"},{vName:"Hòa Bình",cases:16,deaths:0,value:0.0034853832,iso3166_2:"VN-14"},{vName:"Thái Nguyên",cases:16,deaths:0,value:0.0045369478,iso3166_2:"VN-69"},{vName:"Lạng Sơn",cases:212,deaths:2,value:0.025511125,iso3166_2:"VN-09"},{vName:"Quảng Ninh",cases:9,deaths:0,value:0.001456735,iso3166_2:"VN-13"},{vName:"Bắc Giang",cases:5828,deaths:15,value:1.4960468221,iso3166_2:"VN-54"},{vName:"Phú Thọ",cases:22,deaths:0,value:0.0062241838,iso3166_2:"VN-68"},{vName:"Vĩnh Phúc",cases:230,deaths:3,value:0.186099199,iso3166_2:"VN-70"},{vName:"Bắc Ninh",cases:1855,deaths:20,value:2.2547708764,iso3166_2:"VN-56"},{vName:"Hải Dương",cases:170,deaths:1,value:0.1019062463,iso3166_2:"VN-61"},{vName:"Hải Phòng",cases:29,deaths:1,value:0.0185683186,iso3166_2:"VN-HP"},{vName:"Hưng Yên",cases:293,deaths:1,value:0.3149860245,iso3166_2:"VN-66"},{vName:"Thái Bình",cases:79,deaths:0,value:0.0497982854,iso3166_2:"VN-20"},{vName:"Hà Nam",cases:77,deaths:0,value:0.0893375102,iso3166_2:"VN-63"},{vName:"Nam Định",cases:52,deaths:1,value:0.0311638499,iso3166_2:"VN-67"},{vName:"Ninh Bình",cases:81,deaths:0,value:0.0584078454,iso3166_2:"VN-18"},{vName:"Thanh Hóa",cases:432,deaths:3,value:0.0388677955,iso3166_2:"VN-21"},{vName:"Nghệ An",cases:1806,deaths:14,value:0.1095780698,iso3166_2:"VN-22"},{vName:"Hà Tĩnh",cases:447,deaths:5,value:0.0746156543,iso3166_2:"VN-23"},{vName:"Quảng Bình",cases:1435,deaths:1,value:0.179375,iso3166_2:"VN-24"},{vName:"Quảng Trị",cases:159,deaths:0,value:0.0344029253,iso3166_2:"VN-25"},{vName:"Thừa Thiên Huế",cases:791,deaths:12,value:0.1613495431,iso3166_2:"VN-26"},{vName:"Đà Nẵng",cases:4856,deaths:68,value:3.7792824344,iso3166_2:"VN-DN"},{vName:"Quảng Nam",cases:615,deaths:5,value:0.0581576782,iso3166_2:"VN-27"},{vName:"Quảng Ngãi",cases:1096,deaths:2,value:0.2125761279,iso3166_2:"VN-29"},{vName:"Bình Định",cases:1033,deaths:12,value:0.1702878243,iso3166_2:"VN-31"},{vName:"Phú Yên",cases:2935,deaths:34,value:0.5842656368,iso3166_2:"VN-32"},{vName:"Khánh Hòa",cases:752,deaths:97,value:0.1463661489,iso3166_2:"VN-34"},{vName:"Ninh Thuận",cases:800,deaths:8,value:0.2384287545,iso3166_2:"VN-36"},{vName:"Bình Thuận",cases:2977,deaths:46,value:0.3747529551,iso3166_2:"VN-40"},{vName:"Kon Tum",cases:27,deaths:0,value:0.0027909284,iso3166_2:"VN-28"},{vName:"Gia Lai",cases:523,deaths:2,value:0.0337180066,iso3166_2:"VN-30"},{vName:"Đắk Lắk",cases:1568,deaths:8,value:0.1203330647,iso3166_2:"VN-33"},{vName:"Đắk Nông",cases:591,deaths:0,value:0.0907931728,iso3166_2:"VN-72"},{vName:"Lâm Đồng",cases:273,deaths:0,value:0.0279046947,iso3166_2:"VN-35"},{vName:"Bình Phước",cases:1101,deaths:8,value:0.1601035365,iso3166_2:"VN-58"},{vName:"Tây Ninh",cases:712,deaths:117,value:0.1761809319,iso3166_2:"VN-37"},{vName:"Bình Dương",cases:175961,deaths:1592,value:65.3013434276,iso3166_2:"VN-57"},{vName:"Đồng Nai",cases:39022,deaths:426,value:6.6549559997,iso3166_2:"VN-39"},{vName:"Bà Rịa - Vũng Tàu",cases:4013,deaths:41,value:2.0257445734,iso3166_2:"VN-43"},{vName:"Long An",cases:29138,deaths:363,value:6.4824578967,iso3166_2:"VN-41"},{vName:"Tiền Giang",cases:12962,deaths:349,value:5.1629092647,iso3166_2:"VN-46"},{vName:"Bến Tre",cases:1858,deaths:67,value:0.77584767,iso3166_2:"VN-50"},{vName:"Trà Vinh",cases:1436,deaths:17,value:0.6089132002,iso3166_2:"VN-51"},{vName:"Vĩnh Long",cases:2135,deaths:61,value:1.3993576719,iso3166_2:"VN-49"},{vName:"Đồng Tháp",cases:8066,deaths:248,value:2.3837106212,iso3166_2:"VN-45"},{vName:"An Giang",cases:3242,deaths:34,value:0.9166737354,iso3166_2:"VN-44"},{vName:"Kiên Giang",cases:4134,deaths:39,value:0.6511466734,iso3166_2:"VN-47"},{vName:"Cần Thơ",cases:5059,deaths:92,value:3.5156358582,iso3166_2:"VN-CT"},{vName:"Hậu Giang",cases:489,deaths:2,value:0.3015354258,iso3166_2:"VN-73"},{vName:"Sóc Trăng",cases:1021,deaths:25,value:0.3082822549,iso3166_2:"VN-52"},{vName:"Bạc Liêu",cases:339,deaths:0,value:0.1270138629,iso3166_2:"VN-55"},{vName:"Cà Mau",cases:274,deaths:5,value:0.0524783575,iso3166_2:"VN-59"}]};