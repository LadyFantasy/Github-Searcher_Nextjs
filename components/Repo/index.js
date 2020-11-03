import Styles from "../../styles/Repo.module.css";

export default function Repo({ data }) {
  const { name, language, html_url, description } = data;
  return (
    <div className={Styles.container}>
      <h3 className={Styles.nameRepo}>{name}</h3>
      {description && <h4>{description}</h4>}
      <p className={Styles.language}>#{language}</p>
      {html_url && <a href={html_url}>Github Link</a>}
    </div>
  );
}
