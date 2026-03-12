/* =========================================================
   작은 축복 - app.js
   감정 선택 + 랜덤 메시지 + 감정별 카드 테마/캐릭터
   + 저장용 카드형 결과 + 저장/다시뽑기!
   ========================================================= */

/* =========================================================
   1) 카테고리 원문구
   ========================================================= */
const messagesByMood = {
  tired: [
    "오늘 하루도 정말 수고 많으셨어요. 잠시 쉬어가도 괜찮아요. 🌙",
    "피곤한 마음도 몸도, 모두 소중한 당신의 일부예요. 천천히 회복하시길. ☁️",
    "고생한 당신을 위해 따뜻한 차 한 잔과 포근한 휴식을 선물할게요. ☕️",
    "쉬어가는 것도 용기예요. 오늘은 충분히 누워 있어도 좋아요. 🛏️",
    "당신의 노력이 헛되지 않았다는 걸 기억하세요. 👏",
    "잠시 눈을 감고 심호흡해보세요. 마음이 한결 가벼워질 거예요. 🌬️",
    "작은 휴식이 큰 힘이 돼요. 당신은 잘하고 있어요. 💪",
    "무거운 짐은 내려놔도 괜찮아요. 👜",
    "당신이 최선을 다했음을 제가 알아요. 🌟",
    "오늘 하루 충분히 애썼어요. 내일은 더 가볍길. 🌅",
    "몸도 마음도 재충전하는 밤이 되길 바라요. 🌌",
    "따뜻한 담요처럼 포근한 휴식이 당신 곁에 있길. 🧣",
    "피곤하다고 해서 부족한 게 아니에요. 당신은 완전해요. 🌼",
    "잠깐의 멈춤도 성장의 일부예요. ⏸️",
    "오늘의 피로는 내일의 빛을 위한 준비예요. ✨",
    "조금 느려도 괜찮아요. 🐢",
    "편안한 음악을 들으며 몸을 풀어주세요. 🎶",
    "깊은 잠이 당신을 감싸 안길. 🌙",
    "당신의 오늘은 이미 충분히 가치 있었어요. 💖",
    "따뜻한 햇살 같은 내일이 기다리고 있어요. 🌞",
    "지쳤다면 쉬어가는 게 답이에요. 🚶",
    "당신의 노력은 누구보다 빛나고 있어요. 🔆",
    "잠시 내려놓아도 괜찮아요. 🛋️",
    "편안히 숨 쉬는 것도 큰 보상이 돼요. 🌱",
    "무리하지 말고 스스로를 다독여주세요. 🤲",
    "천천히 재충전하면 돼요. 🔋",
    "오늘 하루는 여기까지! 충분히 잘했어요. 🏁",
    "편안한 잠이 당신에게 찾아오길. 😴",
    "내일은 오늘보다 더 빛날 거예요. 🌈",
    "지금의 당신 그대로 충분히 아름다워요. 🌷"
  ],

  sad: [
    "슬픈 마음도 당신의 소중한 감정이에요. 충분히 느끼고, 천천히 치유되길. 💙",
    "눈물이 나와도 괜찮아요. 당신은 혼자가 아니라는 걸 기억해 주세요. 🤝",
    "힘든 시간도 지나갈 거예요. 당신의 마음에 따뜻한 위로를 보내요. 🌈",
    "슬픔은 당신이 얼마나 깊이 사랑했는지를 보여줘요. ❤️",
    "흐린 날에도 태양은 숨어 있을 뿐, 사라지지 않아요. ☀️",
    "울음은 마음의 무게를 덜어내는 과정이에요. 😢",
    "지금의 눈물이 내일의 웃음을 키울 거예요. 🌸",
    "슬픔 속에서도 당신은 여전히 소중한 존재예요. 🌟",
    "눈물도 언젠가 반짝이는 추억으로 변할 거예요. 💧",
    "마음이 아파도, 그만큼 따뜻한 사람이라는 증거예요. 💖",
    "혼자 울어도 괜찮아요. 그 울음은 당신의 힘이에요. 💪",
    "시간이 흘러 상처는 아물어요. 조금만 더 버텨주세요. ⏳",
    "눈물 뒤에는 언제나 무지개가 있어요. 🌈",
    "당신의 마음을 있는 그대로 존중해 주세요. 🙏",
    "이 순간도 지나갈 거예요. 🌌",
    "상처 난 마음에도 빛은 스며들어요. 🔦",
    "당신은 혼자가 아니에요. 👫",
    "우는 것도 성장의 일부예요. 🌱",
    "오늘의 눈물이 내일을 단단히 만들어줘요. 🗿",
    "당신은 지금도 충분히 아름다워요. 🌷",
    "마음이 울적할 때는 하늘을 올려다보세요. 🌤️",
    "깊은 감정은 당신의 영혼을 풍부하게 해줘요. ✨",
    "눈물 한 방울에도 위로가 담겨 있어요. 🤍",
    "힘든 감정도 결국 당신의 일부예요. 💎",
    "슬픔은 영원하지 않아요. 🌠",
    "내일은 조금 더 가벼운 마음이 되길. 🎐",
    "아직 웃을 힘이 없더라도 괜찮아요. 😊",
    "당신의 마음은 곧 회복될 거예요. 🌼",
    "그대의 눈물은 곧 희망으로 바뀔 거예요. 💫",
    "당신은 여전히 소중한 사람입니다. 🌹"
  ],

  stress: [
    "복잡한 마음, 이해해요. 한 번에 하나씩, 천천히 해결해 나가요. 🌱",
    "스트레스받는 당신도 충분히 잘하고 있어요. 자신을 믿어보세요. ⭐️",
    "깊게 숨을 쉬고, 잠시 멈춰서 자신을 돌보는 시간을 가져보세요. 🌸",
    "해야 할 일이 많아도, 하나씩 해나가면 돼요. 🧩",
    "작은 성취도 큰 의미가 있어요. 🎉",
    "긴장한 어깨를 살짝 풀어주세요. 🙆",
    "스트레스는 잠시, 당신의 가치는 영원해요. 💎",
    "완벽하지 않아도 괜찮아요. ✔️",
    "휴식도 업무의 일부예요. 📅",
    "마음이 무거울 땐 깊은 숨으로 가볍게. 🌬️",
    "당신은 충분히 잘 해내고 있어요. 💪",
    "작은 즐거움에 집중해 보세요. 🍀",
    "당신의 노력이 반드시 결실로 돌아올 거예요. 🌾",
    "피곤할 땐 잠시 눈을 감으세요. 😌",
    "잘 하고 있다는 걸 스스로 인정해주세요. 👑",
    "오늘의 고민은 내일의 해답을 품고 있어요. 📖",
    "당신의 마음을 다잡는 힘은 이미 안에 있어요. 🔑",
    "쉬는 것도 책임감의 한 형태예요. 🛋️",
    "스트레스는 흘러가고, 당신은 남아요. 🕊️",
    "당신은 지금도 충분히 소중해요. 💖",
    "작은 실수도 성장의 일부예요. 🌟",
    "하루에 조금이라도 자신만의 시간을 가져보세요. 🕯️",
    "지금의 노고는 내일의 성취로 돌아올 거예요. 🏆",
    "당신의 속도는 당신만의 리듬이에요. 🎵",
    "모든 걸 다 안 해도 괜찮아요. 🙅",
    "마음을 지치게 하지 않도록 잠시 멈추세요. 🚦",
    "당신은 혼자가 아니에요. 🤝",
    "천천히 걸어가면 충분해요. 🚶",
    "작은 미소가 큰 힘이 돼요. 😊",
    "당신의 가치는 상황과 상관없이 빛나요. 🔆"
  ],

  lonely: [
    "외롭다고 느끼는 마음, 저도 함께 나누고 싶어요. 당신은 소중한 사람이에요. 💕",
    "혼자여도 괜찮아요. 당신만의 특별한 시간을 만들어보세요. 🌟",
    "멀리 있어도 당신을 응원하는 마음이 있다는 걸 기억해 주세요. 🤗",
    "당신은 혼자가 아니에요. 🌍",
    "스스로를 사랑하는 시간이 필요할 때예요. 💝",
    "혼자만의 여유가 당신을 단단하게 만들어요. 🌳",
    "당신을 걱정하고 생각하는 사람이 꼭 있어요. 📞",
    "외로움은 당신이 사람을 얼마나 소중히 여기는지 보여줘요. 🤲",
    "오늘은 자신에게 편지를 써보세요. ✍️",
    "거울 속 당신에게 미소 지어주세요. 🔍",
    "고요한 순간 속에서 힘을 발견할 수 있어요. 🔕",
    "외롭다고 느껴도 하늘은 늘 당신 위에 있어요. ☁️",
    "마음을 나눌 누군가가 반드시 곁에 와줄 거예요. 🚪",
    "혼자라는 건 곧 자유롭다는 뜻이기도 해요. 🕊️",
    "당신의 따뜻함은 언젠가 꼭 전해질 거예요. 🔥",
    "외로운 순간에도 당신의 가치는 변하지 않아요. 💎",
    "혼자 보내는 시간도 선물일 수 있어요. 🎁",
    "당신은 사랑받을 자격이 충분해요. 🌹",
    "멀리서도 마음을 전할 수 있어요. 💌",
    "당신의 존재는 이미 큰 의미가 있어요. 🌠",
    "혼자가 아니라 스스로와 함께하는 거예요. 🤍",
    "당신은 누군가의 소중한 추억 속 주인공이에요. 📖",
    "외로운 시간도 지나가요. 🕰️",
    "스스로를 다독여줄 줄 아는 용기를 가지세요. 🙌",
    "오늘도 당신은 소중한 존재예요. 🌷",
    "당신의 마음은 반드시 누군가에게 닿을 거예요. 📡",
    "고독은 새로운 영감을 주기도 해요. 🎨",
    "누군가의 진심 어린 응원이 지금 당신을 향하고 있어요. 🌈",
    "외로움 속에서도 당신은 빛나요. 🔆",
    "언제나 당신은 충분히 사랑받고 있어요. 💖"
  ],

  comfort: [
    "오늘은 귀여움이 당신 편이에요. 작은 미소 하나면 충분해요. 🐾",
    "복슬복슬한 위로 한 스푼 놓고 갈게요. 🧸",
    "괜히 마음이 허전한 날엔 귀여운 것 하나로도 충분해요. 🌸",
    "오늘 당신은 토닥토닥이 꼭 필요한 사람입니다. 🤍",
    "작고 말랑한 행복이 당신에게 착 붙길. 🍀",
    "귀여운 건 세상을 구하고, 오늘은 당신도 구해줄 거예요. ✨",
    "오늘 하루는 복냥이가 당신 편이래요. 🐱",
    "복실한 위로가 조용히 당신 곁에 앉아 있어요. 🌼",
    "괜찮아, 오늘은 그냥 귀여워도 되는 날이에요. 🎀",
    "작은 고양이 한 마리만큼의 평온이 당신에게 오길. 🌙"
  ]
};

