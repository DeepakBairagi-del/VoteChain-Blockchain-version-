import React,{createContext, useContext, useState, useEffect} from "react";
import {ethers} from 'ethers';
import {contractAddress, contractABI} from '../src/lib/constants'

const Context = createContext();

const {ethereum} = window;

const getEthereumContract = () =>{
    const provider =new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer)
    return contract;
}
export const StateContext = ({children}) => {
    useEffect(()=>{
        connectWallet();
    },[])
    const [admin, setAdmin] = useState(window.localStorage.getItem('admin'))
    const [currentUser, setCurrentUser] = useState(JSON.parse(window.localStorage.getItem('currentUser'))  )
    const [users, setUsers] = useState(JSON.parse(window.localStorage.getItem('users3')) || [])
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ username, setUsername] = useState('')
    const [state, setState] = useState(window.localStorage.getItem('state'))
    const [candidates, setCandidates] = useState(JSON.parse(window.localStorage.getItem('candidateList')) || [])
    const [totalVotes,setTotalVotes] = useState(window.localStorage.getItem('totalVotes') || 0)
    const [currentAccount, setCurrentAccount] = useState(JSON.parse(window.localStorage.getItem('currentAccount1')) || null)

    const connectWallet = async() => {
        try {
            if(!ethereum) return alert('Please install metamask');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            window.localStorage.setItem('currentAccount1', JSON.stringify(accounts[0]))
        } catch (error) {
            console.log(error);
            throw new Error('There was a problem connecting to metamask')
        }
    }
    console.log(currentAccount)
    const chargeGas = async() => {
        try {
            if(!ethereum) return alert('Please install metamask');
            
            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from: currentAccount,
                    to: "0x235F78388fC3E5E821db04c8694D8b0525f59c07",
                    gas: '0x5208',
                }]
            })
        } catch (error) {
            console.log(error);
            throw new Error('There was a problem connecting to metamask')
        }
    }
    return (
        <Context.Provider 
        value = {{
            state,
            setState,
            candidates,
            setCandidates,
            totalVotes,
            setTotalVotes,
            admin,
            setAdmin,
            email,
            setEmail,
            password,
            setPassword,
            username,
            setUsername,
            users,
            setUsers,
            currentUser,
            setCurrentUser,
            currentAccount,
            setCurrentAccount,
            chargeGas
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);