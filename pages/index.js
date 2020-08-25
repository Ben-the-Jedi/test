import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to 3Layman! 
        </h1>

		<div className="App">
		  <nav>
			<ul>
			  <li>3layman.ai</li>
			  <li>Courses</li>
			  <li>Forum</li>
			  <li>
				<button>Donate</button>
			  </li>
			</ul>
		  </nav>
		  <section className='login-section'>
		  <form>
			<span id='login'>Login</span>

			<div className='input-fields'>
			  <input type='text' id='email' name='email' placeholder='Email' required />
			</div>
			<div className='input-fields'>
			  <input type='password' id='password' name='password' placeholder='Password' required />
			</div>
			<div>
			  <input type='checkbox' id='remember-me' name='remember-me' />
			  <label>Remember me</label>
			</div>
			<div>
			  <button id='login-button'>Login</button>
			</div>
			<span>Or login with</span>
			<br />
			<div className='OAuth'>
			  <span>Google</span>
			</div>
			<div className='OAuth'>
			  <span>Facebook</span>
			</div>
			<div className='OAuth'>
			  <span>Alibaba</span>
			</div>		
			<div id='member-sign-up'>
			  <span>Not a member? <a href='#'>Sign up now</a></span>
			</div>
		  </form>
		</section> 
		</div>
		

        <div className="grid">
		
         {allPostsData.map(({ id, title }) => (
          <a href={'posts/'+id} className="card">
            <h3>{id}</h3>
            <p>{title}</p>
		 </a>))}
		  
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

nav li {
  display: inline;
}

#login-section {
  position: relative;
  background: #13f2d8;
} 

form {
  text-align: center;
  position: relative;
  width: 300px;
  margin: 0 auto;
}

#login {
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
}

.input-fields {
  padding: 5px;
}

#email {
  padding: 15px;
  border-radius: 30px;
  border: 2px solid #d813f2;
}

#password {
  padding: 15px;
  border-radius: 30px;
  border: 2px solid #d813f2;
}

#login-button {
  background-color: #d813f2;
  color: white;
  width: 200px;
  padding: 10px;
  border-radius: 30px;
  font-size: 20px;
}

.OAuth{
  display: inline-block;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 5px;
}

.OAuth span {
  color: gray;
}

.OAuth:hover {
  border: 2px solid #d813f2;
}

.OAuth span:hover {
  color: #d813f2;
}
	  
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


export function OldHome({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Let us learn AI together</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
