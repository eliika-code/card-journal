// ==================================================
// 大アルカナ22枚
// ==================================================

const tarotCards = [

  {
    name: "愚者",
    upright: "自由、始まり、可能性、冒険",
    reversed: "軽率、無計画、不安定、迷い"
  },

  {
    name: "魔術師",
    upright: "創造、行動力、始まり、才能",
    reversed: "準備不足、ごまかし、空回り"
  },

  {
    name: "女教皇",
    upright: "直感、知性、静けさ、内省",
    reversed: "不安、秘密、考えすぎ"
  },

  {
    name: "女帝",
    upright: "豊かさ、愛情、実り、安心",
    reversed: "甘え、停滞、過保護、不満"
  },

  {
    name: "皇帝",
    upright: "安定、責任、リーダーシップ、秩序",
    reversed: "頑固、支配的、無責任"
  },

  {
    name: "法王",
    upright: "信頼、学び、伝統、助言",
    reversed: "常識への疑問、孤立、型破り"
  },

  {
    name: "恋人",
    upright: "選択、調和、愛、納得",
    reversed: "迷い、不一致、優柔不断"
  },

  {
    name: "戦車",
    upright: "前進、勝利、意志、突破",
    reversed: "暴走、空回り、方向性の迷い"
  },

  {
    name: "力",
    upright: "忍耐、優しさ、内なる強さ",
    reversed: "自信不足、疲れ、感情の乱れ"
  },

  {
    name: "隠者",
    upright: "探求、内省、慎重、ひとりの時間",
    reversed: "孤独、閉じこもり、考えすぎ"
  },

  {
    name: "運命の輪",
    upright: "転機、流れ、チャンス、変化",
    reversed: "停滞、タイミングのずれ、予想外"
  },

  {
    name: "正義",
    upright: "公平、判断、バランス、誠実",
    reversed: "偏り、不公平、決断できない"
  },

  {
    name: "吊るされた男",
    upright: "忍耐、視点の転換、待つ時間",
    reversed: "報われなさ、停滞、無理な我慢"
  },

  {
    name: "死神",
    upright: "終わり、変化、再出発、手放し",
    reversed: "執着、変化への抵抗、区切れない"
  },

  {
    name: "節制",
    upright: "調和、調整、回復、自然な流れ",
    reversed: "不調和、無理、乱れ、焦り"
  },

  {
    name: "悪魔",
    upright: "欲望、執着、誘惑、強い感情",
    reversed: "解放、気づき、依存から抜ける"
  },

  {
    name: "塔",
    upright: "崩壊、衝撃、気づき、リセット",
    reversed: "崩壊の回避、先延ばし、小さな変化"
  },

  {
    name: "星",
    upright: "希望、癒し、理想、未来への光",
    reversed: "不安、希望を見失う、回復途中"
  },

  {
    name: "月",
    upright: "不安、曖昧さ、夢、揺れる心",
    reversed: "不安が晴れる、真実が見える"
  },

  {
    name: "太陽",
    upright: "成功、喜び、明るさ、生命力",
    reversed: "一時的な停滞、元気不足、過信"
  },

  {
    name: "最後の審判",
    upright: "復活、目覚め、再評価、呼びかけ",
    reversed: "迷い、過去にとらわれる、決めきれない"
  },

  {
    name: "世界",
    upright: "完成、達成、統合、満足",
    reversed: "未完成、あと一歩、終われない"
  }

];


// ==================================================
// 水鏡の問いかけ
// ==================================================

