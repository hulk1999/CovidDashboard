const mapData = {src: "https://ncov.vncdc.gov.vn/viet-nam.html", updated: "2021-09-13 06:00", data: [{vName:"Hà Nội",cases:21656,deaths:0,value:6.4479247305,iso3166_2:"VN-HN"},{vName:"Hồ Chí Minh",cases:490638,deaths:18746,value:238.0120306588,iso3166_2:"VN-SG"},{vName:"Hà Giang",cases:5805,deaths:0,value:0.7320764235,iso3166_2:"VN-03"},{vName:"Cao Bằng",cases:250,deaths:0,value:0.0373117622,iso3166_2:"VN-04"},{vName:"Bắc Kạn",cases:38,deaths:0,value:0.00781893,iso3166_2:"VN-53"},{vName:"Tuyên Quang",cases:802,deaths:0,value:0.1366758125,iso3166_2:"VN-07"},{vName:"Lào Cai",cases:312,deaths:0,value:0.04902577,iso3166_2:"VN-02"},{vName:"Điện Biên",cases:514,deaths:0,value:0.0538710658,iso3166_2:"VN-71"},{vName:"Lai Châu",cases:44,deaths:0,value:0.0048517996,iso3166_2:"VN-01"},{vName:"Sơn La",cases:569,deaths:0,value:0.0402874642,iso3166_2:"VN-05"},{vName:"Yên Bái",cases:361,deaths:0,value:0.0524137931,iso3166_2:"VN-06"},{vName:"Hòa Bình",cases:868,deaths:3,value:0.1890820372,iso3166_2:"VN-14"},{vName:"Thái Nguyên",cases:1228,deaths:0,value:0.3482107412,iso3166_2:"VN-69"},{vName:"Lạng Sơn",cases:1057,deaths:3,value:0.1271946186,iso3166_2:"VN-09"},{vName:"Quảng Ninh",cases:1428,deaths:1,value:0.2311352821,iso3166_2:"VN-13"},{vName:"Bắc Giang",cases:7243,deaths:16,value:1.8592771332,iso3166_2:"VN-54"},{vName:"Phú Thọ",cases:2416,deaths:2,value:0.6835285464,iso3166_2:"VN-68"},{vName:"Vĩnh Phúc",cases:1889,deaths:7,value:1.5284408124,iso3166_2:"VN-70"},{vName:"Bắc Ninh",cases:7711,deaths:22,value:9.3727968883,iso3166_2:"VN-56"},{vName:"Hải Dương",cases:1659,deaths:1,value:0.9944850737,iso3166_2:"VN-61"},{vName:"Hải Phòng",cases:3272,deaths:7,value:2.0950185683,iso3166_2:"VN-HP"},{vName:"Hưng Yên",cases:2026,deaths:2,value:2.1780262309,iso3166_2:"VN-66"},{vName:"Thái Bình",cases:1944,deaths:0,value:1.2254160363,iso3166_2:"VN-20"},{vName:"Hà Nam",cases:164,deaths:0,value:0.1902772943,iso3166_2:"VN-63"},{vName:"Nam Định",cases:225,deaths:3,value:0.1348435814,iso3166_2:"VN-67"},{vName:"Ninh Bình",cases:354,deaths:0,value:0.2552639169,iso3166_2:"VN-18"},{vName:"Thanh Hóa",cases:4679,deaths:12,value:0.420977813,iso3166_2:"VN-21"},{vName:"Nghệ An",cases:6146,deaths:29,value:0.3729052144,iso3166_2:"VN-22"},{vName:"Hà Tĩnh",cases:1344,deaths:6,value:0.224347739,iso3166_2:"VN-23"},{vName:"Quảng Bình",cases:3141,deaths:8,value:0.392625,iso3166_2:"VN-24"},{vName:"Quảng Trị",cases:1345,deaths:2,value:0.2910184564,iso3166_2:"VN-25"},{vName:"Thừa Thiên Huế",cases:8117,deaths:13,value:1.6557196475,iso3166_2:"VN-26"},{vName:"Đà Nẵng",cases:8971,deaths:82,value:6.9818662931,iso3166_2:"VN-DN"},{vName:"Quảng Nam",cases:4357,deaths:8,value:0.4120211448,iso3166_2:"VN-27"},{vName:"Quảng Ngãi",cases:3901,deaths:18,value:0.7566236084,iso3166_2:"VN-29"},{vName:"Bình Định",cases:9142,deaths:35,value:1.507039003,iso3166_2:"VN-31"},{vName:"Phú Yên",cases:4886,deaths:38,value:0.9726480073,iso3166_2:"VN-32"},{vName:"Khánh Hòa",cases:22435,deaths:135,value:4.3666549885,iso3166_2:"VN-34"},{vName:"Ninh Thuận",cases:5063,deaths:51,value:1.5089559801,iso3166_2:"VN-36"},{vName:"Bình Thuận",cases:22753,deaths:216,value:2.8642102746,iso3166_2:"VN-40"},{vName:"Kon Tum",cases:555,deaths:0,value:0.0573690848,iso3166_2:"VN-28"},{vName:"Gia Lai",cases:5254,deaths:12,value:0.3387273548,iso3166_2:"VN-30"},{vName:"Đắk Lắk",cases:9577,deaths:44,value:0.7349679598,iso3166_2:"VN-33"},{vName:"Đắk Nông",cases:3914,deaths:11,value:0.6012935339,iso3166_2:"VN-72"},{vName:"Lâm Đồng",cases:5578,deaths:17,value:0.5701552646,iso3166_2:"VN-35"},{vName:"Bình Phước",cases:1858,deaths:39,value:0.2701838064,iso3166_2:"VN-58"},{vName:"Tây Ninh",cases:62188,deaths:460,value:15.3881176849,iso3166_2:"VN-37"},{vName:"Bình Dương",cases:288761,deaths:2964,value:107.1628442069,iso3166_2:"VN-57"},{vName:"Đồng Nai",cases:94194,deaths:1071,value:16.0641926462,iso3166_2:"VN-39"},{vName:"Bà Rịa - Vũng Tàu",cases:23209,deaths:93,value:11.715800101,iso3166_2:"VN-43"},{vName:"Long An",cases:38596,deaths:777,value:8.586620392,iso3166_2:"VN-41"},{vName:"Tiền Giang",cases:30379,deaths:740,value:12.1002947503,iso3166_2:"VN-46"},{vName:"Bến Tre",cases:19749,deaths:120,value:8.2466176716,iso3166_2:"VN-50"},{vName:"Trà Vinh",cases:14149,deaths:79,value:5.9996607726,iso3166_2:"VN-51"},{vName:"Vĩnh Long",cases:21017,deaths:191,value:13.7753162483,iso3166_2:"VN-49"},{vName:"Đồng Tháp",cases:34038,deaths:441,value:10.0591051481,iso3166_2:"VN-45"},{vName:"An Giang",cases:28644,deaths:665,value:8.0990754093,iso3166_2:"VN-44"},{vName:"Kiên Giang",cases:26197,deaths:361,value:4.1262915827,iso3166_2:"VN-47"},{vName:"Cần Thơ",cases:31813,deaths:413,value:22.1077136901,iso3166_2:"VN-CT"},{vName:"Hậu Giang",cases:10289,deaths:20,value:6.3445766788,iso3166_2:"VN-73"},{vName:"Sóc Trăng",cases:25686,deaths:194,value:7.7556689514,iso3166_2:"VN-52"},{vName:"Bạc Liêu",cases:21912,deaths:191,value:8.2098164106,iso3166_2:"VN-55"},{vName:"Cà Mau",cases:21707,deaths:85,value:4.1574733778,iso3166_2:"VN-59"},{vName:null,cases:0,deaths:0,value:null,iso3166_2:null}]};