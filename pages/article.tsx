import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
import {useState} from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';


class Article{
  title: string = "";
  author: string = "";
  content: string = "";
  // avatar: ??? = ???;
}

const Home: NextPage = () => {
  const [article, setArticle] = useState({
    title: "吾輩は猫である",
    author: "夏目漱石",
    content: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
  });
  const [loginName, setLoginName] = useState("森鴎外");

  return (
    <div>
      <Container fixed>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={loginName !== ""}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if(event.target.checked){
                      setLoginName("森鴎外")
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
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              {article.title}
            </Typography>
          </Grid>
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
              variant={loginName === article.author ? "contained" : "outlined"}
              disabled={loginName === ""}
            >
              {loginName === article.author ? "編集" : "提案"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