const oracleCards = [

  // ---------- からだ ----------

  {
    category: "からだ",
    name: "ぬるい湯船",
    message: "なにもしないで、自分に戻る",
    prompt: "今、五感は何を感じている？",
    image: "images/oracle/body-01-bath.webp"
  },

  {
    category: "からだ",
    name: "あたたかい布団",
    message: "すべてを閉じて、今日を終わる",
    prompt: "今、まだ閉じられないことはある？",
    image: "images/oracle/body-02-futon.webp"
  },

  {
    category: "からだ",
    name: "冷たいゼリー飲料",
    message: "最低限の栄養を心身に入れる",
    prompt: "今、自分に足りない栄養は何？",
    image: "images/oracle/body-03-jelly.webp"
  },

  {
    category: "からだ",
    name: "履きなれたスニーカー",
    message: "体が動き出すと、心も動いてくれる",
    prompt: "今、動いてみるとしたら何をする？",
    image: "images/oracle/body-04-sneakers.webp"
  },

  {
    category: "からだ",
    name: "やわらかいクッション",
    message: "包み込むように、今日の疲れを受け止める",
    prompt: "今感じている疲れはどんな疲れ？",
    image: "images/oracle/body-05-cushion.webp"
  },

  {
    category: "からだ",
    name: "硬いデスクチェア",
    message: "それでも向き合わないといけないものがある",
    prompt: "今、ここに座り続けるために必要なものは？",
    image: "images/oracle/body-06-chair.webp"
  },


  // ---------- こころ ----------

  {
    category: "こころ",
    name: "香りのいい紅茶",
    message: "穏やかで、落ち着ける時間を過ごす",
    prompt: "今、ひとつ自分にやさしいことをするなら？",
    image: "images/oracle/mind-01-tea.webp"
  },

  {
    category: "こころ",
    name: "浮かぶ風船",
    message: "ふわふわと気分が浮き立っている",
    prompt: "最近あった楽しいことは？",
    image: "images/oracle/mind-02-baloon.webp"
  },

  {
    category: "こころ",
    name: "弾けるクラッカー",
    message: "大きな喜びに満ちている",
    prompt: "最近あった嬉しいことは？",
    image: "images/oracle/mind-03-cracker.webp"
  },

  {
    category: "こころ",
    name: "騒がしい声",
    message: "外からくる刺激が大きすぎる",
    prompt: "今、ひとつ自分を守る行動をとるとしたら？",
    image: "images/oracle/mind-03-cracker.webp"
  },

  {
    category: "こころ",
    name: "ぐちゃぐちゃの書き散らし",
    message: "内から出る思考が暴走している",
    prompt: "最近ずっと頭を占めている悩みは？",
    image: "images/oracle/mind-05-scribbles.webp"
  },

  {
    category: "こころ",
    name: "白い部屋",
    message: "何も考えられず、呆然と立っている",
    prompt: "今、自分の容量を圧迫していることがらは何？",
    image: "images/oracle/mind-06-white.webp"
  },


  // ---------- つながり ----------

  {
    category: "つながり",
    name: "閉じたドア",
    message: "扉を閉じても、向こう側の人が消えるわけではない",
    prompt: "今、少し離れていたい相手や場所はある？",
    image: "images/oracle/connection-01-door.webp"
  },

  {
    category: "つながり",
    name: "絡まった糸",
    message: "結び目ができるのは、糸と糸が触れあっているから",
    prompt: "今、うまく伝えられずにいることは？",
    image: "images/oracle/connection-02-tangle.webp"
  },

  {
    category: "つながり",
    name: "先の長いトゲ",
    message: "近づけないことと、大切ではないことは同じではない",
    prompt: "今、どんな距離なら心地よくいられる？",
    image: "images/oracle/connection-03-hedgehog.webp"
  },

  {
    category: "つながり",
    name: "握った手",
    message: "はじめまして、よろしく、縁がつながる",
    prompt: "最近知り合った人とどんなふうに仲良くなりたい？",
    image: "images/oracle/connection-04-hands.webp"
  },

  {
    category: "つながり",
    name: "並ぶ足",
    message: "無言でも隣で歩くだけで満足する",
    prompt: "最近の友達との思い出は何？",
    image: "images/oracle/connection-05-feet.webp"
  },

  {
    category: "つながり",
    name: "笑う口",
    message: "ささやかな楽しみを共有できる",
    prompt: "今いちばん笑顔を見たい人を、どうやって笑わせる？",
    image: "images/oracle/connection-06-mouth.webp"
  },


  // ---------- 流れ ----------

  {
    category: "流れ",
    name: "動き始めの水車",
    message: "力で回さなくていい、流れをつくる",
    prompt: "今、一歩だけ始められそうなことがあるとしたら何？",
    image: "images/oracle/flow-01-waterwheel.webp"
  },

  {
    category: "流れ",
    name: "満杯のししおどし",
    message: "いっぱいになったら倒れて、また戻る",
    prompt: "今、最後の一滴が落ちるとしたらどうする？",
    image: "images/oracle/flow-02-shishiodoshi.webp"
  },

  {
    category: "流れ",
    name: "空のカップ",
    message: "満たす前に、空いていることに気づく必要がある",
    prompt: "今、自分に足りないものをひとつ挙げるとしたら何？",
    image: "images/oracle/flow-03-cup.webp"
  },

  {
    category: "流れ",
    name: "寄り道の花",
    message: "目的地から外れた場所に、必要なものがある",
    prompt: "今、あえてやらなくてもいいことをするとしたら何？",
    image: "images/oracle/flow-04-flower.webp"
  },

  {
    category: "流れ",
    name: "水源の清流",
    message: "そこには意志よりも、ただ流れがある",
    prompt: "最近、自然と続けていることはある？",
    image: "images/oracle/flow-05-stream.webp"
  },

  {
    category: "流れ",
    name: "汚れた水たまり",
    message: "よどんだ停滞も、いつかは消える",
    prompt: "最近、行き詰まっていることはある？",
    image: "images/oracle/flow-06-puddle.webp"
  },


  // ---------- 創造 ----------

  {
    category: "創造",
    name: "積んだ文庫本",
    message: "いつか必ず会いに行くと約束している",
    prompt: "次に見たいのはどんな世界？",
    image: "images/oracle/creation-01-books.webp"
  },

  {
    category: "創造",
    name: "まっさらな原稿用紙",
    message: "次の物語が、息を吹き込まれるのを待っている",
    prompt: "今頭に浮かんだのはどんなシーン？",
    image: "images/oracle/creation-02-paper.webp"
  },

  {
    category: "創造",
    name: "使い込んだ日記帳",
    message: "すべての経験が、創作のタネになる",
    prompt: "今いちばん心を揺らしている記憶は何？",
    image: "images/oracle/creation-03-diary.webp"
  },

  {
    category: "創造",
    name: "空白の検索画面",
    message: "新しい世界を開くために、小さな勇気を出す",
    prompt: "今興味があるのに尻込みしていることはある？",
    image: "images/oracle/creation-04-search.webp"
  },

  {
    category: "創造",
    name: "お気に入りの万年筆",
    message: "手に馴染んだ感触で、安心して書き続ける",
    prompt: "最近取り組んでいることは順調？",
    image: "images/oracle/creation-05-pen.webp"
  },

  {
    category: "創造",
    name: "カラフルなサイリウム",
    message: "五感での体験が、心の栄養になる",
    prompt: "最近心から感動した出来事はあった？",
    image: "images/oracle/creation-06-glowsticks.webp"
  }

];


