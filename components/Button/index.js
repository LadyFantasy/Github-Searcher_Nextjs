import Styles from "../../styles/Button.module.css"

export default function Button({handleCallback, value, name, type}){

  function handleClick() {
    handleCallback()
  }

  return(
    <button onClick={handleClick} type="submit" className={Styles.button}>Search</button>
  )
}