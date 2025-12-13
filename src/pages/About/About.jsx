import Header from "../../components/Header";
import Contacts from "../../components/Contacts";
import Copyright from "../../components/Copyright";
import home from "../../data/home.json";
import about from "../../data/about.json";
import PageTitle from "../../components/PageTitle";
import InfoWithPictureTop from "../../components/InfoWithPictureTop";
import Map from "../../components/Map";

export default function Menu() {
  return (
    <>
      <Header />
      <PageTitle heading={"о компании"} subheading={"знакомство с нашей кофейней"}/>
      <InfoWithPictureTop info={about.info}/>
      <Map link={about.map}/>
      <Contacts contacts={home.contacts}/>
      <Copyright />
    </>
  );
}
