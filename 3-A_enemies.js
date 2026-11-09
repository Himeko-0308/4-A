// データ：敵のオブジェクトの配列
const enemies = [
  { name: "スライム", hp: 5 },
  { name: "ゴブリン", hp: 9 },
  { name: "ドラゴン", hp: 20 }
];

// データからリストを作る（３-５・３-６と同じ形）
function showEnemies() {
  const list = document.getElementById("enemyList");
  list.innerHTML = "";

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const li = document.createElement("li");
    li.innerText = `${enemy.name}（HP：${enemy.hp}）`;
    list.appendChild(li);
  }
}

// 攻撃：全員の HP を 3 減らして、リストを作り直す
function attack() {
  for (let i = 0; i < enemies.length; i++) {      //forループを使ってHPを３ずつ減らすコード
    enemies[i].hp -= 3;
    if (enemies[i].hp < 0) {    //HPが０になったら止めるコード
      enemies[i].hp = 0;
    }
  }
  showEnemies();
  const items = document.querySelectorAll("#enemyList li");    //変わったHPを反映させるために一度消して再構築する
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].hp <= 0) {           //HPが０になったら横線を追加するコード
      items[i].classList.add("down");
    }
  }
}

showEnemies();