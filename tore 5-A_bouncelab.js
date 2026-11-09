[1mdiff --git a/5-A_bouncelab.js b/5-A_bouncelab.js[m
[1mindex e69de29..95d8e44 100644[m
[1m--- a/5-A_bouncelab.js[m
[1m+++ b/5-A_bouncelab.js[m
[36m@@ -0,0 +1,77 @@[m
[32m+[m[32mconst canvas = document.getElementById("stage");[m
[32m+[m[32mconst ctx = canvas.getContext("2d");[m
[32m+[m[32mconst info = document.getElementById("info");   // 5_stage.html の <p id="info">[m
[32m+[m
[32m+[m
[32m+[m[32mlet x = 100;          // 丸の中心の位置[m
[32m+[m[32mlet y = 80;[m
[32m+[m[32mlet vx = 180;         // 横の速さ（1秒に180px）[m
[32m+[m[32mlet vy = 140;         // 縦の速さ（1秒に140px。＋ は下へ）[m
[32m+[m[32mlet r = 14;         // 半径[m
[32m+[m[32mlet last = performance.now();[m
[32m+[m
[32m+[m[32mwindow.addEventListener("keydown", (e) => {[m
[32m+[m[32m  if (e.repeat) return;[m
[32m+[m[32m  if (e.key === "ArrowUp") {[m
[32m+[m[32m    // 上キー：速さを1.2倍にする[m
[32m+[m[32m    vx *= 1.2;[m
[32m+[m[32m    vy *= 1.2;[m
[32m+[m[32m  } else if (e.key === "ArrowDown") {[m
[32m+[m[32m    // 下キー：速さを0.8倍にする[m
[32m+[m[32m    vx *= 0.8;[m
[32m+[m[32m    vy *= 0.8;[m
[32m+[m[32m  } else if (e.key === "ArrowLeft") {[m
[32m+[m[32m    // 左キー：半径を小さくする（最小値は 2 に制限）[m
[32m+[m[32m    r = Math.max(2, r - 2);[m
[32m+[m[32m  } else if (e.key === "ArrowRight") {[m
[32m+[m[32m    // 右キー：半径を大きくする[m
[32m+[m[32m    r += 2;[m
[32m+[m[32m  }[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mfunction update(dt) {[m
[32m+[m[32m  x = x + vx * dt;[m
[32m+[m[32m  y = y + vy * dt;[m
[32m+[m
[32m+[m[32m  // 左右の壁（丸は x が中心なので、半径 r を足し引きする）[m
[32m+[m[32m  if (x + r > canvas.width) {[m
[32m+[m[32m    x = canvas.width - r;[m
[32m+[m[32m    vx = -vx;[m
[32m+[m[32m  }[m
[32m+[m[32m  if (x - r < 0) {[m
[32m+[m[32m    x = r;[m
[32m+[m[32m    vx = -vx;[m
[32m+[m[32m  }[m
[32m+[m[32m  // 上下の壁[m
[32m+[m[32m  if (y + r > canvas.height) {[m
[32m+[m[32m    y = canvas.height - r;[m
[32m+[m[32m    vy = -vy;[m
[32m+[m[32m  }[m
[32m+[m[32m  if (y - r < 0) {[m
[32m+[m[32m    y = r;[m
[32m+[m[32m    vy = -vy;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mfunction draw() {[m
[32m+[m[32m  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";[m
[32m+[m[32m  ctx.fillRect(0, 0, canvas.width, canvas.height);[m
[32m+[m[32m    ctx.fillStyle = "#ffd166";[m
[32m+[m[32m  ctx.beginPath();[m
[32m+[m[32m  ctx.arc(x, y, r, 0, Math.PI * 2);[m
[32m+[m[32m  ctx.fill();[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// now：今回呼ばれた時刻（ミリ秒）。requestAnimationFrame が引数で渡してくれる[m
[32m+[m[32mfunction loop(now) {[m
[32m+[m[32m  const dt = (now - last) / 1000;   // 前回からの時間（秒）[m
[32m+[m[32m  last = now;                       // 今回の時刻を、次の「前回」として覚えておく[m
[32m+[m
[32m+[m[32m  info.textContent = "dt：" + dt.toFixed(4) + " 秒 ／ 1秒に約 " + (1 / dt).toFixed(0) + " 回";[m
[32m+[m
[32m+[m[32m  update(dt);   // ← dt を渡す[m
[32m+[m[32m  draw();[m
[32m+[m[32m  requestAnimationFrame(loop);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mrequestAnimationFrame(loop);[m
\ No newline at end of file[m
[1mdiff --git a/5_stage.html b/5_stage.html[m
[1mindex 964d237..2b25fcc 100644[m
[1m--- a/5_stage.html[m
[1m+++ b/5_stage.html[m
[36m@@ -21,6 +21,6 @@[m
     <p id="info"></p>[m
 [m
     <!-- 動かす js：課題ごとに、ここのファイル名を書き換える -->[m
[31m-    <script src="5-6_player.js"></script>[m
[32m+[m[32m    <script src="5-A_bouncelab.js"></script>[m
   </body>[m
 </html>[m
\ No newline at end of file[m
