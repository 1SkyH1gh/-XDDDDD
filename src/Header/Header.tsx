import * as React from 'react'
import {FunctionComponent, useState} from "react";


import './HeaderStyle.css'
import folder from '../folder-outline.png'
import chart from '../chart-timeline.png'
import search from '../magnify.png'
import messages from '../android-messages.png'
import tag from '../tag-plus.png'
import arrow from '../chevron-down.png'
import {Word} from "../components/Container";

export interface HeaderInt {
selected:any,
    popover:boolean,
    setPopover: (b: boolean)=>void
}




export const Header:FunctionComponent<HeaderInt>=(props)=>{



    return(
        <div className="headerAPP">
            <div className="allProject">
                <img src={folder}/><p>All project 43</p> <img src={arrow}/>
            </div>

            <div className="createDate">
                <img src={chart}/><p>create date</p>
            </div>

            <div className="statusTask">
                <p>Task status</p> <img src={arrow}/>
            </div>

            <div className="projectNumber">
                <p>project number</p> <img src={arrow}/>
            </div>

            <form className="searchFormHeader">
                <input className="inputSearchHeader" placeholder="search..." src={search}/>
            </form>
            <div className="messages">
                <img src={messages}/>
            </div>





                <div onClick={() => props.setPopover(!props.popover)} className="openPopover">
                    <img src={tag}/> <h3 className="amountKeywords">{props.selected.length>0?props.selected.length:""}</h3>
                </div>



        </div>
    )
}