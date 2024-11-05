import img from "../../../assets/about/about.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TabsStyle.css"
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import ContactTab from "./ContactTab";
import threeChiliImg from "../../../assets/others/treeChili.jpg"
import chiliWatch from "../../../assets/others/chiliWatch.png"
import Services from "./Services";
const AboutSection = () => {
    return (
        <div className=" relative bg-white   py-12  px-8 lg:px-20  ">
            <img className="hidden lg:block lg:absolute w-28 bottom-24 -right-10" src={chiliWatch} alt="" />
            <div className="flex flex-col lg:flex-row gap-10">
                {/* image */}
                <div className="lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                {/* tabs */}
                <div className="lg:w-1/2">
                    <Tabs className="pb-6 lg:pb-0">
                        <TabList className={'text-black mb-6 '}>
                            <Tab >About</Tab>
                            <Tab>Experience </Tab>
                            <Tab>Contact</Tab>
                        </TabList>

                        <TabPanel>
                            <AboutTab></AboutTab>
                        </TabPanel>
                        <TabPanel>
                            <ExperienceTab></ExperienceTab>
                        </TabPanel>
                        <TabPanel>
                            <ContactTab></ContactTab>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default AboutSection;