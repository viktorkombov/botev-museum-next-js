import classes from "./SimplePost.module.scss";

const SimplePost = (props) => {
  const { children } = props;
  return (
    <section className={classes.post} id="section2">
      {children}
    </section>
  );
};

export default SimplePost;
