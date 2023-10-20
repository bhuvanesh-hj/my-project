import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
  const DUMMY_LIST = [
    {
      id: "m1",
      adress: "Some street 12,Some great city",
      description: "This is the first meetup",
      title: "A First Meetup",
      image:
        "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "m2",
      adress: "Some street 11,Some great city",
      description: "This is the Second meetup",
      title: "A Second Meetup",
      image:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
  ];
  return (
    <>
      <MeetupList meetups={DUMMY_LIST} onclick={"m1"} />
    </>
  );
};

export default HomePage;
