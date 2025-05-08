import Nav from "../../components/nav/Nav.jsx"
import './VerticalNav.css'



function VerticalNav({  children, myItem,
  blockClassName = "page",
  navClassName = "page__nav--left ",
  articleClassName = "page__article " }) {

  let page = null;
  if (navClassName.includes("left")) {
    page = (
      <div className={blockClassName}>
        <section className={navClassName}>
          <Nav  classNames="button nav__button--vertical"
            vertical={true}
            myItem={myItem} />
        </section>
        <article className={articleClassName}>
          {children}
        </article>

      </div>
    );
  } else {
    page = (
      <div className={blockClassName}>

        <article className={articleClassName}>
          {children}
        </article>
        <section className={navClassName}>
          <Nav classNames="button nav__button--vertical"
            vertical={true}
            myItem={myItem} />
        </section>
      </div>
    );
  }

  return page;
}


export default VerticalNav;
