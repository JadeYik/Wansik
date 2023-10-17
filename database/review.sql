/* Create database name wansik */
CREATE DATABASE wansik;

/* Create table name users */
DROP TABLE IF EXISTS Users;
CREATE TABLE Users (  
  ID SERIAL PRIMARY KEY
  , name VARCHAR 
  , email VARCHAR 
  , password VARCHAR 
  , phone VARCHAR 
  , profile_image VARCHAR 
);
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('janedoe', 'janedoe@gmail.com', '123456', '8123 4567', 'profile_image-1697360547673.png');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('mike.smith', 'mike.smith@gmail.com', '123456', '9123 4567', 'profile_image-1697360770655.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('sarahjohnson', 'sarahjohnson@gmail.com', '123456', '6789 1234', 'profile_image-1697360962194.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('alexbrown', 'alexbrown@gmail.com', '123456', '8989 1234', 'profile_image-1697361251889.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('davidmiller', 'davidmiller@gmail.com', '123456', '6891 2345', 'profile_image-1697362121388.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('emilywilson', 'emilywilson@gmail.com', '123456', '9989 1234', 'profile_image-1697362332608.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('laurasmith', 'laurasmith@gmail.com', '123456', '8891 2345', 'profile_image-1697363102703.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('ryanadams', 'ryanadams@gmail.com', '123456', '8891 2345', 'profile_image-1697364717609.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('sophiewalker', 'sophiewalker@gmail.com', '123456', '6691 2345', 'profile_image-1697364839463.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('maxturner', 'maxturner@gmail.com', '123456', '8899 1234', 'profile_image-1697365027624.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('Jade', 'jade@gmail.com', '123456', '6123 5678', 'profile_image-1697365570196.png');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('Mary', 'mary@gmail.com', '123456', '5478 7699', 'profile_image-1697358822442.png');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('Tien', 'tien@gmail.com', '123456', '6545 3178', 'profile_image-1697359029201.jpeg');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('Ben', 'ben@gmail.com', '123456', '6545 3178', 'profile_image-1697358961976.png');
INSERT INTO Users (name, email, password, phone, profile_image) VALUES ('johndoe', 'johndoe@gmail.com', '123456', '6843 7832', 'profile_image-1697360185159.png');

DROP TABLE IF EXISTS restaurants;
CREATE TABLE restaurants (  
  ID SERIAL PRIMARY KEY
  , Name VARCHAR 
  , Address VARCHAR 
  , District VARCHAR 
  , Phone VARCHAR 
  , Lat DECIMAL(20, 14) 
  , Long DECIMAL(20, 14) 
  , Photo VARCHAR 
);
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('1908bc British Chinese', '文咸東街22-26號柏廷坊5樓', '上環', '21164668', '22.285628647516', '114.152120271163', 'https://static6.orstatic.com/userphoto2/photo/1K/18KO/08SYYP1DD67C6D4DFED7A5lv.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('小川莊', '西營盤皇后大道西301號號 地下', '西營盤', '51365041', '22.2872927593015', '114.14214827139', 'https://static6.orstatic.com/userphoto2/photo/22/1MNM/0BL405747001737752770Fpx.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('井巷子 by 鋒膳', '干諾道中145號多寧大廈地舖', '上環', '90289925', '22.287270442137', '114.151295658895', 'https://static7.orstatic.com/userphoto2/photo/1Y/1JX2/0B1N72F72D85410DA46C54px.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('印度皇', '干諾道中137-139號三台商業大廈1樓', '上環', '94203094', '22.2881900031006', '114.151588253961', 'https://static8.orstatic.com/userphoto2/photo/1W/1I5S/0AP58R250394C0943A093Epx.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('式飲式食', '上環皇后大道中上環市政大廈2/F G14', '上環', '31011533', '22.2863643413364', '114.149806501902', 'https://static6.orstatic.com/userphoto/photo/4/3O8/00Q48X22310ACCD1CDB138lv.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('和藏', '干諾道西48號干諾中心1樓', '上環', '37517031', '22.2883914541059', '114.148173457673', 'https://static8.orstatic.com/userphoto2/photo/1W/1I75/0APEXV68281D7F6DC70FFDlv.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('華麗餐廳', '上環皇后大道西239號華美達海景酒店3樓', '上環', '25999888', '22.2872145815881', '114.143611593422', 'https://static7.orstatic.com/userphoto/photo/3/31S/00LOTU04DDB39EBBE483D9px.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('鈴 · 鮨刃', '文咸東街22-26號柏廷坊25樓', '上環', '36191256', '22.2855194753708', '114.152126658895', 'https://static7.orstatic.com/userphoto2/photo/1M/1AKB/0974FEFB6D0509A644170Alv.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('鋿晶館', '德輔道中287-291號地舖', '上環', '28506722', '22.2869021616042', '114.151265976686', 'https://static8.orstatic.com/userphoto2/photo/1X/1JAW/0AX9GN0AFF33C6C78F3CC3lv.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('鮨燐', '蘇杭街126-128號地下D號舖', '上環', '25671168', '22.2860824440249', '114.150167915346', 'https://static5.orstatic.com/userphoto2/photo/1B/115Z/07CAN094562129ABD9D237lv.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('Green Orange Restaurant & Bar', '上環永樂街50號昌盛大廈2/F', '上環', '25419090', '22.2863851393911', '114.151767130873', 'https://static6.orstatic.com/userphoto2/photo/1D/12ZQ/07PA4T546619EA0D5DB22Fpx.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('Honjo', '皇后大道西77-91號1樓', '上環', '26633772', '22.2865720989913', '114.147112976686', 'https://static6.orstatic.com/userphoto2/photo/14/VOE/0699GPF1A3EAABA804A149px.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('LeeLaksa', '皇后大道中302號地舖', '上環', '22658999', '22.2850254327617', '114.150304', 'https://static8.orstatic.com/userphoto2/photo/1S/1EPU/0A0NS3E4BB2EF5DCC13C3Epx.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('Oldish', '東街53號地舖', '上環', '26973313', '22.2845893241794', '114.148800635581', 'https://static8.orstatic.com/userphoto2/photo/1G/15RZ/0892YBFE6B7C07142A2E77lv.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('Pica Pica', '德輔道中317-321號啟德商業大廈地下G-H號舖', '上環', '28119880', '22.2872019139194', '114.150657', 'https://static8.orstatic.com/userphoto2/photo/23/1NKX/0BROV744208BFD74131275px.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('Poking', '蘇杭街121號地舖', '上環', '63470912', '22.2859207525277', '114.150219', 'https://static6.orstatic.com/userphoto2/photo/2A/1T67/0CVG25AD1F8945B44840AFpx.jpg');
INSERT INTO restaurants (Name, Address, District, Phone, Lat, Long, Photo) VALUES ('Reserva Ibérica • The Ham Shop', '上環荷李活道194號興寶樓地下', '上環', '21110066', '22.2855257494568', '114.148291952246', 'https://static5.orstatic.com/userphoto2/photo/1S/1FAN/0A4RT07E7A9E6135F0D052px.jpg');







DELETE from reviews where id >= 0;
DELETE from users where id >= 0;
DELETE from restaurants where id >= 0;
DELETE from review where id >= 0;

ALTER SEQUENCE reviews_id_seq RESTART WITH 1
ALTER SEQUENCE users_id_seq RESTART WITH 1
ALTER SEQUENCE restaurants_id_seq RESTART WITH 1
ALTER SEQUENCE review_id_seq RESTART WITH 1


select * from users;
select * from reviews;
select * from restaurants;
select * from review;




TRUNCATE TABLE reviews;



update restaurants set  restaurant_image = 'Restaurant_1.jpg' where name = 'MM';








SELECT 
    review.image_upload, 
    review.date_of_review, 
    review.time_of_review, 
    review.review_content, 
    review.title,
    restaurants.name as restaurants_name,
    users.name as user_name,
    users.profile_image  as user_profile_image
    FROM review
    inner join users on users.id = review.user_id
    inner join restaurants on restaurants.id = review.restaurant_id where restaurants.id = 1;









DROP TABLE IF EXISTS Review;
CREATE TABLE Review (  
  ID SERIAL PRIMARY KEY
  , review_content text
  , image_upload VARCHAR 
  , date_of_review VARCHAR 
  , time_of_review VARCHAR 
  , user_id integer
  ,FOREIGN KEY (user_id ) REFERENCES users(id)
  , restaurant_id integer
  ,FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
  , title VARCHAR 
  , clean_rank VARCHAR 
  , taste_rank VARCHAR 
  , service_rank VARCHAR 
  , environment_rank VARCHAR 
  , cp_rank VARCHAR 
  , total_rank VARCHAR 
);
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('記得之前去一個月歐洲旅行既時候，係遊歷倫敦期間因為思鄉病發作，走入當地華人開既大菜館大快朵頤，所以知道中菜在歐洲都幾受歡迎！今次曾經係英國居住過既好友同我
一齊去食呢間西式中菜。', 'https://static6.orstatic.com/userphoto2/photo/2B/1UBJ/0D3M3Td610293f9eec128dlv.jpg', '2023-09-24', '11:48', 9, 1, '英籍華人開嘅中菜館', '5', '5', '4', '4', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('餐牌上真的中菜
四周裝潢。完全似餐廳模樣
仲有個大酒bar', 'https://static8.orstatic.com/userphoto2/photo/2B/1U5E/0D2EI39812169ad73efa74lv.jpg', '2023-09-19', '18:02', 5, 1, '新派"型"式 懷舊味道', '5', '5', '2', '5', '5', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('朋友係要見㗎呢晚好友帶我到位於上環柏廷坊嘅1908BC British Chinese 食中英fusion菜～ 餐廳距離上環站只係幾分鐘腳程，十分方便～ 呢度嘅裝潢有格調，仲有一張大吧枱和廂房，西式的設計再配上中式的美食，令人眼前一亮～

先點兩杯Mocktails，Lychee mint和Fruit Punch，一紅一白好奪眼～ 兩杯都好有果香，Lychee mint有好清甜的荔枝香味，兩杯都好啱女仔飲～

必點招牌菜香酥鴨跟薄餅，食法同片皮鴨差不多，但呢度嘅香酥鴨就健康得多，冇咩油，加埋香蔥絲、青瓜和醬料，放係熱烘烘嘅薄餅皮上一齊食，十分滋味！

炸素春卷脆卜卜，好香口，層皮厚薄適中，而且餡料好足，又唔油膩，感覺好健康～

炸魚薯條係英國旅行成日食，今次呢度嘅招牌炸魚薯條跟咖哩汁，亮點係魚好滑同埋炸完都完全冇咩油，感覺十分健康，第一次沾咖哩汁一齊食，別有一番風味，好特別呀！

集會脆麵有驚喜，好脆但完全唔油膩，仲有新鮮魷、蝦仁和菜等鋪係面，好有睇頭、好足料～

整體來說，呢度嘅食物製法都很健康，價錢適中，份量好足，職員服務殷勤，好啱家庭或朋友聚會，期待下次再約朋友嚟聚聚！', 'https://static6.orstatic.com/userphoto2/photo/2B/1U4F/0D27F1016407d62eb57d34lv.jpg', '45186', '06:32', 10, 1, '
初嚐上環中英fushion菜', '4', '4', '3', '4', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('餐廳職員好好客，都介紹咗我哋好多特色菜，睇吓我哋鐘意食邊樣。

同朋友都想飲個湯，我哋就揀咗個「玉米濃湯」($68)，粟米味好香，十分creamy，粟米好有平時嘅中湯味道，但又有西湯個種奶油味，飲落去好特別。', 'https://static6.orstatic.com/userphoto2/photo/2B/1TYR/0D1399b22632ea51d52781lv.jpg', '45180', '10:08', 6, 1, '第一次試英式廣東菜', '4', '4', '4', '4', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('2021年9月和朋友來吃午餐，當時新開不久，我們點了２份 set lunch，包括以下的：
#芝麻蝦多士：本餐最好味的，甘香鬆化！
#蜜汁糖醋骨：偏酸
#素菜春卷：味道一般
#雞肉春卷：比素菜春卷好吃
#酸辣湯：酸味和辣味不融和
#鴨肉沙律：商家招牌，目測每桌都點，但我們覺得沒啥特別！
#焗豬扒飯：味道和茶餐廳的差不多，性價比太低！
#美式咖啡：偏酸，不是我喜歡的味道！
#熱奶茶：朋友說沒有茶餐廳的好喝！

想多講講服務，朋友先到，安排了比較入面的位置 (一邊沙發 一邊餐椅)，朋友坐在沙發，我很自然的坐在她對面的餐椅，剛坐下，就受不了，冷氣風口向下，正正吹着我的頭，就坐在朋友旁邊的沙發位，點了菜，男經理或店主 (看衣服判斷，他沒有穿制服)跟我們說，一定要打對面坐，不可以坐在同一邊！
我問可不可以調整出風位？不要直接吹正頭部，他回覆是幫我們換到靠電梯那邊的位置。', 'https://static7.orstatic.com/userphoto2/photo/1K/18KS/08SZWM774F5F762FBC1B0Apx.jpg', '44648', '04:50', 1, 1, '來１次就夠', '2', '1', '2', '2', '3', '2');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('口味上似乎已經重新在地化 獨特性唔係咁明顯了', 'https://static7.orstatic.com/userphoto2/photo/2B/1TLP/0CYIBU00b0a764ec439278lv.jpg', '45166', '00:32', 7, 1, '標新立異', '3', '3', '4', '3', '3', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('位於上環的一間隱世餐廳，又中又英式嘅配搭很特別。一邊嘆白酒一邊食羅漢齋炒麵😂

蝦多士配甜辣醬 ($160)
極推！食不停口！以新鮮的蝦肉為主，經過炸製後外脆內嫩。但要趁熱食，因為油感會變重。搭配甜辣醬的酸甜辣味，亦能減少油膩感

香酥鴨跟薄餅 ($200)
有啲似片皮鴨嘅感覺但鴨肉比較硬身，而且有啲鹹，所以配上薄餅和各種配料味道更平衡

集會脆麵 ($170)
完全能品嚐到中餐的經典風味 — 羅漢齋炒麵🀄️但感覺沒有中式的鑊氣，配菜和味道感覺很健康😅', 'https://static8.orstatic.com/userphoto2/photo/27/1QU8/0CEUZ776853f2c5fec663elv.jpg', '45072', '15:18', 1, 1, '《體驗舊英倫風mix中餐？！》', '3', '5', '4', '3', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('英式中菜聽落好似好高雅 但食完之後諗深一層其實同港式西餐味道有異曲同工之妙只係雙方掉轉叫 不過呢度嘅賣相當然靚好多！

Lunch Set HKD228一位
之前一行四個人去食午餐 有得叫Set Menu就叫咗2個set加2個單點 咩都可以試吓 有前菜有湯有主菜

酸辣湯（Rating：7.5/10）
平實嘅味道冇過鹹 唔會好油 稠稠的不過唔漿口 有啲豆腐有啲菇有啲豆etc 味道正常', 'https://static8.orstatic.com/userphoto2/photo/1S/1EMJ/0A00E72505F909F85B05E3px.jpg', '44625', '03:42', 3, 1, '上環英式中菜新嘗試🇬🇧🇭🇰', '4', '5', '3', '5', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('Gotta to try this out and heard a few good personal reviews about this place.

Table for 4, bought our own wine (no corkage).
3 starters and 3 mains to share.

Shredded duck, chicken balls were ok.

Calamari wand steak ribs were nice.
Lemon chicken was ok.

Atmosphere and vibe was alright with no real theme. Service was ok too.

Look was it a bad experience? No was not. Would I recommend this place ? No not either. Is kind of a place you may want to try out once.

Overall rating 3 out of 5. To me this is a place with ok food on a pricey side. Our bill was $1500 with no drinks for 4.', 'https://static6.orstatic.com/userphoto2/photo/1L/1943/08WT45728D308333FB0297px.jpg', '44408', '03:52', '7', '1', 'Good food, will I return ???,', '4', '3', '4', '4', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('最中意食台式既刈包，包體比饅頭更鬆軟香甜，入面既豬腩肉滷到入味軟淋，加埋啲青瓜絲同泡菜減了一份油膩，多了份清新。', 'https://static6.orstatic.com/userphoto2/photo/29/1SJL/0CQZEH1e8e8fb7641802cblv.jpg', '45130', '11:43', 12, 1, '中英Fusion 菜的典範', '5', '4', '2', '4', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('我覺得就唔算話真係好辣
雞絲既份量都唔少
唔係得幾條
而且都滑唔柴
一上檯既時候睇落幾細份咁
但因為麻醬有d膩
最後我都食剩左d粉皮', 'https://static5.orstatic.com/userphoto2/photo/1N/1BA4/09C818e4d40828035126cdlv.jpg', '44482', '16:45', 11, 2, '可以一試', '4', '4', '3', '5', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('簡單二人外賣午餐
外賣涼面，手撕雞，蓮藕，青瓜小菜
有不同辣度可以選擇。
小菜醃得非常之入味
涼麵味度適中，有少少醋味 非常之開胃
手撕雞份量，可以再大份少少，整體上味道鹹淡適中
外賣，平均每人 $60 非常之好嘅質素', 'https://static8.orstatic.com/userphoto2/photo/22/1MNM/0BL403943C9B7445C44929px.jpg', '44989', '11:27', 3, 2, '抵食之選', '3', '3', '4', '5', '5', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('西营盘附近性价比超高的川菜，主打凉菜系列。

朋友推荐的一家小店，在皇后大道上，就像朋友所说，香港的川菜，可以把高贵打在公屏上，也可以把实惠与美味刻进骨子里。

麻辣手撕鸡
它们家的手撕鸡堪称一绝，分量十足，鸡肉入味，搭配了芹菜香菜，是家乡的味道！点手撕鸡套餐还可以配一杯他们家的自制凉茶。', 'https://static7.orstatic.com/userphoto2/photo/22/1MNM/0BL4023ded280d52d166cflv.jpg', '44930', '11:00', 1, 2, '西营盘不容错过的川渝凉菜', '4', '3', '4', '4', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('visited this restaurant in sheung wan specialises in sichuan cuisine for birthday dinner. booked a room for 12 people minimum spending around 8k for the room. we ended up with 8 people and we ordered the signature dishes as per the photos. the peking duck was traditional, crispy and tasty, while the fish maw rice was also good. the dessert was special for a chinese restaurant which we do not usually see. however the value for the dinner was slightly low because for that price range we could have visited better restaurants in terms of atmosphere and the room environment was not the best', 'https://static8.orstatic.com/userphoto2/photo/2B/1TYD/0D10DRdf017b581d224f08lv.jpg', '45178', '22:03', 9, 3, '上環川菜', '4', '4', '3', '4', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('井巷子雖然說是主打川菜, 但其北京烤鴨是其中一家香港最出色的, 再加上它也有本店鋒膳的菜式如叉燒和羊腩煲, 說是單純的川菜餐廳也不盡是. 比起晚市, 午市的選擇比鋒 膳更多元化, 雖然餐湯並非爵士湯, 但由炒飯, 燒味飯, 花膠撈飯去到大量的麵食菜式, 眼花撩亂, 基本上一個星期吃足七天也不會重複. 在吃主食之前, 先單點叉燒和炸排骨, 前者和鋒饍在口感和味也最過九成相近, 後者炸皮酥香, 內裡肉色粉紅而肉質鮮嫩, 水準上沒有什麼好批評的.

主菜點了麻辣牛肉麵和胡辣羊肉麵, 麵底口感煙韌而不糊, 似陽春麵. 前者先麻後辣, 勁度十足但不會嗆喉, 後者辣度柔和, 多了的是胡椒的香氣. 湯頭易入口, 也有骨肉之香, 牛肉件頭夠厚, 脂肉平均, 吃起來夠爽; 羊肉熟成過後羶香味純厚, 湯頭配合肉味之表達, 吃起來一如以往地滿足.', 'https://static7.orstatic.com/userphoto2/photo/28/1RWK/0CMFNAa01b1077515e0eb0lv.jpg', '45110', '17:14', 5, 3, '瓣瓣掂的麻辣牛餐', '3', '3', '3', '4', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('花生酱先生晚上预约了这里，说是米其林餐厅，知道我爱川菜，要带我吃点好的，跟他一起来。我们点了片皮鸭，羊排，口水鸡，芒果冰粉，担担面。
最好吃的是片皮鸭和羊排，其余平庸无甚惊喜。服务倒是很周到，我们到的很早，导致好几位服务员的轮番凝视哈哈，搞得我们说话都束手束脚，好在后来人多了起来，减少了些火力。
片皮鸭还有个小册子，画的非常可爱，教你怎么吃，离开时我还特意把它带走了。
美食是一时一地的产物，然而最重要的是一起吃饭的人', 'https://static6.orstatic.com/userphoto2/photo/28/1RWK/0CMFNDA991EE8A481E56C4px.jpg', '45110', '00:51', '2', '3', '片皮鸭和羊排不错', '4', '3', '5', '4', '5', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('雖然佢系川菜館，但最欣賞既系佢既叉燒，香脆肥瘦適中，肉質嫩滑而月好juicy ,仲any-call叫左2碟 片鴨亦都系另一款值得推介嘅菜式，片皮鴨快快香脆一又爆，三黃茅台雞，雞肉嫰做法特別有淡淡酒香，識落十分嘢味。
', 'https://static7.orstatic.com/userphoto2/photo/2A/1TKA/0CY89682339A23BD013681px.jpg', '45165', '15:04', 7, 3, '出色粵菜', '5', '4', '4', '3', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('食物：精心烹調的心機川菜料理。菜式創新又傳統，特別推薦茅台三黃雞和酸菜魚，這些菜式經過長時間準備，口感味道都非常出色，讓人流連忘返。茅台三黃雞是這家餐廳最 出名的招牌菜之一，三黃雞肉鮮嫩，配上獨特的茅台酒香味，讓人回味無窮。酸菜魚也是一道非常受歡迎的菜式，採用英國鱸魚，鮮嫩冇腥味，酸菜辣椒的味道非常適中。另外，西班牙向日葵甘栗叉燒都相當唔錯，蜜汁香甜與半肥瘦叉燒口感融合，算係相當高分嘅叉燒。

服務：相當不錯。職員熱情，會介紹精選菜式和推薦酒水，用餐體驗有加乘。

環境：舒適雅致

價格：中上，但絕對值得一試。', 'https://static6.orstatic.com/userphoto2/photo/26/1PR2/0C74L1908cd68037b3efc7lv.jpg', '45165', '17:52', 3, 3, '鋒膳信心保證高級川菜', '4', '4', '2', '4', '4', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('店員態度親切，環境好有印度感覺，加上有好多印度朋友，好似去咗第二個國家食嘢咁好有feel

酥炸奶酪球
炸漿唔太厚夠脆，奶香味都幾濃，同我上次食個間有少少唔同，佢呢個奶酪係固體，口感方面有啲似豆腐', 'https://static8.orstatic.com/userphoto2/photo/2C/1UL7/0D5IPVff20021c78549f63lv.jpg', '45203', '00:38', 7, 4, '上環正宗印度🇮🇳菜 有特色裝修', '5', '3', '3', '3', '2', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('Overall嚟講價錢中等，人均消費$191但勝在店員好熱情，服務又細心，又識講少少廣東話，驚我哋唔夠飽拎咗碗「靚仔」嚟～ 仲好好幫我哋合照 如果大家中意食印度菜都不妨一試～

如果大家中意俾個like支持下 𝗖𝗶𝗮𝗼', 'https://static6.orstatic.com/userphoto2/photo/29/1SQQ/0CSE69982ebdab8d2e2bdclv.jpg', '45186', '04:46', 10, 4, '店員服務熱情細心*地道印度餐廳', '3', '4', '5', '3', '4', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('We did a bit of research on this place and read some reviews before we came and our expectations were not super high. Nevertheless, we were a bit disappointed. I do not think we will come back. There are simply better options in the neighborhood to try if we want Indian food (Far and away my favorite is still the small Bombay Dreams take-away place on possession street. They do not mess around.)

I have the same gripe for the masala, palak paneer, and the rogan josh we ordered: thick and starchy without very much flavor. This strikes me as transparent corner-cutting and I was not too happy. Oh well.

Also, Iam pretty sure they do not have a proper oven for the naan. The bottom was all perfectly even, lightly browned, and there were no black spots on the top, as you tend to get when the chef throws a wheel of naan on the wall of a blazing hot oven.

Overall this place is not too cheap and the quality just is not there. Will not be able to return.', 'https://static8.orstatic.com/userphoto/photo/K/G1H/0362MR431b05bf637ac55elv.jpg', '45180', '17:31', 1, 4, 'Kind of mediocre', '5', '4', '5', '3', '2', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('I bought this Groupon deal because it says it offers unlimted papadom, nan bread and basmati. The photo of the restaurant looks bright and quite nice. The deal was supposed to offer food that worth $450 for a cost of $99 plus $20 service charge. So I bought 2 Groupons to go with a friend. There was only one table of dinners when we turned up at 7pm saturday night. We presented our Groupons and the waitress, who is the daugther of the owner (it is a family run eatery), immediately remove their menus from our table and told us we only have a choice of chicken, fish or veg curry. It reminded me of meal time on an airplane! When I asked if we get to choose the type of curry sauce e.g. Masala. The waitress maintained her rude tone and attitude, told us that was the only choice we have under the Groupon deal. Then she left us with 2 papadom. When she came out to serve the other table, we asked for more papadom. She disappeared again.', 'https://static5.orstatic.com/userphoto/photo/K/G1H/0362MS964854CBDFDB5E81px.jpg', '44648', '10:41', 5, 4, 'POOR - Never visit again :((((((', '3', '3', '2', '2', '3', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('𝑷𝒂𝒏𝒊 𝑷𝒖𝒓𝒊 $88
The indian famous street food which is a crispy puff stuffed with potato, chickpea and spices, while being served with a jar sour minty sauce so you can pour that in before finishing it in a bite. There were also sweet and spicy sauce to add extra flavour up to your own preference.
.
▪️𝑪𝒉𝒊𝒄𝒌𝒆𝒏 𝑻𝒊𝒌𝒌𝒂 $105
Recommened by staff and it was real good! The chickens were sizzling hot and smoking when served, while the meat was flavorful, especially had rich nutty taste. The Chicken was tender and juicy as well which made this dish our favorite among all.
.
▪️𝑪𝒉𝒊𝒄𝒌𝒆𝒏 𝑩𝒖𝒕𝒕𝒆𝒓 𝑴𝒂𝒔𝒂𝒍𝒂 $118
▪️𝑨𝒍𝒐𝒐 𝑳𝒂𝒎𝒃 𝑪𝒖𝒓𝒓𝒚 $128
Can tell the curries were made with all types of fresh spices by their densed but not overpowering flavor.
.
▪️𝑺𝒑𝒓𝒊𝒏𝒈 𝑶𝒏𝒊𝒐𝒏 𝑵𝒂𝒂𝒏 $36
▪️𝑮𝒂𝒓𝒍𝒊𝒄 𝑵𝒂𝒂𝒏 $32
The enormous naans were soft and pillowy with slight charred crispy edge, which were the perfect pair with curry. They serve the rarely seen spring onion flavored naan here, but we both think the garlic naan is still the winner especially it was loaded of fresh minced garlic which maximized the aroma.
.
▪️𝑴𝒂𝒏𝒈𝒐 𝑳𝒂𝒔𝒔𝒊 $39 ', 'https://static6.orstatic.com/userphoto2/photo/29/1SE0/0CPVNX25dae4c6048cd0d1lv.jpg', '45166', '18:48', 4, 4, 'The Best Garlic Naan To Pair With Curry', '3', '5', '3', '5', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('在上環工作很多年，常常叫下午茶，難得找到一間送來又好食又熱的，真是難得，而且重要的是，落單準確無錯，又細心地每盒食物都寫上字，我地叫外賣多數都15-20個茶餐，所以準確性很重要', 'https://static6.orstatic.com/userphoto/photo/6/5AN/011NRP1DACCA0909F0DDEApx.jpg', '40953', '04:38', 12, 5, '用心制作', '4', '3', '4', '5', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('午飯最鍾意捐窿捐罅搵平嘢食。上次發現中上環新開的米線陣，$39一碗玩命米線連飲品。今次想食飽啲去呢間食咗個焗海鮮飯,焗海鮮飯$33 + 凍檸茶（加$2）共$35。不好意思忘了影個焗飯嘅相，不過個飯味道好一般。飯份量唔算多，海鮮食材都有蝦，魷魚。最飽肚係個忌廉汁。性價比一般般 。', 'https://static5.orstatic.com/userphoto/photo/1/XJ/006MHSDEA802F72A64B626px.jpg', '40082', '14:01', 7, 5, '但求填肚的一餐', '2', '3', '3', '3', '4', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('第一次往上環方向尋找tea 既選擇
為左應付仲有好幾個鐘既OT 還是叫一d 飽肚既公司三文治
送到黎既時候先發現佢比平時係其他地方食既size 來得細, 唔知係咪因為tea set,兩層分別係火腿煎蛋同埋蕃茄吞拿魚
煎蛋好爽口, 反而係整份既靈魂似的
薄薄既吞拿魚夾埋蕃茄又帶點清新
Size 比較細又唔會好飽
頂肚OT 剛剛好
繼續努力LU!!', 'https://static8.orstatic.com/userphoto/photo/3/2OH/00J23F35A73EC7AD7F318Fpx.jpg', '39899', '07:30', 1, 5, '靈魂煎蛋', '3', '4', '4', '4', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('I went there yesterday at about 6:45pm. There were totally 5 customers inside my wife and I. We ordered one tea set and one meal set. The food came at aroudn 7pm.
After 5 mins we had the food, the staffs turned off the TV, air-con and even pull down the gate.
How can they do that? We were still having our meals.
It is ridiculous.
I wont go there again', 'https://static8.orstatic.com/userphoto/photo/0/LF/0048F7998C65E92C614C6Apx.jpg', '38949', '21:21', 3, 5, 'The worst', '4', '4', '4', '4', '5', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('喺上環蘇杭街有呢間由台灣人主理嘅小店，可以食到最正宗嘅台灣味道同台式飲品

最喜愛嘅拉絲肉鬆蛋餅($34)
超有誠意有拉絲的蛋餅，十分足料，外面煎到有少少脆皮，配上入邊嗰層暖暖的芝士同肉鬆，再點上甜醬，一鹹一甜咁樣食好滋味好啱一個人份量，如果唔太肚餓的話啱啱好做一個人嘅午餐👌🏻

午市套餐嘉儀雞肉飯加招牌鹽酥雞($58)
午市套餐可以配埋一杯台式嘢飲，點咗檸檬冬瓜茶
同樣份量足料，鹽酥雞炸到好香口，嘉義雞肉飯食到台灣嘅味道，仲有啲配菜就十分完美了

單點可以嗌台式滷肉飯($44) 肥瘦啱啱好，撈飯食一流

黑糖珍珠鮮奶($26) 亦都唔會太甜

小店仲有不同嘅台式飲品可以選擇，喺上環返工嘅朋友可以有多一個takeaway嘅選擇。小店都好有心思，仲可以WhatsApp下單，咁就唔使喺室外等啦🙌🏻', 'https://static7.orstatic.com/userphoto2/photo/2C/1UHQ/0D4U3Y8eb3eede27d58ca3lv.jpg', '45200', '12:03', 4, 6, '上環有心思嘅台灣小店', '3', '3', '4', '4', '2', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('第二次吃外帶，味道相對第一次好喔

第一回
芝士肉鬆蛋餅，肉鬆相對太重味味，餅可以喔
可惜伴醬，是超喊 ，建議如果醬可以分開更好

第二回
吞拿魚芝士蛋餅，沙律醬相對太重口味，餅比第一印象相對軟熟，好好吃
可惜伴醬，是超喊 ，建議如果醬可以分開更好
芋泥蛋餅，芋泥香，但相對甜，喜歡甜可以試吓

其待蛋餅醬有待改善

而魯肉飯，外套，味道方面都是，滿分
推薦大家試試

價錢可以接受 ，套裝不太吸引', 'https://static6.orstatic.com/userphoto2/photo/2A/1TEG/0CX2QH3b717b720c564a5elv.jpg', '45159', '07:08', 4, 6, '吃到台灣的味道', '5', '4', '4', '5', '5', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('台灣早餐店及早餐文化🍴
早餐是一個重要的台灣餐飲文化，🍴對於許多人來說，它是一天中最重要的一餐。早餐文化在不同地區有著不同的特色，而台灣的早餐文化被譽為豐富多樣且美味可口。台灣的早餐種類繁多，讓人眼花繚亂。無論是傳統的油條、豆漿、饅頭，還是創新的蛋餅、麵線、麵包，都能滿足不同口味的人們。這些早餐選擇提供了豐富的營養和能量，讓人一天之初就能充滿活力。台灣的早餐店以其獨特的風格和美食聞名。這些小吃店通常擁有舒適的環境和親切的服務，為顧客提供舒適的用餐體驗。無論是在街頭攤位還是在餐廳內，人們都可以輕鬆地享受美味的早餐。早餐文化也反映了台灣人的生活方式和價值觀。在忙碌的現代生活中，人們越來越重視健康和營養。台灣的早餐店經常提供新鮮的食材和健康的選擇，滿足了現代人的需求。
早哦,這個名字很台灣, 真很值得來體驗一下來自台灣的早餐店美食。這家餐廳名為「早哦 ... 早ooo」，提供了豐富多樣的台灣早餐選擇。其中肉鬆芝士蛋餅及 芋泥肉鬆芝士蛋餅都很早餐。 令人感到充滿了美味和多樣性的台灣早餐, 而且餐廳的服務非常親切, 是很台灣的感覺。工作人員總是笑容滿面，樂於回答問題並提供建議。再者餐廳的環境乾淨整潔，氛圍輕鬆舒適。室內裝潢簡潔，給人一種 放鬆的感覺。今次沒有點蛋餅，先探索和品味一下正餐。我點了珍珠奶茶和滷肉飯配炸豬排，兩者都非常美味。', 'https://static7.orstatic.com/userphoto2/photo/2A/1TDC/0CWUZMC7287D2696D19585px.jpg', '45158', '19:16', 7, 6, '理想中的台灣早餐店', '5', '4', '5', '4', '3', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('牛小排海膽丼飯 $168
牛小排無咁重油脂感, 上面堆滿洋蔥蓉食落甜甜哋配合起黎好下飯, 海膽口感creamy 幾鮮甜

餐廳每位客人有得掃QR code 抽獎, 我同朋友都抽中杯荔枝特飲. 最尾餐廳仲送左個甜品柚子雪芭 refreshing 滿足👍🏻', 'https://static5.orstatic.com/userphoto2/photo/2B/1UAU/0D3H7S221a2e2665baab47lv.jpg', '45193', '12:04', 12, 7, '
高質日本居酒屋', '4', '4', '5', '4', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('今日跟朋友去食好西，佢去上環個邊返工，係和藏食過lunch覺得好高質，所以就帶我收工去試下

餐廳座位唔算多，所以最好要先預約，我地坐左全bar枱位置，可以欣賞師傳既手藝

佢地有omakase，只係$680，認真抵食，不過我地散叫左，因為想食多Ｄ串燒', 'https://static7.orstatic.com/userphoto2/photo/2A/1TFX/0CXDCUDD95489B01FE355Bpx.jpg', '45160', '15:38', 1, 7, '高質串燒日本菜', '5', '5', '5', '4', '3', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('FD幫我慶生，話要去一家好高質嘅日料店，咁好期待。店鋪裝修得好日本風，原木色睇落都好溫馨', 'https://static5.orstatic.com/userphoto2/photo/2A/1T24/0CUN6CE66821B34EAD7FEFpx.jpg', '45148', '04:35', 4, 7, '上環高質日料店', '5', '5', '5', '5', '2', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('今次嚟紅蕃茄，變差了!

點咗個套餐，有西冷同羊架，都係8成熟，另外點紅白湯各一，煙三文魚沙律同小食炸魷魚鬚，甜品係雪糕同芝士蛋糕，飲品有芒果同百香果沙冰.', 'https://static5.orstatic.com/userphoto2/photo/28/1RXE/0CMLHO90cc367077c49a9flv.jpg', '45111', '09:51', 2, 8, '紅番茄飲食工房', '5', '4', '5', '5', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('此店的外表只是一間不起眼的餐廳，位於深水埗的平民區，所以
價錢亦唔貴！當日點了4份下午茶餐，連同加一服務費合共只是$184元，真係抵！', 'https://static5.orstatic.com/userphoto2/photo/28/1RW4/0CMCHO349819f2f7982101lv.jpg', '45109', '21:22', 11, 8, '奶茶唔錯', '5', '3', '3', '4', '4', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('路過此地，$56一個午餐包一片蒜蓉多士、漿水白湯、主食、及凍飲加$2。對比對面一家米芝蘭加持之粉麵店賣$49一碗粉的價錢實屬合理。可惜一代不如一代，此店看其裝修甚 具歷史，但此等歷史輕鬆敗給了下一代。店內一肥女子，相信是其店家之女兒，服務態度惡劣，現場呼喝眾多食客。雖價格合理，食物平庸，但隨之附送此等服務享受，勸君慎入。除餐白湯呈漿水狀外，其它食物尚算合格。主食有嫌味道略缺，但份量充足，其急凍扒類之處理方法亦算洽當。', 'https://static8.orstatic.com/userphoto2/photo/24/1OBY/0BX0XZ81A7C928BED75D89px.jpg', '45111', '16:13', 3, 9, '態度惡劣新享受', '3', '3', '3', '3', '3', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('這類餐廳裝修舊，燈光暗，又唔係sell 人情味. 人客坐落一杯水都冇. 大部分茶記都奉上水一杯. 飲唔飲係另一件事.
好奇怪這類餐廳還可以生存到可能是自己鋪. 全部都好靜有冇背景音樂只聽到老闆娘，其女兒和另一個師奶朋友在閑談.
食物也不出色.
印像中這間餐廳以前是兩個鋪，現在縮埋一間.', 'https://static5.orstatic.com/userphoto2/photo/24/1OBY/0BX0Y0BA49AF556D0B92ADpx.jpg', '45109', '02:43', 8, 9, '門堪羅雀', '4', '5', '3', '5', '4', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('It is hard to find such a wonderful restaurant in Sai Ying Pun or Sai Wan. It suits casual or business lunch too. They provide good quality food and drink. Also, their staff provides very good service there too. I highly recommend this restaurant to you!', 'https://static7.orstatic.com/userphoto/photo/O/JJY/03V1Z6985B0DA78CD3E0F8px.jpg', '43114', '21:35', 10, 10, 'Good Place for Lunch', '4', '5', '4', '5', '5', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('呢間嘅Lunch Omakase最平係$450，前菜、蒸蛋 、壽司10件、壽司卷物6件（細）、湯甜品，都真係好抵食呢度仲有好靚嘅金光閃閃風鈴打卡位，除咗有吧枱座位之外，仲有好闊落嘅沙發位置', 'https://static8.orstatic.com/userphoto2/photo/2A/1SYI/0CTXDZc4132d3a40824399lv.jpg', '45145', '02:06', 9, 11, 'CP值高Lunch Omakase', '4', '5', '2', '5', '4', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('三文魚籽 - 大大粒，味道豐富好鮮甜。
海膽 - 味道幾濃郁。
海鰻 - 醬汁味道剛好，唔會太重，食到魚嘅味道。
中拖羅，油脂感適中。
金目雕，輕輕燒過，食到魚嘅肉質，味道幾香。', 'https://static8.orstatic.com/userphoto2/photo/29/1SPC/0CS47B5ec6f9d5f729fb0alv.jpg', '45136', '09:58', 4, 11, ' 樓上舖食個靚午  舒適度十足嘅Omakase', '5', '3', '5', '3', '5', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('襯住放假朋友生日去同佢慶祝
食佢最愛嘅Omakase Lunch
呢間餐廳環境光鮮亮麗 有bling bling嘅感覺', 'https://static5.orstatic.com/userphoto2/photo/28/1RWN/0CMG6OEDC45D8800322BF7px.jpg', '45110', '22:07', 11, 11, '
環境光鮮亮麗鮮味十足推介', '3', '5', '5', '4', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('有時大菜遠比不上鑊氣小菜小炒，後者總是有股魅力，會令人間唔中想來瘋狂吃一下。

這頓飯是無心插柳的晚餐，和飲食高層即興約的。於飲食平台見到此餐廳有不錯的評價，基於即興及小弟懶的理由，就來此吃。', 'https://static7.orstatic.com/userphoto2/photo/2B/1TKZ/0CYDBQ5d3b766b42216500lv.jpg', '45165', '17:58', 8, 12, '傳統粵菜 - 即興鑊氣小炒之夜', '3', '4', '3', '3', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('店員都好nice，還聊起來，知悉師傅曾就職於日本東京富麗華多年，專為高官與明星服務，回港後在多間米芝蓮酒店及連鎖酒樓集團做主管，經驗相當豐富', 'https://static6.orstatic.com/userphoto2/photo/29/1SA6/0CP4GL8a90084b3a740c4dlv.jpg', '45122', '22:15', 1, 12, '上環足料傳統酒家', '5', '3', '4', '3', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('一期一會。下次再來，可能都是即興呢', 'https://static6.orstatic.com/userphoto2/photo/2B/1TKZ/0CYDBP52F737E078230F4Dpx.jpg', '45165', '06:38', 7, 12, '傳統粵菜 - 即興鑊氣小炒之夜', '3', '5', '4', '4', '4', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('今天中午路過上環，趁住未夠 12:30pm，打工仔未出来午膳，便走進這間酒樓，只見酒樓門面一般，對它沒有很大期望，只求食飽。但發覺她的點心真是好吃，牛肉球內混入芫 茜和馬蹄，非常清香爽口，沒有油膩感覺。义燒包內的义燒，有炭燒香氣，完全不是那些染了红色殭屍肉的貨色，此外，她的北菇花膠鹅掌也做得不錯，鹅掌非常厚肉，只是花胶略硬，軟一點會更好，但作為一個點心，實在是非常超班，最後甜品要了綠豆沙，雖然屬於小點，但制作一點也不馬虎，綠豆起沙，內有臭草和海帶，是傳統的做法，很滿意。', 'https://static8.orstatic.com/userphoto2/photo/26/1PNF/0C6EMBE16173167524CE0Fpx.jpg', '45110', '14:13', 9, 12, '
藉得推薦的廣東酒樓', '4', '4', '3', '5', '5', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('最近返工真的好疲累，要食返餐好慰勞下自己這間位於尖沙咀H Zentre的樓上日本菜餐廳，餐廳環境舒適，而且裝修充滿日本風', 'https://static5.orstatic.com/userphoto2/photo/2B/1U9G/0D376Oea62bedce9010161lv.jpg', '45190', '21:36', 7, 13, '高質驚喜江户前廚師發辦', '4', '4', '4', '4', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('Green Orange是一家提供精緻西餐料理的餐廳。他們的食物口味獨特，質量穩定，菜單選擇多樣，適合喜愛西餐的人士品嚐。', 'https://static7.orstatic.com/userphoto2/photo/2B/1TY7/0D0ZAI1d1873dec0b7c947lv.jpg', '45165', '12:41', 11, 14, '精緻及美味的西式生日晚餐', '4', '5', '3', '4', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('Had an amazing night here
The resto has quite a hidden and exclusive vibe, but the staff are super warm and friendly
I told them that i didnt quite like the cocktail i ordered cuz i was expecting more umeshu, then they kindly treated us another glass of umeshu very nice of them to make sure we had a great time and we did!

Food is in the style of twisted jp

- tuna cracker
- spicy tuna crunch maki
- salmon teriyaki
- baby chicken
- corn tempura
- matcha lover
- yuzu sorbet

Brief review of individual food:
Tuna cracker: cracker not very crunchy and flavours not as distinct as in the maki (with the rice crunch)', 'https://static8.orstatic.com/userphoto2/photo/27/1QL9/0CD37Z3011c535b1e7a3c0lv.jpg', '45064', '06:03', 12, 15, 'Great taste', '4', '3', '4', '4', '3', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('香港餐廳週第2彈！Honjo係比較多人好評嘅地方，所以就簡左黎食lunch啦。價錢係$198加一，我地升級左starter +$38所以大約235一人。', 'https://static5.orstatic.com/userphoto2/photo/2A/1T68/0CVGDKb47ea58d0c12f20elv.jpg', '45152', '00:36', 7, 15, '好食但係太細份', '5', '5', '5', '5', '2', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('呢餐lunch真係好開心 真係chill得嚟又有星馬風味 餐廳仲有好多單人座位 一個人嚟食lunch都唔會尷尬啊', 'https://static7.orstatic.com/userphoto2/photo/2B/1U5S/0D2H9Aaffc44be77f6bdaalv.jpg', '45188', '05:19', 5, 16, '上環抵食星馬菜lunch set', '3', '5', '3', '4', '3', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('近期愛上新加坡，馬來西亞美食
今次朋友約咗嚟呢間LeeLaksa
非常大嘅招牌唔會搵唔到
諗住上環食嘢唔會平得去邊
點知佢哋下午茶餐係非常抵食
我哋叫咗四個餐，有兩個餐仲另外加錢飲椰青都係$300到', 'https://static7.orstatic.com/userphoto2/photo/2C/1UNG/0D5YW23fa03ac49279c93elv.jpg', '45207', '06:28', 10, 16, '超抵食星馬菜', '4', '4', '3', '3', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('今日嚟開上環呢邊探朋友，
同老公食埋嘢先過去～
搵到呢間好似幾唔錯、價錢又經濟嘅新加坡菜餐廳', 'https://static8.orstatic.com/userphoto2/photo/27/1QUM/0CEXSJD7877B4F6B0670B7px.jpg', '45074', '19:07', 2, 16, '高質抵食weekend 都有lunch set', '4', '4', '4', '4', '4', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('由裝修風格至食物質素都非常高
相信好快又會再見面', 'https://static6.orstatic.com/userphoto2/photo/2C/1UJK/0D57812037cfe655fa1559lv.jpg', '45203', '02:52', 7, 17, 'ʀᴇsᴛᴀᴜʀᴀɴᴛ ʀᴇᴠɪᴇᴡ ᴏʟᴅɪsʜ', '4', '5', '4', '4', '4', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('上環人氣西班牙餐廳呢間餐廳個Vibes幾好,播住音樂幾有氣氛,燈光就比較昏暗,襯返個feel掛呢排雖然天氣好熱,但餐廳入面keep住開風扇幾舒服呢次星期日黎都幾多人黎食,差 唔多full house咁濟,環境唔錯,坐Bar枱仲有得望住個廚師煮野食,幾正', 'https://static5.orstatic.com/userphoto2/photo/27/1R3S/0CGQVW4766a6d117e3f4b9lv.jpg', '45083', '15:11', 3, 18, '上環高質西班牙菜慶生之選!', '4', '5', '5', '4', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('朋友生日去食個late lunch，誓要還佢一頓西班牙餐見呢間食評都幾高分，所以去試吓。環境幾chill ,不過冷氣唔太夠，嘢食精緻，味道一流，而且d 職員都好有禮貌☺️      
', 'https://static8.orstatic.com/userphoto2/photo/2B/1U9X/0D3AJB01189ea935b9150elv.jpg', '45191', '14:02', 9, 18, 'Chill & yummy', '3', '3', '4', '4', '3', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('相信大家都聽過Pica pica，價錢合理之餘食物質素相當高，係我會不斷回訪的西班牙菜!!! 差唔多試哂成個Menu這篇集合我幾次去pica pica試過的菜式，全部都十分推介', 'https://static8.orstatic.com/userphoto2/photo/27/1R0X/0CG6MBa59193d259492d32lv.jpg', '45080', '15:12', 13, 18, '心目中頭𝟯位好食的西班牙菜', '5', '5', '5', '3', '3', '5');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('整體這間店非常適合減肥健身人士，雖然都是夏威夷蓋飯，但是選擇其實很多。外面很多這種poke bowl都是主打外賣沒有堂食的，但這間也有10至20個座位，以後跟朋友出來吃飯也有健康的選擇！難怪當日是平日的 晚上不夠7時已經有不少客人呢！', 'https://static7.orstatic.com/userphoto2/photo/2B/1TSL/0CZVCEDBE75CEEC5D0AFA5px.jpg', '45174', '02:21', 13, 19, '增肌減脂之好選擇！', '4', '4', '3', '4', '3', '3');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('有一天，我和同事想發掘一下上環的餐廳，記得山腰那邊有一家西班牙餐廳，經常路過時，都可以見到一大塊風乾火腿，擺放在桌子上。
今次坐在室內，但因為算是開放式設計，很通風，食客也可以看到外面的街景，非常寫意。', 'https://static6.orstatic.com/userphoto2/photo/27/1QWX/0CFE898a6f4ce75ba4c2c3lv.jpg', '45076', '12:04', 10, 20, '上環美味的西班牙菜 - Reserva Iberica', '3', '3', '4', '5', '3', '4');
INSERT INTO Review (review_content, image_upload, date_of_review, time_of_review, user_id, restaurant_id, title, clean_rank, taste_rank, service_rank, environment_rank, cp_rank, total_rank) VALUES ('Use to visit their old shop up the street.  The old shop was significantly smaller and only served ham to go.

Now with the new shop, there is an amazing dine in experience.  They now offer a wide range of food choices on top of the world class Jamon.

We tried a range of items but definitely the highlight is the ham.

Definitely worth a try and hope they continue to refine what they offer.  ', 'https://static8.orstatic.com/userphoto2/photo/1X/1IWS/0AUH4J67185c30a23d8ff4lv.jpg', '44804', '16:29', 7, 20, 'One of the best Jamón Shops in Hong Kong', '3', '3', '4', '3', '2', '3');
select * from review;
select * from restaurants;






























