import Styles from "../../styles/Presentation.module.css";

export default function Presentation({ data }) {
  const { name, avatar_url, bio } = data;
  return (
    <div className={Styles.container}>
      {avatar_url && <img src={avatar_url} alt="" className={Styles.image} />}
      <div className={Styles.text}>
       {name && <p className={Styles.name}>{name} </p>} 
        {bio && <p className={Styles.bio}>{bio} </p>}
      </div>
    </div>
  );
}
