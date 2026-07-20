// 大アルカナ22枚のデータ
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

// 今引いたカードを保存しておく変数
let currentReading = null;

// HTMLの部品を取得
const questionInput = document.getElementById("question");
const memoInput = document.getElementById("memo");
const drawButton = document.getElementById("drawButton");
const saveButton = document.getElementById("saveButton");
const cardName = document.getElementById("cardName");
const cardMeaning = document.getElementById("cardMeaning");
const historyList = document.getElementById("historyList");

//シャッフル中の表示
function startDraw() {

  cardName.textContent = "🔮 シャッフル中...";
  cardMeaning.textContent = "";

  drawButton.disabled = true;

  setTimeout(() => {

    drawCard();

    drawButton.disabled = false;

  }, 1000);

}

// カードを引く処理
function drawCard() {
  // 0〜21のランダムな数字を作る
  const randomIndex = Math.floor(Math.random() * tarotCards.length);

  // ランダムにカードを1枚選ぶ
  const selectedCard = tarotCards[randomIndex];

  // 正位置か逆位置をランダムで決める
  const isUpright = Math.random() < 0.5;

  const position = isUpright ? "正位置" : "逆位置";
  const meaning = isUpright ? selectedCard.upright : selectedCard.reversed;

  // 今回の結果を変数に保存
  currentReading = {
    question: questionInput.value,
    card: selectedCard.name,
    position: position,
    meaning: meaning,
    memo: "",
    date: new Date().toLocaleString("ja-JP")
  };

  // 画面に表示
  cardName.textContent = `${selectedCard.name}（${position}）`;
  cardMeaning.textContent = `意味：${meaning}`;
  cardName.classList.remove("fade");
  void cardName.offsetWidth;
  cardName.classList.add("fade");

  // 前回のメモ欄を空にする
  memoInput.value = "";
}

// 結果を保存する処理
function saveReading() {
  if (!currentReading) {
    alert("先にカードを引いてね");
    return;
  }

  // メモ欄の内容を追加
  currentReading.memo = memoInput.value;

  // すでに保存されている履歴を取得
  const histories = JSON.parse(localStorage.getItem("tarotHistories")) || [];

  // 新しい履歴を先頭に追加
  histories.unshift(currentReading);

  // localStorageに保存
  localStorage.setItem("tarotHistories", JSON.stringify(histories));

  // 履歴を再表示
  showHistories();

  alert("保存しました");
}

// 履歴を表示する処理
function showHistories() {
  const histories = JSON.parse(localStorage.getItem("tarotHistories")) || [];

  if (histories.length === 0) {
    historyList.innerHTML = "<p>まだ履歴はありません</p>";
    return;
  }

  historyList.innerHTML = histories.map(history => {
    return `
      <div class="history-item">
        <div class="history-date">${history.date}</div>
        <div class="history-title">${history.card}（${history.position}）</div>
        <p>質問：${history.question || "未入力"}</p>
        <p>意味：${history.meaning}</p>
        <p>メモ：${history.memo || "未入力"}</p>
      </div>
    `;
  }).join("");
}

// ボタンが押されたときの処理
drawButton.addEventListener("click", startDraw);
saveButton.addEventListener("click", saveReading);

// ページを開いたときに履歴を表示
showHistories();