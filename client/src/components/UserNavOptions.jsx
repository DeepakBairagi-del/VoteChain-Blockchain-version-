import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InfoIcon from '@mui/icons-material/Info';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HowToVoteSharpIcon from '@mui/icons-material/HowToVoteSharp';

const UserNavOptions = [
   
    {
        title:'Voter Registration',
        icon: HowToRegIcon,
        link: '/VoterRegistration',
    },
    {
        title:'Voting Area',
        icon: HowToVoteSharpIcon,
        link: '/VotingArea',
    },
    {
        title:'Result',
        icon: AssessmentIcon,
        link: '/Result',
    },
    {
        title:'About',
        icon: InfoIcon,
        link: '/About',
    },
    {
        title:'LogOut',
        icon: LogoutIcon,
        link: '/',
    },
]

export default UserNavOptions