// ==================================================
// 今回引いたカード
// ==================================================

let currentReading = null;


// ==================================================
// HTMLの部品を取得
// ==================================================

const questionInput =
  document.getElementById("question");

const memoInput =
  document.getElementById("memo");

const drawTarotButton =
  document.getElementById("drawTarotButton");

const drawOracleButton =
  document.getElementById("drawOracleButton");

const saveButton =
  document.getElementById("saveButton");

const deckName =
  document.getElementById("deckName");

const cardImage =
  document.getElementById("cardImage");

const cardName =
  document.getElementById("cardName");

const cardMeaning =
  document.getElementById("cardMeaning");

const oracleQuestion =
  document.getElementById("oracleQuestion");

const historyList =
  document.getElementById("historyList");

const saveMessage =
  document.getElementById("saveMessage");

// ==================================================
// シャッフル演出
// ==================================================

function startDraw(type) {

  deckName.textContent = "";

  cardImage.hidden = true;

  cardName.textContent = "🔮 シャッフル中...";

  cardMeaning.textContent = "";

  oracleQuestion.textContent = "";


  // シャッフル中は両方のボタンを押せなくする
  drawTarotButton.disabled = true;

  drawOracleButton.disabled = true;


  setTimeout(() => {

    if (type === "tarot") {

      drawTarot();

    } else if (type === "oracle") {

      drawOracle();

    }


    // シャッフル終了
    drawTarotButton.disabled = false;

    drawOracleButton.disabled = false;

  }, 1000);

}


