/* =========================================================================
   data.js — All learning content for K-Start (data only, no logic).
   Exposed on window.KData so app.js can render it.
   ========================================================================= */
window.KData = {
  /* --------------------------------------------------------------------- */
  /* 1. HANGUL — letters grouped by type                                   */
  /* --------------------------------------------------------------------- */
  hangul: [
    {
      group: "Basic Consonants",
      note: "14 basic consonants. Some sound softer at the start of a word.",
      letters: [
        { ch: "ㄱ", rom: "g / k", hint: "like g in 'go'" },
        { ch: "ㄴ", rom: "n", hint: "like n in 'no'" },
        { ch: "ㄷ", rom: "d / t", hint: "like d in 'do'" },
        { ch: "ㄹ", rom: "r / l", hint: "between r and l" },
        { ch: "ㅁ", rom: "m", hint: "like m in 'mom'" },
        { ch: "ㅂ", rom: "b / p", hint: "like b in 'boy'" },
        { ch: "ㅅ", rom: "s", hint: "like s in 'see'" },
        { ch: "ㅇ", rom: "ng / silent", hint: "silent at start, 'ng' at end" },
        { ch: "ㅈ", rom: "j", hint: "like j in 'jam'" },
        { ch: "ㅊ", rom: "ch", hint: "like ch in 'chat'" },
        { ch: "ㅋ", rom: "k", hint: "aspirated k" },
        { ch: "ㅌ", rom: "t", hint: "aspirated t" },
        { ch: "ㅍ", rom: "p", hint: "aspirated p" },
        { ch: "ㅎ", rom: "h", hint: "like h in 'hat'" }
      ]
    },
    {
      group: "Basic Vowels",
      note: "10 basic vowels. A short stroke added makes a 'y' sound.",
      letters: [
        { ch: "ㅏ", rom: "a", hint: "like a in 'father'" },
        { ch: "ㅑ", rom: "ya", hint: "like ya in 'yard'" },
        { ch: "ㅓ", rom: "eo", hint: "like u in 'cup'" },
        { ch: "ㅕ", rom: "yeo", hint: "like yu in 'young'" },
        { ch: "ㅗ", rom: "o", hint: "like o in 'go'" },
        { ch: "ㅛ", rom: "yo", hint: "like yo in 'yoga'" },
        { ch: "ㅜ", rom: "u", hint: "like oo in 'moon'" },
        { ch: "ㅠ", rom: "yu", hint: "like you" },
        { ch: "ㅡ", rom: "eu", hint: "like oo in 'good' (lips flat)" },
        { ch: "ㅣ", rom: "i", hint: "like ee in 'see'" }
      ]
    },
    {
      group: "Double Consonants",
      note: "5 'tense' consonants, pronounced harder and tighter.",
      letters: [
        { ch: "ㄲ", rom: "kk", hint: "tense k" },
        { ch: "ㄸ", rom: "tt", hint: "tense t" },
        { ch: "ㅃ", rom: "pp", hint: "tense p" },
        { ch: "ㅆ", rom: "ss", hint: "tense s" },
        { ch: "ㅉ", rom: "jj", hint: "tense j" }
      ]
    },
    {
      group: "Compound Vowels",
      note: "11 combined vowels formed by joining basic vowels.",
      letters: [
        { ch: "ㅐ", rom: "ae", hint: "like e in 'bed'" },
        { ch: "ㅒ", rom: "yae", hint: "like ye in 'yes'" },
        { ch: "ㅔ", rom: "e", hint: "like e in 'bed'" },
        { ch: "ㅖ", rom: "ye", hint: "like ye in 'yes'" },
        { ch: "ㅘ", rom: "wa", hint: "like wa in 'water'" },
        { ch: "ㅙ", rom: "wae", hint: "like wa in 'wax'" },
        { ch: "ㅚ", rom: "oe", hint: "like we in 'wet'" },
        { ch: "ㅝ", rom: "wo", hint: "like wo in 'won'" },
        { ch: "ㅞ", rom: "we", hint: "like we in 'wet'" },
        { ch: "ㅟ", rom: "wi", hint: "like we in 'week'" },
        { ch: "ㅢ", rom: "ui", hint: "'eu' + 'i' glide" }
      ]
    }
  ],

  /* --------------------------------------------------------------------- */
  /* 2. VOCABULARY — grouped by topic, tagged by level                     */
  /* --------------------------------------------------------------------- */
  vocab: [
    {
      topic: "Greetings",
      words: [
        { ko: "안녕하세요", rom: "annyeonghaseyo", en: "Hello (polite)", level: "Beginner" },
        { ko: "안녕", rom: "annyeong", en: "Hi / Bye (casual)", level: "Beginner" },
        { ko: "안녕히 가세요", rom: "annyeonghi gaseyo", en: "Goodbye (to someone leaving)", level: "Beginner" },
        { ko: "안녕히 계세요", rom: "annyeonghi gyeseyo", en: "Goodbye (to someone staying)", level: "Beginner" },
        { ko: "감사합니다", rom: "gamsahamnida", en: "Thank you", level: "Beginner" },
        { ko: "고맙습니다", rom: "gomapseumnida", en: "Thank you", level: "Beginner" },
        { ko: "죄송합니다", rom: "joesonghamnida", en: "I'm sorry", level: "Beginner" },
        { ko: "미안해요", rom: "mianhaeyo", en: "Sorry (casual)", level: "Beginner" },
        { ko: "반갑습니다", rom: "bangapseumnida", en: "Nice to meet you", level: "Beginner" },
        { ko: "네", rom: "ne", en: "Yes", level: "Beginner" },
        { ko: "아니요", rom: "aniyo", en: "No", level: "Beginner" },
        { ko: "실례합니다", rom: "sillyehamnida", en: "Excuse me", level: "Intermediate" },
        { ko: "처음 뵙겠습니다", rom: "cheoeum boepgesseumnida", en: "How do you do (first meeting)", level: "Intermediate" },
        { ko: "오랜만이에요", rom: "oraenmanieyo", en: "Long time no see", level: "Intermediate" },
        { ko: "잘 지냈어요?", rom: "jal jinaesseoyo?", en: "How have you been?", level: "Intermediate" }
      ]
    },
    {
      topic: "Native Numbers",
      words: [
        { ko: "하나", rom: "hana", en: "One", level: "Beginner" },
        { ko: "둘", rom: "dul", en: "Two", level: "Beginner" },
        { ko: "셋", rom: "set", en: "Three", level: "Beginner" },
        { ko: "넷", rom: "net", en: "Four", level: "Beginner" },
        { ko: "다섯", rom: "daseot", en: "Five", level: "Beginner" },
        { ko: "여섯", rom: "yeoseot", en: "Six", level: "Beginner" },
        { ko: "일곱", rom: "ilgop", en: "Seven", level: "Beginner" },
        { ko: "여덟", rom: "yeodeol", en: "Eight", level: "Beginner" },
        { ko: "아홉", rom: "ahop", en: "Nine", level: "Beginner" },
        { ko: "열", rom: "yeol", en: "Ten", level: "Beginner" },
        { ko: "스물", rom: "seumul", en: "Twenty", level: "Intermediate" },
        { ko: "서른", rom: "seoreun", en: "Thirty", level: "Intermediate" }
      ]
    },
    {
      topic: "Sino Numbers",
      words: [
        { ko: "일", rom: "il", en: "One", level: "Beginner" },
        { ko: "이", rom: "i", en: "Two", level: "Beginner" },
        { ko: "삼", rom: "sam", en: "Three", level: "Beginner" },
        { ko: "사", rom: "sa", en: "Four", level: "Beginner" },
        { ko: "오", rom: "o", en: "Five", level: "Beginner" },
        { ko: "육", rom: "yuk", en: "Six", level: "Beginner" },
        { ko: "칠", rom: "chil", en: "Seven", level: "Beginner" },
        { ko: "팔", rom: "pal", en: "Eight", level: "Beginner" },
        { ko: "구", rom: "gu", en: "Nine", level: "Beginner" },
        { ko: "십", rom: "sip", en: "Ten", level: "Beginner" },
        { ko: "백", rom: "baek", en: "Hundred", level: "Intermediate" },
        { ko: "천", rom: "cheon", en: "Thousand", level: "Intermediate" },
        { ko: "만", rom: "man", en: "Ten thousand", level: "Intermediate" }
      ]
    },
    {
      topic: "Food",
      words: [
        { ko: "밥", rom: "bap", en: "Rice / meal", level: "Beginner" },
        { ko: "물", rom: "mul", en: "Water", level: "Beginner" },
        { ko: "김치", rom: "gimchi", en: "Kimchi", level: "Beginner" },
        { ko: "고기", rom: "gogi", en: "Meat", level: "Beginner" },
        { ko: "과일", rom: "gwail", en: "Fruit", level: "Beginner" },
        { ko: "빵", rom: "ppang", en: "Bread", level: "Beginner" },
        { ko: "커피", rom: "keopi", en: "Coffee", level: "Beginner" },
        { ko: "우유", rom: "uyu", en: "Milk", level: "Beginner" },
        { ko: "라면", rom: "ramyeon", en: "Ramen", level: "Beginner" },
        { ko: "불고기", rom: "bulgogi", en: "Marinated grilled beef", level: "Intermediate" },
        { ko: "비빔밥", rom: "bibimbap", en: "Mixed rice bowl", level: "Intermediate" },
        { ko: "김밥", rom: "gimbap", en: "Seaweed rice roll", level: "Intermediate" },
        { ko: "맛있어요", rom: "masisseoyo", en: "It's delicious", level: "Intermediate" },
        { ko: "매워요", rom: "maewoyo", en: "It's spicy", level: "Intermediate" },
        { ko: "배고파요", rom: "baegopayo", en: "I'm hungry", level: "Intermediate" }
      ]
    },
    {
      topic: "Family",
      words: [
        { ko: "가족", rom: "gajok", en: "Family", level: "Beginner" },
        { ko: "엄마", rom: "eomma", en: "Mom", level: "Beginner" },
        { ko: "아빠", rom: "appa", en: "Dad", level: "Beginner" },
        { ko: "어머니", rom: "eomeoni", en: "Mother", level: "Beginner" },
        { ko: "아버지", rom: "abeoji", en: "Father", level: "Beginner" },
        { ko: "형", rom: "hyeong", en: "Older brother (male speaker)", level: "Intermediate" },
        { ko: "오빠", rom: "oppa", en: "Older brother (female speaker)", level: "Intermediate" },
        { ko: "누나", rom: "nuna", en: "Older sister (male speaker)", level: "Intermediate" },
        { ko: "언니", rom: "eonni", en: "Older sister (female speaker)", level: "Intermediate" },
        { ko: "동생", rom: "dongsaeng", en: "Younger sibling", level: "Intermediate" },
        { ko: "할머니", rom: "halmeoni", en: "Grandmother", level: "Beginner" },
        { ko: "할아버지", rom: "harabeoji", en: "Grandfather", level: "Beginner" },
        { ko: "아들", rom: "adeul", en: "Son", level: "Intermediate" },
        { ko: "딸", rom: "ttal", en: "Daughter", level: "Intermediate" }
      ]
    },
    {
      topic: "Common Verbs",
      words: [
        { ko: "가다", rom: "gada", en: "To go", level: "Beginner" },
        { ko: "오다", rom: "oda", en: "To come", level: "Beginner" },
        { ko: "먹다", rom: "meokda", en: "To eat", level: "Beginner" },
        { ko: "마시다", rom: "masida", en: "To drink", level: "Beginner" },
        { ko: "보다", rom: "boda", en: "To see / watch", level: "Beginner" },
        { ko: "하다", rom: "hada", en: "To do", level: "Beginner" },
        { ko: "자다", rom: "jada", en: "To sleep", level: "Beginner" },
        { ko: "사다", rom: "sada", en: "To buy", level: "Beginner" },
        { ko: "읽다", rom: "ikda", en: "To read", level: "Intermediate" },
        { ko: "쓰다", rom: "sseuda", en: "To write / use", level: "Intermediate" },
        { ko: "듣다", rom: "deutda", en: "To listen", level: "Intermediate" },
        { ko: "말하다", rom: "malhada", en: "To speak", level: "Intermediate" },
        { ko: "공부하다", rom: "gongbuhada", en: "To study", level: "Beginner" },
        { ko: "일하다", rom: "ilhada", en: "To work", level: "Beginner" },
        { ko: "좋아하다", rom: "joahada", en: "To like", level: "Beginner" }
      ]
    },
    {
      topic: "Places",
      words: [
        { ko: "집", rom: "jip", en: "House / home", level: "Beginner" },
        { ko: "학교", rom: "hakgyo", en: "School", level: "Beginner" },
        { ko: "회사", rom: "hoesa", en: "Company / office", level: "Intermediate" },
        { ko: "병원", rom: "byeongwon", en: "Hospital", level: "Intermediate" },
        { ko: "식당", rom: "sikdang", en: "Restaurant", level: "Beginner" },
        { ko: "카페", rom: "kape", en: "Cafe", level: "Beginner" },
        { ko: "가게", rom: "gage", en: "Store", level: "Beginner" },
        { ko: "시장", rom: "sijang", en: "Market", level: "Intermediate" },
        { ko: "은행", rom: "eunhaeng", en: "Bank", level: "Intermediate" },
        { ko: "공원", rom: "gongwon", en: "Park", level: "Beginner" },
        { ko: "도서관", rom: "doseogwan", en: "Library", level: "Intermediate" },
        { ko: "약국", rom: "yakguk", en: "Pharmacy", level: "Intermediate" }
      ]
    },
    {
      topic: "Travel",
      words: [
        { ko: "공항", rom: "gonghang", en: "Airport", level: "Intermediate" },
        { ko: "기차", rom: "gicha", en: "Train", level: "Beginner" },
        { ko: "버스", rom: "beoseu", en: "Bus", level: "Beginner" },
        { ko: "지하철", rom: "jihacheol", en: "Subway", level: "Beginner" },
        { ko: "택시", rom: "taeksi", en: "Taxi", level: "Beginner" },
        { ko: "호텔", rom: "hotel", en: "Hotel", level: "Beginner" },
        { ko: "화장실", rom: "hwajangsil", en: "Restroom", level: "Beginner" },
        { ko: "여권", rom: "yeogwon", en: "Passport", level: "Intermediate" },
        { ko: "표", rom: "pyo", en: "Ticket", level: "Beginner" },
        { ko: "지도", rom: "jido", en: "Map", level: "Beginner" },
        { ko: "길", rom: "gil", en: "Road / way", level: "Beginner" },
        { ko: "얼마예요?", rom: "eolmayeyo?", en: "How much is it?", level: "Beginner" },
        { ko: "어디예요?", rom: "eodiyeyo?", en: "Where is it?", level: "Beginner" },
        { ko: "예약", rom: "yeyak", en: "Reservation", level: "Advanced" }
      ]
    },
    {
      topic: "Time & Days",
      words: [
        { ko: "오늘", rom: "oneul", en: "Today", level: "Beginner" },
        { ko: "내일", rom: "naeil", en: "Tomorrow", level: "Beginner" },
        { ko: "어제", rom: "eoje", en: "Yesterday", level: "Beginner" },
        { ko: "지금", rom: "jigeum", en: "Now", level: "Beginner" },
        { ko: "아침", rom: "achim", en: "Morning", level: "Beginner" },
        { ko: "점심", rom: "jeomsim", en: "Noon / lunch", level: "Beginner" },
        { ko: "저녁", rom: "jeonyeok", en: "Evening / dinner", level: "Beginner" },
        { ko: "밤", rom: "bam", en: "Night", level: "Beginner" },
        { ko: "주말", rom: "jumal", en: "Weekend", level: "Intermediate" },
        { ko: "월요일", rom: "woryoil", en: "Monday", level: "Intermediate" },
        { ko: "화요일", rom: "hwayoil", en: "Tuesday", level: "Intermediate" },
        { ko: "수요일", rom: "suyoil", en: "Wednesday", level: "Intermediate" },
        { ko: "목요일", rom: "mogyoil", en: "Thursday", level: "Intermediate" },
        { ko: "금요일", rom: "geumyoil", en: "Friday", level: "Intermediate" },
        { ko: "토요일", rom: "toyoil", en: "Saturday", level: "Intermediate" },
        { ko: "일요일", rom: "iryoil", en: "Sunday", level: "Intermediate" }
      ]
    },
    {
      topic: "Colors",
      words: [
        { ko: "색깔", rom: "saekkal", en: "Color", level: "Beginner" },
        { ko: "빨간색", rom: "ppalgansaek", en: "Red", level: "Beginner" },
        { ko: "파란색", rom: "paransaek", en: "Blue", level: "Beginner" },
        { ko: "노란색", rom: "noransaek", en: "Yellow", level: "Beginner" },
        { ko: "초록색", rom: "choroksaek", en: "Green", level: "Intermediate" },
        { ko: "검은색", rom: "geomeunsaek", en: "Black", level: "Beginner" },
        { ko: "하얀색", rom: "hayansaek", en: "White", level: "Beginner" },
        { ko: "분홍색", rom: "bunhongsaek", en: "Pink", level: "Intermediate" },
        { ko: "보라색", rom: "borasaek", en: "Purple", level: "Intermediate" },
        { ko: "주황색", rom: "juhwangsaek", en: "Orange", level: "Intermediate" },
        { ko: "갈색", rom: "galsaek", en: "Brown", level: "Intermediate" },
        { ko: "회색", rom: "hoesaek", en: "Gray", level: "Intermediate" }
      ]
    },
    {
      topic: "Weather",
      words: [
        { ko: "날씨", rom: "nalssi", en: "Weather", level: "Beginner" },
        { ko: "비", rom: "bi", en: "Rain", level: "Beginner" },
        { ko: "눈", rom: "nun", en: "Snow", level: "Beginner" },
        { ko: "바람", rom: "baram", en: "Wind", level: "Beginner" },
        { ko: "구름", rom: "gureum", en: "Cloud", level: "Beginner" },
        { ko: "해", rom: "hae", en: "Sun", level: "Beginner" },
        { ko: "더워요", rom: "deowoyo", en: "It's hot", level: "Beginner" },
        { ko: "추워요", rom: "chuwoyo", en: "It's cold", level: "Beginner" },
        { ko: "따뜻해요", rom: "ttatteuthaeyo", en: "It's warm", level: "Intermediate" },
        { ko: "시원해요", rom: "siwonhaeyo", en: "It's cool / refreshing", level: "Intermediate" },
        { ko: "맑아요", rom: "malgayo", en: "It's clear / sunny", level: "Intermediate" },
        { ko: "흐려요", rom: "heuryeoyo", en: "It's cloudy", level: "Intermediate" }
      ]
    },
    {
      topic: "Body",
      words: [
        { ko: "몸", rom: "mom", en: "Body", level: "Beginner" },
        { ko: "머리", rom: "meori", en: "Head / hair", level: "Beginner" },
        { ko: "얼굴", rom: "eolgul", en: "Face", level: "Beginner" },
        { ko: "눈", rom: "nun", en: "Eye", level: "Beginner" },
        { ko: "코", rom: "ko", en: "Nose", level: "Beginner" },
        { ko: "입", rom: "ip", en: "Mouth", level: "Beginner" },
        { ko: "귀", rom: "gwi", en: "Ear", level: "Beginner" },
        { ko: "손", rom: "son", en: "Hand", level: "Beginner" },
        { ko: "발", rom: "bal", en: "Foot", level: "Beginner" },
        { ko: "다리", rom: "dari", en: "Leg", level: "Beginner" },
        { ko: "배", rom: "bae", en: "Stomach", level: "Beginner" },
        { ko: "아파요", rom: "apayo", en: "It hurts / I'm sick", level: "Intermediate" }
      ]
    },
    {
      topic: "Hobbies",
      words: [
        { ko: "취미", rom: "chwimi", en: "Hobby", level: "Beginner" },
        { ko: "운동", rom: "undong", en: "Exercise", level: "Beginner" },
        { ko: "음악", rom: "eumak", en: "Music", level: "Beginner" },
        { ko: "영화", rom: "yeonghwa", en: "Movie", level: "Beginner" },
        { ko: "게임", rom: "geim", en: "Game", level: "Beginner" },
        { ko: "여행", rom: "yeohaeng", en: "Travel", level: "Beginner" },
        { ko: "요리", rom: "yori", en: "Cooking", level: "Beginner" },
        { ko: "노래", rom: "norae", en: "Song", level: "Beginner" },
        { ko: "사진", rom: "sajin", en: "Photo", level: "Beginner" },
        { ko: "독서", rom: "dokseo", en: "Reading", level: "Intermediate" },
        { ko: "춤", rom: "chum", en: "Dance", level: "Intermediate" },
        { ko: "그림", rom: "geurim", en: "Drawing / picture", level: "Intermediate" }
      ]
    },
    {
      topic: "Feelings",
      words: [
        { ko: "행복해요", rom: "haengbokhaeyo", en: "I'm happy", level: "Intermediate" },
        { ko: "기뻐요", rom: "gippeoyo", en: "I'm glad", level: "Intermediate" },
        { ko: "슬퍼요", rom: "seulpeoyo", en: "I'm sad", level: "Intermediate" },
        { ko: "화나요", rom: "hwanayo", en: "I'm angry", level: "Intermediate" },
        { ko: "피곤해요", rom: "pigonhaeyo", en: "I'm tired", level: "Intermediate" },
        { ko: "무서워요", rom: "museowoyo", en: "I'm scared", level: "Intermediate" },
        { ko: "괜찮아요", rom: "gwaenchanayo", en: "It's okay / I'm fine", level: "Beginner" },
        { ko: "좋아요", rom: "joayo", en: "It's good / I like it", level: "Beginner" },
        { ko: "싫어요", rom: "sireoyo", en: "I don't like it", level: "Beginner" },
        { ko: "사랑해요", rom: "saranghaeyo", en: "I love you", level: "Beginner" },
        { ko: "보고 싶어요", rom: "bogo sipeoyo", en: "I miss you", level: "Advanced" },
        { ko: "신나요", rom: "sinnayo", en: "I'm excited", level: "Advanced" }
      ]
    }
  ],

  /* --------------------------------------------------------------------- */
  /* 3. GRAMMAR — pattern cards                                            */
  /* --------------------------------------------------------------------- */
  grammar: [
    {
      title: "Topic particle: 은 / 는",
      level: "Beginner",
      explain: "Marks the topic of a sentence ('as for ...'). Use 은 after a consonant, 는 after a vowel.",
      examples: [
        { ko: "저는 학생이에요.", rom: "jeoneun haksaengieyo.", en: "I am a student." },
        { ko: "이름은 민수예요.", rom: "ireumeun minsuyeyo.", en: "My name is Minsu." }
      ]
    },
    {
      title: "Subject particle: 이 / 가",
      level: "Beginner",
      explain: "Marks the subject (who/what does the action). Use 이 after a consonant, 가 after a vowel.",
      examples: [
        { ko: "고양이가 있어요.", rom: "goyangiga isseoyo.", en: "There is a cat." },
        { ko: "물이 차가워요.", rom: "muri chagawoyo.", en: "The water is cold." }
      ]
    },
    {
      title: "Object particle: 을 / 를",
      level: "Beginner",
      explain: "Marks the object of an action. Use 을 after a consonant, 를 after a vowel.",
      examples: [
        { ko: "밥을 먹어요.", rom: "babeul meogeoyo.", en: "I eat rice." },
        { ko: "커피를 마셔요.", rom: "keopireul masyeoyo.", en: "I drink coffee." }
      ]
    },
    {
      title: "To be: 이에요 / 예요",
      level: "Beginner",
      explain: "Polite 'to be' ending. Use 이에요 after a consonant, 예요 after a vowel.",
      examples: [
        { ko: "학생이에요.", rom: "haksaengieyo.", en: "(I) am a student." },
        { ko: "친구예요.", rom: "chinguyeyo.", en: "(This) is a friend." }
      ]
    },
    {
      title: "Negation: 안 + verb",
      level: "Beginner",
      explain: "Put 안 right before a verb or adjective to make it negative.",
      examples: [
        { ko: "안 가요.", rom: "an gayo.", en: "I don't go." },
        { ko: "안 매워요.", rom: "an maewoyo.", en: "It's not spicy." }
      ]
    },
    {
      title: "Past tense: -았 / 었어요",
      level: "Intermediate",
      explain: "Add -았어요 (after ㅏ/ㅗ) or -었어요 (other vowels) to the verb stem for past tense.",
      examples: [
        { ko: "어제 갔어요.", rom: "eoje gasseoyo.", en: "I went yesterday." },
        { ko: "밥을 먹었어요.", rom: "babeul meogeosseoyo.", en: "I ate." }
      ]
    },
    {
      title: "And / but: -고, -지만",
      level: "Intermediate",
      explain: "-고 connects clauses ('and'); -지만 contrasts them ('but'). Attach to the verb stem.",
      examples: [
        { ko: "밥을 먹고 자요.", rom: "babeul meokgo jayo.", en: "I eat and (then) sleep." },
        { ko: "비싸지만 좋아요.", rom: "bissajiman joayo.", en: "It's expensive but good." }
      ]
    },
    {
      title: "Want to: -고 싶어요",
      level: "Intermediate",
      explain: "Attach -고 싶어요 to a verb stem to say you want to do something.",
      examples: [
        { ko: "한국에 가고 싶어요.", rom: "hanguge gago sipeoyo.", en: "I want to go to Korea." },
        { ko: "쉬고 싶어요.", rom: "swigo sipeoyo.", en: "I want to rest." }
      ]
    },
    {
      title: "Honorific: -(으)세요",
      level: "Advanced",
      explain: "Polite request/respect ending. Use -으세요 after a consonant, -세요 after a vowel.",
      examples: [
        { ko: "여기 앉으세요.", rom: "yeogi anjeuseyo.", en: "Please sit here." },
        { ko: "안녕히 가세요.", rom: "annyeonghi gaseyo.", en: "Goodbye (go in peace)." }
      ]
    }
  ],

  /* --------------------------------------------------------------------- */
  /* 4. CONVERSATION — themed dialogues                                    */
  /* --------------------------------------------------------------------- */
  conversation: [
    {
      title: "Greetings",
      level: "Beginner",
      lines: [
        { who: "A", ko: "안녕하세요!", rom: "annyeonghaseyo!", en: "Hello!" },
        { who: "B", ko: "안녕하세요. 반갑습니다.", rom: "annyeonghaseyo. bangapseumnida.", en: "Hello. Nice to meet you." },
        { who: "A", ko: "이름이 뭐예요?", rom: "ireumi mwoyeyo?", en: "What's your name?" },
        { who: "B", ko: "저는 민수예요.", rom: "jeoneun minsuyeyo.", en: "I'm Minsu." }
      ]
    },
    {
      title: "At a café",
      level: "Beginner",
      lines: [
        { who: "Staff", ko: "어서 오세요. 뭐 드릴까요?", rom: "eoseo oseyo. mwo deurilkkayo?", en: "Welcome. What can I get you?" },
        { who: "You", ko: "아메리카노 한 잔 주세요.", rom: "amerikano han jan juseyo.", en: "One americano, please." },
        { who: "Staff", ko: "네, 사천 원입니다.", rom: "ne, sacheon wonimnida.", en: "Okay, that's 4,000 won." },
        { who: "You", ko: "여기 있어요. 감사합니다.", rom: "yeogi isseoyo. gamsahamnida.", en: "Here you go. Thank you." }
      ]
    },
    {
      title: "Shopping",
      level: "Intermediate",
      lines: [
        { who: "You", ko: "이거 얼마예요?", rom: "igeo eolmayeyo?", en: "How much is this?" },
        { who: "Clerk", ko: "만 오천 원이에요.", rom: "man ocheon wonieyo.", en: "It's 15,000 won." },
        { who: "You", ko: "조금 깎아 주세요.", rom: "jogeum kkakka juseyo.", en: "Please give me a little discount." },
        { who: "Clerk", ko: "그럼 만 삼천 원에 드릴게요.", rom: "geureom man samcheon wone deurilgeyo.", en: "Then I'll give it for 13,000 won." }
      ]
    },
    {
      title: "Asking directions",
      level: "Intermediate",
      lines: [
        { who: "A", ko: "실례합니다. 지하철역이 어디예요?", rom: "sillyehamnida. jihacheollyeogi eodiyeyo?", en: "Excuse me. Where is the subway station?" },
        { who: "B", ko: "쭉 가다가 오른쪽으로 가세요.", rom: "jjuk gadaga oreunjjogeuro gaseyo.", en: "Go straight, then turn right." },
        { who: "A", ko: "여기서 멀어요?", rom: "yeogiseo meoreoyo?", en: "Is it far from here?" },
        { who: "B", ko: "아니요, 가까워요.", rom: "aniyo, gakkawoyo.", en: "No, it's close." }
      ]
    },
    {
      title: "Self-introduction",
      level: "Advanced",
      lines: [
        { who: "A", ko: "안녕하세요. 처음 뵙겠습니다.", rom: "annyeonghaseyo. cheoeum boepgesseumnida.", en: "Hello. It's nice to meet you for the first time." },
        { who: "A", ko: "저는 미국에서 왔어요.", rom: "jeoneun migugeseo wasseoyo.", en: "I came from the United States." },
        { who: "A", ko: "한국어를 공부하고 있어요.", rom: "hangugeoreul gongbuhago isseoyo.", en: "I'm studying Korean." },
        { who: "A", ko: "잘 부탁드립니다.", rom: "jal butakdeurimnida.", en: "I look forward to working with you." }
      ]
    }
  ]
};
