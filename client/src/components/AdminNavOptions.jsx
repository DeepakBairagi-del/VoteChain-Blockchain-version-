import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminNavOptions = [
    {
      title:'Candidate Details',
      icon: AccountCircleIcon,
      link:'/AdminHome/CandidateDetails',
    },
    {
      title:'Add Candidates',
      icon: PersonAddIcon,
      link:'/AdminHome/AddCandidate',
    },
    {
      title:'Change State',
      icon: AutoModeIcon,
      link:'/AdminHome/CurrentState',
    },
    {
      title:'Analytics',
      icon: LeaderboardIcon,
      link:'/AdminHome/Analytics',
    },
    {
      title:'LogOut',
      icon: LogoutIcon,
      link:'/'
    },
    
  ]

export default  AdminNavOptions 