// ==================================================
// 大アルカナを引く
// ==================================================

function drawTarot() {

  // 0〜21のランダムな数字
  const randomIndex =
    Math.floor(Math.random() * tarotCards.length);


  // カードを選択
  const selectedCard =
    tarotCards[randomIndex];


  // 正位置・逆位置を50％で決定
  const isUpright =
    Math.random() < 0.5;


  const position =
    isUpright
      ? "正位置"
      : "逆位置";


  const meaning =
    isUpright
      ? selectedCard.upright
      : selectedCard.reversed;


  // 保存用データ
  currentReading = {

    deck: "tarot",

    deckName: "大アルカナ",

    question: questionInput.value,

    card: selectedCard.name,

    position: position,

    meaning: meaning,

    oraclePrompt: "",

    memo: "",

    date: new Date().toLocaleString("ja-JP")

  };


  // 画面表示
  deckName.textContent =
    "🃏 大アルカナ";

  cardImage.hidden = true;

  cardImage.src = "";

  cardName.textContent =
    `${selectedCard.name}（${position}）`;


  cardMeaning.textContent =
    `意味：${meaning}`;


  oracleQuestion.textContent = "";


  showFadeAnimation();


  // 前回のメモを消す
  memoInput.value = "";

}


// ==================================================
// 水鏡の問いかけを引く
// ==================================================

function drawOracle() {

  // 0〜29のランダムな数字
  const randomIndex =
    Math.floor(Math.random() * oracleCards.length);


  // カードを選択
  const selectedCard =
    oracleCards[randomIndex];

    

  // 保存用データ
  currentReading = {

    deck: "oracle",

    deckName: "水鏡の問いかけ",

    question: questionInput.value,

    card: selectedCard.name,

    category: selectedCard.category,

    position: "",

    meaning: selectedCard.message,

    oraclePrompt: selectedCard.prompt,

    memo: "",

    date: new Date().toLocaleString("ja-JP")

  };


  // 画面表示
  deckName.textContent =
    `🌊 水鏡の問いかけ【${selectedCard.category}】`;

  cardImage.src = selectedCard.image;

  cardImage.alt =
    `${selectedCard.name}のカード画像`;

  cardImage.hidden = false;

    
  cardName.textContent =
    selectedCard.name;


  cardMeaning.textContent =
    selectedCard.message;


  oracleQuestion.textContent =
    selectedCard.prompt;


  showFadeAnimation();


  // 前回のメモを消す
  memoInput.value = "";

}


// ==================================================
// ふわっと表示するアニメーション
// ==================================================

function showFadeAnimation() {

  cardName.classList.remove("fade");

  void cardName.offsetWidth;

  cardName.classList.add("fade");


  cardMeaning.classList.remove("fade");

  void cardMeaning.offsetWidth;

  cardMeaning.classList.add("fade");


  oracleQuestion.classList.remove("fade");

  void oracleQuestion.offsetWidth;

  oracleQuestion.classList.add("fade");

  cardImage.classList.remove("fade");

  void cardImage.offsetWidth;

  cardImage.classList.add("fade");

}


