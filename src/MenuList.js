import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs"
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa"
import { BiPulse } from "react-icons/bi";


const MenuList = [
    {
        id: 1,
        LMTtip:"Home",
        icon: <BsFillHouseFill />,
        
        name: "Home"
    },
    {
        id: 2,
        icon: <BiPulse />,
        LMTtip:"Discover",
        name: "Discover"
    },
    {
        id: 3,
        icon: <FaBroadcastTower />,
        LMTtip:"Broadcast",
        name: "Radio"
    },
    {
        id: 4,
        icon: <FaMicrophoneAlt />,
        LMTtip:"Artist",
        name: "Artist"
    },
    {
        id: 5,
        icon: <BsJournalAlbum />,
        LMTtip:"Albums",
        name: "Albums"
    },
    {
        id: 6,
        icon: <FaPodcast />,
        LMTtip:"Podcasts",
        name: "Podcasts"
    }
];

export {MenuList}