/* =========================================================
   2) 가벼운 유머 메시지
   ========================================================= */
const extraFunny = [
  "오늘 밤, 상사를 마음껏 혼내는 꿈을 꾸게 될 거예요. 😴",
  "길을 가다 5천 원짜리 지폐를 주울 확률이 높습니다. 👛",
  "오늘의 행운 아이템은 치킨. 하지만 살은 알아서 관리하세요. 🍗",
  "자판기에서 음료 뽑으면 2개 나올 수도...? 🤔",
  "엘리베이터 버튼이 한 번에 올 거예요. ⬆️",
  "길고양이가 당신을 따라올지도 몰라요. 🐈",
  "아이스 아메리카노 사이즈 업은 오늘만큼은 무료일 듯한 기분! 🧊",
  "옆자리 사람이 먼저 간식 나눠줄 확률 99%. 🍫",
  "버스 타면 딱 앞자리, 창가 명당이 당신 것! 🚌",
  "비 와도 머리카락이 안 부스스해지는 기적 발생 예정. ☔️",
  "택배가 예상보다 일찍 도착할 수도 있어요. 📦",
  "SNS 올리면 좋아요가 평소보다 두 배! 👍",
  "주차 자리가 바로 앞에 딱 생길 거예요. 🚗",
  "작은 복권이 작은 기쁨을 줄지도? 🎟️",
  "분실한 양말이 세탁기에서 재등장할 예정. 🧦",
  "모르는 번호? 의외의 좋은 소식일지도! 📞",
  "편의점 이벤트 당첨 각! 오늘은 당신의 날. 🎁",
  "오늘은 실수해도 귀엽게 넘어갈 수 있는 날. 🐣",
  "웃다가 배꼽 빠질 일이 반드시 생깁니다. 😂"
];

