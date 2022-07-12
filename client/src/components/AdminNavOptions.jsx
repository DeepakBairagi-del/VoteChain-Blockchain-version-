import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminNavOptions = [
    {
      title:'Candidate Details',
      icon: AccountCircleIcon,
      link:'/CandidateDetails',
    },
    {
      title:'Add Candidates',
      icon: PersonAddIcon,
      link:'/AddCandidate',
    },
    {
      title:'Change State',
      icon: AutoModeIcon,
      link:'/CurrentState',
    },
    {
      title:'Analytics',
      icon: LeaderboardIcon,
      link:'/Analytics',
    },
    {
      title:'LogOut',
      icon: LogoutIcon,
      link:'/'
    },
    
  ]

export default  AdminNavOptions 