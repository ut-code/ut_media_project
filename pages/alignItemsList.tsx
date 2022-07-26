import { Grid, Paper } from "@mui/material";

// const content = fs.readFileSync('./data/articles.json');
// const articles: Article[] = JSON.parse(content.toString());

interface Article {
	title: string,
	author: string | null,
	content: string,
	avatar?: string,
}

export default function getStaticProps() {
	const content = [
	{
	"title": "吾輩は猫である",
	"author": "夏目漱石",
    "content": "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n本プロジェクトでは,不完全ゲームの一種である人狼ゲームをプレイするAI「人狼知能」を対象として,不完全情報協力ゲームにおける人工知能の開発を目指す.特に,単にゲームをプレイするAIの開発だけではなく,自然言語による自然な対話の実現, AIと人間プレイヤーとの協調等高度なAI技術の実現を目指す."
    },
    {
	"title": "人間という行動をするのは私たちの責任",
	"author": "青木一郎",
	"content": "色々"
    }
];
	const articles: Article[] = content;

	return (
		<>
			<Grid container spacing={4}>
				{articles.map((article: Article) => (
					<Paper key={article.content} sx={{ width: '100%', padding: 2}}>
						<Grid container spacing={2} alignItems="center">
							<Grid item>
								<Grid item xs={12}>{article.title}</Grid>
								<Grid item xs={12}>{article.author}</Grid>
								<Grid item xs={12}>{article.content}</Grid>
							</Grid>
						</Grid>
					</Paper>
				))}
			</Grid>
		</>
	);
}