/* =========================================================
   3) 감정별 메타 정보
   ========================================================= */
const moodMeta = {
  tired: {
    label: "😴 조금 지친 날",
    theme: "theme-tired",
    image: "assets/cat_tired.png"
  },
  sad: {
    label: "💧 괜히 울적한 날",
    theme: "theme-sad",
    image: "assets/cat_sad.png"
  },
  stress: {
    label: "⚡ 스트레스 많은 날",
    theme: "theme-stress",
    image: "assets/cat_stress.png"
  },
  lonely: {
    label: "🌙 외로운 날",
    theme: "theme-lonely",
    image: "assets/cat_lonely.png"
  },
  comfort: {
    label: "🐾 귀여운 위로가 필요한 날",
    theme: "theme-comfort",
    image: "assets/cat_comfort.png"
  },
  random: {
    label: "🎲 랜덤 축복",
    theme: "theme-random",
    image: "assets/cat_random.png"
  }
};

/* =========================================================
   4) 행운의 색 / 아이템
   ========================================================= */
const luckyColors = [
  { name: "민트", icon: "💚" },
  { name: "라벤더", icon: "💜" },
  { name: "살구", icon: "🧡" },
  { name: "하늘색", icon: "💙" },
  { name: "옅은 핑크", icon: "🌸" },
  { name: "크림", icon: "💛" },
  { name: "연보라", icon: "💜" },
  { name: "피치", icon: "🧡" },
  { name: "베이비 블루", icon: "💙" },
  { name: "소프트 옐로", icon: "💛" },
  { name: "네이비", icon: "💙" },
  { name: "코랄", icon: "🧡" },
  { name: "올리브", icon: "🌿" },
  { name: "모브", icon: "💜" },
  { name: "버터", icon: "💛" },
  { name: "코발트", icon: "🔷" },
  { name: "플럼", icon: "🍇" },
  { name: "틸", icon: "🦚" },
  { name: "라임", icon: "💚" },
  { name: "카멜", icon: "🟫" }
];

