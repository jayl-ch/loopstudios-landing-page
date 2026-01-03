import vrman from "../assets/images/mobile/image-interactive.jpg";

// mobile
import deepEarthMobile from "../assets/images/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "../assets/images/mobile/image-night-arcade.jpg";
import soccerTeamMobile from "../assets/images/mobile/image-soccer-team.jpg";
import theGridMobile from "../assets/images/mobile/image-grid.jpg";
import fromAboveMobile from "../assets/images/mobile/image-from-above.jpg";
import borealisMobile from "../assets/images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "../assets/images/mobile/image-curiosity.jpg";
import fisheyeMobile from "../assets/images/mobile/image-fisheye.jpg";

// desktop
import deepEarthDesktop from "../assets/images/desktop/image-deep-earth.jpg";
import nightArcadeDesktop from "../assets/images/desktop/image-night-arcade.jpg";
import soccerTeamDesktop from "../assets/images/desktop/image-soccer-team.jpg";
import theGridDesktop from "../assets/images/desktop/image-grid.jpg";
import fromAboveDesktop from "../assets/images/desktop/image-from-above.jpg";
import borealisDesktop from "../assets/images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "../assets/images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "../assets/images/desktop/image-fisheye.jpg";

const Home = () => (
  <section className="home container">
    <div className="home__title-wrapper">
      <div className="home__title">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </div>
  </section>
);

const VRInteractive = () => (
  <section className="vr">
    <div className="vr__img">
      <img src={vrman} alt="a man playing with VR" />
    </div>
    <div className="vr__text">
      <h2>The leader in interactive VR</h2>
      <p>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  </section>
);

const Creations = () => {
  const creation = [
    {
      id: 1,
      title: "deep earth",
      image: { mobile: deepEarthMobile, desktop: deepEarthDesktop },
    },
    {
      id: 2,
      title: "night arcade",
      image: { mobile: nightArcadeMobile, desktop: nightArcadeDesktop },
    },
    {
      id: 3,
      title: "soccer team vr",
      image: { mobile: soccerTeamMobile, desktop: soccerTeamDesktop },
    },
    {
      id: 4,
      title: "the grid",
      image: { mobile: theGridMobile, desktop: theGridDesktop },
    },
    {
      id: 5,
      title: "from up above vr",
      image: { mobile: fromAboveMobile, desktop: fromAboveDesktop },
    },
    {
      id: 6,
      title: "pocket borealis",
      image: { mobile: borealisMobile, desktop: borealisDesktop },
    },
    {
      id: 7,
      title: "the curiosity",
      image: { mobile: curiosityMobile, desktop: curiosityDesktop },
    },
    {
      id: 8,
      title: "make it fisheye",
      image: { mobile: fisheyeMobile, desktop: fisheyeDesktop },
    },
  ];
  return (
    <section className="creations">
      <div className="creations__header">
        <h2>Our creations</h2>
      </div>
      {creation.map(({ id, title, image }) => (
        <article
          style={{
            "--bg-mobile": `url(${image.mobile})`,
            "--bg-desktop": `url(${image.desktop})`,
          }}
          key={id}
          className="creations__card"
        >
          <p>{title}</p>
        </article>
      ))}
      <div className="creations__btn-wrapper">
        <button type="button" className="creations__see-all">
          See all
        </button>
      </div>
    </section>
  );
};

function Main() {
  return (
    <main>
      <Home />
      <div className="section-wrapper container">
        <VRInteractive />
        <Creations />
      </div>
      <div className="main__wrapper"></div>
    </main>
  );
}

export default Main;

