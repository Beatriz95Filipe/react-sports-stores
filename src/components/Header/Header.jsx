import style from "./style.module.scss";

const Header = () => {

  return (
    <header className={style.header}>
        <div>secção 1</div>
        <div>
          <h1 className={style.title}>LOGO</h1>
        </div>
        <div>secção 3</div>
    </header>
  )
}

export default Header;