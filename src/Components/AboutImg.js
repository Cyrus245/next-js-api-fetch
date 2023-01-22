import imgStyle from "../styles/Aboutimg.module.css";

const AboutImg = () => {
  return (
    <div className={imgStyle.center}>
      <img
        className={imgStyle.img}
        src="https://images.pexels.com/photos/5938098/pexels-photo-5938098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </div>
  );
};

export default AboutImg;