const luckyItems = [
  { name: "따뜻한 머그컵", icon: "☕️" },
  { name: "책 한 권", icon: "📖" },
  { name: "작은 화분", icon: "🌱" },
  { name: "향초", icon: "🕯️" },
  { name: "부드러운 담요", icon: "🧸" },
  { name: "좋아하는 음악", icon: "🎵" },
  { name: "달콤한 초콜릿", icon: "🍫" },
  { name: "예쁜 스티커", icon: "✨" },
  { name: "포근한 쿠션", icon: "🛋️" },
  { name: "따뜻한 차", icon: "🍵" },
  { name: "행운의 동전", icon: "💰" },
  { name: "파우치", icon: "👝" },
  { name: "손수건", icon: "🧻" },
  { name: "볼펜", icon: "🖊️" },
  { name: "스니커즈", icon: "👟" },
  { name: "산책 10분", icon: "🚶" },
  { name: "사진 한 장", icon: "📸" },
  { name: "작은 노트", icon: "📓" },
  { name: "헤어끈", icon: "🧵" },
  { name: "텀블러", icon: "🥤" },
  { name: "접이식 우산", icon: "🌂" },
  { name: "핫팩", icon: "♨️" }
];

/* =========================================================
   5) 카드 확장용 데이터
   ========================================================= */