// ==================================================
// 結果を保存
// ==================================================

function saveReading() {

 if (!currentReading) {
  saveMessage.textContent = "先にカードを引いてね";

  setTimeout(() => {
    saveMessage.textContent = "";
  }, 2000);

  return;

  }


  // メモを保存用データに追加
  currentReading.memo =
    memoInput.value;


  // これまでの履歴を取得
  const histories =
    JSON.parse(
      localStorage.getItem("tarotHistories")
    ) || [];


  // 新しい結果を先頭に追加
  histories.unshift(currentReading);


  // ブラウザに保存
  localStorage.setItem(
    "tarotHistories",
    JSON.stringify(histories)
  );


  // 履歴を再表示
  showHistories();


  saveMessage.textContent = "✨ 保存しました";

  setTimeout(() => {
  saveMessage.textContent = "";
  }, 2000);

}


// ==================================================
// HTMLとして表示する文字を安全にする
// ==================================================

function escapeHTML(text) {

  if (text === undefined || text === null) {

    return "";

  }


  return String(text)

    .replaceAll("&", "&amp;")

    .replaceAll("<", "&lt;")

    .replaceAll(">", "&gt;")

    .replaceAll('"', "&quot;")

    .replaceAll("'", "&#039;");

}


// ==================================================
// 履歴を表示
// ==================================================

function showHistories() {

  const histories =
    JSON.parse(
      localStorage.getItem("tarotHistories")
    ) || [];


  if (histories.length === 0) {

    historyList.innerHTML =
      "<p>まだ履歴はありません</p>";

    return;

  }


  historyList.innerHTML =
    histories.map(history => {


      // ------------------------------------------
      // 昔保存したタロット履歴にも対応
      // ------------------------------------------

      const deck =
        history.deck || "tarot";


      // ------------------------------------------
      // 水鏡の場合
      // ------------------------------------------

      if (deck === "oracle") {

        return `
          <div class="history-item">

            <div class="history-date">
              ${escapeHTML(history.date)}
            </div>

            <div class="history-deck">
              🌊 水鏡の問いかけ
              ${history.category
                ? `【${escapeHTML(history.category)}】`
                : ""
              }
            </div>

            <div class="history-title">
              ${escapeHTML(history.card)}
            </div>

            <p>
              質問：
              ${escapeHTML(history.question || "未入力")}
            </p>

            <p>
              意味：
              ${escapeHTML(history.meaning)}
            </p>

            <p>
              問いかけ：
              ${escapeHTML(history.oraclePrompt)}
            </p>

            <p>
              メモ：
              ${escapeHTML(history.memo || "未入力")}
            </p>

          </div>
        `;

      }


      // ------------------------------------------
      // タロットの場合
      // ------------------------------------------

      return `
        <div class="history-item">

          <div class="history-date">
            ${escapeHTML(history.date)}
          </div>

          <div class="history-deck">
            🃏 大アルカナ
          </div>

          <div class="history-title">
            ${escapeHTML(history.card)}
            （${escapeHTML(history.position)}）
          </div>

          <p>
            質問：
            ${escapeHTML(history.question || "未入力")}
          </p>

          <p>
            意味：
            ${escapeHTML(history.meaning)}
          </p>

          <p>
            メモ：
            ${escapeHTML(history.memo || "未入力")}
          </p>

        </div>
      `;

    }).join("");

}


// ==================================================
// ボタン操作
// ==================================================

drawTarotButton.addEventListener(
  "click",
  () => startDraw("tarot")
);


drawOracleButton.addEventListener(
  "click",
  () => startDraw("oracle")
);


saveButton.addEventListener(
  "click",
  saveReading
);


// ==================================================
// ページを開いたときに履歴を表示
// ==================================================

showHistories();
