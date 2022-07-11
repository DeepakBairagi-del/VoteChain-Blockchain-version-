import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InfoIcon from '@mui/icons-material/Info';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HowToVoteSharpIcon from '@mui/icons-material/HowToVoteSharp';

const UserNavOptions = [
   
    {
        title:'Voter Registration',
        icon: HowToRegIcon,
        link: '/UserHome/VoterRegistration',
    },
    {
        title:'Voting Area',
        icon: HowToVoteSharpIcon,
        link: '/UserHome/VotingArea',
    },
    {
        title:'Result',
        icon: AssessmentIcon,
        link: '/UserHome/Result',
    },
    {
        title:'About',
        icon: InfoIcon,
        link: '/UserHome/About',
    },
    {
        title:'LogOut',
        icon: LogoutIcon,
        link: '/',
    },
]

export default UserNavOptions