const moodExtras = {
  tired: {
    subtexts: [
      "오늘은 속도를 조금 늦춰도 괜찮아요. 충분히 애쓴 하루였으니까요.",
      "지친 마음을 억지로 끌고 가지 말고, 잠깐 기대어 쉬어가도 좋아요.",
      "열심히 버틴 당신에게 필요한 건 채찍보다 포근한 쉼이에요."
    ],
    actions: [
      { text: "물 한 잔 천천히 마시기", icon: "💧" },
      { text: "5분만 눈 감고 있기", icon: "😌" },
      { text: "따뜻한 차 한 잔 마시기", icon: "🍵" },
      { text: "오늘은 일찍 눕기", icon: "🛏️" }
    ],
    avoids: [
      { text: "무리한 일정 더 넣기", icon: "⛔" },
      { text: "스스로 다그치기", icon: "☁️" },
      { text: "너무 많은 생각", icon: "🌀" },
      { text: "피곤한데 참기", icon: "🥲" }
    ]
  },
  sad: {
    subtexts: [
      "마음이 흐린 날에도 당신의 하루는 충분히 소중해요.",
      "지금의 감정을 급하게 밀어내지 않아도 괜찮아요.",
      "슬픈 마음도 다정하게 안아주면 조금씩 가벼워질 거예요."
    ],
    actions: [
      { text: "좋아하는 노래 한 곡 듣기", icon: "🎵" },
      { text: "햇빛 드는 곳 바라보기", icon: "☀️" },
      { text: "마음 적어보기", icon: "✍️" },
      { text: "따뜻한 음료 마시기", icon: "☕️" }
    ],
    avoids: [
      { text: "감정을 억지로 숨기기", icon: "🙈" },
      { text: "지나친 비교", icon: "⚖️" },
      { text: "혼자 너무 오래 끙끙대기", icon: "🌧️" },
      { text: "나를 탓하는 말", icon: "💭" }
    ]
  },
  stress: {
    subtexts: [
      "모든 걸 한 번에 해결하지 않아도 괜찮아요. 하나씩만 해도 충분해요.",
      "복잡한 하루일수록 마음을 잠깐 멈춰주는 시간이 필요해요.",
      "당신은 이미 꽤 잘 해내고 있어요. 지금도 충분해요."
    ],
    actions: [
      { text: "어깨 한번 쭉 펴기", icon: "🙆" },
      { text: "할 일 하나만 먼저 끝내기", icon: "✅" },
      { text: "10분 산책하기", icon: "🚶" },
      { text: "심호흡 세 번 하기", icon: "🌬️" }
    ],
    avoids: [
      { text: "모든 걸 완벽하게 하려 하기", icon: "⚡" },
      { text: "멀티태스킹 욕심", icon: "🧠" },
      { text: "급하게 결론 내리기", icon: "🚫" },
      { text: "작은 실수에 오래 매달리기", icon: "🔁" }
    ]
  },
  lonely: {
    subtexts: [
      "고요한 하루에도 당신의 존재는 충분히 따뜻하고 반짝여요.",
      "혼자 있는 시간이 꼭 외로운 시간만은 아니길 바라요.",
      "누군가와 연결되어 있지 않은 것 같아도 당신은 혼자가 아니에요."
    ],
    actions: [
      { text: "창밖 하늘 1분 보기", icon: "🌙" },
      { text: "좋아하는 사람 떠올리기", icon: "💌" },
      { text: "나에게 다정한 말 한마디 하기", icon: "🤍" },
      { text: "작은 기록 남기기", icon: "📓" }
    ],
    avoids: [
      { text: "나만 뒤처졌다고 생각하기", icon: "🥺" },
      { text: "일부러 더 움츠러들기", icon: "🫥" },
      { text: "나를 하찮게 보는 말", icon: "💭" },
      { text: "연락하고 싶은 마음 참기", icon: "📵" }
    ]
  },
  comfort: {
    subtexts: [
      "오늘은 귀엽고 말랑한 것들이 당신 마음을 지켜줄 거예요.",
      "큰 위로가 아니어도 괜찮아요. 작은 귀여움 하나면 충분한 날도 있으니까요.",
      "복냥이가 오늘 당신 옆에 가만히 앉아 있는 기분으로 봐주세요."
    ],
    actions: [
      { text: "귀여운 사진 하나 보기", icon: "🐱" },
      { text: "간식 하나 천천히 먹기", icon: "🍪" },
      { text: "좋아하는 향 맡아보기", icon: "🌸" },
      { text: "작은 미소 한 번 지어보기", icon: "😊" }
    ],
    avoids: [
      { text: "괜히 심각해지기", icon: "🙅" },
      { text: "기분을 억지로 끌어올리기", icon: "🎭" },
      { text: "귀여움 부족한 하루", icon: "😼" },
      { text: "너무 딱딱한 생각", icon: "🪨" }
    ]
  },
  random: {
    subtexts: [
      "오늘은 어떤 축복이든 당신에게 다정하게 닿기를 바라요.",
      "예상하지 못한 작은 행운이 하루를 부드럽게 만들어줄지도 몰라요.",
      "복냥이가 랜덤으로 꺼내온 오늘의 작은 응원이에요."
    ],
    actions: [
      { text: "작은 즐거움 하나 찾기", icon: "🍀" },
      { text: "좋아하는 것 떠올리기", icon: "✨" },
      { text: "가볍게 기지개 켜기", icon: "🌿" },
      { text: "오늘 기분 체크해보기", icon: "📝" }
    ],
    avoids: [
      { text: "좋은 기운 흘려보내기", icon: "☁️" },
      { text: "괜한 걱정 쌓아두기", icon: "🌀" },
      { text: "너무 많은 비교", icon: "⚖️" },
      { text: "나를 대충 대하기", icon: "🥲" }
    ]
  }
};

