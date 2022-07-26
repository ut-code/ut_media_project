import type { NextPage } from 'next';
// import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import AlignItemsList from './alignItemsList';

const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary,
}));

class Article{
  title: string = "";
  author: string = "";
  content: string = "";
  // avatar: ??? = ???;
}

// react show list of articles

class Review{
  author: string = "";
  content: string = "";
  nameDisplay: boolean = false;
  // avatar: ??? = ???;
}

const Home: NextPage = () => {



  return (
    <div>
		<Box sx={{ flexGrow: 1}}>
			<Grid container spacing={4}>
				<Grid item xs>
					{/* style text-decoration: none */}
					<Item><Link style={{textDecoration: 'none'}} href="/api/hello"><h3>国内</h3></Link></Item>
				</Grid>
				<Grid item xs>
					<Item><Link href="/api/hello"><h3>国外</h3></Link></Item>
				</Grid>
				<Grid item xs>
					<Item><Link href="/api/hello"><h3>経済</h3></Link></Item>
				</Grid>
				<Grid item xs>
					<Item><Link href="/api/hello"><h3>IT</h3></Link></Item>
				</Grid>
			</Grid>
		</Box>

	<AlignItemsList />


    </div>
  )
}

export default Home
