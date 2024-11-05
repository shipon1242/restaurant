import img from "../../../assets/about/about.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TabsStyle.css"
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import ContactTab from "./ContactTab";
const AboutSection = () => {
    return (
        <div className="bg-white  pr-6 py-12 pl-8 ">
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
        </div>
    );
};

export default AboutSection;