/* =========================================================
   6) 유틸
   ========================================================= */
function lineToBlessing(line) {
  const m = line.match(
    /([\p{Extended_Pictographic}\u2600-\u27BF]\uFE0F?|\p{Emoji_Presentation}|\p{Emoji})$/u
  );
  const emoji = m ? m[1] : "✨";
  const text = m ? line.replace(m[1], "").trim() : line;
  return { emoji, text };
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function showSaveLoading() {
  const overlay = document.getElementById("saveLoadingOverlay");
  const loadingCharacter = document.getElementById("saveLoadingCharacter");
  const topCharacter = document.getElementById("topCharacterImage");

  if (loadingCharacter && topCharacter?.src) {
    loadingCharacter.src = topCharacter.src;
    loadingCharacter.alt = topCharacter.alt || "복냥이";
  }

  if (overlay) {
    overlay.classList.add("show");
    overlay.setAttribute("aria-hidden", "false");
  }
}

function hideSaveLoading() {
  const overlay = document.getElementById("saveLoadingOverlay");
  if (overlay) {
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
  }
}

async function saveBlessingCard() {
  const exportArea = document.getElementById("exportArea");
  const saveBtn = document.getElementById("saveBtn");
  const saveBtnText = saveBtn?.querySelector(".btn-txt");

  if (!exportArea || typeof htmlToImage === "undefined") {
    alert("저장 기능을 사용할 수 없어요.");
    return;
  }

  try {
    if (saveBtn) saveBtn.disabled = true;
    if (saveBtnText) saveBtnText.textContent = "저장 중...";

    showSaveLoading();

    await wait(200);

    exportArea.classList.add("exporting");
    await wait(250);

    const dataUrl = await htmlToImage.toPng(exportArea, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: "#fffaf7"
    });

    const link = document.createElement("a");
    const today = new Date();
    const fileName = `small-blessing-${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}.png`;

    link.download = fileName;
    link.href = dataUrl;
    link.click();

    await wait(250);
  } catch (error) {
    console.error(error);
    alert("이미지 저장 중 문제가 생겼어요.");
  } finally {
    exportArea.classList.remove("exporting");
    hideSaveLoading();

    if (saveBtn) saveBtn.disabled = false;
    if (saveBtnText) saveBtnText.textContent = "축복 카드 저장";
  }
}

