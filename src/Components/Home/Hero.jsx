import reactImag from "/images/react.png";
import nextimg from "/images/nextjs.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="Hero block overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 pt-10 mt-1 ">
      <div className="banner lg:flex items-center justify-center">
        <div className="w-full pl-[5vw] text-light space-y-3">
          <main className="hero-container sm:flex">
            <p>We're 👋 Provide</p>
            <section className="animation">
              <div className="first">
                <div>Web services</div>
              </div>
              <div className="second">
                <div>SEO SERVICES</div>
              </div>
              <div className="third">
                <div>Courses</div>
              </div>
            </section>
          </main>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            maxime inventore tempore provident modi pariatur. Sapiente est amet
            consequatur, veniam aspernatur harum, quod, distinctio dolores
            repudiandae repellendus error laudantium voluptate!
          </p>
          <Button text={"Hire Me"} />
        </div>
        <div className="w-full relative mt-10 lg:mt-0">
          <div className="blob h-[500px]">
            <img
              className="mx-auto h-full w-full object-cover"
              src="/images/woman.png"
              alt="Banner"
            />
          </div>
          <img className="absolute top-0 w-20 left-20" src={nextimg} alt="" />
          <img
            className="absolute right-20 top-0 w-20"
            src={reactImag}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
