import Styles from "../styles/Handler.module.css";
import Presentation from "../components/Presentation";
import Repo from "../components/Repo";
import { useRouter } from "next/router";

export default function Handler({ user, repos }) {
  console.log(repos);
  const router = useRouter();
  return (
    <main className={Styles.container}>
      <Presentation data={user} />
      <div className={Styles.repoContainer}>
        {repos &&
          repos.map((repo, key) => {
            return <Repo key={key} data={repo} />;
          })}
      </div>

      <a className={Styles.back} onClick={() => router.back()}>
        Back
      </a>
    </main>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
export async function getStaticProps({ params }) {
  console.log("params", params);

  const dataUser = await fetch(`https://api.github.com/users/${params.handler}`);
  const userJson = await dataUser.json();

  const data = await fetch(`https://api.github.com/users/${params.handler}/repos`);
  const dataJson = await data.json();

  return {
    props: {
      user: userJson,
      repos: dataJson
    }
  };
}