/* =========================================================
   7) 상태값
   ========================================================= */
let currentBlessing = null;
let currentColor = null;
let currentItem = null;
let currentSubtext = "";
let currentAction = null;
let currentAvoid = null;
let selectedMood = "random";

/* =========================================================
   8) 감정별 메시지 풀 생성
   ========================================================= */
function getBlessingPoolByMood(mood) {
  if (mood === "random") {
    return [
      ...messagesByMood.tired.map(lineToBlessing),
      ...messagesByMood.sad.map(lineToBlessing),
      ...messagesByMood.stress.map(lineToBlessing),
      ...messagesByMood.lonely.map(lineToBlessing),
      ...messagesByMood.comfort.map(lineToBlessing),
      ...extraFunny.map(lineToBlessing)
    ];
  }

  let pool = [...messagesByMood[mood].map(lineToBlessing)];

  if (mood === "comfort") {
    pool = [...pool, ...extraFunny.map(lineToBlessing)];
  }

  return pool;
}

/* =========================================================
   9) UI 업데이트
   ========================================================= */
function updateUI() {
  if (!currentBlessing || !currentColor || !currentItem) return;

  setText("blessingEmoji", currentBlessing.emoji);
  setText("blessingText", currentBlessing.text);
  setText("blessingSubtext", currentSubtext);

  setText("colorIcon", currentColor.icon);
  setText("luckyColor", currentColor.name);

  setText("itemIcon", currentItem.icon);
  setText("luckyItem", currentItem.name);

  if (currentAction) {
    setText("actionIcon", currentAction.icon);
    setText("todayAction", currentAction.text);
  }

  if (currentAvoid) {
    setText("avoidIcon", currentAvoid.icon);
    setText("todayAvoid", currentAvoid.text);
  }

  const meta = moodMeta[selectedMood] || moodMeta.random;
  const moodBadge = document.getElementById("moodBadge");
  const card = document.getElementById("blessingCard") || document.querySelector(".blessing-card");
  const topCharacterImg = document.getElementById("topCharacterImage");
  const exportCharacterImg = document.getElementById("exportCharacterImage");

  if (moodBadge) {
    moodBadge.textContent = meta.label;
  }

  if (topCharacterImg) {
    topCharacterImg.src = meta.image;
    topCharacterImg.alt = meta.label;
  }

  if (exportCharacterImg) {
    exportCharacterImg.src = meta.image;
    exportCharacterImg.alt = meta.label;
  }

  if (card) {
    card.classList.remove(
      "theme-tired",
      "theme-sad",
      "theme-stress",
      "theme-lonely",
      "theme-comfort",
      "theme-random"
    );
    card.classList.add(meta.theme);

    card.style.transform = "scale(0.98)";
    card.style.transition = "transform .2s";
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 120);
    });
  }
}

/* =========================================================
   10) 랜덤 축복 생성
   ========================================================= */
function generateRandomBlessing() {
  const pool = getBlessingPoolByMood(selectedMood);

  currentBlessing = randomPick(pool);
  currentColor = randomPick(luckyColors);
  currentItem = randomPick(luckyItems);

  const extra = moodExtras[selectedMood] || moodExtras.random;
  currentSubtext = randomPick(extra.subtexts);
  currentAction = randomPick(extra.actions);
  currentAvoid = randomPick(extra.avoids);

  updateUI();
}

/* =========================================================
   11) 화면 전환
   ========================================================= */
function openGiftBox() {
  const giftBox = document.getElementById("giftBox");
  const giftBoxContainer = document.getElementById("giftBoxContainer");
  const giftBoxScreen = document.getElementById("giftBoxScreen");
  const resultScreen = document.getElementById("resultScreen");

  if (giftBox) giftBox.classList.add("opening");
  setTimeout(() => {
    if (giftBoxContainer) giftBoxContainer.classList.add("disappear");
  }, 800);

  setTimeout(() => {
    if (giftBoxScreen) giftBoxScreen.style.display = "none";
    if (resultScreen) {
      resultScreen.style.display = "block";
      resultScreen.classList.add("screen-transition");
    }
    generateRandomBlessing();
  }, 1800);
}

