import '../App.css';
import logo from "../imgs/logo.svg"
import searchIcon from "../imgs/search-icon.svg"
import RightMenu from "./RightMenu";
import {Link} from "react-router-dom"
import {useState} from "react";
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import React, { useCallback } from 'react'
import {updateSearch} from "../store/search/actions"
import { useNavigate } from 'react-router-dom';


const HeaderMenu = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const _search_ = useSelector((state) => state.search.searchLine);


    let [isMenu,setMenu] = useState(false)
    let [searchValue,setSearch] = useState("")

    const setSearchValue = useCallback((e) => {
        setSearch(e.target.value)
        navigate("/filtered")
        dispatch(updateSearch(e.target.value))
    }, [dispatch])

    const search = useCallback((e) => {
        setSearch("")
    }, [dispatch])
    return (
        <div className="menu" >
            <div className="icons">
                <div className="icons-left">
                    <div className="logoIcon">
                        <Link to={"/"}><img src={logo} alt="photo"/></Link></div>
                    <div className="searchIcon">
                        <form className="search-form" onSubmit={search} action="#">
                            <input value={searchValue} onInput={setSearchValue} className="search-icon-form__input" type="text"/>

                            <button className="btn-search"><img src={searchIcon} alt="photo"/></button>
                        </form>
                    </div>
                </div>
                <div className="icons-right">
                    <div className="menuIcon">
                        <button onClick={() => setMenu(!isMenu)} id="burger-menu">
                        </button>
                        <RightMenu setMenu={setMenu} isMenu={isMenu}/>


                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeaderMenu