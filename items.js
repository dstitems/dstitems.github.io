var dst = new Vue({
    el: '#dts-item-list',
    data: {
        keyword: "",
        items: [
            {
                "icon":"Abigail's Flower.png",
                "name":"Abigail's Flower",
                "chs":"Abigail之花",
                "debug":"abigail_flower"
            },
            {
                "icon":"Applied Horticulture.png",
                "name":"Applied Horticulture",
                "chs":"应用园艺学",
                "debug":"book_gardening"
            },
            {
                "icon":"Ashes.png",
                "name":"Ashes",
                "chs":"灰烬",
                "debug":"ash"
            },
            {
                "icon":"Axe.png",
                "name":"Axe",
                "chs":"斧头",
                "debug":"axe"
            },
            {
                "icon":"Backpack.png",
                "name":"Backpack",
                "chs":"背包",
                "debug":"backpack"
            },
            {
                "icon":"Bacon and Eggs.png",
                "name":"Bacon and Eggs",
                "chs":"鸡蛋火腿",
                "debug":"baconeggs"
            },
            {
                "icon":"Ball and Cup.png",
                "name":"Ball and Cup",
                "chs":"球与奖杯",
                "debug":"trinket_7"
            },
            {
                "icon":"Bat Bat.png",
                "name":"Bat Bat",
                "chs":"蝙蝠斧棍",
                "debug":"batbat"
            },
            {
                "icon":"Batilisk Wing.png",
                "name":"Batilisk Wing",
                "chs":"黑蝙蝠翅膀",
                "debug":"batwing"
            },
            {
                "icon":"Beard Hair.png",
                "name":"Beard Hair",
                "chs":"胡须",
                "debug":"beardhair"
            },
            {
                "icon":"Beardling.png",
                "name":"Beardling",
                "chs":"兔子",
                "debug":"rabbit"
            },
            {
                "icon":"Bee.png",
                "name":"Bee",
                "chs":"蜜蜂",
                "debug":"bee"
            },
            {
                "icon":"Bee Mine.png",
                "name":"Bee Mine",
                "chs":"蜜蜂地雷",
                "debug":"beemine"
            },
            {
                "icon":"Beefalo Hat.png",
                "name":"Beefalo Hat",
                "chs":"牛帽",
                "debug":"beefalohat"
            },
            {
                "icon":"Beefalo Horn.png",
                "name":"Beefalo Horn",
                "chs":"牛角",
                "debug":"horn"
            },
            {
                "icon":"Beefalo Wool.png",
                "name":"Beefalo Wool",
                "chs":"牛毛",
                "debug":"beefalowool"
            },
            {
                "icon":"Beekeeper Hat.png",
                "name":"Beekeeper Hat",
                "chs":"养蜂人的帽子",
                "debug":"beehat"
            },
            {
                "icon":"Belt of Hunger.png",
                "name":"Belt of Hunger",
                "chs":"饥饿腰带",
                "debug":"armorslurper"
            },
            {
                "icon":"Berries.png",
                "name":"Berries",
                "chs":"浆果",
                "debug":"berries"
            },
            {
                "icon":"Berry Bush Item.png",
                "name":"Berry Bush",
                "chs":"浆果灌木丛",
                "debug":"dug_berrybush"
            },
            {
                "icon":"Birds of the World.png",
                "name":"Birds of the World",
                "chs":"世界上的鸟",
                "debug":"book_birds"
            },
            {
                "icon":"Bird Trap.png",
                "name":"Bird Trap",
                "chs":"捕鸟器",
                "debug":"birdtrap"
            },
            {
                "icon":"Blow Dart.png",
                "name":"Blow Dart",
                "chs":"吹箭",
                "debug":"blowdart_pipe"
            },
            {
                "icon":"Blue Cap.png",
                "name":"Blue Cap",
                "chs":"蓝菇头",
                "debug":"blue_cap"
            },
            {
                "icon":"Blue Gem.png",
                "name":"Blue Gem",
                "chs":"蓝宝石",
                "debug":"bluegem"
            },
            {
                "icon":"Blueprint.png",
                "name":"Blueprint",
                "chs":"蓝图",
                "debug":"<name>_blueprint"
            },
            {
                "icon":"Boards.png",
                "name":"Boards",
                "chs":"木板",
                "debug":"boards"
            },
            {
                "icon":"Boomerang.png",
                "name":"Boomerang",
                "chs":"回旋镖",
                "debug":"boomerang"
            },
            {
                "icon":"Box Thing.png",
                "name":"Box Thing",
                "chs":"盒状传送机零件",
                "debug":"teleportato_box"
            },
            {
                "icon":"Braised Eggplant.png",
                "name":"Braised Eggplant",
                "chs":"红烧茄子",
                "debug":"eggplant_cooked"
            },
            {
                "icon":"Breezy Vest.png",
                "name":"Breezy Vest",
                "chs":"夏日背心",
                "debug":"trunkvest_summer"
            },
            {
                "icon":"Broken Shell.png",
                "name":"Broken Shell",
                "chs":"破碎的背壳",
                "debug":"slurtle_shellpieces"
            },
            {
                "icon":"Bug Net.png",
                "name":"Bug Net",
                "chs":"捕虫网",
                "debug":"bugnet"
            },
            {
                "icon":"Bunny Puff.png",
                "name":"Bunny Puff",
                "chs":"兔毛",
                "debug":"manrabbit_tail"
            },
            {
                "icon":"Bush Hat.png",
                "name":"Bush Hat",
                "chs":"丛林帽",
                "debug":"bushhat"
            },
            {
                "icon":"Butter.png",
                "name":"Butter",
                "chs":"蝴蝶黄油",
                "debug":"butter"
            },
            {
                "icon":"Butter Muffin.png",
                "name":"Butter Muffin",
                "chs":"奶油松饼",
                "debug":"butterflymuffin"
            },
            {
                "icon":"Butterfly.png",
                "name":"Butterfly",
                "chs":"蝴蝶",
                "debug":"butterfly"
            },
            {
                "icon":"Butterfly Wings.png",
                "name":"Butterfly Wings",
                "chs":"蝴蝶翅膀",
                "debug":"butterflywings"
            },
            {
                "icon":"Carrot.png",
                "name":"Carrot",
                "chs":"胡萝卜",
                "debug":"carrot"
            },
            {
                "icon":"Carrot Seeds.png",
                "name":"Carrot Seeds",
                "chs":"胡萝卜种子",
                "debug":"carrot_seeds"
            },
            {
                "icon":"Cave Banana.png",
                "name":"Cave Banana",
                "chs":"洞穴香蕉",
                "debug":"cave_banana"
            },
            {
                "icon":"Cave Rock Turf.png",
                "name":"Cave Rock Turf",
                "chs":"洞穴石地",
                "debug":"turf_underrock"
            },
            {
                "icon":"Charcoal.png",
                "name":"Charcoal",
                "chs":"木炭",
                "debug":"charcoal"
            },
            {
                "icon":"Carpeted Flooring.png",
                "name":"Carpeted Flooring",
                "chs":"地毯地板",
                "debug":"turf_carpetfloor"
            },
            {
                "icon":"Checkerboard Flooring.png",
                "name":"Checkerboard Flooring",
                "chs":"棋盘地毯",
                "debug":"turf_checkerfloor"
            },
            {
                "icon":"Chilled Amulet.png",
                "name":"Chilled Amulet",
                "chs":"寒冰护符",
                "debug":"blueamulet"
            },
            {
                "icon":"Road Turf.png",
                "name":"Cobblestones",
                "chs":"卵石路",
                "debug":"turf_road"
            },
            {
                "icon":"Codex Umbra.png",
                "name":"Codex Umbra",
                "chs":"暗影密典",
                "debug":"waxwelljournal"
            },
            {
                "icon":"Construction Amulet.png",
                "name":"Construction Amulet",
                "chs":"建造护符",
                "debug":"greenamulet"
            },
            {
                "icon":"Cooked Batilisk Wing.png",
                "name":"Cooked Batilisk Wing",
                "chs":"煮熟的黑蝙蝠翅膀",
                "debug":"batwing_cooked"
            },
            {
                "icon":"Cooked Blue Cap.png",
                "name":"Cooked Blue Cap",
                "chs":"烤蓝蘑菇",
                "debug":"blue_cap_cooked"
            },
            {
                "icon":"Cooked Cave Banana.png",
                "name":"Cooked Cave Banana",
                "chs":"洞穴香蕉",
                "debug":"cave_banana_cooked"
            },
            {
                "icon":"Cooked Egg.png",
                "name":"Cooked Egg",
                "chs":"熟鸡蛋",
                "debug":"bird_egg_cooked"
            },
            {
                "icon":"Cooked Eel.png",
                "name":"Cooked Eel",
                "chs":"煮熟的鳗鱼",
                "debug":"eel_cooked"
            },
            {
                "icon":"Cooked Fish.png",
                "name":"Cooked Fish",
                "chs":"熟鱼",
                "debug":"fish_cooked"
            },
            {
                "icon":"Cooked Frog Legs.png",
                "name":"Cooked Frog Legs",
                "chs":"熟青蛙腿",
                "debug":"froglegs_cooked"
            },
            {
                "icon":"Cooked Green Cap.png",
                "name":"Cooked Green Cap",
                "chs":"烤绿蘑菇",
                "debug":"green_cap_cooked"
            },
            {
                "icon":"Cooked Leafy Meat.png",
                "name":"Cooked Leafy Meat",
                "chs":"煮熟的多叶肉",
                "debug":"plantmeat_cooked"
            },
            {
                "icon":"Cooked Mandrake.png",
                "name":"Cooked Mandrake",
                "chs":"熟曼德拉草",
                "debug":"mandrake"
            },
            {
                "icon":"Cooked Meat.png",
                "name":"Cooked Meat",
                "chs":"熟肉",
                "debug":"cookedmeat"
            },
            {
                "icon":"Cooked Monster Meat.png",
                "name":"Cooked Monster Meat",
                "chs":"熟怪兽肉",
                "debug":"cookedmonstermeat"
            },
            {
                "icon":"Cooked Morsel.png",
                "name":"Cooked Morsel",
                "chs":"熟肉块",
                "debug":"cookedsmallmeat"
            },
            {
                "icon":"Cooked Red Cap.png",
                "name":"Cooked Red Cap",
                "chs":"烤红蘑菇",
                "debug":"red_cap_cooked"
            },
            {
                "icon":"Compass.png",
                "name":"Compass",
                "chs":"指南针",
                "debug":"compass"
            },
            {
                "icon":"Corn.png",
                "name":"Corn",
                "chs":"玉米",
                "debug":"corn"
            },
            {
                "icon":"Corn Seeds.png",
                "name":"Corn Seeds",
                "chs":"玉米种子",
                "debug":"corn_seeds"
            },
            {
                "icon":"Crank Thing.png",
                "name":"Crank Thing",
                "chs":"曲柄状传送机零件",
                "debug":"teleportato_crank"
            },
            {
                "icon":"Crimson Feather.png",
                "name":"Crimson Feather",
                "chs":"红色羽毛",
                "debug":"feather_robin"
            },
            {
                "icon":"Crow.png",
                "name":"Crow",
                "chs":"乌鸦",
                "debug":"crow"
            },
            {
                "icon":"Crow Feather.png",
                "name":"Crow Feather",
                "chs":"乌鸦羽毛",
                "debug":"feather_crow"
            },
            {
                "icon":"Cut Grass.png",
                "name":"Cut Grass",
                "chs":"割下的草",
                "debug":"cutgrass"
            },
            {
                "icon":"Cut Reeds.png",
                "name":"Cut Reeds",
                "chs":"割好的芦苇",
                "debug":"cutreeds"
            },
            {
                "icon":"Cut Stone.png",
                "name":"Cut Stone",
                "chs":"石砖块",
                "debug":"cutstone"
            },
            {
                "icon":"Dapper Vest.png",
                "name":"Dapper Vest",
                "chs":"小巧背心",
                "debug":"sweatervest"
            },
            {
                "icon":"Dark Petals.png",
                "name":"Dark Petals",
                "chs":"恶魔花瓣",
                "debug":"petals_evil"
            },
            {
                "icon":"Dark Sword.png",
                "name":"Dark Sword",
                "chs":"影刀",
                "debug":"nightsword"
            },
            {
                "icon":"Green Staff.png",
                "name":"Deconstruction Staff",
                "chs":"毁灭权杖",
                "debug":"greenstaff"
            },
            {
                "icon":"Deerclops Eyeball.png",
                "name":"Deerclops Eyeball",
                "chs":"巨鹿眼球",
                "debug":"deerclops_eyeball"
            },
            {
                "icon":"Dessicated Tentacle.png",
                "name":"Dessicated Tentacle",
                "chs":"干瘪触手",
                "debug":"trinket_12"
            },
            {
                "icon":"Divining Rod.png",
                "name":"Divining Rod",
                "chs":"魔杖",
                "debug":"diviningrod"
            },
            {
                "icon":"Dragon Fruit.png",
                "name":"Dragon Fruit",
                "chs":"火龙果",
                "debug":"dragonfruit"
            },
            {
                "icon":"Dragon Fruit Seeds.png",
                "name":"Dragon Fruit Seeds",
                "chs":"火龙果种子",
                "debug":"dragonfruit_seeds"
            },
            {
                "icon":"Dragonpie.png",
                "name":"Dragonpie",
                "chs":"火龙果派",
                "debug":"dragonpie"
            },
            {
                "icon":"Drumstick.png",
                "name":"Drumstick",
                "chs":"鸡腿",
                "debug":"drumstick"
            },
            {
                "icon":"Durian.png",
                "name":"Durian",
                "chs":"榴莲",
                "debug":"durian"
            },
            {
                "icon":"Durian Seeds.png",
                "name":"Durian Seeds",
                "chs":"榴莲种子",
                "debug":"durian_seeds"
            },
            {
                "icon":"Eel.png",
                "name":"Eel",
                "chs":"鳗鱼",
                "debug":"eel"
            },
            {
                "icon":"Egg.png",
                "name":"Egg",
                "chs":"鸡蛋",
                "debug":"bird_egg"
            },
            {
                "icon":"Eggplant.png",
                "name":"Eggplant",
                "chs":"茄子",
                "debug":"eggplant"
            },
            {
                "icon":"Eggplant Seeds.png",
                "name":"Eggplant Seeds",
                "chs":"茄子种子",
                "debug":"eggplant_seeds"
            },
            {
                "icon":"Extra Smelly Durian.png",
                "name":"Extra Smelly Durian",
                "chs":"超臭榴莲",
                "debug":"durian_cooked"
            },
            {
                "icon":"Eye Bone.png",
                "name":"Eye Bone",
                "chs":"切斯特眼骨",
                "debug":"chester_eyebone"
            },
            {
                "icon":"Fake Kazoo.png",
                "name":"Fake Kazoo",
                "chs":"假卡祖笛",
                "debug":"trinket_2"
            },
            {
                "icon":"Feather Hat.png",
                "name":"Feather Hat",
                "chs":"羽毛帽",
                "debug":"featherhat"
            },
            {
                "icon":"Fire Dart.png",
                "name":"Fire Dart",
                "chs":"燃烧吹箭",
                "debug":"blowdart_fire"
            },
            {
                "icon":"Fire Staff.png",
                "name":"Fire Staff",
                "chs":"火魔杖",
                "debug":"firestaff"
            },
            {
                "icon":"Fireflies.png",
                "name":"Fireflies",
                "chs":"萤火虫",
                "debug":"fireflies"
            },
            {
                "icon":"Fish.png",
                "name":"Fish",
                "chs":"鱼",
                "debug":"fish"
            },
            {
                "icon":"Fish Tacos.png",
                "name":"Fish Tacos",
                "chs":"鱼炸玉米饼",
                "debug":"fishtacos"
            },
            {
                "icon":"Fishing Rod.png",
                "name":"Fishing Rod",
                "chs":"钓竿",
                "debug":"fishingrod"
            },
            {
                "icon":"Fishsticks.png",
                "name":"Fishsticks",
                "chs":"炸鱼条",
                "debug":"fishsticks"
            },
            {
                "icon":"Fist Full of Jam.png",
                "name":"Fist Full of Jam",
                "chs":"果酱蜜饯",
                "debug":"jammypreserves"
            },
            {
                "icon":"Fleshy Bulb.png",
                "name":"Fleshy Bulb",
                "chs":"多肉的球茎",
                "debug":"lureplantbulb"
            },
            {
                "icon":"Flint.png",
                "name":"Flint",
                "chs":"燧石",
                "debug":"flint"
            },
            {
                "icon":"Football Helmet.png",
                "name":"Football Helmet",
                "chs":"猪皮足球头盔",
                "debug":"footballhat"
            },
            {
                "icon":"Foliage.png",
                "name":"Foliage",
                "chs":"树叶",
                "debug":"foliage"
            },
            {
                "icon":"Forest Turf.png",
                "name":"Forest Turf",
                "chs":"森林草皮",
                "debug":"turf_forest"
            },
            {
                "icon":"Frazzled Wires.png",
                "name":"Frazzled Wires",
                "chs":"破烂电线",
                "debug":"trinket_6"
            },
            {
                "icon":"Fried Drumstick.png",
                "name":"Fried Drumstick",
                "chs":"炸鸡腿",
                "debug":"drumstick_cooked"
            },
            {
                "icon":"Fried Tallbird Egg.png",
                "name":"Fried Tallbird Egg",
                "chs":"油煎高脚鸟蛋",
                "debug":"tallbirdegg_cooked"
            },
            {
                "icon":"Frog Legs.png",
                "name":"Frog Legs",
                "chs":"青蛙腿",
                "debug":"froglegs"
            },
            {
                "icon":"Froggle Bunwich.png",
                "name":"Froggle Bunwich",
                "chs":"青蛙圆面包三明治",
                "debug":"frogglebunwich"
            },
            {
                "icon":"Fruit Medley.png",
                "name":"Fruit Medley",
                "chs":"水果拼盘",
                "debug":"fruitmedley"
            },
            {
                "icon":"Fungal Turf.png",
                "name":"Fungal Turf (Blue)",
                "chs":"菌类地皮（蓝）",
                "debug":"turf_fungus"
            },
            {
                "icon":"Fungus Turf Red.png",
                "name":"Fungal Turf (Red)",
                "chs":"菌类地皮（红）",
                "debug":"turf_fungus"
            },
            {
                "icon":"Fungus Turf Green.png",
                "name":"Fungal Turf (Green)",
                "chs":"菌类地皮（绿）",
                "debug":"turf_fungus"
            },
            {
                "icon":"Fur Roll.png",
                "name":"Fur Roll",
                "chs":"毛皮铺盖",
                "debug":"bedroll_furry"
            },
            {
                "icon":"Garland.png",
                "name":"Garland",
                "chs":"花环",
                "debug":"flowerhat"
            },
            {
                "icon":"Gears.png",
                "name":"Gears",
                "chs":"齿轮",
                "debug":"gears"
            },
            {
                "icon":"Glow Berry.png",
                "name":"Glow Berry",
                "chs":"发光浆果",
                "debug":"wormlight"
            },
            {
                "icon":"Gnome.png",
                "name":"Gnome",
                "chs":"地精玩偶",
                "debug":"trinket_4"
            },
            {
                "icon":"Gold Nugget.png",
                "name":"Gold Nugget",
                "chs":"金块",
                "debug":"goldnugget"
            },
            {
                "icon":"Gord's Knot.png",
                "name":"Gord's Knot",
                "chs":"歌德结",
                "debug":"trinket_3"
            },
            {
                "icon":"Grass Suit.png",
                "name":"Grass Suit",
                "chs":"草地盔甲",
                "debug":"armorgrass"
            },
            {
                "icon":"Grass Tuft Item.png",
                "name":"Grass Tuft",
                "chs":"长草簇",
                "debug":"grass"
            },
            {
                "icon":"Grass Turf.png",
                "name":"Grass Turf",
                "chs":"长草草皮",
                "debug":"turf_grass"
            },
            {
                "icon":"Green Gem.png",
                "name":"Green Gem",
                "chs":"绿宝石",
                "debug":"greengem"
            },
            {
                "icon":"Green Cap.png",
                "name":"Green Cap",
                "chs":"绿菇头",
                "debug":"green_cap"
            },
            {
                "icon":"Guano.png",
                "name":"Guano",
                "chs":"鸟屎",
                "debug":"guano"
            },
            {
                "icon":"Guano Turf.png",
                "name":"Guano Turf",
                "chs":"鸟粪草地",
                "debug":"turf_cave"
            },
            {
                "icon":"Guardian's Horn.png",
                "name":"Guardian's Horn",
                "chs":"守卫者的角",
                "debug":"minotaurhorn"
            },
            {
                "icon":"Gunpowder.png",
                "name":"Gunpowder",
                "chs":"火药",
                "debug":"gunpowder"
            },
            {
                "icon":"Ham Bat.png",
                "name":"Ham Bat",
                "chs":"火腿球棒",
                "debug":"hambat"
            },
            {
                "icon":"Hammer.png",
                "name":"Hammer",
                "chs":"锤子",
                "debug":"hammer"
            },
            {
                "icon":"Hardened Rubber Bung.png",
                "name":"Hardened Rubber Bung",
                "chs":"硬化橡胶塞",
                "debug":"trinket_8"
            },
            {
                "icon":"Hatching Tallbird Egg.png",
                "name":"Hatching Tallbird Egg",
                "chs":"孵化的高脚鸟蛋",
                "debug":"tallbirdegg_cracked"
            },
            {
                "icon":"Hay Wall.png",
                "name":"Hay Wall",
                "chs":"干草墙",
                "debug":"wall_hay_item"
            },
            {
                "icon":"Healing Salve.png",
                "name":"Healing Salve",
                "chs":"治疗药膏",
                "debug":"healingsalve"
            },
            {
                "icon":"Thermal Stone.png",
                "name":"Thermal Stone",
                "chs":"蓄热石",
                "debug":"heatrock"
            },
            {
                "icon":"Honey.png",
                "name":"Honey",
                "chs":"蜂蜜",
                "debug":"honey"
            },
            {
                "icon":"Honey Ham.png",
                "name":"Honey Ham",
                "chs":"蜜汁火腿",
                "debug":"honeyham"
            },
            {
                "icon":"Honey Nuggets.png",
                "name":"Honey Nuggets",
                "chs":"甜蜜金砖",
                "debug":"honeynuggets"
            },
            {
                "icon":"Bandage.png",
                "name":"Honey Poultice",
                "chs":"蜂蜜药膏",
                "debug":"bandage"
            },
            {
                "icon":"Honeycomb.png",
                "name":"Honeycomb",
                "chs":"蜂巢",
                "debug":"honeycomb"
            },
            {
                "icon":"Hot Pumpkin.png",
                "name":"Hot Pumpkin",
                "chs":"热南瓜",
                "debug":"pumpkin_cooked"
            },
            {
                "icon":"Hound's Tooth.png",
                "name":"Hound's Tooth",
                "chs":"狗牙",
                "debug":"houndstooth"
            },
            {
                "icon":"Houndius Shootius.png",
                "name":"Houndius Shootius",
                "chs":"恒迪尤斯·舒提尤斯",
                "debug":"eyeturret_item"
            },
            {
                "icon":"Ice Staff.png",
                "name":"Ice Staff",
                "chs":"冰魔杖",
                "debug":"icestaff"
            },
            {
                "icon":"Jerky.png",
                "name":"Jerky",
                "chs":"乔奇",
                "debug":"meat_dried"
            },
            {
                "icon":"Kabobs.png",
                "name":"Kabobs",
                "chs":"肉串",
                "debug":"kabobs"
            },
            {
                "icon":"Killer Bee.png",
                "name":"Killer Bee",
                "chs":"杀人蜂",
                "debug":"killerbee"
            },
            {
                "icon":"Koalefant Trunk.png",
                "name":"Koalefant Trunk",
                "chs":"红色象鼻",
                "debug":"trunk_summer"
            },
            {
                "icon":"Koalefant Trunk Steak.png",
                "name":"Koalefant Trunk Steak",
                "chs":"烤熟象鼻",
                "debug":"trunk_cooked"
            },
            {
                "icon":"Krampus Sack.png",
                "name":"Krampus Sack",
                "chs":"坎普斯背包",
                "debug":"krampus_sack"
            },
            {
                "icon":"Lantern.png",
                "name":"Lantern",
                "chs":"提灯",
                "debug":"lantern"
            },
            {
                "icon":"The Lazy Forager.png",
                "name":"The Lazy Forager",
                "chs":"懒惰的强盗",
                "debug":"orangeamulet"
            },
            {
                "icon":"Lichen.png",
                "name":"Lichen",
                "chs":"苔藓",
                "debug":"cutlichen"
            },
            {
                "icon":"Leafy Meat.png",
                "name":"Leafy Meat",
                "chs":"多叶的肉",
                "debug":"plantmeat"
            },
            {
                "icon":"Life Giving Amulet.png",
                "name":"Life Giving Amulet",
                "chs":"提神护符",
                "debug":"amulet"
            },
            {
                "icon":"Light Bulb.png",
                "name":"Light Bulb",
                "chs":"荧光果",
                "debug":"lightbulb"
            },
            {
                "icon":"Living Log.png",
                "name":"Living Log",
                "chs":"活木",
                "debug":"livinglog"
            },
            {
                "icon":"Log.png",
                "name":"Log",
                "chs":"木材",
                "debug":"log"
            },
            {
                "icon":"Log Suit.png",
                "name":"Log Suit",
                "chs":"木制盔甲",
                "debug":"armorwood"
            },
            {
                "icon":"Lucy the Axe.png",
                "name":"Lucy the Axe",
                "chs":"露西斧",
                "debug":"lucy"
            },
            {
                "icon":"Luxury Axe.png",
                "name":"Luxury Axe",
                "chs":"金斧头",
                "debug":"goldenaxe"
            },
            {
                "icon":"Lying Robot.png",
                "name":"Lying Robot",
                "chs":"半躺机器人",
                "debug":"trinket_11"
            },
            {
                "icon":"Magiluminescence.png",
                "name":"Magiluminescence",
                "chs":"魔力之光",
                "debug":"yellowamulet"
            },
            {
                "icon":"Mandrake.png",
                "name":"Mandrake",
                "chs":"曼德拉草",
                "debug":"mandrake"
            },
            {
                "icon":"Mandrake Soup.png",
                "name":"Mandrake Soup",
                "chs":"曼德拉草汤",
                "debug":"mandrakesoup"
            },
            {
                "icon":"Manure.png",
                "name":"Manure",
                "chs":"便便",
                "debug":"poop"
            },
            {
                "icon":"Marble.png",
                "name":"Marble",
                "chs":"大理石",
                "debug":"marble"
            },
            {
                "icon":"Marble Suit.png",
                "name":"Marble Suit",
                "chs":"大理石盔甲",
                "debug":"armormarble"
            },
            {
                "icon":"Spiky Bush Item.png",
                "name":"Marsh Bush",
                "chs":"尖刺灌木",
                "debug":"dug_marsh_bush"
            },
            {
                "icon":"Marsh Turf.png",
                "name":"Marsh Turf",
                "chs":"沼泽草皮",
                "debug":"turf_marsh"
            },
            {
                "icon":"Meat.png",
                "name":"Meat",
                "chs":"肉",
                "debug":"meat"
            },
            {
                "icon":"Meatballs.png",
                "name":"Meatballs",
                "chs":"肉丸",
                "debug":"meatballs"
            },
            {
                "icon":"Meaty Stew.png",
                "name":"Meaty Stew",
                "chs":"肉汤",
                "debug":"bonestew"
            },
            {
                "icon":"Melty Marbles.png",
                "name":"Melty Marbles",
                "chs":"融化的大理石",
                "debug":"trinket_1"
            },
            {
                "icon":"Metal Potato Thing.png",
                "name":"Metal Potato Thing",
                "chs":"球状传送机零件",
                "debug":"teleportato_potato"
            },
            {
                "icon":"Miner Hat.png",
                "name":"Miner Hat",
                "chs":"矿工帽",
                "debug":"minerhat"
            },
            {
                "icon":"Mismatched Buttons.png",
                "name":"Mismatched Buttons",
                "chs":"不匹配的钮扣",
                "debug":"trinket_9"
            },
            {
                "icon":"Monster Jerky.png",
                "name":"Monster Jerky",
                "chs":"怪兽肉干",
                "debug":"monstermeat_dried"
            },
            {
                "icon":"Monster Lasagna.png",
                "name":"Monster Lasagna",
                "chs":"怪物千层饼",
                "debug":"monsterlasagna"
            },
            {
                "icon":"Monster Meat.png",
                "name":"Monster Meat",
                "chs":"怪兽肉",
                "debug":"monstermeat"
            },
            {
                "icon":"Morsel.png",
                "name":"Morsel",
                "chs":"小肉块",
                "debug":"smallmeat"
            },
            {
                "icon":"Mosquito.png",
                "name":"Mosquito",
                "chs":"蚊子",
                "debug":"mosquito"
            },
            {
                "icon":"Mosquito Sack.png",
                "name":"Mosquito Sack",
                "chs":"蚊子血袋",
                "debug":"mosquitosack"
            },
            {
                "icon":"Mud Turf.png",
                "name":"Mud Turf",
                "chs":"泥泞草地",
                "debug":"turf_mud"
            },
            {
                "icon":"Night Armour.png",
                "name":"Night Armour",
                "chs":"魂甲",
                "debug":"armor_sanity"
            },
            {
                "icon":"Nightmare Fuel.png",
                "name":"Nightmare Fuel",
                "chs":"噩梦燃料",
                "debug":"nightmarefuel"
            },
            {
                "icon":"Nightmare Amulet.png",
                "name":"Nightmare Amulet",
                "chs":"梦魇护符",
                "debug":"purpleamulet"
            },
            {
                "icon":"Nitre.png",
                "name":"Nitre",
                "chs":"硝石",
                "debug":"nitre"
            },
            {
                "icon":"On Tentacles.png",
                "name":"On Tentacles",
                "chs":"在触手上",
                "debug":"book_tentacles"
            },
            {
                "icon":"One-man Band.png",
                "name":"One-man Band",
                "chs":"独奏乐器",
                "debug":"onemanband"
            },
            {
                "icon":"Opulent Pickaxe.png",
                "name":"Opulent Pickaxe",
                "chs":"黄金鹤嘴锄",
                "debug":"goldenpickaxe"
            },
            {
                "icon":"Orange Gem.png",
                "name":"Orange Gem",
                "chs":"橙宝石",
                "debug":"orangegem"
            },
            {
                "icon":"Pan Flute.png",
                "name":"Pan Flute",
                "chs":"排箫",
                "debug":"panflute"
            },
            {
                "icon":"Papyrus.png",
                "name":"Papyrus",
                "chs":"莎草纸",
                "debug":"papyrus"
            },
            {
                "icon":"Petals.png",
                "name":"Petals",
                "chs":"花瓣",
                "debug":"petals"
            },
            {
                "icon":"Pickaxe.png",
                "name":"Pickaxe",
                "chs":"鹤嘴锄",
                "debug":"pickaxe"
            },
            {
                "icon":"PickSlashAxe.png",
                "name":"Pick/Axe",
                "chs":"镐斧",
                "debug":"multitool_axe_pickaxe"
            },
            {
                "icon":"Pierogi.png",
                "name":"Pierogi",
                "chs":"饺子",
                "debug":"perogies"
            },
            {
                "icon":"Pig Skin.png",
                "name":"Pig Skin",
                "chs":"猪皮",
                "debug":"pigskin"
            },
            {
                "icon":"Piggyback.png",
                "name":"Piggyback",
                "chs":"小猪包",
                "debug":"piggyback"
            },
            {
                "icon":"Pile o' Balloons.png",
                "name":"Pile o' Balloons",
                "chs":"一堆气球",
                "debug":"balloons_empty"
            },
            {
                "icon":"Pine Cone.png",
                "name":"Pine Cone",
                "chs":"松果",
                "debug":"pinecone"
            },
            {
                "icon":"Pitchfork.png",
                "name":"Pitchfork",
                "chs":"草叉",
                "debug":"pitchfork"
            },
            {
                "icon":"Pomegranate.png",
                "name":"Pomegranate",
                "chs":"石榴",
                "debug":"pomegranate"
            },
            {
                "icon":"Pomegranate Seeds.png",
                "name":"Pomegranate Seeds",
                "chs":"石榴种子",
                "debug":"pomegranate_seeds"
            },
            {
                "icon":"Popcorn.png",
                "name":"Popcorn",
                "chs":"爆米花",
                "debug":"corn_cooked"
            },
            {
                "icon":"Powdercake.png",
                "name":"Powdercake",
                "chs":"芝士蛋糕",
                "debug":"powcake"
            },
            {
                "icon":"Prepared Dragon Fruit.png",
                "name":"Prepared Dragon Fruit",
                "chs":"精致火龙果",
                "debug":"dragonfruit_cooked"
            },
            {
                "icon":"Puffy Vest.png",
                "name":"Puffy Vest",
                "chs":"寒冬背心",
                "debug":"trunkvest_winter"
            },
            {
                "icon":"Pumpkin.png",
                "name":"Pumpkin",
                "chs":"普奇里",
                "debug":"pumpkin"
            },
            {
                "icon":"Pumpkin Seeds.png",
                "name":"Pumpkin Seeds",
                "chs":"南瓜种子",
                "debug":"pumpkin_seeds"
            },
            {
                "icon":"Pumpkin Cookies.png",
                "name":"Pumpkin Cookie",
                "chs":"南瓜饼",
                "debug":"pumpkincookie"
            },
            {
                "icon":"Pumpkin Lantern.png",
                "name":"Pumpkin Lantern",
                "chs":"南瓜灯",
                "debug":"pumpkin_lantern"
            },
            {
                "icon":"Purple Gem.png",
                "name":"Purple Gem",
                "chs":"紫宝石",
                "debug":"purplegem"
            },
            {
                "icon":"Rabbit.png",
                "name":"Rabbit",
                "chs":"兔子",
                "debug":"rabbit"
            },
            {
                "icon":"Rabbit Earmuffs.png",
                "name":"Rabbit Earmuffs",
                "chs":"兔毛耳套",
                "debug":"earmuffshat"
            },
            {
                "icon":"Ratatouille.png",
                "name":"Ratatouille",
                "chs":"蔬菜杂烩",
                "debug":"ratatouille"
            },
            {
                "icon":"Razor.png",
                "name":"Razor",
                "chs":"剃刀",
                "debug":"razor"
            },
            {
                "icon":"Red Gem.png",
                "name":"Red Gem",
                "chs":"红宝石",
                "debug":"redgem"
            },
            {
                "icon":"Red Cap.png",
                "name":"Red Cap",
                "chs":"红菇头",
                "debug":"red_cap"
            },
            {
                "icon":"Redbird.png",
                "name":"Redbird",
                "chs":"红雀",
                "debug":"robin"
            },
            {
                "icon":"Regal Shovel.png",
                "name":"Regal Shovel",
                "chs":"黄金铁铲",
                "debug":"goldenshovel"
            },
            {
                "icon":"Ring Thing.png",
                "name":"Ring Thing",
                "chs":"环状传送机零件",
                "debug":"teleportato_ring"
            },
            {
                "icon":"Roasted Berries.png",
                "name":"Roasted Berries",
                "chs":"烤浆果",
                "debug":"berries_cooked"
            },
            {
                "icon":"Roasted Carrot.png",
                "name":"Roasted Carrot",
                "chs":"烤胡萝卜",
                "debug":"carrot_cooked"
            },
            {
                "icon":"Rocks.png",
                "name":"Rocks",
                "chs":"岩石",
                "debug":"rocks"
            },
            {
                "icon":"Rocky Turf.png",
                "name":"Rocky Turf",
                "chs":"岩石草皮",
                "debug":"turf_rocky"
            },
            {
                "icon":"Rope.png",
                "name":"Rope",
                "chs":"绳索",
                "debug":"rope"
            },
            {
                "icon":"Rot.png",
                "name":"Rot",
                "chs":"腐烂食物",
                "debug":"spoiled_food"
            },
            {
                "icon":"Rotten Egg.png",
                "name":"Rotten Egg",
                "chs":"烂鸡蛋",
                "debug":"rottenegg"
            },
            {
                "icon":"Sapling Item.png",
                "name":"Dug Sapling",
                "chs":"树苗",
                "debug":"sapling"
            },
            {
                "icon":"Savanna Turf.png",
                "name":"Savanna Turf",
                "chs":"热带草原草皮",
                "debug":"turf_savanna"
            },
            {
                "icon":"Second-hand Dentures.png",
                "name":"Second-hand Dentures",
                "chs":"二手假牙",
                "debug":"trinket_10"
            },
            {
                "icon":"Seeds.png",
                "name":"Seeds",
                "chs":"种子",
                "debug":"seeds"
            },
            {
                "icon":"Sewing Kit.png",
                "name":"Sewing Kit",
                "chs":"缝纫工具包",
                "debug":"sewing_kit"
            },
            {
                "icon":"Shelmet.png",
                "name":"Shelmet",
                "chs":"背壳头盔",
                "debug":"slurtlehat"
            },
            {
                "icon":"Shovel.png",
                "name":"Shovel",
                "chs":"铁铲",
                "debug":"shovel"
            },
            {
                "icon":"Silk.png",
                "name":"Silk",
                "chs":"蜘蛛网",
                "debug":"silk"
            },
            {
                "icon":"Sleep Dart.png",
                "name":"Sleep Dart",
                "chs":"麻醉吹箭",
                "debug":"blowdart_sleep"
            },
            {
                "icon":"Sleepytime Stories.png",
                "name":"Sleepytime Stories",
                "chs":"睡前的故事",
                "debug":"book_sleep"
            },
            {
                "icon":"Sliced Pomegranate.png",
                "name":"Sliced Pomegranate",
                "chs":"石榴片",
                "debug":"pomegranate_cooked"
            },
            {
                "icon":"Slimey Turf.png",
                "name":"Slimey Turf",
                "chs":"粘滑地皮",
                "debug":"turf_sinkhole"
            },
            {
                "icon":"Slurper Pelt.png",
                "name":"Slurper Pelt",
                "chs":"缀食者之皮",
                "debug":"slurper_pelt"
            },
            {
                "icon":"Slurtle Slime.png",
                "name":"Slurtle Slime",
                "chs":"粘滑含糊虫",
                "debug":"slurtleslime"
            },
            {
                "icon":"Small Jerky.png",
                "name":"Small Jerky",
                "chs":"小块肉干",
                "debug":"smallmeat_dried"
            },
            {
                "icon":"Snowbird.png",
                "name":"Snowbird",
                "chs":"雪雀",
                "debug":"robin_winter"
            },
            {
                "icon":"Azure Feather.png",
                "name":"Azure Feather",
                "chs":"蓝色羽毛",
                "debug":"feather_robin_winter"
            },
            {
                "icon":"Snurtle Shell Armour.png",
                "name":"Snurtle Shell Armour",
                "chs":"蜗牛龟盔甲",
                "debug":"armorsnurtleshell"
            },
            {
                "icon":"Spear.png",
                "name":"Spear",
                "chs":"长矛",
                "debug":"spear"
            },
            {
                "icon":"Spider Eggs.png",
                "name":"Spider Eggs",
                "chs":"蜘蛛卵",
                "debug":"spidereggsack"
            },
            {
                "icon":"Spider Gland.png",
                "name":"Spider Gland",
                "chs":"蜘蛛腺体",
                "debug":"spidergland"
            },
            {
                "icon":"Spiderhat.png",
                "name":"Spiderhat",
                "chs":"蜘蛛帽",
                "debug":"spiderhat"
            },
            {
                "icon":"Star Caller's Staff.png",
                "name":"Star Caller's Staff",
                "chs":"星星呼唤者权杖",
                "debug":"stafflight"
            },
            {
                "icon":"Stinger.png",
                "name":"Stinger",
                "chs":"蜂刺",
                "debug":"stinger"
            },
            {
                "icon":"Stone Wall.png",
                "name":"Stone Wall",
                "chs":"石墙",
                "debug":"wall_stone_item"
            },
            {
                "icon":"Straw Hat.png",
                "name":"Straw Hat",
                "chs":"草帽",
                "debug":"strawhat"
            },
            {
                "icon":"Straw Roll.png",
                "name":"Straw Roll",
                "chs":"稻草卷",
                "debug":"bedroll_straw"
            },
            {
                "icon":"Stuffed Eggplant.png",
                "name":"Stuffed Eggplant",
                "chs":"香酥茄盒",
                "debug":"stuffedeggplant"
            },
            {
                "icon":"Taffy.png",
                "name":"Taffy",
                "chs":"太妃糖",
                "debug":"taffy"
            },
            {
                "icon":"Tallbird Egg.png",
                "name":"Tallbird Egg",
                "chs":"高脚鸟蛋",
                "debug":"tallbirdegg"
            },
            {
                "icon":"Tam o' Shanter.png",
                "name":"Tam o' Shanter",
                "chs":"贝雷帽",
                "debug":"walrushat"
            },
            {
                "icon":"Telelocator Staff.png",
                "name":"Telelocator Staff",
                "chs":"传送权杖",
                "debug":"telestaff"
            },
            {
                "icon":"Tentacle Spike.png",
                "name":"Tentacle Spike",
                "chs":"触手尖刺",
                "debug":"tentaclespike"
            },
            {
                "icon":"Tentacle Spots.png",
                "name":"Tentacle Spots",
                "chs":"斑点触手皮",
                "debug":"tentaclespots"
            },
            {
                "icon":"The End is Nigh.png",
                "name":"The End is Nigh!",
                "chs":"快要结束了！",
                "debug":"book_brimstone"
            },
            {
                "icon":"The Lazy Explorer.png",
                "name":"The Lazy Explorer",
                "chs":"懒惰的探索者",
                "debug":"orangestaff"
            },
            {
                "icon":"Thulecite.png",
                "name":"Thulecite",
                "chs":"铥矿",
                "debug":"thulecite"
            },
            {
                "icon":"Thulecite Crown.png",
                "name":"Thulecite Crown",
                "chs":"铥矿石皇冠",
                "debug":"ruinshat"
            },
            {
                "icon":"Thulecite Fragments.png",
                "name":"Thulecite Fragments",
                "chs":"铥矿石碎片",
                "debug":"thulecite_pieces"
            },
            {
                "icon":"Thulecite Club.png",
                "name":"Thulecite Club",
                "chs":"铥矿棒",
                "debug":"ruins_bat"
            },
            {
                "icon":"Thulecite Medallion.png",
                "name":"Thulecite Medallion",
                "chs":"铥矿奖章",
                "debug":"nightmare_timepiece"
            },
            {
                "icon":"Thulecite Suit.png",
                "name":"Thulecite Suit",
                "chs":"铥矿甲胄",
                "debug":"armorruins"
            },
            {
                "icon":"Wallitemthulecite.png",
                "name":"Thulecite Wall",
                "chs":"铥矿墙壁",
                "debug":"wall_ruins_item"
            },
            {
                "icon":"Tiny Rocketship.png",
                "name":"Tiny Rocketship",
                "chs":"小型火箭飞船",
                "debug":"trinket_5"
            },
            {
                "icon":"Toasted Seeds.png",
                "name":"Toasted Seeds",
                "chs":"烤种子",
                "debug":"seeds_cooked"
            },
            {
                "icon":"Tooth Trap.png",
                "name":"Tooth Trap",
                "chs":"狗牙陷阱",
                "debug":"trap_teeth"
            },
            {
                "icon":"Top Hat.png",
                "name":"Top Hat",
                "chs":"高礼帽",
                "debug":"tophat"
            },
            {
                "icon":"Torch.png",
                "name":"Torch",
                "chs":"火炬",
                "debug":"torch"
            },
            {
                "icon":"Trap.png",
                "name":"Trap",
                "chs":"陷阱",
                "debug":"trap"
            },
            {
                "icon":"Turkey Dinner.png",
                "name":"Turkey Dinner",
                "chs":"火鸡正餐",
                "debug":"turkeydinner"
            },
            {
                "icon":"Twigs.png",
                "name":"Twigs",
                "chs":"小树枝",
                "debug":"twigs"
            },
            {
                "icon":"Umbrella.png",
                "name":"Umbrella",
                "chs":"雨伞",
                "debug":"umbrella"
            },
            {
                "icon":"Unagi.png",
                "name":"Unagi",
                "chs":"鳗鱼",
                "debug":"unagi"
            },
            {
                "icon":"Walking Cane.png",
                "name":"Walking Cane",
                "chs":"步行手杖",
                "debug":"cane"
            },
            {
                "icon":"Waffles.png",
                "name":"Waffles",
                "chs":"华夫饼",
                "debug":"waffles"
            },
            {
                "icon":"Walrus Tusk.png",
                "name":"Walrus Tusk",
                "chs":"海象牙",
                "debug":"walrus_tusk"
            },
            {
                "icon":"Wet Goop.png",
                "name":"Wet Goop",
                "chs":"湿腻焦糊",
                "debug":"wetgoop"
            },
            {
                "icon":"Winter Hat.png",
                "name":"Winter Hat",
                "chs":"寒冬帽",
                "debug":"winterhat"
            },
            {
                "icon":"Winter Rabbit.png",
                "name":"Winter Rabbit",
                "chs":"兔子",
                "debug":"rabbit"
            },
            {
                "icon":"Winter Koalefant Trunk.png",
                "name":"Winter Koalefant Trunk",
                "chs":"蓝色象鼻",
                "debug":"trunk_winter"
            },
            {
                "icon":"Willow's Lighter.png",
                "name":"Willow's Lighter",
                "chs":"薇洛的打火机",
                "debug":"lighter"
            },
            {
                "icon":"Wood Wall.png",
                "name":"Wood Wall",
                "chs":"木墙",
                "debug":"wall_wood_item"
            },
            {
                "icon":"Wooden Flooring.png",
                "name":"Wooden Flooring",
                "chs":"木质地板",
                "debug":"turf_woodfloor"
            },
            {
                "icon":"Yellow Gem.png",
                "name":"Yellow Gem",
                "chs":"黄宝石",
                "debug":"yellowgem"
            }
        ]
    },
    filters: {
        itemicon: function(filename) {
            return filename.replace(/\s/g, '_');
        },
        itemiconid: function(filename) {
            return 'gopng_' + filename.replace(/\s/g, '_').replace(/'/g, '').split('.')[0];
        },
        itemiconouterid: function(filename) {
            return 'gopng_' + filename.replace(/\s/g, '_').replace(/'/g, '').split('.')[0] + '_outer';
        }
    },
    methods: {
        searchItem: function(items) {
            return items.filter(function(item) {
                return item.name.toLowerCase().indexOf(this.keyword.toLowerCase()) > -1 || item.chs.indexOf(this.keyword.toLowerCase()) > -1;
            }.bind(this));
        }
    }
});