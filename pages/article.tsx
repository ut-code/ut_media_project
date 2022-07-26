import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


class Article{
  title: string = "";
  author: string = "";
  content: string = "";
  // avatar: ??? = ???;
}
class Review{
  author: string = "";
  content: string = "";
  nameDisplay: boolean = false;
  // avatar: ??? = ???;
}

const Home: NextPage = () => {
  const [article, setArticle] = useState<Article>({
    title: "吾輩は猫である",
    author: "夏目漱石",
    content: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n本プロジェクトでは,不完全ゲームの一種である人狼ゲームをプレイするAI「人狼知能」を対象として,不完全情報協力ゲームにおける人工知能の開発を目指す.特に,単にゲームをプレイするAIの開発だけではなく,自然言語による自然な対話の実現, AIと人間プレイヤーとの協調等高度なAI技術の実現を目指す."
  });
  const [reviews, setReviews] = useState<Review[]>([
    {
      author: "龍之介",
      nameDisplay: true,
      content: "2行目の「郊外のぎらぎらひかる草の波」の出典を明記してください"
    },
    {
      author: "諭吉",
      nameDisplay: false,
      content: "「イーハトーヴォ」が分からないので説明してください。"
    }
  ]);
  const [loginName, setLoginName] = useState<string>("鴎外");

  return (
    <div>
      <Container fixed>
        <FormControlLabel
          control={
            <Switch
              checked={loginName !== ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if(event.target.checked){
                  setLoginName("鴎外")
                }else{
                  setLoginName("");
                }
              }}
            />
          }
          label="ログイン(テスト用)"
        />
        <TextField
          variant="standard"
          label="ユーザー名(テスト用)"
          value={loginName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginName(event.target.value);
          }}
        />
        <span>← 夏目漱石 or 龍之介 or 諭吉 or それ以外を入力</span>

        <Stack spacing={2}>
          <Typography variant="h3">
          {article.title}
          </Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar>
                N
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography>
                {article.author}
              </Typography>
            </Grid>
            <Grid item xs={12} sm="auto" justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{display: (loginName === article.author ? "block" : "none")}}
              >
                編集
              </Button>
            </Grid>
          </Grid>

          <Paper sx={{width:'100%', padding:3}}>
            <Typography variant="body1">
              {article.content}
            </Typography>
          </Paper>

          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="h5">
              {reviews.length} 件の提案
              </Typography>
            </Grid>
            <Grid item xs>
              <Button
                variant="outlined"
                disabled={loginName === article.author}
                sx={{display: (loginName !== "" ? "block" : "none")}}
              >
                提案を投稿
              </Button>
            </Grid>
          </Grid>

          {reviews.map((rev: Review) => (
            <Paper key={rev.content} sx={{width:'100%', padding:2}}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar>
                    a
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography>
                    {rev.nameDisplay ? rev.author : "名前非公開"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" justifyContent="flex-end">
                  <Button
                    variant={"contained"}
                    sx={{display: (loginName === rev.author ? "block" : "none")}}
                  >
                    編集
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {rev.content}
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Stack>
      </Container>
    </div>
  )
}

export default Home