function goHome() {
  const giftBox = document.getElementById("giftBox");
  const giftBoxContainer = document.getElementById("giftBoxContainer");
  const giftBoxScreen = document.getElementById("giftBoxScreen");
  const resultScreen = document.getElementById("resultScreen");

  if (resultScreen) resultScreen.style.display = "none";
  if (giftBoxScreen) giftBoxScreen.style.display = "block";

  if (giftBox) giftBox.classList.remove("opening");
  if (giftBoxContainer) giftBoxContainer.classList.remove("disappear");
}

function rerollBlessing() {
  generateRandomBlessing();
}

/* =========================================================
   12) 저장 기능
   ========================================================= */
async function saveBlessingCard() {
  const exportArea = document.getElementById("exportArea");
  const saveBtn = document.getElementById("saveBtn");
  const saveBtnText = saveBtn?.querySelector(".btn-txt");

  if (!exportArea || typeof htmlToImage === "undefined") {
    alert("저장 기능을 사용할 수 없어요.");
    return;
  }

  try {
    if (saveBtn) saveBtn.disabled = true;
    if (saveBtnText) saveBtnText.textContent = "저장 중...";

    exportArea.classList.add("exporting");

    await wait(180);

    const pixelRatio = Math.min(3, Math.max(2, window.devicePixelRatio || 2));

    const dataUrl = await htmlToImage.toPng(exportArea, {
      cacheBust: true,
      pixelRatio,
      backgroundColor: "#fffaf7",
      skipFonts: false
    });

    const link = document.createElement("a");
    const today = new Date();
    const fileName = `small-blessing-${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}.png`;

    link.download = fileName;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error(error);
    alert("이미지 저장 중 문제가 생겼어요.");
  } finally {
    exportArea.classList.remove("exporting");
    if (saveBtn) saveBtn.disabled = false;
    if (saveBtnText) saveBtnText.textContent = "축복 카드 저장";
  }
}

/* =========================================================
   13) 파티클 생성
   ========================================================= */
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const syms = ["✨", "🌟", "💫", "⭐", "🌸", "🍀", "💝", "🎈", "🦋", "🌈"];

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "particle";
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.left = Math.random() * 100 + "%";
      el.style.top = "100%";
      el.style.animationDelay = Math.random() * 2 + "s";
      el.style.animationDuration = 8 + Math.random() * 4 + "s";
      container.appendChild(el);

      setTimeout(() => {
        el.remove();
      }, 12000);
    }, i * 300);
  }
}

/* =========================================================
   14) 날짜 라벨
   ========================================================= */
function updateDateLabel() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  setText("dateLabel", `${month}월 ${date}일의 작은 축복`);
}

/* =========================================================
   15) 감정 버튼 바인딩
   ========================================================= */
function bindMoodButtons() {
  const moodButtons = document.querySelectorAll(".mood-button");
  if (!moodButtons.length) return;

  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      moodButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      selectedMood = button.dataset.mood || "random";
    });
  });

  const defaultButton = document.querySelector('.mood-button[data-mood="random"]');
  if (defaultButton) {
    defaultButton.classList.add("active");
    selectedMood = "random";
  }
}

/* =========================================================
   16) 초기 바인딩
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBtn");
  const homeBtn = document.getElementById("homeBtn");
  const rerollBtn = document.getElementById("rerollBtn");
  const saveBtn = document.getElementById("saveBtn");

  if (openBtn) openBtn.addEventListener("click", openGiftBox);
  if (homeBtn) homeBtn.addEventListener("click", goHome);
  if (rerollBtn) rerollBtn.addEventListener("click", rerollBlessing);
  if (saveBtn) saveBtn.addEventListener("click", saveBlessingCard);

  bindMoodButtons();
  updateDateLabel();

  createParticles();
  setInterval(createParticles, 6000);
});
