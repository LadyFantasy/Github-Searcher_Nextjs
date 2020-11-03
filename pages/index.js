import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import Presentation from "../components/Presentation";
// import Projects from "../components/Projects";
import Repo from "../components/Repo";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false)

  function handleInput(value) {
    setSearchQuery(value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleFetch();
    }
  }

  async function handleFetch() {
    
    setIsFetching(true)
    const github = await fetch(`https://api.github.com/users/${searchQuery}`);
    const githubJson = await github.json();

    const jsonBin = await fetch(`https://api.jsonbin.io/b/5f9ac4d49291173cbca55430/3`);
    const jsonJson = await jsonBin.json();

    const jsonUser = jsonJson.find(user => user.name === searchQuery);

    setSearchQuery("");

    setData({
      github: githubJson,
      json: jsonUser?.projects
    });

    setIsFetching(false)
  }

  return (
    <main className={styles.container}>
      <h3>Search your profile</h3>
      <section className={styles.search}>
        <Input
          handleCallback={handleInput}
          placeholder="Search your username..."
          name="input"
          value={searchQuery}
          onKeyPress={handleKeyPress}
        />
        <Button handleCallback={handleFetch} name="button" value="Search" />
      </section>

      {isFetching && <h3>Loading...</h3>}

      <Link href={`/${searchQuery}`}>
        <div>{data.github && <Presentation data={data.github} />}</div>
      </Link>

      <section className={styles.repos}>
        {data.json &&
          data.json.map((repo, key) => {
            return <Repo key={key} data={repo} />;
          })}
      </section>
    </main>
  );
}
