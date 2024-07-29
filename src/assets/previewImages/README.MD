## ffmpeg來產生縮圖
`ffmpeg -i src/assets/videos/cat-birthday.mp4 -vf fps=1/10,scale=120:-1 src/assets/previewImages/preview%d.jpg `

`fps=1/10`     -> 表示10秒為一幀

`scale=120/-1` -> 表示寬為120px，高自動

`src/assets/previewImages/preview%d.jpg` -> %d 按照數字排列
