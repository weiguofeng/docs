
npm run docs:dev

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git checkout -b gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:weiguofeng/docs.git feature-1:gh-pages

