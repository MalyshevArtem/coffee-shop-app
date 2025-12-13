import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ShortDescription from "../../components/ShortDescription";
import InfoWithPicture from "../../components/InfoWithPicture";
import home from "../../data/home.json";
import Contacts from "../../components/Contacts";
import Copyright from "../../components/Copyright";


export default function Home() {
    return (
        <>
            <Header />
            <Carousel slides={home.carousel} />
            <ShortDescription heading={"наша философия кофе"} button={"читать далее"}>
                Мы — молодая Компания, целью которой является предлагать нашим Гостям только отборный кофе исключительного Качества.
                <br />
                <br />
                Мы стремимся быть лучшими для Вас в каждом этапе работы — от выбора зёрен до подачи напитка.
                <br />
            </ShortDescription>
            <InfoWithPicture info={home.info}/>
            <Contacts contacts={home.contacts}/>
            <Copyright />
        </>
    );
}